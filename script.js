/* ==========================================================================
   KHUNDET NOBILIS LLC — MULTI-PAGE B2B APPLICATION & CATALOG ENGINE
   Languages: Mongolian (MN), English (EN), Korean (KR)
   Safety & Truthfulness Policy:
   - Distinguishes verified pilot sales experience from pending SKU-level status.
   - Uses actual supplied product photographs for 3M (1533-1), TIME MACHINE, SEDY FILL.
   - Zero fabricated statistics, certifications, or exclusive distributor claims.
   ========================================================================== */

const COMPANY_CONFIG = {
  name: "KHUNDET NOBILIS LLC",
  nameMn: "ХҮНДЭТ НОБИЛИС ХХК",
  tagline: "MEDICAL SUPPLY & AESTHETIC PRODUCT DISTRIBUTION",
  representative: {
    mn: "Цогтжаргалын Эрхэмсайхан (Борлуулалтын захирал)",
    en: "Erkhemsaikhan Tsogtjargal (Sales Director)",
    kr: "초그트자르갈 에르헴사이한 (영업 이사 / Sales Director)"
  },
  email: "erkhemsaikhan@khundet-nobilis.mn",
  phone: "+976 9196 0001",
  website: "https://khundet-nobilis.mn",
  address: {
    mn: "Улаанбаатар хот, Хан-Уул дүүрэг, 17-р хороо, Монгол Улс",
    en: "17th Khoroo, Khan-Uul District, Ulaanbaatar, Mongolia",
    kr: "몽골 울란바토르 항울구 17동 (Khan-Uul District, Ulaanbaatar, Mongolia)"
  },
  facebook: "https://www.facebook.com/profile.php?id=61594275301362"
};

/**
 * Product Commercial Status Definitions (Strictly 4 distinct states)
 */
const PRODUCT_STATUS_LABELS = {
  previously_sold_verified: {
    mn: "Өмнө нь борлуулсан — Баталгаажсан",
    en: "Previously Sold — Verified",
    kr: "기판매 이력 — 확인됨"
  },
  currently_available_verified: {
    mn: "Одоо бэлэн байгаа — Баталгаажсан",
    en: "Currently Available — Verified",
    kr: "현재 공급 가능 — 확인됨"
  },
  under_evaluation: {
    mn: "Багцад судалж буй (Төлөв баталгаажуулагдаж буй)",
    en: "Under Evaluation (Pending Status Confirmation)",
    kr: "포트폴리오 검토 중 (상세 이력 확인 대기)"
  },
  planned_sourcing: {
    mn: "Цаашид татан авахаар төлөвлөж буй",
    en: "Planned for Future Sourcing",
    kr: "향후 소싱 계획 품목"
  }
};

/**
 * Category Definitions
 */
const CATEGORY_LABELS = {
  "medical-consumables": {
    mn: "Эмнэлгийн хэрэгсэл (Medical Consumables)",
    en: "Medical Consumables",
    kr: "의료용 소모품 (Medical Consumables)"
  },
  "aesthetic-threads": {
    mn: "Мэргэжлийн гоо сайхны утас (PDO Threads)",
    en: "Professional Aesthetic Threads",
    kr: "프로페셔널 에스테틱 리프팅 실 (PDO Threads)"
  },
  "medical-aesthetics": {
    mn: "Мэргэжлийн гоо заслын бүтээгдэхүүн",
    en: "Professional Medical Aesthetics",
    kr: "프로페셔널 메디컬 에스테틱"
  },
  "skincare-postcare": {
    mn: "Арьс арчилгаа ба Процедурын дараах сэргээлт",
    en: "Skincare & Post-Procedure Care",
    kr: "더마 스킨케어 및 시술 후 케어"
  }
};

/**
 * Reusable Product Data Model (Section 5 Specification)
 * Uses actual uploaded photographs in assets/products/
 */
