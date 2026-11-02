/**
 * KHUNDET NOBILIS LLC — Server-Side B2B & Manufacturer Inquiry Endpoint
 * Route: POST /api/inquiry
 * Provider: Resend Email HTTP API (https://api.resend.com/emails)
 *
 * Security & Compliance Features:
 * - Strict method enforcement (POST only)
 * - Request payload size limit (16 KB max)
 * - Sliding-window IP rate limiting (max 5 submissions per 10 minutes per IP)
 * - Honeypot anti-bot verification & link-flood spam protection
 * - Comprehensive server-side field validation, length bounds, and HTML escaping
 * - Zero PII logging (never logs customer names, emails, phone numbers, or messages)
 * - Explicit 503 error when RESEND_API_KEY is unconfigured (never fakes success in production)
 */

const MAX_BODY_BYTES = 16 * 1024; // 16 KB
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

const ALLOWED_INQUIRY_TYPES = new Set([
  "Manufacturer / Distributorship Proposal",
  "Hospital / Clinic B2B Product Inquiry"
]);

// In-memory rate limit store (per warm serverless instance)
const ipRequestLog = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  // Periodic cleanup to keep memory bounded
  if (ipRequestLog.size > 500) {
    for (const [key, timestamps] of ipRequestLog.entries()) {
      const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (recent.length === 0) {
        ipRequestLog.delete(key);
      } else {
        ipRequestLog.set(key, recent);
      }
    }
  }

  const history = (ipRequestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (history.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = history[0];
    const retryAfterSec = Math.max(1, Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 1000));
    return { allowed: false, retryAfterSec };
  }

  history.push(now);
  ipRequestLog.set(ip, history);
  return { allowed: true, retryAfterSec: 0 };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripHeaderBreaks(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.length > 0) {
    return xff.split(",")[0].trim();
  }
  const xReal = req.headers["x-real-ip"];
  if (typeof xReal === "string" && xReal.length > 0) {
    return xReal.trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function getLocalizedError(lang, key) {
  const l = ["mn", "en", "kr"].includes(lang) ? lang : "en";
  const messages = {
    METHOD_NOT_ALLOWED: {
      mn: "Зөвхөн POST хүсэлт зөвшөөрөгдөнө.",
      en: "Method not allowed. Only POST requests are accepted.",
      kr: "허용되지 않는 요청 방식입니다 (POST만 가능)."
    },
    PAYLOAD_TOO_LARGE: {
      mn: "Хүсэлтийн хэмжээ хэт их байна (дээд хэмжээ 16KB).",
      en: "Request payload exceeds the 16 KB maximum size limit.",
      kr: "요청 데이터 크기가 허용 한도(16KB)를 초과했습니다."
    },
    INVALID_JSON: {
      mn: "Хүсэлтийн өгөгдлийн формат буруу байна.",
      en: "Invalid JSON payload.",
      kr: "잘못된 요청 데이터 형식입니다."
    },
    RATE_LIMITED: {
      mn: "Хэт олон хүсэлт илгээгдсэн байна. Түр хүлээгээд дахин оролдоно уу.",
      en: "Too many inquiry submissions from this network. Please wait a few minutes and try again.",
      kr: "짧은 시간 내에 너무 많은 요청이 접수되었습니다. 잠시 후 다시 시도해 주십시오."
    },
    SPAM_REJECTED: {
      mn: "Таны хүсэлтийг спам хамгаалалт зогсоолоо. Хэт олон холбоос оруулахгүйгээр дахин оролдоно уу.",
      en: "Submission rejected by automated spam protection.",
      kr: "스팸 방지 시스템에 의해 요청이 차단되었습니다."
    },
    VALIDATION_FAILED: {
      mn: "Заавал бөглөх талбаруудыг зөв бөглөнө үү (Нэр, Байгууллага, И-мэйл, Утас, Улс, Ангилал болон Мессеж).",
      en: "Please complete all required fields with valid information (Name, Organization, Email, Phone, Country, Category, and Message).",
      kr: "필수 입력 항목(성함, 기관/기업명, 이메일, 연락처, 국가, 카테고리, 문의 내용)을 정확히 입력해 주십시오."
    },
    EMAIL_PROVIDER_NOT_CONFIGURED: {
      mn: "Серверийн и-мэйл илгээх тохиргоо (RESEND_API_KEY) хийгдээгүй тул хүсэлтийг автоматаар илгээх боломжгүй байна. Доорх албан ёсны и-мэйл эсвэл утсаар шууд холбогдоно уу.",
      en: "The server email delivery service (RESEND_API_KEY) is not yet configured on this environment. Your inquiry was NOT sent automatically—please contact us directly via the official email or phone below.",
      kr: "서버 이메일 발송 설정(RESEND_API_KEY)이 아직 완료되지 않아 문의가 자동 발송되지 않았습니다. 아래 공식 이메일 또는 전화번호로 직접 연락해 주시기 바랍니다."
    },
    DELIVERY_FAILED: {
      mn: "И-мэйл илгээх явцад техникийн алдаа гарлаа. Доорх албан ёсны и-мэйл хаягаар шууд холбогдоно уу.",
      en: "Unable to deliver the inquiry email due to an upstream mail service error. Please contact us directly at erkhemsaikhan@khundet-nobilis.mn.",
      kr: "이메일 발송 서버 오류로 인해 문의가 전달되지 않았습니다. 공식 이메일(erkhemsaikhan@khundet-nobilis.mn)로 직접 연락해 주십시오."
    }
  };
  return messages[key]?.[l] || messages[key]?.en || "Request failed.";
}

function validateInquiryPayload(body) {
  if (!body || typeof body !== "object") {
    return { valid: false, reason: "INVALID_JSON" };
  }

  // Honeypot field check (website / honeypot)
  const honeypot = String(body.website || body.honeypot || "").trim();
  if (honeypot.length > 0) {
    return { valid: false, reason: "SPAM_REJECTED" };
  }

  const rawType = stripHeaderBreaks(body.inquiryType || "Manufacturer / Distributorship Proposal");
  const inquiryType = ALLOWED_INQUIRY_TYPES.has(rawType)
    ? rawType
    : "Manufacturer / Distributorship Proposal";

  const fullName = stripHeaderBreaks(body.fullName);
  const companyName = stripHeaderBreaks(body.companyName);
  const email = stripHeaderBreaks(body.email).toLowerCase();
  const phone = stripHeaderBreaks(body.phone);
  const country = stripHeaderBreaks(body.country);
  const category = stripHeaderBreaks(body.category);
  const productRef = stripHeaderBreaks(body.productRef || "");
  const message = String(body.message || "").trim();
  const lang = ["mn", "en", "kr"].includes(String(body.lang || "").toLowerCase())
    ? String(body.lang).toLowerCase()
    : "en";

  const fieldErrors = [];

  if (fullName.length < 2 || fullName.length > 120) fieldErrors.push("fullName");
  if (companyName.length < 2 || companyName.length > 160) fieldErrors.push("companyName");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email) || email.length > 160) fieldErrors.push("email");

  const phoneRegex = /^[0-9+\-() ./a-zA-Z@_]{5,60}$/;
  if (!phoneRegex.test(phone)) fieldErrors.push("phone");

  if (country.length < 2 || country.length > 100) fieldErrors.push("country");
  if (category.length < 2 || category.length > 120) fieldErrors.push("category");
  if (productRef.length > 160) fieldErrors.push("productRef");
  if (message.length < 10 || message.length > 3000) fieldErrors.push("message");

  if (fieldErrors.length > 0) {
    return { valid: false, reason: "VALIDATION_FAILED", fields: fieldErrors, lang };
  }

  // Link-flood spam check (reject if more than 4 URLs in message)
  const urlMatches = message.match(/https?:\/\/[^\s]+/gi) || [];
  if (urlMatches.length > 4) {
    return { valid: false, reason: "SPAM_REJECTED", lang };
  }

  return {
    valid: true,
    data: {
      inquiryType,
      fullName,
      companyName,
      email,
      phone,
      country,
      category,
      productRef: productRef || "Not specified (General Portfolio Inquiry)",
      message,
      lang
    }
  };
}

