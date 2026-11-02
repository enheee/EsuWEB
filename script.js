/* ==========================================================================
   KHUNDET NOBILIS LLC — EDITORIAL CORPORATE APPLICATION LOGIC
   Languages: Mongolian (MN), English (EN), Korean (KR)
   Content Policy: Verified commercial experience (pilot sales) & transparent
   future distribution development roadmap. No fabricated claims.
   ========================================================================== */

/**
 * 1. EDITABLE COMPANY CONFIGURATION
 * Update contact information, social links, or corporate metadata here.
 */
const COMPANY_CONFIG = {
  name: "KHUNDET NOBILIS LLC",
  nameMn: "ХҮНДЭТ НОБИЛИС ХХК",
  tagline: "GLOBAL BEAUTY & AESTHETIC SOLUTIONS",
  principle: "WE MAKE BEAUTY PERFORM",
  representative: {
    mn: "Цогтжаргалын Эрхэмсайхан (Борлуулалтын захирал)",
    en: "Erkhemsaikhan Tsogtjargal (Sales Director)",
    kr: "초그트자르갈 에르헴사이한 (영업 이사)"
  },
  email: "erkhemsaikhan@khundet-nobilis.mn",
  phone: "+976 9196 0001",
  website: "www.khundet-nobilis.mn",
  location: {
    mn: "Улаанбаатар хот, ХУД 17-р хороо, Монгол Улс",
    en: "Khan-Uul District, 17th Khoroo, Ulaanbaatar, Mongolia",
    kr: "몽골 울란바토르 항울구 17동 (Ulaanbaatar, Mongolia)"
  },
  facebookUrl: "https://www.facebook.com/profile.php?id=61594275301362"
};

/**
 * 2. EDITABLE PRODUCT PORTFOLIO SHOWCASE DATA
 * Note: Images are explicitly marked as design showcase samples until replaced
 * with partner-authorized product photography.
 */