const PRODUCTS_CATALOG = [
  {
    id: "3m-micropore-1533-1",
    name: {
      mn: "3M™ Micropore™ Мэс заслын тууз (Арьсны өнгөтэй / Tan)",
      en: "3M™ Micropore™ Surgical Tape (Tan)",
      kr: "3M™ 마이크로포 의료용 테이프 (탄 / Tan)"
    },
    brand: "3M",
    manufacturer: {
      mn: "3M Health Care / ЗМ Korea Co., Ltd. (한국쓰리엠)",
      en: "3M Health Care / 3M Korea Co., Ltd.",
      kr: "한국쓰리엠(주) / 3M Health Care"
    },
    countryOfOrigin: {
      mn: "БНСУ / АНУ (Korea Label Supply)",
      en: "South Korea / USA (3M Korea Supply)",
      kr: "대한민국 / 미국 (원료공급원: 3M Health Care)"
    },
    category: "medical-consumables",
    referenceCode: "1533-1",
    status: "under_evaluation",
    regulatoryStatus: {
      mn: "БНСУ-ын шошго дээр '의약외품' (Эмнэлгийн парафармацевтик хэрэгсэл) ангилалтай. Монгол Улс дахь бүртгэл болон нийлүүлэгчийн зөвшөөрлийн төлөв баталгаажуулагдаж байна.",
      en: "Labeled as Quasi-Drug (의약외품) on Korean packaging. Mongolian regulatory registration, supplier authorization, and inventory status are pending final verification.",
      kr: "한국 패키지 기준 '의약외품' 표기 제품. 몽골 현지 인허가, 공식 공급 권한 및 재고 상태는 최종 확인 절차 중에 있습니다."
    },
    description: {
      mn: "Эмнэлэг, мэс засал болон гоо сайхны клиникийн өдөр тутмын боолт, гуурс, боолтын материал тогтооход зориулагдсан амьсгалдаг, зөөлөн рейон нэхээсгүй (non-woven) арьсны өнгөтэй мэс заслын тууз.",
      en: "Gentle, breathable, hypoallergenic rayon non-woven surgical tape in tan skin-tone finish, designed for securing dressings, tubing, and post-procedure bandages in hospitals and aesthetic clinics.",
      kr: "병원, 외과 및 에스테틱 클리닉에서 드레싱 및 의료 기구 고정에 사용되는 저자극성 통기성 레이온 부직포 의료용 테이프(연갈색/탄)입니다."
    },
    packaging: {
      mn: "1 инч × 10 ярд (2.54 см × 9.14 м) | 12 ороомог / 1 хайрцаг, 10 хайрцаг / 1 кейс",
      en: "1 inch × 10 yard (2.54 cm × 9.14 m) | 12 rolls / box, 10 boxes / case",
      kr: "1 in × 10 yd (2.54 cm × 9.14 m) | 12개 / 1박스, 10박스 / 1케이스"
    },
    images: [
      "assets/products/3m-micropore-1533-1-box.jpg",
      "assets/products/3m-micropore-1533-1-roll-label.jpg",
      "assets/products/3m-micropore-catalog-ref.jpg"
    ],
    specifications: [
      { label: { mn: "Референс код (REF)", en: "Reference Code (REF)", kr: "모델명 (REF)" }, value: "1533-1" },
      { label: { mn: "3M Stock / UPC", en: "3M Stock / UPC", kr: "3M 재고번호 / UPC" }, value: "7000002545 (Prev: 70200534736) / UPC 30707387794454" },
      { label: { mn: "Баркод (EAN)", en: "Package Barcode (EAN)", kr: "바코드 (EAN)" }, value: "8801230603892" },
      { label: { mn: "Үндсэн материал", en: "Material Composition", kr: "전성분" }, value: "Rayon non-woven backing (레이온부직포테이프 - 연갈색)" },
      { label: { mn: "Хэмжээ (Нэг ороомог)", en: "Roll Dimensions", kr: "규격" }, value: "2.54 cm × 9.14 m (1 in × 10 yd)" },
      { label: { mn: "Савлагааны нэгж", en: "Packaging Unit", kr: "포장단위" }, value: "12 rolls/box, 10 boxes/case" },
      { label: { mn: "Хадгалах нөхцөл", en: "Storage Condition", kr: "저장방법" }, value: "Sealed container, room temperature 1°C–30°C (실온 1~30℃ 보관)" }
    ],
    datasheetNote: {
      mn: "Техникийн тодорхойлолт болон савлагааны зураг бэлэн (B2B хүсэлтээр илгээнэ)",
      en: "Product reference sheet & packaging photos available upon B2B inquiry",
      kr: "B2B 문의 시 제품 규격서 및 패키징 상세 자료 제공 가능"
    },
    inquiryAvailable: true,
    featured: true
  },
  {
    id: "time-machine-pdo-thread",
    name: {
      mn: "TIME MACHINE (타임머신) PDO Гоо сайхны утас",
      en: "TIME MACHINE PDO Thread (타임머신 PDO THREAD)",
      kr: "타임머신 (TIME MACHINE) PDO 리프팅 실"
    },
    brand: "TIME MACHINE",
    manufacturer: {
      mn: "БНСУ-ын үйлдвэрлэгч (VC / дэлгэрэнгүй мэдээлэл баталгаажуулагдаж буй)",
      en: "South Korean Manufacturer (VC mark — full legal entity pending confirmation)",
      kr: "대한민국 제조사 (VC 마크 표기 — 상세 제조원 정보 확인 중)"
    },
    countryOfOrigin: {
      mn: "БНСУ (South Korea)",
      en: "South Korea",
      kr: "대한민국 (South Korea)"
    },
    category: "aesthetic-threads",
    referenceCode: "TM-PDO-SERIES",
    status: "under_evaluation",
    regulatoryStatus: {
      mn: "Мэргэжлийн эмнэлэг, гоо сайхны клиникийн хэрэглээний бүтээгдэхүүн. Монгол дахь бүртгэл болон нийлүүлэлтийн төлөв баталгаажуулагдаж байна.",
      en: "Professional clinical aesthetic thread candidate. Historical sales status, supplier authorization, and local regulatory registration are pending verification.",
      kr: "전문 의료기관용 PDO 실 후보 품목. 판매 이력, 공급사 권한 및 현지 인허가 상태 확인 중입니다."
    },
    description: {
      mn: "Арьс өргөх, чангалах болон контур засах мэргэжлийн гоо заслын ажилбарт зориулагдсан БНСУ-ын TIME MACHINE (타임머신) брэндийн PDO (Polydioxanone) шимэгддэг утас.",
      en: "Korean-manufactured Polydioxanone (PDO) absorbable aesthetic thread line designed for professional facial contouring and tissue support procedures in licensed clinics.",
      kr: "전문 메디컬 에스테틱 클리닉의 리프팅 및 컨투어링 시술을 위해 설계된 타임머신(TIME MACHINE) 폴리디옥사논(PDO) 흡수성 봉합사 라인입니다."
    },
    packaging: {
      mn: "Мэргэжлийн клиникийн хайрцагтай савлагаа (Утасны gauge/урт болон доторх тоо ширхэг баталгаажуулагдаж байна)",
      en: "Professional clinical box packaging (Exact needle gauge, thread length, and pouch count per box pending confirmation)",
      kr: "전문가용 박스 패키지 (세부 니들 게이지, 실 길이 및 박스당 포장 수량 확인 중)"
    },
    images: [
      "assets/products/time-machine-pdo-thread-box.jpg"
    ],
    specifications: [
      { label: { mn: "Бүтээгдэхүүний нэр", en: "Product Line", kr: "제품명" }, value: "TIME MACHINE PDO THREAD (타임머신)" },
      { label: { mn: "Утасны материал", en: "Thread Material", kr: "원재료" }, value: "PDO (Polydioxanone / 폴리디옥사논)" },
      { label: { mn: "Зориулалт", en: "Intended Channel", kr: "공급 대상" }, value: "Licensed Aesthetic Clinics & Hospitals (전문 병원 및 클리닉)" },
      { label: { mn: "Хэмжээ / Спецификаци", en: "Gauge & Length Variants", kr: "세부 규격" }, value: "Pending SKU specification sheet confirmation" }
    ],
    datasheetNote: {
      mn: "Дэлгэрэнгүй спецификаци болон нийлүүлэлтийн мэдээллийг B2B лавлагаагаар тодруулна уу",
      en: "Detailed SKU specifications provided upon verified clinic B2B inquiry",
      kr: "클리닉 및 B2B 문의 시 세부 스펙 안내"
    },
    inquiryAvailable: true,
    featured: true
  },
  {
    id: "sedy-fill-60cc",
    name: {
      mn: "SEDY FILL 60cc — Гиалуроны хүчлийн биеийн филлэр",
      en: "SEDY FILL 60cc — Korean Hyaluronic Acid Body Filler",
      kr: "세디 필 (SEDY FILL) 60cc — 히알루론산 바디 필러"
    },
    brand: "SEDY FILL",
    manufacturer: {
      mn: "БНСУ-ын үйлдвэрлэгч (Made in Korea — үйлдвэрлэгчийн албан нэр баталгаажуулагдаж буй)",
      en: "South Korean Manufacturer (Made in Korea — manufacturer entity pending confirmation)",
      kr: "대한민국 제조 (Made in Korea — 상세 제조원 확인 중)"
    },
    countryOfOrigin: {
      mn: "БНСУ (South Korea)",
      en: "South Korea",
      kr: "대한민국 (South Korea)"
    },
    category: "medical-aesthetics",
    referenceCode: "SEDY-60CC-24MG",
    status: "under_evaluation",
    regulatoryStatus: {
      mn: "Эмнэлэг, гоо заслын төвүүдийн мэргэжлийн хэрэглээнд зориулсан бүтээгдэхүүн. Түүхэн борлуулалт, бэлэн үлдэгдэл болон бүртгэлийн статус баталгаажуулагдаж байна.",
      en: "For professional aesthetic clinic & hospital evaluation. Historical sales record, current stock availability, and regulatory registration status are pending confirmation.",
      kr: "전문 에스테틱 클리닉 및 병원용 후보 품목. 기존 판매 기록, 현재 재고 및 인허가 상태 확인 중입니다."
    },
    description: {
      mn: "Эмнэлэг болон мэргэжлийн гоо заслын төвүүдэд биеийн эзлэхүүн нөхөх, хэлбэржүүлэх зориулалттай 24 мг/сс концентраци бүхий 60 сс савлагаатай БНСУ-ын гиалуроны хүчлийн филлэр.",
      en: "High-purity 24 mg/cc Sodium Hyaluronate body contouring filler in a professional 60 cc presentation, candidate for B2B supply to aesthetic clinics and hospitals.",
      kr: "에스테틱 클리닉 및 병원의 바디 볼륨 및 컨투어링 시술을 위한 24 mg/cc 고순도 히알루론산 60 cc 전문가용 대용량 필러입니다."
    },
    packaging: {
      mn: "60 cc (60 mL / 2.02 fl. oz.) мэргэжлийн савлагаа",
      en: "60 cc (60 mL / 2.02 fl. oz.) professional clinic box",
      kr: "60 cc (60 mL / 2.02 fl. oz.) 전문가용 패키지"
    },
    images: [
      "assets/products/sedy-fill-60cc-box.jpg",
      "assets/products/sedy-fill-60cc-spec-panel.jpg",
      "assets/products/sedy-fill-60cc-b2b-panel.jpg"
    ],
    specifications: [
      { label: { mn: "Эзлэхүүн (Volume)", en: "Package Volume", kr: "용량 (Volume)" }, value: "60 cc (60 mL / 2.02 fl. oz.)" },
      { label: { mn: "Концентраци", en: "HA Concentration", kr: "히알루론산 농도" }, value: "24 mg/cc Sodium Hyaluronate" },
      { label: { mn: "Үндсэн найрлага", en: "Main Ingredients", kr: "주요 성분" }, value: "Water, Sodium Hyaluronate, Disodium Phosphate, Sodium Phosphate, Sodium Chloride" },
      { label: { mn: "Гарал үүсэл", en: "Origin", kr: "원산지" }, value: "Made in Korea (БНСУ)" },
      { label: { mn: "Зориулалт", en: "Intended Use", kr: "사용 목적" }, value: "Professional Aesthetic Clinics & Hospitals (Эмнэлэг, гоо заслын төвүүдэд)" }
    ],
    datasheetNote: {
      mn: "Бүтээгдэхүүний мэдээлэл болон баримт бичгийг B2B хүсэлтээр танилцуулна",
      en: "Product specification sheet available upon B2B clinic inquiry",
      kr: "B2B 문의 시 제품 상세 정보 및 관련 문서 안내 가능"
    },
    inquiryAvailable: true,
    featured: true
  },
  {
    id: "derma-pdrn-recovery-ampoule",
    name: {
      mn: "Мэргэжлийн PDRN ба Процедурын дараах сэргээх ампул (Төлөвлөгөөт ангилал)",
      en: "Professional PDRN & Post-Procedure Recovery Ampoules (Planned Category)",
      kr: "프로페셔널 PDRN & 시술 후 리커버리 앰플 (소싱 계획 카테고리)"
    },
    brand: "OPEN SOURCING",
    manufacturer: {
      mn: "БНСУ-ын дерма-гоо сайхны үйлдвэрлэгчидтэй хэлэлцээ хийхэд нээлттэй",
      en: "Open for Korean Derma-Cosmetic Manufacturer Partnerships",
      kr: "한국 더마·에스테틱 제조사 파트너십 소싱 오픈"
    },
    countryOfOrigin: {
      mn: "БНСУ / Олон улс",
      en: "South Korea / International",
      kr: "대한민국 / 글로벌"
    },
    category: "skincare-postcare",
    referenceCode: "CAT-PDRN-POST",
    status: "planned_sourcing",
    regulatoryStatus: {
      mn: "Шинэ нийлүүлэгчийн сонгон шалгаруулалт ба багц тэлэлтийн шатанд яваа ангилал.",
      en: "Category open for new international supplier onboarding and official distribution evaluation.",
      kr: "신규 해외 공급사 발굴 및 공식 유통 협의를 위해 열려 있는 전략 카테고리입니다."
    },
    description: {
      mn: "Гоо сайхны эмнэлэг болон салоны утас, филлэр, лазерын ажилбарын дараах арьс тайвшруулах, нөхөн төлжүүлэх зориулалттай ампул болон дерма-космецевтик бүтээгдэхүүний чиглэл.",
      en: "Targeted portfolio category for soothing, barrier-repairing ampoules and derma-cosmetic regimens used after thread, filler, or laser treatments.",
      kr: "실 리프팅, 필러, 레이저 등 에스테틱 시술 후 피부 진정과 재생을 돕는 전문가용 앰플 및 더마 코스메틱 소싱 카테고리입니다."
    },
    packaging: {
      mn: "Салон болон клиникийн багц / Жижиглэнгийн савлагаа (Нийлүүлэгчийн стандартаар)",
      en: "Clinical cabinet & home-care retail formats (Per manufacturer specification)",
      kr: "클리닉 전문가용 및 홈케어 리테일 규격 (제조사 스펙 기준)"
    },
    images: [
      "assets/product-pdrn-ampoule.jpg",
      "assets/hero-serum-marble.jpg"
    ],
    specifications: [
      { label: { mn: "Ангилал", en: "Category Focus", kr: "카테고리" }, value: "Post-Procedure Skincare & Derma Boosters" },
      { label: { mn: "Статус", en: "Sourcing Status", kr: "소싱 상태" }, value: "Planned for Future Sourcing / Manufacturer Proposals Welcome" }
    ],
    datasheetNote: {
      mn: "Энэ ангилалд бүтээгдэхүүн нийлүүлэх хүсэлтэй үйлдвэрлэгчид бидэнтэй холбогдоно уу",
      en: "Manufacturers in this category are invited to submit partnership proposals",
      kr: "해당 카테고리의 한국 제조사 파트너십 제안을 환영합니다"
    },
    inquiryAvailable: true,
    featured: false
  }
];

