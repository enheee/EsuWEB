# KHUNDET NOBILIS LLC — Server-Side B2B Inquiry System Setup Guide (`/api/inquiry` + Resend)

This guide covers the exact steps required to activate live server-side email delivery for the **International Manufacturer Partnership** (`partnership.html`) and **Hospital / Clinic B2B Product Inquiry** (`contact.html`) forms on Vercel.

---

## 1. Architecture Overview

- **Frontend:** Vanilla HTML/CSS/JS ([partnership.html](file:///Users/enkhee/WORK/EsuWEB/partnership.html), [contact.html](file:///Users/enkhee/WORK/EsuWEB/contact.html), [script.js](file:///Users/enkhee/WORK/EsuWEB/script.js)) sends a `POST /api/inquiry` JSON request.
- **Serverless Backend:** Vercel Node.js Serverless Function ([api/inquiry.js](file:///Users/enkhee/WORK/EsuWEB/api/inquiry.js)) enforces:
  - `POST`-only method check (`405` otherwise)
  - `16 KB` maximum request payload limit (`413` if exceeded)
  - Sliding-window IP rate limit (`5` requests per `10 minutes` per IP; `429` with `Retry-After` header if exceeded)
  - Honeypot field (`website`) + URL link-flood spam protection (`400` if triggered)
  - Strict field validation & HTML entity escaping (`400` with offending field names if invalid)
  - Zero customer PII logging in server logs
- **Email Provider:** [Resend HTTP API](https://resend.com/docs/api-reference/emails/send-email) (`https://api.resend.com/emails`)
- **Verified Recipient:** `erkhemsaikhan@khundet-nobilis.mn` (with `Reply-To` automatically set to the customer's submitted email address).

---

## 2. Step-by-Step Domain Verification in Resend

To send emails from `inquiries@khundet-nobilis.mn` with high deliverability and without landing in spam:

1. Sign in to [https://resend.com](https://resend.com) and navigate to **Domains** → **Add Domain**.
2. Enter `khundet-nobilis.mn` and select the closest region (e.g., `ap-northeast-1` Tokyo).
3. Resend will generate DNS records (**SPF / MX**, **DKIM (`resend._domainkey`)**, and optional **DMARC (`_dmarc`)**).
4. Add those DNS records in the DNS zone managing `khundet-nobilis.mn` (e.g., Vercel DNS or your domain registrar):
   - **DKIM (`TXT`):** Host `resend._domainkey`, Value provided by Resend
   - **SPF (`TXT` & `MX`):** Host `send` (or subdomain configured in Resend), Values provided by Resend
   - **DMARC (`TXT`):** Host `_dmarc`, Value `v=DMARC1; p=none;`
5. Click **Verify DNS Records** in the Resend dashboard until the domain status turns **Verified (Green)**.

---

## 3. Generating the Resend API Key

1. In the Resend dashboard, open **API Keys** → **Create API Key**.
2. Name: `khundet-nobilis-vercel-production`
3. Permission: **Sending access** (restricted to domain `khundet-nobilis.mn`).
4. Copy the generated secret key (starts with `re_...`). **Never commit this key to Git or expose it in frontend code.**

---

## 4. Configuring Vercel Environment Variables

In the [Vercel Dashboard](https://vercel.com/dashboard), open the **EsuWEB / khundet-nobilis** project → **Settings** → **Environment Variables**, and add the following variables for **Production** and **Preview**:

| Variable Name | Value | Environment | Description |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxxxxxxx` | Production, Preview | **Required.** Secret API key from Resend. |
| `INQUIRY_TO_EMAIL` | `erkhemsaikhan@khundet-nobilis.mn` | Production, Preview | Verified company recipient email. |
| `INQUIRY_FROM_EMAIL` | `Khundet Nobilis B2B Desk <inquiries@khundet-nobilis.mn>` | Production, Preview | Verified sender address on `khundet-nobilis.mn`. |

> **Important Safeguard:** If `RESEND_API_KEY` is not set in the environment, `/api/inquiry` returns `HTTP 503 (EMAIL_PROVIDER_NOT_CONFIGURED)` and the frontend displays a localized error message with direct fallback contact details (`erkhemsaikhan@khundet-nobilis.mn` / `+976 9912 1811`). It will **never** display a fake success message.

---

## 5. Post-Deployment Live Verification Checklist

Once `RESEND_API_KEY` is configured and the branch is approved for deployment:
1. Open `/partnership.html` and submit a test Manufacturer Partnership inquiry.
2. Open `/contact.html?product=3m-micropore-1533-1&ref=1533-1` and submit a test Hospital/Clinic B2B inquiry.
3. Verify that both return `HTTP 200` (`{"ok":true,"mode":"live","id":"..."}`) and arrive in `erkhemsaikhan@khundet-nobilis.mn` with formatted HTML and working `Reply-To`.