const PORTFOLIO_ITEMS = [
  {
    id: "skincare-regenerating-line",
    category: "skincare",
    image: "assets/product-skincare-luxury.jpg",
    sampleBadge: {
      mn: "Загварын жишээ зураг",
      en: "Design Showcase Sample",
      kr: "디자인 예시 이미지"
    },
    categoryLabel: {
      mn: "Арьс арчилгаа ба Гоо сайхан",
      en: "Skincare & Cosmetics",
      kr: "스킨케어 및 코스메틱"
    },
    title: {
      mn: "Эрчимт нөхөн төлжүүлэх серум ба тосны багц",
      en: "Concentrated Renewing Serum & Cream Regimen",
      kr: "고농축 리뉴잉 세럼 & 크림 라인업"
    },
    shortDesc: {
      mn: "Монгол орны эрс тэс, хуурай уур амьсгалд арьсны чийгшлийн ханыг дэмжих, уян хатан чанарыг сэргээх өндөр концентрацитай өдөр тутмын арчилгааны цуврал.",
      en: "High-concentration daily skincare formulations tailored to support skin barrier resilience and deep hydration in Mongolia's dry continental climate.",
      kr: "몽골의 건조하고 대륙성인 기후 환경에서 피부 장벽 강화와 깊은 보습을 돕는 고농축 데일리 스킨케어 라인입니다."
    },
    col1Desc: {
      mn: "Монголын хэрэглэгчдийн дунд хийсэн анхны туршилтын борлуулалтаар гүн чийгшүүлэх, арьсны өнгө сэргээх болон тэжээл өгөх бүтээгдэхүүний эрэлт өндөр байгаа нь батлагдсан.",
      en: "Initial pilot sales in Mongolia highlighted strong consumer preference for rich, barrier-supporting serums and creams capable of withstanding harsh seasonal dryness.",
      kr: "몽골 내 초기 파일럿 판매 결과, 계절적 건조함을 케어하고 피부 장벽과 탄력을 가꾸어 주는 프리미엄 세럼 및 크림류에 대한 높은 소비자 선호도가 확인되었습니다."
    },
    col2Desc: {
      mn: "Тус ангилалд Солонгосын болон олон улсын дерма-космецевтик, ургамлын ханд суурьтай премиум бүтээгдэхүүнүүдийг шат дараатай нэвтрүүлэхээр төлөвлөж байна.",
      en: "This portfolio category focuses on introducing botanical and derma-cosmetic lines suited for retail customers and beauty studio home-care recommendations.",
      kr: "본 카테고리는 리테일 고객 및 에스테틱 홈케어 추천에 적합한 한국 및 글로벌 보태니컬·더마 코스메틱 브랜드 도입에 초점을 맞추고 있습니다."
    },
    meta: {
      origin: { mn: "Зорилтот эх үүсвэр: БНСУ / Олон улс", en: "Sourcing Focus: South Korea / International", kr: "소싱 포커스: 대한민국 / 글로벌" },
      status: { mn: "Статус: Туршилтын борлуулалт & Нийлүүлэгчийн хэлэлцээ", en: "Status: Pilot Market Validation & Sourcing", kr: "상태: 파일럿 시장 검증 및 공급사 협의 중" }
    },
    detailsAcc: {
      mn: "Өдөр тутмын болон эрчимт арчилгааны серум, эссэнц, тэжээлийн тос, нарны хамгаалалт болон цэвэрлэгээний бүтээгдэхүүнүүд багтана.",
      en: "Covers daily and intensive serums, essences, barrier creams, UV protection, and gentle cleansing formulations.",
      kr: "데일리 및 집중 케어 세럼, 에센스, 장벽 크림, 선케어 및 저자극 클렌징 라인을 포함합니다."
    },
    applicationAcc: {
      mn: "Жижиглэн худалдааны хэрэглэгчид, онлайн суваг болон гоо сайхны салоны гэрийн арчилгааны зөвлөмжид зориулагдсан.",
      en: "Positioned for direct consumer retail, curated social commerce, and beauty salon home-care consultations.",
      kr: "일반 소비자 리테일, 큐레이션 커머스 및 에스테틱 샵 홈케어 상담용으로 기획되었습니다."
    },
    sourcingAcc: {
      mn: "Энэхүү зураг нь дизайны жишээ бөгөөд бодит каталогт хамтрагч үйлдвэрлэгчийн албан ёсны бүтээгдэхүүний мэдээлэл орно.",
      en: "Visual shown for design layout purposes. Actual catalog entries are updated according to active supplier agreements.",
      kr: "표시된 이미지는 디자인 레이아웃 예시이며, 실제 카탈로그는 파트너사 및 공급 계약에 따라 업데이트됩니다."
    }
  },
  {
    id: "professional-aesthetic-boosters",
    category: "aesthetics",
    image: "assets/product-pdrn-ampoule.jpg",
    sampleBadge: {
      mn: "Загварын жишээ зураг",
      en: "Design Showcase Sample",
      kr: "디자인 예시 이미지"
    },
    categoryLabel: {
      mn: "Мэргэжлийн гоо сайхны бүтээгдэхүүн",
      en: "Professional Aesthetic Products",
      kr: "프로페셔널 에스테틱 솔루션"
    },
    title: {
      mn: "Мэргэжлийн PDRN ба Арьсны бүүстер ампул",
      en: "Professional PDRN & Dermal Infusion Ampoules",
      kr: "프로페셔널 PDRN & 스킨부스터 앰플"
    },
    shortDesc: {
      mn: "Гоо сайхны эмнэлэг, мэргэжлийн салон болон арьс арчилгааны студиүдэд зориулсан өндөр идэвхт ампул, скинбүүстер болон процедурын дараах нөхөн төлжүүлэх шийдлүүд.",
      en: "High-potency infusion ampoules, skin boosters, and post-procedure recovery solutions selected for aesthetic clinics and professional skincare studios.",
      kr: "에스테틱 클리닉 및 전문 스킨케어 스튜디오를 위해 선별된 고기능성 인퓨전 앰플, 스킨부스터 및 시술 후 리커버리 솔루션입니다."
    },
    col1Desc: {
      mn: "Улаанбаатар хотын гоо сайхны салон болон мэргэжилтнүүдийн дунд Солонгосын мэргэжлийн түвшний ампул, бүүстер бүтээгдэхүүний сонирхол тогтмол өсөж байна.",
      en: "Beauty professionals in Ulaanbaatar show growing interest in reliable Korean cabinet-size ampoules and professional skin vitality solutions.",
      kr: "울란바토르 내 에스테틱 전문가들 사이에서 신뢰할 수 있는 한국산 전문가용 앰플 및 스킨 바이탈리티 제품에 대한 관심이 꾸준히 증가하고 있습니다."
    },
    col2Desc: {
      mn: "Бид үйлдвэрлэгч нартай шууд харилцаа тогтоож, бүтээгдэхүүний зөв хэрэглээний зааварчилгаа болон зах зээлийн таниулах ажлыг хариуцлагатай хөгжүүлэхийг зорьж байна.",
      en: "We aim to partner directly with manufacturers to support proper product introduction, professional education, and B2B channel growth.",
      kr: "당사는 제조사와의 직접적인 협력을 통해 올바른 제품 소개와 전문가 대상 안내, B2B 채널 개발을 단계적으로 추진하고자 합니다."
    },
    meta: {
      origin: { mn: "Зорилтот эх үүсвэр: БНСУ-ын лабораториуд", en: "Sourcing Focus: Korean Aesthetic Labs", kr: "소싱 포커스: 한국 에스테틱 전문 연구·제조사" },
      status: { mn: "Статус: Зах зээлийн судалгаа & Түншлэлийн хэлэлцээ", en: "Status: Market Development & Partnership Open", kr: "상태: 시장 개발 및 파트너십 논의 중" }
    },
    detailsAcc: {
      mn: "Мэргэжлийн процедурын ампул, пептид болон PDRN суурьтай сэргээх уусмал, тайвшруулах маск болон клиникийн дараах арчилгаа.",
      en: "Includes professional cabinet ampoules, peptide and PDRN-based vitality complexes, calming masks, and post-care formulations.",
      kr: "전문가용 앰플, 펩타이드·PDRN 기반 바이탈리티 솔루션, 진정 마스크 및 포스트 케어 제형을 포괄합니다."
    },
    applicationAcc: {
      mn: "Гоо сайхны салон, арьс арчилгааны төв болон мэргэжлийн гоо засалчдад зориулсан B2B чиглэл.",
      en: "Focused on B2B distribution to licensed beauty salons, skincare studios, and aesthetic practitioners.",
      kr: "에스테틱 살롱, 전문 피부관리실 및 뷰티 테라피스트를 대상으로 하는 B2B 공급 영역입니다."
    },
    sourcingAcc: {
      mn: "Энэхүү зураг нь дизайны жишээ бөгөөд бодит нийлүүлэлтийн гэрээний дагуу бүтээгдэхүүний мэдээлэл шинэчлэгдэнэ.",
      en: "Sample imagery for portfolio structure illustration. Specific brands are presented upon official manufacturer authorization.",
      kr: "포트폴리오 구성을 보여주기 위한 예시 이미지이며, 구체적인 브랜드는 제조사와의 공식 협의에 따라 등재됩니다."
    }
  },
  {
    id: "botanical-calming-essences",
    category: "skincare",
    image: "assets/hero-serum-marble.jpg",
    sampleBadge: {
      mn: "Загварын жишээ зураг",
      en: "Design Showcase Sample",
      kr: "디자인 예시 이미지"
    },
    categoryLabel: {
      mn: "Арьс арчилгаа ба Гоо сайхан",
      en: "Skincare & Cosmetics",
      kr: "스킨케어 및 코스메틱"
    },
    title: {
      mn: "Байгалийн гаралтай тайвшруулах эссэнц ба серум",
      en: "Botanical Calming & Barrier Balance Essences",
      kr: "보태니컬 카밍 & 배리어 밸런스 에센스"
    },
    shortDesc: {
      mn: "Эмзэг болон хуурайшилттай арьсыг зөөлөн тайвшруулж, өдөр тутмын чийгшлийн тэнцвэрийг хадгалах цэвэр найрлагатай серум, эссэнцийн төрөл.",
      en: "Gentle, fast-absorbing botanical essences formulated to soothe sensitive skin and maintain daily moisture equilibrium.",
      kr: "민감하고 건조해진 피부를 부드럽게 진정시키고 일상적인 유수분 밸런스를 유지해 주는 마일드 보태니컬 에센스 라인입니다."
    },
    col1Desc: {
      mn: "Анхны туршилтын борлуулалтын явцад хэрэглэгчид зөөлөн бүтэцтэй, хурдан шингэдэг, өдөр тутам давхарлан түрхэхэд тохиромжтой серумүүдийг өндрөөр үнэлсэн.",
      en: "Early customer feedback from our pilot sales confirmed high satisfaction with lightweight, layerable calming serums suitable for sensitive skin.",
      kr: "초기 파일럿 판매 과정에서 소비자들은 민감성 피부에도 부담 없이 흡수되는 산뜻한 진정 세럼 제품군에 높은 만족도를 보였습니다."
    },
    col2Desc: {
      mn: "Бид хэрэглэгчдийн бодит сэтгэгдэл дээр үндэслэн байгалийн гаралтай, цэвэр найрлагатай K-Beauty брэндүүдтэй хамтын ажиллагаагаа өргөжүүлж байна.",
      en: "Building on practical consumer insights, we are expanding discussions with clean-formulation K-Beauty brands seeking Mongolian market entry.",
      kr: "당사는 실제 소비자 반응을 바탕으로 몽골 시장 진출을 희망하는 클린 뷰티 및 K-뷰티 브랜드와의 협력을 확대하고 있습니다."
    },
    meta: {
      origin: { mn: "Зорилтот эх үүсвэр: БНСУ (K-Beauty)", en: "Sourcing Focus: South Korea (K-Beauty)", kr: "소싱 포커스: 대한민국 (K-Beauty)" },
      status: { mn: "Статус: Туршилтын борлуулалтаар баталгаажсан эрэлт", en: "Status: Validated in Initial Pilot Sales", kr: "상태: 초기 파일럿 판매를 통해 수요 확인" }
    },
    detailsAcc: {
      mn: "Центелла, ургамлын ханд, ниацинамид болон керамид агуулсан тайвшруулах серум, тонер, чийгшүүлэгч гель.",
      en: "Includes calming serums, hydrating toners, and moisture gels featuring botanical extracts, niacinamide, and ceramides.",
      kr: "병풀·식물성 추출물, 나이아신아마이드, 세라마이드 등을 함유한 진정 세럼, 토너 및 수분 젤 라인입니다."
    },
    applicationAcc: {
      mn: "Бүх төрлийн арьс, ялангуяа улирлын шилжилтээр эмзэгшдэг Монгол хэрэглэгчдийн өдөр тутмын хэрэглээнд.",
      en: "Ideal for all skin types, particularly consumers experiencing seasonal sensitivity in Mongolia.",
      kr: "환절기 및 건조한 환경에 노출되는 몽골 소비자의 데일리 스킨케어 루틴에 적합합니다."
    },
    sourcingAcc: {
      mn: "Загварын жишээ зураг. Бодит барааны нэр төрөл нь тухайн үеийн татан авалт болон гэрээний дагуу танилцуулагдана.",
      en: "Illustrative editorial photography. Specific product SKUs are presented according to active sourcing activity.",
      kr: "이해를 돕기 위한 에디토리얼 예시 이미지이며, 실제 취급 품목은 소싱 및 공급 일정에 맞춰 안내됩니다."
    }
  },
  {
    id: "beauty-accessories-wellness",
    category: "accessories",
    image: "assets/ref-hyeja-pdp.jpg",
    sampleBadge: {
      mn: "Загварын жишээ зураг",
      en: "Design Showcase Sample",
      kr: "디자인 예시 이미지"
    },
    categoryLabel: {
      mn: "Гоо сайхны хэрэгсэл & Эрүүл мэндийн бүтээгдэхүүн",
      en: "Beauty Accessories & Selected Wellness",
      kr: "뷰티 디바이스·액세서리 및 웰니스"
    },
    title: {
      mn: "Арьс арчилгааны нэмэлт хэрэгсэл ба Сонгомол Вэлнэс",
      en: "Curated Beauty Accessories & Selected Wellness Products",
      kr: "프리미엄 뷰티 액세서리 & 셀렉티드 웰니스"
    },
    shortDesc: {
      mn: "Арьс арчилгааны үр дүнг дэмжих гоо сайхны хэрэгслүүд, аппликатор болон дотроосоо гоо сайхныг тэтгэх сонгомол вэлнэс бүтээгдэхүүний чиглэл.",
      en: "Complementary beauty tools, treatment applicators, and selected daily wellness products that support holistic skincare routines.",
      kr: "스킨케어 시너지를 높이는 뷰티 도구·어플리케이터와 일상 속 이너뷰티를 위한 셀렉티드 웰니스 카테고리입니다."
    },
    col1Desc: {
      mn: "Арьс арчилгааны үндсэн бүтээгдэхүүнээс гадна хэрэглэгчид гэрийн нөхцөлд болон салонд ашиглах чанартай гоо сайхны дагалдах хэрэгсэл, вэлнэс бүтээгдэхүүнийг сонирхож байна.",
      en: "Alongside core skincare, Mongolian consumers increasingly seek reliable beauty tools and wellness supplements that complement their daily regimen.",
      kr: "기초 스킨케어뿐만 아니라 홈케어 및 샵에서 활용 가능한 고품질 뷰티 소도구와 웰니스 제품에 대한 관심도 함께 높아지고 있습니다."
    },
    col2Desc: {
      mn: "Бид зах зээлийн эрэлтэд нийцүүлэн чанарын шаардлага хангасан дагалдах хэрэгсэл болон эрүүл мэндийн сонгомол бүтээгдэхүүний нийлүүлэгчидтэй хамтран ажиллахад нээлттэй.",
      en: "We evaluate complementary beauty accessories and wellness lines to build a well-rounded portfolio for our local sales channels.",
      kr: "당사는 현지 유통 채널의 포트폴리오 다각화를 위해 경쟁력 있는 뷰티 액세서리 및 웰니스 제조사와의 협력 가능성을 열어두고 있습니다."
    },
    meta: {
      origin: { mn: "Ангилал: Гоо сайхны хэрэгсэл / Вэлнэс", en: "Category: Beauty Accessories & Wellness", kr: "카테고리: 뷰티 액세서리 & 웰니스" },
      status: { mn: "Статус: Багц хөгжүүлэлт & Нийлүүлэлтийн судалгаа", en: "Status: Portfolio Expansion & Sourcing", kr: "상태: 포트폴리오 확장 및 소싱 검토" }
    },
    detailsAcc: {
      mn: "Нүүрний массажны хэрэгсэл, мэргэжлийн багс, аппликатор, хуудас маскны хэрэгсэл болон сонгомол вэлнэс бүтээгдэхүүн.",
      en: "Facial massage tools, professional applicators, sheet mask accessories, and selected beauty-wellness items.",
      kr: "페이셜 마사지 툴, 전문가용 어플리케이터, 마스크 케어 소품 및 셀렉티드 이너뷰티·웰니스 품목."
    },
    applicationAcc: {
      mn: "Арьс арчилгааны багц худалдаа болон бэлгийн багц, салоны нэмэлт бүтээгдэхүүний сувагт тохиромжтой.",
      en: "Suited for bundled skincare sets, retail cross-merchandising, and salon add-on programs.",
      kr: "스킨케어 세트 구성, 리테일 크로스 머천다이징 및 살롱 부가 판매용으로 적합합니다."
    },
    sourcingAcc: {
      mn: "Тухайн ангилалд шинэ бүтээгдэхүүн нийлүүлэх хүсэлтэй олон улсын үйлдвэрлэгчдийн саналыг хүлээн авч байна.",
      en: "Open to proposals from international manufacturers offering differentiated beauty tools and wellness products.",
      kr: "차별화된 뷰티 툴 및 웰니스 제품을 보유한 글로벌 제조사의 파트너십 제안을 환영합니다."
    }
  }
];