/**
 * Multi-Brand Directory Data for brands.html
 */
const BRANDS_CATALOG = [
  {
    id: "brand-3m",
    name: "3M Health Care (3M Korea Supply)",
    origin: { mn: "БНСУ / АНУ", en: "South Korea / USA", kr: "대한민국 / 미국" },
    category: { mn: "Эмнэлгийн хэрэгсэл", en: "Medical Consumables", kr: "의료용 소모품" },
    statusKey: "under_evaluation",
    highlightRef: "REF 1533-1 (Micropore™ Tan Surgical Tape)",
    summary: {
      mn: "Эмнэлэг, мэс засал болон клиникийн өдөр тутмын хэрэглээний өндөр чанарын боолт, тууз болон эмнэлгийн туслах хэрэгслүүд.",
      en: "Global standard medical tapes and clinical consumables evaluated for wholesale supply to Mongolian hospitals and clinics.",
      kr: "몽골 병원 및 클리닉 도매 공급을 위해 검토 중인 글로벌 스탠다드 의료용 테이프 및 소모품 라인입니다."
    },
    image: "assets/products/3m-micropore-1533-1-box.jpg"
  },
  {
    id: "brand-time-machine",
    name: "TIME MACHINE (타임머신)",
    origin: { mn: "БНСУ (South Korea)", en: "South Korea", kr: "대한민국" },
    category: { mn: "Мэргэжлийн PDO утас", en: "Professional Aesthetic Threads", kr: "프로페셔널 PDO 리프팅 실" },
    statusKey: "under_evaluation",
    highlightRef: "PDO Absorbable Thread Series",
    summary: {
      mn: "Мэргэжлийн гоо сайхны эмнэлэг, клиникүүдэд зориулсан БНСУ-ын шимэгддэг PDO утасны бүтээгдэхүүн.",
      en: "Korean professional Polydioxanone (PDO) thread line targeted for licensed aesthetic practitioners in Ulaanbaatar.",
      kr: "울란바토르 내 전문 메디컬 에스테틱 클리닉을 대상으로 하는 한국산 PDO 리프팅 실 브랜드입니다."
    },
    image: "assets/products/time-machine-pdo-thread-box.jpg"
  },
  {
    id: "brand-sedy-fill",
    name: "SEDY FILL",
    origin: { mn: "БНСУ (South Korea)", en: "South Korea", kr: "대한민국" },
    category: { mn: "Мэргэжлийн гоо засал (HA Filler)", en: "Professional Medical Aesthetics", kr: "프로페셔널 메디컬 에스테틱 (HA 필러)" },
    statusKey: "under_evaluation",
    highlightRef: "SEDY FILL 60cc (24 mg/cc HA)",
    summary: {
      mn: "Эмнэлэг, гоо заслын төвүүдийн мэргэжлийн хэрэглээнд зориулсан 60cc савлагаатай гиалуроны хүчлийн биеийн филлэр.",
      en: "Korean 24 mg/cc Hyaluronic Acid body contouring filler in professional 60cc presentation for aesthetic clinics.",
      kr: "에스테틱 클리닉 및 병원 공급용 24 mg/cc 히알루론산 60cc 대용량 바디 필러 브랜드입니다."
    },
    image: "assets/products/sedy-fill-60cc-box.jpg"
  },
  {
    id: "brand-open-partner",
    name: "Future Partner Brands (Open Onboarding)",
    origin: { mn: "БНСУ & Олон улс", en: "South Korea & Global", kr: "대한민국 및 글로벌 제조사" },
    category: { mn: "Эмнэлгийн хэрэгсэл, Гоо засал, Арьс арчилгаа", en: "Medical, Aesthetic & Derma-Cosmetics", kr: "의료소모품 · 에스테틱 · 더마코스메틱" },
    statusKey: "planned_sourcing",
    highlightRef: "Official Distributorship & Market Entry",
    summary: {
      mn: "«Хүндэт Нобилис» ХХК нь зөвхөн нэг үйлдвэрлэгчээр хязгаарлагдахгүйгээр олон брэндийн эмнэлгийн болон гоо сайхны бүтээгдэхүүнийг Монголын зах зээлд нэвтрүүлэхээр нээлттэй хамтран ажиллаж байна.",
      en: "Khundet Nobilis LLC operates a multi-brand sourcing strategy and welcomes official distributorship discussions with reputable international manufacturers.",
      kr: "훈데트 노빌리스는 단일 브랜드에 국한되지 않는 멀티 브랜드 포트폴리오 전략을 추구하며, 유망 해외 제조사와의 공식 총판/유통 협의를 환영합니다."
    },
    image: "assets/product-pdrn-ampoule.jpg"
  }
];