function buildEmailTemplates(data, submittedAtIso) {
  const subjectPrefix =
    data.inquiryType === "Hospital / Clinic B2B Product Inquiry"
      ? "[B2B CLINIC/HOSPITAL INQUIRY]"
      : "[MANUFACTURER PARTNERSHIP]";

  const subject = `${subjectPrefix} ${data.companyName} (${data.country}) — ${data.category}`;

  const text = [
    `KHUNDET NOBILIS LLC — OFFICIAL B2B WEBSITE INQUIRY`,
    `============================================================`,
    `Inquiry Type:       ${data.inquiryType}`,
    `Product Category:   ${data.category}`,
    `Product Reference:  ${data.productRef}`,
    `------------------------------------------------------------`,
    `Sender Name/Title:  ${data.fullName}`,
    `Organization/Brand: ${data.companyName}`,
    `Official Email:     ${data.email}`,
    `Phone / Messenger:  ${data.phone}`,
    `Country / City:     ${data.country}`,
    `Interface Language: ${data.lang.toUpperCase()}`,
    `Submitted At (UTC): ${submittedAtIso}`,
    `------------------------------------------------------------`,
    `MESSAGE / PROPOSAL DETAILS:`,
    ``,
    data.message,
    `============================================================`,
    `Reply directly to this email to respond to ${data.fullName} <${data.email}>.`
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:24px;background-color:#F6F4EF;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#141413;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background-color:#FFFFFF;border:1px solid #DFD9CE;">
    <tr>
      <td style="background-color:#141413;padding:20px 28px;color:#F6F4EF;">
        <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#C5A56E;margin-bottom:4px;">
          KHUNDET NOBILIS LLC · B2B INQUIRY DESK
        </div>
        <div style="font-size:18px;font-weight:600;color:#FFFFFF;">
          ${escapeHtml(data.inquiryType)}
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 28px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;width:36%;font-weight:600;">Organization / Brand</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#141413;font-weight:600;">${escapeHtml(data.companyName)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-weight:600;">Contact Person &amp; Title</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#141413;">${escapeHtml(data.fullName)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-weight:600;">Official Email</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#141413;">
              <a href="mailto:${escapeHtml(data.email)}" style="color:#9A7B4F;text-decoration:underline;">${escapeHtml(data.email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-weight:600;">Phone / Messenger</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#141413;">${escapeHtml(data.phone)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-weight:600;">Country / City</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#141413;">${escapeHtml(data.country)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-weight:600;">Product Category</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#141413;">${escapeHtml(data.category)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-weight:600;">Product Reference Code</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#141413;font-family:monospace;">${escapeHtml(data.productRef)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-weight:600;">Submitted (UTC / Lang)</td>
            <td style="padding:10px 12px;border-bottom:1px solid #EAE6DF;color:#6E6B65;font-size:12px;">${escapeHtml(submittedAtIso)} · ${escapeHtml(data.lang.toUpperCase())}</td>
          </tr>
        </table>

        <div style="margin-top:20px;padding:16px 18px;background-color:#FBF9F5;border-left:3px solid #9A7B4F;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#6E6B65;margin-bottom:8px;">
            Inquiry / Partnership Proposal Message
          </div>
          <div style="font-size:14px;line-height:1.65;color:#141413;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:14px 28px;background-color:#F6F4EF;border-top:1px solid #EAE6DF;font-size:12px;color:#6E6B65;">
        Delivered via khundet-nobilis.mn B2B Inquiry System · Reply directly to respond to the sender.
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}

module.exports = async function handler(req, res) {
  // Security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      ok: false,
      code: "METHOD_NOT_ALLOWED",
      message: getLocalizedError("en", "METHOD_NOT_ALLOWED")
    });
  }

  // Enforce payload size limit via Content-Length header & serialized check
  const contentLength = parseInt(req.headers["content-length"] || "0", 10);
  if (contentLength > MAX_BODY_BYTES) {
    return res.status(413).json({
      ok: false,
      code: "PAYLOAD_TOO_LARGE",
      message: getLocalizedError("en", "PAYLOAD_TOO_LARGE")
    });
  }

  let body = req.body;
  if (typeof body === "string") {
    if (Buffer.byteLength(body, "utf8") > MAX_BODY_BYTES) {
      return res.status(413).json({
        ok: false,
        code: "PAYLOAD_TOO_LARGE",
        message: getLocalizedError("en", "PAYLOAD_TOO_LARGE")
      });
    }
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({
        ok: false,
        code: "INVALID_JSON",
        message: getLocalizedError("en", "INVALID_JSON")
      });
    }
  } else if (body && typeof body === "object") {
    const rawLen = Buffer.byteLength(JSON.stringify(body), "utf8");
    if (rawLen > MAX_BODY_BYTES) {
      return res.status(413).json({
        ok: false,
        code: "PAYLOAD_TOO_LARGE",
        message: getLocalizedError("en", "PAYLOAD_TOO_LARGE")
      });
    }
  }

  const reqLang = ["mn", "en", "kr"].includes(String(body?.lang || "").toLowerCase())
    ? String(body.lang).toLowerCase()
    : "en";

  // Check IP Rate Limit
  const clientIp = getClientIp(req);
  const rateCheck = checkRateLimit(clientIp);
  if (!rateCheck.allowed) {
    res.setHeader("Retry-After", String(rateCheck.retryAfterSec));
    return res.status(429).json({
      ok: false,
      code: "RATE_LIMITED",
      retryAfterSeconds: rateCheck.retryAfterSec,
      message: getLocalizedError(reqLang, "RATE_LIMITED")
    });
  }

  // Validate and sanitize fields
  const validation = validateInquiryPayload(body);
  if (!validation.valid) {
    return res.status(400).json({
      ok: false,
      code: validation.reason,
      fields: validation.fields || [],
      message: getLocalizedError(validation.lang || reqLang, validation.reason)
    });
  }

  const { data } = validation;
  const submittedAtIso = new Date().toISOString();
  const { subject, text, html } = buildEmailTemplates(data, submittedAtIso);

  const toEmail = process.env.INQUIRY_TO_EMAIL || "erkhemsaikhan@khundet-nobilis.mn";
  const fromEmail =
    process.env.INQUIRY_FROM_EMAIL || "Khundet Nobilis B2B Desk <inquiries@khundet-nobilis.mn>";
  const resendApiKey = process.env.RESEND_API_KEY;
  const isMockMode = process.env.INQUIRY_MOCK_MODE === "true";

  // Local test mock mode ONLY when explicitly enabled by test runner
  if (isMockMode && !resendApiKey) {
    return res.status(200).json({
      ok: true,
      mode: "mock",
      inquiryType: data.inquiryType,
      productRef: data.productRef,
      recipient: toEmail,
      submittedAt: submittedAtIso
    });
  }

  // Never fake success when RESEND_API_KEY is missing in real operation
  if (!resendApiKey) {
    console.warn("[/api/inquiry] Blocked submission: RESEND_API_KEY is not configured.");
    return res.status(503).json({
      ok: false,
      code: "EMAIL_PROVIDER_NOT_CONFIGURED",
      message: getLocalizedError(data.lang, "EMAIL_PROVIDER_NOT_CONFIGURED")
    });
  }

  try {
    const resendEndpoint = process.env.RESEND_API_URL || "https://api.resend.com/emails";
    const upstreamRes = await fetch(resendEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject,
        text,
        html
      })
    });

    if (!upstreamRes.ok) {
      // Log only status code, never sensitive customer data
      console.error(`[/api/inquiry] Resend API returned HTTP ${upstreamRes.status}`);
      return res.status(502).json({
        ok: false,
        code: "DELIVERY_FAILED",
        message: getLocalizedError(data.lang, "DELIVERY_FAILED")
      });
    }

    const resultJson = await upstreamRes.json().catch(() => ({}));
    return res.status(200).json({
      ok: true,
      mode: "live",
      id: resultJson.id || null,
      submittedAt: submittedAtIso
    });
  } catch (err) {
    console.error(`[/api/inquiry] Upstream network error: ${err?.name || "UnknownError"}`);
    return res.status(502).json({
      ok: false,
      code: "DELIVERY_FAILED",
      message: getLocalizedError(data.lang, "DELIVERY_FAILED")
    });
  }
};

// Export internals for unit/integration testing
module.exports._test = {
  ipRequestLog,
  validateInquiryPayload,
  buildEmailTemplates
};