/**
 * 3. TRILINGUAL UI DICTIONARY (MN / EN / KR)
 * Strictly aligned with the approved corporate content and truthfulness rule.
 */
const UI_TRANSLATIONS = {
  mn: {
    // Navigation
    navHome: "Нүүр",
    navAbout: "Бидний тухай",
    navProducts: "Бүтээгдэхүүн",
    navExperience: "Бидний туршлага",
    navDistribution: "Импорт, түгээлт",
    navPartnership: "Хамтын ажиллагаа",
    navContact: "Холбоо барих",

    // Hero
    heroKicker: "GLOBAL SOURCING · LOCAL MARKET EXPERTISE",
    heroAsideNote: "Олон улсын чанартай гоо сайхны бүтээгдэхүүнийг Монголын зах зээлд холбох гүүр.",
    heroTitle: "Connecting Global <em>Beauty Innovation</em> with Mongolia",
    heroCol1: "Бид олон улсын чанартай гоо сайхан, арьс арчилгааны бүтээгдэхүүнийг Монголын зах зээлд нэвтрүүлэх, туршилтын борлуулалтаар эрэлтийг үнэлэх, урт хугацааны түгээлтийн хамтын ажиллагааг хөгжүүлэхэд төвлөрөн ажиллаж байна.",
    heroCol2: "We introduce carefully selected international beauty and aesthetic products to the Mongolian market, building on practical market experience and an ambition for long-term distribution partnerships.",
    heroBtnPortfolio: "Бүтээгдэхүүний багц",
    heroBtnPartner: "Хамтран ажиллах",
    heroBottomLeft: "Улаанбаатар, Монгол Улс",
    heroBottomRight: "WE MAKE BEAUTY PERFORM",
    heroImgTag: "ЗАГВАРЫН ЖИШЭЭ ЗУРАГ · EDITORIAL SHOWCASE",
    heroImgTitle: "Олон улсын арьс арчилгаа ба гоо сайхны шийдлүүд",

    // About Us
    aboutIndex: "01 / БИДНИЙ ТУХАЙ",
    aboutEyebrow: "КОМПАНИЙН ТАНИЛЦУУЛГА",
    aboutTitle: "Building Connections. Creating Opportunities.",
    aboutLead: "«Хүндэт Нобилис» ХХК (Khundet Nobilis LLC) нь олон улсын гоо сайхан, арьс арчилгааны бүтээгдэхүүнийг судалж сонгох, Монголын зах зээлд танилцуулах, хамтын ажиллагааны боломжийг хөгжүүлэх чиглэлээр үйл ажиллагаа явуулдаг компани юм.",
    aboutCell1Title: "Олон улсын бүтээгдэхүүн сонголт",
    aboutCell1Desc: "Бид Монгол орны эрс тэс уур амьсгал болон хэрэглэгчдийн арьсны онцлогт тохирсон Солонгосын болон олон улсын чанартай бүтээгдэхүүнийг судалж сонгодог.",
    aboutCell2Title: "Зах зээлийн бодит туршлага",
    aboutCell2Desc: "Манай анхны туршилтын борлуулалт нь хэрэглэгчдийн сонирхол, бүтээгдэхүүний хүлээн авалт болон Монголын зах зээл дэх бодит боломжийг ойлгох чухал суурь болсон.",
    aboutCell3Title: "Урт хугацааны түншлэл",
    aboutCell3Desc: "Бид үйлдвэрлэгчидтэй ил тод, итгэлцэлд суурилсан урт хугацааны харилцаа тогтоож, тогтвортой түгээлтийн сувгийг шат дараатай хөгжүүлэхийг зорьдог.",

    // Portfolio
    portIndex: "02 / БҮТЭЭГДЭХҮҮНИЙ БАГЦ",
    portEyebrow: "OUR PRODUCT PORTFOLIO",
    portTitle: "Selected Products for a Growing Market",
    portLead: "Манай бүтээгдэхүүний багц нь Монголын хэрэглэгчид болон гоо сайхны салбарын мэргэжилтнүүдийн эрэлт хэрэгцээнд нийцсэн 4 үндсэн чиглэлд төвлөрдөг.",
    disclaimerBadge: "ТАЙЛБАР",
    disclaimerText: "Эдгээр нь зөвхөн дизайны жишээ зураг. Тодорхой брэнд болон бүтээгдэхүүнүүд нь бодит татан авалт, борлуулалтын үйл ажиллагааны дагуу танилцуулагдана.",
    filterAll: "Бүх ангилал",
    filterSkincare: "Арьс арчилгаа & Гоо сайхан",
    filterAesthetics: "Мэргэжлийн гоо сайхан",
    filterAccessories: "Гоо сайхны хэрэгсэл & Вэлнэс",
    cardExploreBtn: "Дэлгэрэнгүй үзэх →",

    // Experience
    expIndex: "03 / БИДНИЙ ТУРШЛАГА",
    expEyebrow: "OUR MARKET EXPERIENCE",
    expTitle: "From Pilot Sales to Market Expansion",
    expLead: "Бидний замнал БНСУ-ын сонгомол бүтээгдэхүүнийг Монголын зах зээлд туршилтаар борлуулах ажлаас эхэлсэн. Энэхүү эхний үе шат нь хэрэглэгчдийн таашаал, эрэлтийг бодитоор таних боломжийг олгосон.",
    expCardCaption: "Анхны туршилтын борлуулалтаас олж авсан зах зээлийн ойлголт дээр тулгуурлан олон улсын нийлүүлэгчидтэй харилцаагаа өргөжүүлж байна.",
    stage1Tag: "ХЭРЭГЖСЭН",
    stage1Title: "Анхны туршилтын борлуулалт (Pilot Sales)",
    stage1Desc: "Солонгосын сонгомол бүтээгдэхүүнийг Монголын зах зээлд туршилтаар борлуулж, хэрэглэгчдийн анхны эерэг сэтгэгдэл болон бодит эрэлтийг баталгаажуулсан.",
    stage2Tag: "ОДООГИЙН ШАТ",
    stage2Title: "Нийлүүлэгчийн харилцаа ба Бүтээгдэхүүн хөгжүүлэлт",
    stage2Desc: "Туршилтын борлуулалтын туршлага дээрээ үндэслэн БНСУ болон олон улсын үйлдвэрлэгчидтэй шууд харилцаа тогтоох, бүтээгдэхүүний нэр төрлийг нэмэгдүүлэхээр ажиллаж байна.",
    stage3Tag: "ТӨЛӨВЛӨГӨӨТ",
    stage3Title: "Албан ёсны түгээлт ба Зах зээлийн тэлэлт",
    stage3Desc: "Олон улсын брэндүүдтэй албан ёсны дистрибьюторын хамтын ажиллагаа эхлүүлж, Улаанбаатар дахь борлуулалтын сувгуудыг тогтвортой өргөжүүлэх урт хугацааны зорилт.",

    // Distribution
    distIndex: "04 / ИМПОРТ БА ТҮГЭЭЛТ",
    distEyebrow: "DISTRIBUTION DEVELOPMENT",
    distTitle: "Connecting Products to the Right Market",
    distLead: "Бид олон улсын бүтээгдэхүүнийг Монголын хэрэглэгчдэд зөв, хариуцлагатай хүргэхийн тулд дараах 6 чиглэлд хөгжүүлэлтийн тэргүүлэх ач холбогдол өгөн ажиллаж байна.",
    prio1Title: "Олон улсын бүтээгдэхүүний судалгаа, татан авалт",
    prio1Desc: "International product sourcing — Зах зээлийн эрэлт болон чанарын шаардлагад нийцсэн гадаад нийлүүлэгчдийг судлах, сонгох.",
    prio2Title: "Орон нутгийн зах зээлийн судалгаа",
    prio2Desc: "Local market research — Хэрэглэгчдийн худалдан авах зан төлөв, үнийн мэдрэмж болон улирлын эрэлтийг тандан судлах.",
    prio3Title: "Бүтээгдэхүүн таниулах үйл ажиллагаа",
    prio3Desc: "Product introduction — Шинэ бүтээгдэхүүний онцлог, зөв хэрэглээг Монгол хэрэглэгчид болон мэргэжилтнүүдэд ойлгомжтой танилцуулах.",
    prio4Title: "Борлуулалтын суваг хөгжүүлэлт",
    prio4Desc: "Sales channel development — Онлайн худалдаа, жижиглэнгийн цэг болон гоо сайхны салоны харилцааг шат дараатай хөгжүүлэх.",
    prio5Title: "Хэрэглэгчийн харилцааны менежмент",
    prio5Desc: "Customer relationship management — Худалдан авагчдын сэтгэгдлийг сонсох, эргэх холбоог сайжруулж байнгын хэрэглэгчдийг бий болгох.",
    prio6Title: "Урт хугацааны түгээлтийн төлөвлөлт",
    prio6Desc: "Long-term distribution planning — Үйлдвэрлэгч түншүүдтэй хамтран тогтвортой нийлүүлэлт, зах зээлийн өсөлтийг урт хугацаанд төлөвлөх.",

    // Partnership
    partIndex: "05 / ОЛОН УЛСЫН ХАМТЫН АЖИЛЛАГАА",
    partEyebrow: "INTERNATIONAL PARTNERSHIP",
    partTitle: "Let's Grow Together in Mongolia",
    partLead: "Бид Монголын гоо сайхан, арьс арчилгааны зах зээлд шинэ боломж эрэлхийлж буй БНСУ болон олон улсын үйлдвэрлэгчидтэй хамтын ажиллагааны яриа өрнүүлэхэд ямагт нээлттэй. Бидний зарчим бол ил тод харилцаа, хариуцлагатай зах зээл хөгжүүлэлт, тогтвортой түншлэл юм.",
    partBtnContact: "Манай багтай холбогдох",
    partBtnExplore: "Түншлэлийн санал илгээх",
    deckEyebrow: "EXECUTIVE DOCUMENT (MN / EN / KR)",
    deckTitle: "Company Profile & Market Experience PDF",
    deckDesc: "Гадаадын үйлдвэрлэгч болон түншүүдэд зориулсан компанийн танилцуулга, туршилтын борлуулалтын тойм болон зах зээл хөгжүүлэлтийн чиглэлийг багтаасан хэвлэх/PDF хадгалах хуудас.",
    deckBtnOpen: "Танилцуулга нээх / PDF татах →",

    // Contact
    contactIndex: "06 / ХОЛБОО БАРИХ",
    contactEyebrow: "CORPORATE CONTACT & INQUIRY",
    contactTitle: "Start a Conversation With Our Team",
    contactLead: "Хамтын ажиллагааны санал, бүтээгдэхүүний мэдээлэл болон дистрибьюцийн талаар бидэнтэй шууд холбогдоно уу.",
    labelCompany: "КОМПАНИЙН НЭР",
    labelLocation: "БАЙРШИЛ",
    labelEmail: "АЛБАН ЁСНЫ И-МЭЙЛ",
    labelPhone: "УТАСНЫ ДУГААР",
    labelRep: "ХАРИУЦСАН ЗАХИРАЛ",
    tabPartner: "Үйлдвэрлэгч / Түншлэлийн санал",
    tabProduct: "Бүтээгдэхүүний лавлагаа",
    formNameLabel: "Таны нэр ба Албан тушаал *",
    formCompanyLabel: "Компани / Брэндийн нэр *",
    formEmailLabel: "Албан ёсны И-мэйл *",
    formPhoneLabel: "Утас / WhatsApp / KakaoTalk *",
    formCountryLabel: "Улс / Бүс нутаг *",
    formCategoryLabel: "Бүтээгдэхүүний ангилал *",
    formMessageLabel: "Хамтын ажиллагааны санал эсвэл зурвас *",
    consentText: "Би хувийн болон компанийн мэдээллээ бизнесийн харилцааны зорилгоор илгээхийг зөвшөөрч байна.",
    formSubmitBtn: "Албан ёсны хүсэлт илгээх",

    // Modal
    modalClose: "ХААХ [ESC]",
    accDetails: "БҮТЭЭГДЭХҮҮНИЙ ЧИГЛЭЛ",
    accApplication: "ЗОРИЛТОТ ХЭРЭГЛЭЭ",
    accSourcing: "КАТАЛОГИЙН ТАЙЛБАР",
    modalInquireBtn: "Энэ ангиллаар хамтран ажиллах / Лавлах",

    // Footer
    footerDesc: "Олон улсын чанартай гоо сайхан, арьс арчилгааны бүтээгдэхүүнийг Монголын зах зээлд нэвтрүүлэх, урт хугацааны түншлэлийг хөгжүүлэгч компани.",
    footerNavTitle: "ҮНДСЭН ЦЭС",
    footerCatTitle: "БҮТЭЭГДЭХҮҮНИЙ ЧИГЛЭЛ",
    footerContactTitle: "АЛБАН ЁСНЫ ХАЯГ",
    footerRights: "© 2026 KHUNDET NOBILIS LLC (Хүндэт Нобилис ХХК). Бүх эрх хуулиар хамгаалагдсан."
  },

  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navExperience: "Our Experience",
    navDistribution: "Distribution",
    navPartnership: "Partnership",
    navContact: "Contact",

    // Hero
    heroKicker: "GLOBAL SOURCING · LOCAL MARKET EXPERTISE",
    heroAsideNote: "Introducing selected international beauty and aesthetic products to the Mongolian market.",
    heroTitle: "Connecting Global <em>Beauty Innovation</em> with Mongolia",
    heroCol1: "We introduce carefully selected international beauty and aesthetic products to the Mongolian market, building on practical market experience and an ambition for long-term distribution partnerships.",
    heroCol2: "Бид олон улсын чанартай гоо сайхан, арьс арчилгааны бүтээгдэхүүнийг Монголын зах зээлд нэвтрүүлэх, туршилтын борлуулалтаар эрэлтийг үнэлэх, урт хугацааны түгээлтийн хамтын ажиллагааг хөгжүүлэхэд төвлөрөн ажиллаж байна.",
    heroBtnPortfolio: "Explore Our Portfolio",
    heroBtnPartner: "Partner With Us",
    heroBottomLeft: "Ulaanbaatar, Mongolia",
    heroBottomRight: "WE MAKE BEAUTY PERFORM",
    heroImgTag: "EDITORIAL SHOWCASE · DESIGN SAMPLE",
    heroImgTitle: "Curated Skincare & Aesthetic Solutions",

    // About Us
    aboutIndex: "01 / ABOUT US",
    aboutEyebrow: "COMPANY INTRODUCTION",
    aboutTitle: "Building Connections. Creating Opportunities.",
    aboutLead: "Khundet Nobilis LLC is a Mongolia-based company focused on sourcing, introducing, and developing opportunities for international beauty and aesthetic products.",
    aboutCell1Title: "Curated International Sourcing",
    aboutCell1Desc: "We evaluate and select international skincare and aesthetic formulations suited to Mongolia's continental climate and evolving consumer preferences.",
    aboutCell2Title: "Practical Market Insight",
    aboutCell2Desc: "Our initial pilot sales provided valuable insight into customer interests, product acceptance, and real commercial opportunities within the Mongolian market.",
    aboutCell3Title: "Sustainable Partnerships",
    aboutCell3Desc: "We aim to build lasting, transparent relationships with international manufacturers and develop sustainable local distribution channels step by step.",

    // Portfolio
    portIndex: "02 / OUR PORTFOLIO",
    portEyebrow: "PRODUCT CATEGORY SHOWCASE",
    portTitle: "Selected Products for a Growing Market",
    portLead: "Our portfolio focuses on products suited to the needs of Mongolian consumers and beauty professionals across four core categories.",
    disclaimerBadge: "PORTFOLIO NOTE",
    disclaimerText: "These visuals are design showcase samples. Specific products and brands are presented according to actual sourcing and sales activity.",
    filterAll: "All Categories",
    filterSkincare: "Skincare & Cosmetics",
    filterAesthetics: "Professional Aesthetic Products",
    filterAccessories: "Beauty Accessories & Wellness",
    cardExploreBtn: "View Category Details →",

    // Experience
    expIndex: "03 / OUR EXPERIENCE",
    expEyebrow: "OUR MARKET EXPERIENCE",
    expTitle: "From Market Testing to Growth",
    expLead: "Our journey began with pilot sales of selected Korean products in Mongolia. This early stage helped us understand customer preferences and identify opportunities for broader market development.",
    expCardCaption: "Today, we are building on our initial pilot sales experience to establish stronger international supplier relationships and expand our market presence.",
    stage1Tag: "COMPLETED",
    stage1Title: "Initial Pilot Sales in Mongolia",
    stage1Desc: "Conducted initial pilot sales of selected Korean beauty products in Ulaanbaatar, receiving encouraging early market response and direct consumer feedback.",
    stage2Tag: "ACTIVE STAGE",
    stage2Title: "Supplier Discussions & Portfolio Expansion",
    stage2Desc: "Building on practical pilot insights to engage directly with Korean and international manufacturers for broader product introduction.",
    stage3Tag: "DEVELOPMENT GOAL",
    stage3Title: "Official Distributorship & Channel Growth",
    stage3Desc: "Pursuing official distribution agreements and developing structured retail, online, and professional salon channels across Mongolia.",

    // Distribution
    distIndex: "04 / DISTRIBUTION",
    distEyebrow: "DISTRIBUTION DEVELOPMENT",
    distTitle: "Connecting Products to the Right Market",
    distLead: "Our market and distribution development priorities focus on six practical pillars to responsibly introduce international brands to Mongolia:",
    prio1Title: "International Product Sourcing",
    prio1Desc: "Identifying and evaluating reputable Korean and international beauty formulations that address local skincare needs.",
    prio2Title: "Local Market Research",
    prio2Desc: "Analyzing consumer preferences, seasonal skin concerns, and pricing dynamics within Ulaanbaatar's beauty sector.",
    prio3Title: "Product Introduction",
    prio3Desc: "Presenting product benefits and proper usage clearly to Mongolian consumers and beauty practitioners.",
    prio4Title: "Sales Channel Development",
    prio4Desc: "Expanding step-by-step across curated digital commerce, retail touchpoints, and professional beauty salons.",
    prio5Title: "Customer Relationship Management",
    prio5Desc: "Maintaining attentive customer communication and gathering real usage feedback to build brand trust.",
    prio6Title: "Long-Term Distribution Planning",
    prio6Desc: "Working closely with manufacturer partners to plan sustainable supply, positioning, and long-term market growth.",

    // Partnership
    partIndex: "05 / PARTNERSHIP",
    partEyebrow: "INTERNATIONAL PARTNERSHIP",
    partTitle: "Let's Grow Together in Mongolia",
    partLead: "We welcome discussions with international manufacturers seeking opportunities in the Mongolian beauty and aesthetic market. Our focus is on transparent communication, responsible market development, and sustainable partnerships.",
    partBtnContact: "Contact Our Team",
    partBtnExplore: "Explore Partnership Opportunities",
    deckEyebrow: "EXECUTIVE DOCUMENT (MN / EN / KR)",
    deckTitle: "Company Profile + Market Experience PDF",
    deckDesc: "View or download our trilingual corporate overview, initial pilot sales summary, and distribution development roadmap prepared for international brand owners.",
    deckBtnOpen: "Open Company Profile / Save PDF →",

    // Contact
    contactIndex: "06 / CONTACT",
    contactEyebrow: "CORPORATE CONTACT & INQUIRY",
    contactTitle: "Connect With Khundet Nobilis LLC",
    contactLead: "Whether you are an international manufacturer exploring Mongolia or a local partner inquiring about our portfolio, our team will respond promptly.",
    labelCompany: "COMPANY NAME",
    labelLocation: "LOCATION",
    labelEmail: "OFFICIAL EMAIL",
    labelPhone: "TELEPHONE",
    labelRep: "CONTACT REPRESENTATIVE",
    tabPartner: "Partnership Inquiry (Manufacturers)",
    tabProduct: "Product Inquiry (Local Buyers)",
    formNameLabel: "Full Name & Title *",
    formCompanyLabel: "Company / Brand Name *",
    formEmailLabel: "Business Email *",
    formPhoneLabel: "Phone / WhatsApp / KakaoTalk *",
    formCountryLabel: "Country / Region *",
    formCategoryLabel: "Product Category of Interest *",
    formMessageLabel: "Partnership Proposal or Inquiry Details *",
    consentText: "I agree to submit these contact details for business communication with Khundet Nobilis LLC.",
    formSubmitBtn: "Send Official Inquiry",

    // Modal
    modalClose: "CLOSE [ESC]",
    accDetails: "CATEGORY SCOPE",
    accApplication: "TARGET CHANNELS",
    accSourcing: "PORTFOLIO DISCLOSURE",
    modalInquireBtn: "Inquire About This Category",

    // Footer
    footerDesc: "Mongolia-based beauty and aesthetic product sourcing and market development company building long-term international partnerships.",
    footerNavTitle: "NAVIGATION",
    footerCatTitle: "PORTFOLIO FOCUS",
    footerContactTitle: "CORPORATE OFFICE",
    footerRights: "© 2026 KHUNDET NOBILIS LLC. All Rights Reserved."
  },

  kr: {
    // Navigation
    navHome: "홈",
    navAbout: "회사 소개",
    navProducts: "제품 포트폴리오",
    navExperience: "시장 경험",
    navDistribution: "유통 및 시장 개발",
    navPartnership: "글로벌 파트너십",
    navContact: "문의하기",

    // Hero
    heroKicker: "GLOBAL SOURCING · LOCAL MARKET EXPERTISE",
    heroAsideNote: "엄선된 글로벌 뷰티 및 에스테틱 솔루션을 몽골 시장에 연결합니다.",
    heroTitle: "Connecting Global <em>Beauty Innovation</em> with Mongolia",
    heroCol1: "훈데트 노빌리스(Khundet Nobilis LLC)는 실질적인 몽골 초기 시장 테스트 경험을 바탕으로, 경쟁력 있는 한국 및 글로벌 뷰티·에스테틱 제품을 발굴하여 소개하고 장기적인 유통 파트너십을 구축해 나가고 있습니다.",
    heroCol2: "We introduce carefully selected international beauty and aesthetic products to the Mongolian market, building on practical market experience and an ambition for long-term distribution partnerships.",
    heroBtnPortfolio: "포트폴리오 보기",
    heroBtnPartner: "파트너십 문의",
    heroBottomLeft: "몽골 울란바토르 (Ulaanbaatar, Mongolia)",
    heroBottomRight: "WE MAKE BEAUTY PERFORM",
    heroImgTag: "디자인 예시 이미지 · EDITORIAL SHOWCASE",
    heroImgTitle: "프리미엄 스킨케어 및 에스테틱 포트폴리오",

    // About Us
    aboutIndex: "01 / 회사 소개 (ABOUT US)",
    aboutEyebrow: "COMPANY INTRODUCTION",
    aboutTitle: "Building Connections. Creating Opportunities.",
    aboutLead: "Khundet Nobilis LLC(훈데트 노빌리스)는 몽골 울란바토르에 기반을 두고 해외 우수 뷰티 및 에스테틱 제품의 소싱, 시장 도입 및 유통 기회 개발에 집중하는 기업입니다.",
    aboutCell1Title: "현지 맞춤형 글로벌 소싱",
    aboutCell1Desc: "몽골의 건조한 대륙성 기후와 현지 소비자의 피부 특성에 적합한 한국 및 글로벌 스킨케어·에스테틱 제품을 면밀히 검토하고 선별합니다.",
    aboutCell2Title: "초기 파일럿 판매를 통한 검증",
    aboutCell2Desc: "당사가 진행한 한국 제품의 초기 파일럿 판매(Pilot Sales)는 몽골 소비자의 관심도와 제품 수용성, 그리고 실제 시장 기회를 파악하는 중요한 밑거름이 되었습니다.",
    aboutCell3Title: "지속 가능한 파트너십 지향",
    aboutCell3Desc: "제조사와의 투명한 소통과 신뢰를 바탕으로 장기적인 협력 관계를 구축하고, 현지 유통 채널을 단계적으로 발전시키는 것을 목표로 합니다.",

    // Portfolio
    portIndex: "02 / 제품 포트폴리오",
    portEyebrow: "OUR PRODUCT PORTFOLIO",
    portTitle: "Selected Products for a Growing Market",
    portLead: "당사의 포트폴리오는 몽골 일반 소비자와 뷰티 전문가의 니즈에 부합하는 4대 핵심 카테고리로 구성됩니다.",
    disclaimerBadge: "안내사항",
    disclaimerText: "아래 이미지는 웹 디자인을 위한 예시 이미지입니다. 구체적인 제품과 브랜드는 실제 소싱 및 판매 활동에 따라 등재 및 업데이트됩니다.",
    filterAll: "전체 카테고리",
    filterSkincare: "스킨케어 & 코스메틱",
    filterAesthetics: "프로페셔널 에스테틱",
    filterAccessories: "뷰티 액세서리 & 웰니스",
    cardExploreBtn: "카테고리 상세 보기 →",

    // Experience
    expIndex: "03 / 시장 경험 (OUR EXPERIENCE)",
    expEyebrow: "From Market Testing to Growth",
    expTitle: "파일럿 판매에서 시장 확장으로",
    expLead: "당사의 여정은 엄선된 한국 뷰티 제품을 몽골 시장에 시범 판매(Pilot Sales)하는 것에서 시작되었습니다. 이 초기 단계를 통해 현지 고객의 선호도를 파악하고 시장 확대 가능성을 확인했습니다.",
    expCardCaption: "현재 당사는 초기 시장 경험을 발판 삼아 한국 및 해외 우수 제조사와의 파트너십을 강화하고 시장 입지를 넓혀가고 있습니다.",
    stage1Tag: "완료 (COMPLETED)",
    stage1Title: "한국 제품 초기 파일럿 판매 수행",
    stage1Desc: "울란바토르 내 엄선된 한국 뷰티 제품의 시범 판매를 통해 초기 소비자의 긍정적인 반응과 실수요를 확인하였습니다.",
    stage2Tag: "진행 중 (ACTIVE)",
    stage2Title: "제조사 파트너십 발굴 및 라인업 확대",
    stage2Desc: "파일럿 판매에서 얻은 인사이트를 바탕으로 한국 유망 브랜드 및 제조사와 직접 소통하며 도입 품목을 확대하고 있습니다.",
    stage3Tag: "발전 목표 (GOAL)",
    stage3Title: "공식 총판/유통 협력 및 채널 고도화",
    stage3Desc: "해외 제조사와의 공식 유통 파트너십을 체결하고 몽골 내 온·오프라인 및 에스테틱 채널을 체계적으로 확장해 나가는 장기 로드맵입니다.",

    // Distribution
    distIndex: "04 / 유통 및 시장 개발",
    distEyebrow: "DISTRIBUTION DEVELOPMENT",
    distTitle: "Connecting Products to the Right Market",
    distLead: "당사는 글로벌 브랜드가 몽골 시장에 안정적으로 안착할 수 있도록 다음 6가지 핵심 과제를 중심으로 유통 역량을 개발하고 있습니다.",
    prio1Title: "해외 우수 제품 소싱",
    prio1Desc: "International product sourcing — 몽골 시장 수요와 품질 기준에 부합하는 한국 및 글로벌 뷰티 제품 발굴.",
    prio2Title: "현지 시장 및 소비자 조사",
    prio2Desc: "Local market research — 울란바토르 소비자의 구매 트렌드, 계절별 피부 고민 및 선호 제형 분석.",
    prio3Title: "제품 소개 및 시장 초기 안착",
    prio3Desc: "Product introduction — 현지 소비자 및 뷰티 전문가에게 제품의 강점과 올바른 사용법을 효과적으로 전달.",
    prio4Title: "온·오프라인 판매 채널 개발",
    prio4Desc: "Sales channel development — 온라인 커머스, 리테일 접점 및 에스테틱 살롱 네트워크의 단계적 확장.",
    prio5Title: "고객 관계 및 피드백 관리",
    prio5Desc: "Customer relationship management — 구매 고객의 실사용 피드백을 수렴하고 브랜드 신뢰도와 재구매율 제고.",
    prio6Title: "장기 유통 계획 수립",
    prio6Desc: "Long-term distribution planning — 제조사 파트너와의 긴밀한 협의를 통한 지속 가능한 공급 및 시장 성장 설계.",

    // Partnership
    partIndex: "05 / 글로벌 파트너십",
    partEyebrow: "INTERNATIONAL PARTNERSHIP",
    partTitle: "Let's Grow Together in Mongolia",
    partLead: "몽골 뷰티 및 에스테틱 시장에서 새로운 기회를 모색하는 한국 및 글로벌 제조사와의 논의를 환영합니다. 당사는 투명한 커뮤니케이션, 책임감 있는 시장 개발, 그리고 지속 가능한 파트너십을 최우선으로 합니다.",
    partBtnContact: "담당 팀 문의하기",
    partBtnExplore: "파트너십 제안하기",
    deckEyebrow: "EXECUTIVE DOCUMENT (MN / EN / KR)",
    deckTitle: "회사 소개서 및 시장 경험 브리프 (PDF)",
    deckDesc: "한국 및 해외 제조사를 위해 준비된 회사 개요, 초기 파일럿 판매 경험, 그리고 몽골 시장 개발 방향성을 담은 다국어 브리프 문서입니다.",
    deckBtnOpen: "회사 소개서 열기 / PDF 저장 →",

    // Contact
    contactIndex: "06 / 문의하기 (CONTACT)",
    contactEyebrow: "CORPORATE CONTACT & INQUIRY",
    contactTitle: "Start a Conversation With Our Team",
    contactLead: "한국 제조사 수출·유통 파트너십 제안 또는 제품 관련 문의를 남겨주시면 담당 이사가 신속히 회신드립니다.",
    labelCompany: "법인명",
    labelLocation: "소재지",
    labelEmail: "공식 이메일",
    labelPhone: "연락처",
    labelRep: "담당자",
    tabPartner: "제조사 파트너십 제안 (Manufacturers)",
    tabProduct: "제품 및 구매 문의 (Product Inquiry)",
    formNameLabel: "성함 및 직함 *",
    formCompanyLabel: "회사명 / 브랜드명 *",
    formEmailLabel: "비즈니스 이메일 *",
    formPhoneLabel: "연락처 / WhatsApp / 카카오톡 ID *",
    formCountryLabel: "국가 / 지역 *",
    formCategoryLabel: "관심 제품 카테고리 *",
    formMessageLabel: "파트너십 제안 내용 또는 문의사항 *",
    consentText: "비즈니스 상담 및 회신을 위해 상기 정보를 제출하는 것에 동의합니다.",
    formSubmitBtn: "공식 문의 발송하기",

    // Modal
    modalClose: "닫기 [ESC]",
    accDetails: "카테고리 상세 범위",
    accApplication: "주요 타겟 채널",
    accSourcing: "포트폴리오 안내",
    modalInquireBtn: "이 카테고리 파트너십/제품 문의하기",

    // Footer
    footerDesc: "몽골 시장에 엄선된 글로벌 뷰티 및 에스테틱 제품을 소개하고 장기적인 유통 파트너십을 구축하는 기업입니다.",
    footerNavTitle: "주요 메뉴",
    footerCatTitle: "핵심 카테고리",
    footerContactTitle: "기업 연락처",
    footerRights: "© 2026 KHUNDET NOBILIS LLC. All Rights Reserved."
  }
};