/**
 * Shared Navigation & UI Dictionary (MN / EN / KR)
 */
const UI_DICT = {
  mn: {
    topNoticeLeft: "ХҮНДЭТ НОБИЛИС ХХК — ЭМНЭЛГИЙН ХЭРЭГСЭЛ БА ГОО САЙХНЫ БҮТЭЭГДЭХҮҮН НИЙЛҮҮЛЭЛТ",
    navHome: "Нүүр",
    navAbout: "Бидний тухай",
    navProducts: "Бүтээгдэхүүн",
    navBrands: "Брэндүүд",
    navExperience: "Бидний туршлага",
    navDistribution: "Импорт, түгээлт",
    navPartnership: "Хамтын ажиллагаа",
    navContact: "Холбоо барих",
    btnViewDetails: "Дэлгэрэнгүй",
    btnInquireB2B: "B2B үнийн санал",
    footerDesc: "Эмнэлгийн хэрэгсэл, мэргэжлийн гоо засал болон арьс арчилгааны олон улсын бүтээгдэхүүний судалгаа, B2B нийлүүлэлт, зах зээл хөгжүүлэлтийн компани.",
    footerNavHeading: "ҮНДСЭН ХУУДСУУД",
    footerCatHeading: "БҮТЭЭГДЭХҮҮНИЙ АНГИЛАЛ",
    footerContactHeading: "АЛБАН ЁСНЫ ХОЛБОО БАРИХ",
    footerRights: "© 2026 KHUNDET NOBILIS LLC (Хүндэт Нобилис ХХК). Бүх эрх хуулиар хамгаалагдсан."
  },
  en: {
    topNoticeLeft: "KHUNDET NOBILIS LLC — MULTI-BRAND MEDICAL SUPPLY & AESTHETIC PRODUCT DISTRIBUTION",
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navBrands: "Brands",
    navExperience: "Our Experience",
    navDistribution: "Distribution",
    navPartnership: "Partnership",
    navContact: "Contact",
    btnViewDetails: "Specifications",
    btnInquireB2B: "B2B Inquiry",
    footerDesc: "Mongolia-based multi-brand medical supply, professional aesthetic, and skincare product sourcing and B2B distribution development company.",
    footerNavHeading: "CORPORATE PAGES",
    footerCatHeading: "PORTFOLIO CATEGORIES",
    footerContactHeading: "VERIFIED CORPORATE OFFICE",
    footerRights: "© 2026 KHUNDET NOBILIS LLC. All Rights Reserved."
  },
  kr: {
    topNoticeLeft: "KHUNDET NOBILIS LLC — 멀티 브랜드 의료용 소모품 및 메디컬 에스테틱 유통",
    navHome: "홈",
    navAbout: "회사 소개",
    navProducts: "제품 카탈로그",
    navBrands: "취급 브랜드",
    navExperience: "시장 경험",
    navDistribution: "유통 및 공급",
    navPartnership: "제조사 파트너십",
    navContact: "문의하기",
    btnViewDetails: "상세 규격 보기",
    btnInquireB2B: "B2B/공급 문의",
    footerDesc: "몽골 울란바토르 기반의 의료용 소모품, 프로페셔널 에스테틱 및 스킨케어 멀티 브랜드 소싱·B2B 유통 개발 전문 기업입니다.",
    footerNavHeading: "주요 페이지",
    footerCatHeading: "제품 카테고리",
    footerContactHeading: "공식 연락처",
    footerRights: "© 2026 KHUNDET NOBILIS LLC (훈데트 노빌리스). All Rights Reserved."
  }
};