// Application State
let currentLang = "mn";
let activeCategory = "all";
let activeInquiryType = "partnership";
let activeProductId = null;

/**
 * Initialize Website
 */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelector();
  initMobileNavigation();
  initCategoryFilters();
  initWorkflowTabs();
  initModalEvents();
  initInquiryForm();
  initScrollReveal();

  // Render initial state (default MN, or check URL ?lang=en / ?lang=kr)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedLang = urlParams.get("lang");
  if (requestedLang && ["mn", "en", "kr"].includes(requestedLang.toLowerCase())) {
    currentLang = requestedLang.toLowerCase();
  }
  applyLanguage(currentLang);
});

/**
 * Language Switcher Logic
 */
function initLanguageSelector() {
  const buttons = document.querySelectorAll(".lang-pill");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && UI_TRANSLATIONS[lang]) {
        currentLang = lang;
        applyLanguage(lang);
      }
    });
  });
}

function applyLanguage(lang) {
  const dict = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
  document.documentElement.lang = lang === "kr" ? "ko" : lang;

  // Update active pill
  document.querySelectorAll(".lang-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Update all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (key === "heroTitle") {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update dynamic company info fields
  const repEl = document.getElementById("contactRepValue");
  if (repEl) repEl.textContent = COMPANY_CONFIG.representative[lang];

  const locEl = document.getElementById("contactLocValue");
  if (locEl) locEl.textContent = COMPANY_CONFIG.location[lang];

  // Re-render portfolio cards
  renderPortfolioGrid();

  // If modal is open, refresh modal content
  if (activeProductId) {
    populateModalContent(activeProductId);
  }
}

/**
 * Render Portfolio Showcase Cards
 */
function renderPortfolioGrid() {
  const grid = document.getElementById("editorialProductGrid");
  if (!grid) return;

  const dict = UI_TRANSLATIONS[currentLang];
  const filtered =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  grid.innerHTML = filtered
    .map(
      (item) => `
      <article class="editorial-product-card" onclick="openProductDetail('${item.id}')">
        <div class="ep-image-col">
          <img src="${item.image}" alt="${item.title[currentLang]}" loading="lazy" />
          <span class="ep-sample-tag">${item.sampleBadge[currentLang]}</span>
        </div>
        <div class="ep-info-col">
          <div>
            <div class="ep-cat-name">${item.categoryLabel[currentLang]}</div>
            <h3 class="ep-title">${item.title[currentLang]}</h3>
            <p class="ep-desc">${item.shortDesc[currentLang]}</p>
          </div>
          <div>
            <div class="ep-meta-list">
              <span>${item.meta.origin[currentLang]}</span>
              <span>${item.meta.status[currentLang]}</span>
            </div>
            <span class="ep-explore-link">${dict.cardExploreBtn}</span>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

/**
 * Category Filter Pills
 */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".cat-pill-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-category") || "all";
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPortfolioGrid();
    });
  });
}

/**
 * Hyeja-Inspired Split-Screen Product Detail Modal
 */
function openProductDetail(productId) {
  const overlay = document.getElementById("pdpOverlay");
  if (!overlay) return;

  activeProductId = productId;
  populateModalContent(productId);

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function populateModalContent(productId) {
  const item = PORTFOLIO_ITEMS.find((p) => p.id === productId);
  if (!item) return;

  const dict = UI_TRANSLATIONS[currentLang];

  const imgEl = document.getElementById("pdpImage");
  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = item.title[currentLang];
  }

  const crumbCat = document.getElementById("pdpCrumbCat");
  if (crumbCat) crumbCat.textContent = item.categoryLabel[currentLang];

  const crumbSample = document.getElementById("pdpCrumbSample");
  if (crumbSample) crumbSample.textContent = item.sampleBadge[currentLang];

  const titleEl = document.getElementById("pdpTitle");
  if (titleEl) titleEl.textContent = item.title[currentLang];

  const metaOrigin = document.getElementById("pdpMetaOrigin");
  if (metaOrigin) metaOrigin.textContent = item.meta.origin[currentLang];

  const metaStatus = document.getElementById("pdpMetaStatus");
  if (metaStatus) metaStatus.textContent = item.meta.status[currentLang];

  const col1 = document.getElementById("pdpCol1");
  if (col1) col1.textContent = item.col1Desc[currentLang];

  const col2 = document.getElementById("pdpCol2");
  if (col2) col2.textContent = item.col2Desc[currentLang];

  const acc1 = document.getElementById("pdpAccBodyDetails");
  if (acc1) acc1.textContent = item.detailsAcc[currentLang];

  const acc2 = document.getElementById("pdpAccBodyApp");
  if (acc2) acc2.textContent = item.applicationAcc[currentLang];

  const acc3 = document.getElementById("pdpAccBodySource");
  if (acc3) acc3.textContent = item.sourcingAcc[currentLang];

  const inquireBtn = document.getElementById("pdpInquireBtn");
  if (inquireBtn) {
    inquireBtn.textContent = dict.modalInquireBtn;
    inquireBtn.onclick = () => {
      closeProductDetail();
      const catSelect = document.getElementById("inquiryCategory");
      if (catSelect) catSelect.value = item.category;
      const contactSec = document.getElementById("contact");
      if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
    };
  }
}

function closeProductDetail() {
  const overlay = document.getElementById("pdpOverlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProductId = null;
}

function initModalEvents() {
  const overlay = document.getElementById("pdpOverlay");
  const closeBtn = document.getElementById("pdpCloseBtn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductDetail);
  }

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProductDetail();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeProductId) {
      closeProductDetail();
    }
  });

  // Accordion toggles inside PDP Modal
  document.querySelectorAll(".pdp-acc-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".pdp-acc-item");
      if (!parent) return;
      const isOpen = parent.classList.contains("open");
      parent.classList.toggle("open", !isOpen);
      const sign = trigger.querySelector(".acc-sign");
      if (sign) sign.textContent = !isOpen ? "−" : "+";
    });
  });
}

/**
 * Dual-Workflow Inquiry Tabs (Partnership vs Product Inquiry)
 */
function initWorkflowTabs() {
  const tabs = document.querySelectorAll(".wf-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeInquiryType = tab.getAttribute("data-wf") || "partnership";
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}

/**
 * Contact & Partnership Form Handler (Validation + Honeypot + Mailto Dispatch)
 */
function initInquiryForm() {
  const form = document.getElementById("corporateInquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Spam honeypot check
    const honey = document.getElementById("websiteUrlTrap");
    if (honey && honey.value.trim() !== "") {
      return;
    }

    const name = document.getElementById("inquiryName").value.trim();
    const company = document.getElementById("inquiryCompany").value.trim();
    const email = document.getElementById("inquiryEmail").value.trim();
    const phone = document.getElementById("inquiryPhone").value.trim();
    const country = document.getElementById("inquiryCountry").value.trim();
    const category = document.getElementById("inquiryCategory").value;
    const message = document.getElementById("inquiryMessage").value.trim();
    const consent = document.getElementById("inquiryConsent").checked;

    if (!name || !company || !email || !message || !consent) {
      return;
    }

    const workflowLabel =
      activeInquiryType === "partnership"
        ? "INTERNATIONAL PARTNERSHIP INQUIRY"
        : "PRODUCT PORTFOLIO INQUIRY";

    const subject = encodeURIComponent(
      `[${workflowLabel}] ${company} (${country}) — Khundet Nobilis LLC`
    );

    const bodyLines = [
      `Inquiry Type: ${workflowLabel}`,
      `Company / Brand: ${company}`,
      `Contact Person: ${name}`,
      `Email: ${email}`,
      `Phone / Messenger: ${phone}`,
      `Country / Region: ${country}`,
      `Category of Interest: ${category}`,
      `----------------------------------------`,
      `Message / Proposal:`,
      message
    ];

    const mailtoHref = `mailto:${COMPANY_CONFIG.email}?subject=${subject}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    const statusBox = document.getElementById("formFeedbackBox");
    if (statusBox) {
      statusBox.style.display = "block";
      statusBox.innerHTML =
        currentLang === "mn"
          ? `Таны хүсэлтийг бэлтгэлээ. И-мэйл цонх нээгдэж <strong>${COMPANY_CONFIG.email}</strong> хаяг руу илгээхэд бэлэн боллоо.`
          : currentLang === "kr"
          ? `문의 내용이 준비되었습니다. 이메일 클라이언트를 통해 <strong>${COMPANY_CONFIG.email}</strong>로 발송됩니다.`
          : `Your inquiry has been prepared. Opening your email client addressed to <strong>${COMPANY_CONFIG.email}</strong>.`;
    }

    window.location.href = mailtoHref;
  });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileNavigation() {
  const trigger = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mainNav");
  if (!trigger || !nav) return;

  trigger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

/**
 * Subtle Editorial Scroll Reveal
 */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Expose modal functions globally for inline onclick handlers
window.openProductDetail = openProductDetail;
window.closeProductDetail = closeProductDetail;