// Global Language State
let currentLang = "mn";

function getActiveLang() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang && ["mn", "en", "kr"].includes(urlLang.toLowerCase())) {
    localStorage.setItem("kn_lang", urlLang.toLowerCase());
    return urlLang.toLowerCase();
  }
  const saved = localStorage.getItem("kn_lang");
  if (saved && ["mn", "en", "kr"].includes(saved)) {
    return saved;
  }
  return "mn";
}

function setLanguage(lang) {
  if (!["mn", "en", "kr"].includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("kn_lang", lang);
  document.documentElement.lang = lang === "kr" ? "ko" : lang;

  // Toggle active state on language buttons
  document.querySelectorAll(".lang-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Translate elements with data-lang-mn / data-lang-en / data-lang-kr
  document.querySelectorAll("[data-lang-mn]").forEach((el) => {
    const text = el.getAttribute(`data-lang-${lang}`) || el.getAttribute("data-lang-en");
    if (text) {
      if (el.hasAttribute("data-html")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Translate shared UI_DICT keys
  const dict = UI_DICT[lang];
  document.querySelectorAll("[data-ui]").forEach((el) => {
    const key = el.getAttribute("data-ui");
    if (dict && dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render dynamic components on the current page
  renderFeaturedProductsHome();
  renderCatalogPage();
  renderProductDetailPage();
  renderBrandsPage();
}

/**
 * Inject Shared Corporate Header & Footer across all pages
 */
function initSharedChrome() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const headerMount = document.getElementById("siteHeaderMount");
  if (headerMount) {
    headerMount.innerHTML = `
      <div class="top-notice-bar">
        <div class="top-notice-inner">
          <span data-ui="topNoticeLeft">KHUNDET NOBILIS LLC — MULTI-BRAND MEDICAL SUPPLY & AESTHETIC PRODUCT DISTRIBUTION</span>
          <div class="top-notice-links">
            <a href="mailto:${COMPANY_CONFIG.email}">${COMPANY_CONFIG.email}</a>
            <span>|</span>
            <a href="tel:+97691960001">${COMPANY_CONFIG.phone}</a>
            <span>|</span>
            <a href="company-profile.html" target="_blank" rel="noopener">Company Profile PDF</a>
          </div>
        </div>
      </div>
      <header class="site-header">
        <div class="header-grid">
          <a href="index.html" class="brand-identity" aria-label="Khundet Nobilis Home">
            <img src="assets/logo.jpg" alt="Khundet Nobilis LLC Logo" class="brand-logo-thumb" />
            <div class="brand-titles">
              <span class="brand-main">KHUNDET NOBILIS</span>
              <span class="brand-sub">MEDICAL SUPPLY &amp; AESTHETIC SOLUTIONS</span>
            </div>
          </a>

          <nav class="main-nav" id="mainNav" aria-label="Primary Navigation">
            <a href="index.html" class="nav-link ${currentPage === "index.html" || currentPage === "" ? "active" : ""}" data-ui="navHome">Home</a>
            <a href="about.html" class="nav-link ${currentPage === "about.html" ? "active" : ""}" data-ui="navAbout">About Us</a>
            <a href="products.html" class="nav-link ${currentPage === "products.html" || currentPage === "product.html" ? "active" : ""}" data-ui="navProducts">Products</a>
            <a href="brands.html" class="nav-link ${currentPage === "brands.html" ? "active" : ""}" data-ui="navBrands">Brands</a>
            <a href="experience.html" class="nav-link ${currentPage === "experience.html" ? "active" : ""}" data-ui="navExperience">Our Experience</a>
            <a href="distribution.html" class="nav-link ${currentPage === "distribution.html" ? "active" : ""}" data-ui="navDistribution">Distribution</a>
            <a href="partnership.html" class="nav-link ${currentPage === "partnership.html" ? "active" : ""}" data-ui="navPartnership">Partnership</a>
            <a href="contact.html" class="nav-link ${currentPage === "contact.html" ? "active" : ""}" data-ui="navContact">Contact</a>
          </nav>

          <div class="header-controls">
            <div class="lang-bar" role="group" aria-label="Language Selector">
              <button type="button" class="lang-pill" data-lang="mn">MN</button>
              <button type="button" class="lang-pill" data-lang="en">EN</button>
              <button type="button" class="lang-pill" data-lang="kr">KR</button>
            </div>
            <button type="button" class="mobile-menu-trigger" id="mobileMenuBtn" aria-label="Toggle Menu">Menu</button>
          </div>
        </div>
      </header>
    `;
  }

  const footerMount = document.getElementById("siteFooterMount");
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-top-grid">
            <div>
              <div class="brand-identity" style="margin-bottom: 16px;">
                <img src="assets/logo.jpg" alt="Khundet Nobilis Logo" class="brand-logo-thumb" />
                <div class="brand-titles">
                  <span class="brand-main" style="color: var(--bg-alabaster);">KHUNDET NOBILIS</span>
                  <span class="brand-sub" style="color: var(--champagne-light);">MEDICAL &amp; AESTHETIC DISTRIBUTION</span>
                </div>
              </div>
              <p style="font-size: 0.86rem; color: #C7C2B8; max-width: 340px; line-height: 1.68;" data-ui="footerDesc"></p>
            </div>

            <div>
              <h4 class="footer-heading" data-ui="footerNavHeading">CORPORATE PAGES</h4>
              <ul class="footer-nav-list">
                <li><a href="index.html" data-ui="navHome">Home</a></li>
                <li><a href="about.html" data-ui="navAbout">About Us</a></li>
                <li><a href="products.html" data-ui="navProducts">Products</a></li>
                <li><a href="brands.html" data-ui="navBrands">Brands</a></li>
                <li><a href="experience.html" data-ui="navExperience">Our Experience</a></li>
                <li><a href="distribution.html" data-ui="navDistribution">Distribution</a></li>
                <li><a href="partnership.html" data-ui="navPartnership">Partnership</a></li>
                <li><a href="contact.html" data-ui="navContact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-heading" data-ui="footerCatHeading">PORTFOLIO CATEGORIES</h4>
              <ul class="footer-nav-list">
                <li><a href="products.html?category=medical-consumables">3M Medical Consumables</a></li>
                <li><a href="products.html?category=aesthetic-threads">TIME MACHINE PDO Threads</a></li>
                <li><a href="products.html?category=medical-aesthetics">SEDY FILL Medical Aesthetics</a></li>
                <li><a href="products.html?category=skincare-postcare">Post-Procedure Skincare</a></li>
                <li><a href="company-profile.html" target="_blank" rel="noopener">Company Profile (PDF)</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-heading" data-ui="footerContactHeading">VERIFIED CORPORATE OFFICE</h4>
              <ul class="footer-nav-list">
                <li><strong style="color: var(--bg-white);">${COMPANY_CONFIG.name}</strong></li>
                <li>Khan-Uul District, 17th Khoroo, Ulaanbaatar, Mongolia</li>
                <li><a href="mailto:${COMPANY_CONFIG.email}">${COMPANY_CONFIG.email}</a></li>
                <li><a href="tel:+97691960001">${COMPANY_CONFIG.phone}</a></li>
                <li><a href="https://khundet-nobilis.mn">www.khundet-nobilis.mn</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom-row">
            <span data-ui="footerRights">© 2026 KHUNDET NOBILIS LLC. All Rights Reserved.</span>
            <span>ULAANBAATAR, MONGOLIA · MULTI-BRAND MEDICAL &amp; AESTHETIC SOURCING</span>
          </div>
        </div>
      </footer>
    `;
  }

  // Bind language buttons
  document.querySelectorAll(".lang-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Bind mobile menu toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }
}

/**
 * Build HTML Card for a Product
 */
function createProductCardHTML(product) {
  const statusObj = PRODUCT_STATUS_LABELS[product.status] || PRODUCT_STATUS_LABELS.under_evaluation;
  const catObj = CATEGORY_LABELS[product.category] || { mn: product.category, en: product.category, kr: product.category };
  const dict = UI_DICT[currentLang];

  const originLabel = currentLang === "mn" ? "Гарал үүсэл:" : currentLang === "kr" ? "원산지:" : "Origin:";
  const packLabel = currentLang === "mn" ? "Савлагаа:" : currentLang === "kr" ? "포장단위:" : "Packaging:";

  return `
    <article class="product-card">
      <div>
        <a href="product.html?id=${product.id}" class="product-card-media" style="display:block;">
          <img src="${product.images[0]}" alt="${product.name[currentLang]}" loading="lazy" />
          <span class="product-brand-pill">${product.brand}</span>
        </a>
        <div class="product-card-body">
          <div>
            <div class="product-cat-row">
              <span class="product-cat-tag">${catObj[currentLang]}</span>
              <span class="mono-code">REF: ${product.referenceCode}</span>
            </div>
            <h3 class="product-card-title">
              <a href="product.html?id=${product.id}">${product.name[currentLang]}</a>
            </h3>
            <div style="margin-bottom: 12px;">
              <span class="status-badge ${product.status}">${statusObj[currentLang]}</span>
            </div>
            <p class="product-card-desc">${product.description[currentLang]}</p>
          </div>
          <div class="product-spec-mini">
            <div><span>${originLabel}</span> <strong>${product.countryOfOrigin[currentLang]}</strong></div>
            <div><span>${packLabel}</span> <strong style="text-align:right;">${product.packaging[currentLang]}</strong></div>
          </div>
        </div>
      </div>
      <div class="product-card-actions">
        <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">${dict.btnViewDetails}</a>
        <a href="contact.html?product=${encodeURIComponent(product.id)}&ref=${encodeURIComponent(product.referenceCode)}" class="btn btn-primary btn-sm">${dict.btnInquireB2B}</a>
      </div>
    </article>
  `;
}

/**
 * 1. Render Featured Products on Homepage (index.html)
 */
function renderFeaturedProductsHome() {
  const mount = document.getElementById("homeFeaturedProductsGrid");
  if (!mount) return;
  const featured = PRODUCTS_CATALOG.filter((p) => p.featured);
  mount.innerHTML = featured.map((p) => createProductCardHTML(p)).join("");
}

/**
 * 2. Render Searchable & Filterable Product Catalog (products.html)
 */
function renderCatalogPage() {
  const grid = document.getElementById("catalogProductsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("catalogSearchInput");
  const brandSelect = document.getElementById("catalogBrandFilter");
  const catSelect = document.getElementById("catalogCategoryFilter");
  const statusSelect = document.getElementById("catalogStatusFilter");
  const countEl = document.getElementById("catalogCountDisplay");

  const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
  const brandVal = brandSelect ? brandSelect.value : "all";
  const catVal = catSelect ? catSelect.value : "all";
  const statusVal = statusSelect ? statusSelect.value : "all";

  const filtered = PRODUCTS_CATALOG.filter((item) => {
    const matchesBrand = brandVal === "all" || item.brand.toLowerCase() === brandVal.toLowerCase();
    const matchesCat = catVal === "all" || item.category === catVal;
    const matchesStatus = statusVal === "all" || item.status === statusVal;

    if (!query) return matchesBrand && matchesCat && matchesStatus;

    const haystack = [
      item.name.mn,
      item.name.en,
      item.name.kr,
      item.brand,
      item.referenceCode,
      item.description.mn,
      item.description.en,
      item.description.kr,
      ...item.specifications.map((s) => s.value)
    ]
      .join(" ")
      .toLowerCase();

    return matchesBrand && matchesCat && matchesStatus && haystack.includes(query);
  });

  if (countEl) {
    countEl.textContent =
      currentLang === "mn"
        ? `Нийт ${filtered.length} бүтээгдэхүүн илэрлээ`
        : currentLang === "kr"
        ? `총 ${filtered.length}개 제품 표시 중`
        : `Showing ${filtered.length} product(s)`;
  }

  if (filtered.length === 0) {
    const emptyMsg =
      currentLang === "mn"
        ? "Таны хайсан шүүлтүүрт тохирох бүтээгдэхүүн олдсонгүй. Шүүлтүүрээ цэвэрлэж дахин үзнэ үү."
        : currentLang === "kr"
        ? "검색 조건에 일치하는 제품이 없습니다. 필터를 초기화해 주세요."
        : "No products matched your selected filters. Please reset filters or submit a direct B2B sourcing inquiry.";
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; background: var(--bg-white); border: 1px solid var(--line-hairline); padding: 48px; text-align: center;">
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 18px;">${emptyMsg}</p>
        <button type="button" class="btn btn-outline btn-sm" onclick="resetCatalogFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p) => createProductCardHTML(p)).join("");
}

function initCatalogFilters() {
  const grid = document.getElementById("catalogProductsGrid");
  if (!grid) return;

  // Apply URL query parameters if present (?category=... or ?brand=...)
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get("category");
  const urlBrand = params.get("brand");

  const brandSelect = document.getElementById("catalogBrandFilter");
  const catSelect = document.getElementById("catalogCategoryFilter");
  const statusSelect = document.getElementById("catalogStatusFilter");
  const searchInput = document.getElementById("catalogSearchInput");

  if (urlCat && catSelect) catSelect.value = urlCat;
  if (urlBrand && brandSelect) brandSelect.value = urlBrand;

  [brandSelect, catSelect, statusSelect].forEach((sel) => {
    if (sel) sel.addEventListener("change", renderCatalogPage);
  });

  if (searchInput) {
    searchInput.addEventListener("input", renderCatalogPage);
  }
}

window.resetCatalogFilters = function () {
  const brandSelect = document.getElementById("catalogBrandFilter");
  const catSelect = document.getElementById("catalogCategoryFilter");
  const statusSelect = document.getElementById("catalogStatusFilter");
  const searchInput = document.getElementById("catalogSearchInput");
  if (brandSelect) brandSelect.value = "all";
  if (catSelect) catSelect.value = "all";
  if (statusSelect) statusSelect.value = "all";
  if (searchInput) searchInput.value = "";
  renderCatalogPage();
};

/**
 * 3. Render Reusable Product Detail Page (product.html?id=...)
 */
function renderProductDetailPage() {
  const mount = document.getElementById("productDetailMount");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "3m-micropore-1533-1";
  const product = PRODUCTS_CATALOG.find((p) => p.id === id) || PRODUCTS_CATALOG[0];

  const statusObj = PRODUCT_STATUS_LABELS[product.status];
  const catObj = CATEGORY_LABELS[product.category];

  const labels = {
    mn: {
      backCatalog: "← Каталог руу буцах",
      brand: "Брэнд",
      manufacturer: "Үйлдвэрлэгч",
      origin: "Гарал үүсэл",
      packaging: "Савлагааны мэдээлэл",
      regTitle: "Бүртгэл ба нийлүүлэлтийн төлөвийн тайлбар",
      specsTitle: "Техникийн үзүүлэлт ба Референс мэдээлэл",
      datasheetTitle: "Баримт бичиг / Datasheet",
      inquireBtn: "Энэ бүтээгдэхүүнээр B2B үнийн санал / мэдээлэл авах",
      partnerBtn: "Үйлдвэрлэгчийн түншлэлийн санал илгээх"
    },
    en: {
      backCatalog: "← Back to Product Catalog",
      brand: "Brand",
      manufacturer: "Manufacturer",
      origin: "Country of Origin",
      packaging: "Packaging Information",
      regTitle: "Commercial & Regulatory Verification Disclosure",
      specsTitle: "Technical Specifications & Reference Data",
      datasheetTitle: "Documentation & Datasheet",
      inquireBtn: "Request B2B Supply / Wholesale Information",
      partnerBtn: "Submit Manufacturer Partnership Inquiry"
    },
    kr: {
      backCatalog: "← 제품 카탈로그로 돌아가기",
      brand: "브랜드 (Brand)",
      manufacturer: "제조사 (Manufacturer)",
      origin: "원산지 (Origin)",
      packaging: "포장 단위 (Packaging)",
      regTitle: "상업적 상태 및 인허가 확인 안내",
      specsTitle: "제품 상세 스펙 및 레퍼런스 코드",
      datasheetTitle: "데이터시트 및 문서 안내",
      inquireBtn: "B2B 도매 공급 및 제품 문의하기",
      partnerBtn: "제조사 공식 파트너십 제안하기"
    }
  }[currentLang];

  const thumbsHTML = product.images
    .map(
      (imgSrc, idx) => `
      <button type="button" class="pdp-thumb-btn ${idx === 0 ? "active" : ""}" onclick="switchPdpImage('${imgSrc}', this)">
        <img src="${imgSrc}" alt="${product.name[currentLang]} view ${idx + 1}" />
      </button>
    `
    )
    .join("");

  const specsRowsHTML = product.specifications
    .map(
      (row) => `
      <tr>
        <th>${row.label[currentLang]}</th>
        <td>${row.value}</td>
      </tr>
    `
    )
    .join("");

  mount.innerHTML = `
    <div style="margin-bottom: 24px;">
      <a href="products.html" class="btn btn-outline btn-sm">${labels.backCatalog}</a>
    </div>

    <div class="pdp-layout">
      <div class="pdp-gallery-box">
        <div class="pdp-main-image-wrap">
          <img id="pdpMainPhoto" src="${product.images[0]}" alt="${product.name[currentLang]}" />
        </div>
        <div class="pdp-thumbs-row">
          ${thumbsHTML}
        </div>
      </div>

      <div class="pdp-info-panel">
        <div class="pdp-meta-header">
          <span class="eyebrow">${catObj[currentLang]}</span>
          <span class="mono-code">REF: ${product.referenceCode}</span>
        </div>

        <h1 class="pdp-title">${product.name[currentLang]}</h1>

        <div style="margin-bottom: 20px;">
          <span class="status-badge ${product.status}">${statusObj[currentLang]}</span>
        </div>

        <p style="font-size: 0.96rem; color: var(--text-body); line-height: 1.72;">
          ${product.description[currentLang]}
        </p>

        <div class="pdp-summary-grid">
          <div class="pdp-summary-item">
            <span>${labels.brand}</span>
            <strong>${product.brand}</strong>
          </div>
          <div class="pdp-summary-item">
            <span>${labels.origin}</span>
            <strong>${product.countryOfOrigin[currentLang]}</strong>
          </div>
          <div class="pdp-summary-item">
            <span>${labels.manufacturer}</span>
            <strong>${product.manufacturer[currentLang]}</strong>
          </div>
          <div class="pdp-summary-item">
            <span>${labels.packaging}</span>
            <strong>${product.packaging[currentLang]}</strong>
          </div>
        </div>

        <div style="background: var(--status-eval-bg); border-left: 3px solid var(--champagne); padding: 14px 18px; margin-bottom: 24px; font-size: 0.84rem; color: var(--text-body);">
          <strong style="display:block; margin-bottom: 4px; color: var(--text-charcoal);">${labels.regTitle}:</strong>
          ${product.regulatoryStatus[currentLang]}
        </div>

        <h3 style="font-family: var(--font-serif); font-size: 1.45rem; margin-bottom: 10px;">
          ${labels.specsTitle}
        </h3>
        <table class="specs-table">
          <tbody>
            ${specsRowsHTML}
            <tr>
              <th>${labels.datasheetTitle}</th>
              <td>${product.datasheetNote[currentLang]}</td>
            </tr>
          </tbody>
        </table>

        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="contact.html?product=${encodeURIComponent(product.id)}&ref=${encodeURIComponent(product.referenceCode)}" class="btn btn-primary" style="flex: 1;">
            ${labels.inquireBtn}
          </a>
          <a href="partnership.html" class="btn btn-outline">
            ${labels.partnerBtn}
          </a>
        </div>
      </div>
    </div>
  `;
}

window.switchPdpImage = function (src, btnEl) {
  const mainImg = document.getElementById("pdpMainPhoto");
  if (mainImg) mainImg.src = src;
  document.querySelectorAll(".pdp-thumb-btn").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
};

/**
 * 4. Render Multi-Brand Directory (brands.html)
 */
function renderBrandsPage() {
  const mount = document.getElementById("brandsDirectoryGrid");
  if (!mount) return;

  mount.innerHTML = BRANDS_CATALOG.map((b) => {
    const st = PRODUCT_STATUS_LABELS[b.statusKey];
    return `
      <article class="corporate-card" style="padding: 0; overflow: hidden;">
        <div style="height: 230px; background: var(--bg-sand); border-bottom: 1px solid var(--line-hairline); overflow: hidden;">
          <img src="${b.image}" alt="${b.name}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" />
        </div>
        <div style="padding: 28px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:10px;">
            <span class="eyebrow">${b.category[currentLang]}</span>
            <span class="mono-code">${b.origin[currentLang]}</span>
          </div>
          <h3 class="card-title" style="margin-bottom: 10px;">${b.name}</h3>
          <div style="margin-bottom: 14px;">
            <span class="status-badge ${b.statusKey}">${st[currentLang]}</span>
          </div>
          <p class="card-text" style="margin-bottom: 18px;">${b.summary[currentLang]}</p>
          <div style="border-top: 1px solid var(--line-hairline); padding-top: 14px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:600;">${b.highlightRef}</span>
            <a href="products.html" class="btn btn-outline btn-sm">Catalog →</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * 5. Initialize B2B & Manufacturer Inquiry Forms across Contact & Partnership pages
 */
function initB2BForms() {
  // Pre-fill product reference if navigated from a product card
  const params = new URLSearchParams(window.location.search);
  const preProduct = params.get("product");
  const preRef = params.get("ref");

  const refInput = document.getElementById("inquiryProductRef");
  if (refInput && (preProduct || preRef)) {
    refInput.value = `${preProduct || ""} (REF: ${preRef || ""})`.trim();
  }

  // Workflow tabs if present
  const tabs = document.querySelectorAll(".wf-tab");
  let activeType = "Manufacturer / Distributorship Proposal";
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeType = tab.getAttribute("data-wf-type") || activeType;
    });
  });

  const forms = document.querySelectorAll(".b2b-verified-form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Anti-spam honeypot check
      const trap = form.querySelector(".honeypot-input");
      if (trap && trap.value.trim() !== "") return;

      const name = (form.querySelector("[name='fullName']")?.value || "").trim();
      const company = (form.querySelector("[name='companyName']")?.value || "").trim();
      const email = (form.querySelector("[name='email']")?.value || "").trim();
      const phone = (form.querySelector("[name='phone']")?.value || "").trim();
      const country = (form.querySelector("[name='country']")?.value || "").trim();
      const category = (form.querySelector("[name='category']")?.value || "").trim();
      const prodRef = (form.querySelector("[name='productRef']")?.value || "").trim();
      const message = (form.querySelector("[name='message']")?.value || "").trim();

      if (!name || !company || !email || !message) return;

      const subject = encodeURIComponent(`[B2B INQUIRY — ${activeType}] ${company} (${country})`);
      const body = [
        `Inquiry Classification: ${activeType}`,
        `Company / Organization: ${company}`,
        `Contact Person & Title: ${name}`,
        `Official Email: ${email}`,
        `Phone / Messenger: ${phone}`,
        `Country / City: ${country}`,
        `Category / Product Reference: ${category} ${prodRef ? "| " + prodRef : ""}`,
        `--------------------------------------------------`,
        `Message / Proposal Details:`,
        message
      ].join("\n");

      const statusBox = form.querySelector(".form-status-banner");
      if (statusBox) {
        statusBox.style.display = "block";
        statusBox.innerHTML =
          currentLang === "mn"
            ? `Таны албан ёсны хүсэлтийг бэлтгэлээ. И-мэйл программаар <strong>${COMPANY_CONFIG.email}</strong> хаяг руу илгээгдэнэ.`
            : currentLang === "kr"
            ? `문의 내용이 준비되었습니다. 이메일 클라이언트를 통해 <strong>${COMPANY_CONFIG.email}</strong>로 발송됩니다.`
            : `Your official inquiry is ready. Opening your email client addressed to <strong>${COMPANY_CONFIG.email}</strong>.`;
      }

      window.location.href = `mailto:${COMPANY_CONFIG.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    });
  });
}

/**
 * Boot Application
 */
document.addEventListener("DOMContentLoaded", () => {
  initSharedChrome();
  initCatalogFilters();
  initB2BForms();
  currentLang = getActiveLang();
  setLanguage(currentLang);
});
