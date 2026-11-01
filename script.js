// ============================================================================
// KHUNDET NOBILIS LLC — V2 INTERACTIVE CLINICAL & B2B ENGINE (MN / EN / KR)
// ============================================================================

const PRODUCTS = [
  {
    id: 1,
    docId: 'KN-SPEC-2026-001',
    category: 'injectables',
    originCode: 'KR / SEOUL',
    certCode: 'MFDS (KFDA) · CE',
    tempRegime: '2.0°C – 8.0°C Cold-Chain',
    catLabel: {
      mn: 'Дермал Филлер · Био-Имплант',
      en: 'Dermal Filler · Bio-Implant',
      kr: '히알루론산 더말 필러 · 바이오 임플란트'
    },
    title: {
      mn: 'Монофазын хөндлөн холбоост Гиалуроны хүчлийн филлер',
      en: 'High-Viscoelastic Monophasic Cross-Linked HA Dermal Filler',
      kr: '고점탄성 모노페이직 교차결합 히알루론산 필러'
    },
    summary: {
      mn: 'Нүүрний гүн хэлбэржүүлэлт, эзлэхүүн нөхөх болон зөөлөн эдийн лифтинг хийхэд зориулагдсан BDDE үлдэгдэлгүй, өндөр цэвэршилттэй клиникийн филлер.',
      en: 'Ultra-pure pharmaceutical grade hyaluronic acid dermal filler with low BDDE residue, engineered for deep volumetric contouring and structural tissue support.',
      kr: 'BDDE 잔류물을 최소화한 고순도 제약 등급 히알루론산 필러로, 안면 윤곽 형성 및 깊은 볼륨 회복에 최적화된 클리니컬 라인입니다.'
    },
    specs: ['HA 24 mg/mL', 'Lidocaine 0.3%', '1.1 mL × 1 Syringe', '27G / 30G TSK Needles'],
    indications: {
      mn: 'Хамар, эрүүний хэлбэржүүлэлт, хацрын гүн эзлэхүүн нөхөх, хамар уруулын гүн нугалаас засах.',
      en: 'Nasolabial folds, mid-face volumization, chin & jawline augmentation, non-surgical rhinoplasty.',
      kr: '팔자주름 개선, 중안면부 볼륨 강화, 턱끝 및  jawline 윤곽 교정.'
    },
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    docId: 'KN-SPEC-2026-002',
    category: 'injectables',
    originCode: 'KR / GANGNEUNG',
    certCode: 'KFDA · ISO 13485',
    tempRegime: '2.0°C – 8.0°C Cold-Chain',
    catLabel: {
      mn: 'Эсийн нөхөн төлжилт · Скинбүүстер',
      en: 'Cellular Regeneration · Skinbooster',
      kr: '세포 재생 폴리뉴클레오타이드 · 스킨부스터'
    },
    title: {
      mn: 'PN / PDRN Полинуклеотид Эсийн Нөхөн Төлжүүлэгч Бүүстер',
      en: 'Polynucleotide (PN/PDRN) Dermal Matrix Bio-Revitalizer',
      kr: '고농도 폴리뉴클레오타이드 (PN/PDRN) 스킨부스터'
    },
    summary: {
      mn: 'Фибробласт эсийн идэвхийг сэргээж, коллаген ба эластины нийлэгжилтийг дэмжин арьсны нягтрал, уян хатан чанарыг клиник түвшинд нэмэгдүүлнэ.',
      en: 'Biocompatible salmon-derived DNA fragments that stimulate fibroblast proliferation, extracellular matrix remodeling, and dermal thickness recovery.',
      kr: '생체 적합성 연어 유래 폴리뉴클레오타이드 성분으로 섬유아세포 증식과 진피층 치밀도 및 탄력을 근본적으로 복원합니다.'
    },
    specs: ['PN 20 mg/mL (2%)', '2.0 mL Pre-filled Syringe', '33G × 4mm Nano Needles', 'Sterile Blister'],
    indications: {
      mn: 'Нимгэрч эмзэгшсэн арьс, нүд орчмын нарийн үрчлээ, лазер эмчилгээний дараах эдийн нөхөн төлжилт.',
      en: 'compromised dermal barrier, periorbital fine lines, enlarged pores, and post-laser tissue recovery.',
      kr: '손상된 피부 장벽 복원, 눈가 미세주름 개선, 모공 축소 및 레이저 시술 후 재생.'
    },
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    docId: 'KN-SPEC-2026-003',
    category: 'ebd',
    originCode: 'KR / SEOUL',
    certCode: 'MFDS · CE-MDR · FDA',
    tempRegime: 'Ambient 15°C – 25°C',
    catLabel: {
      mn: 'Энергид суурилсан төхөөрөмж (EBD)',
      en: 'Energy-Based Aesthetic Device (EBD)',
      kr: '에너지 기반 미용 의료기기 (EBD)'
    },
    title: {
      mn: 'Dual-Wave Фракцийн RF Microneedling & Лифтинг Систем',
      en: 'Dual-Wave Fractional RF Microneedling & Dermal Remodeling Platform',
      kr: '듀얼 웨이브 프랙셔널 RF 마이크로니들링 시스템'
    },
    summary: {
      mn: 'Тасралтгүй (CW) болон импульс (Pulsed) радио давтамжийн хосолсон технологиор папилляр ба ретикуляр дермисийн түвшинд дулааны коагуляци үүсгэн арьс чангална.',
      en: 'Combines Continuous Wave (CW) and Pulsed RF modes with robotic step-motor gold-plated microneedles for scar revision, pore tightening, and SMAS lifting.',
      kr: '연속파(CW)와 펄스파(Pulsed) 듀얼 RF 모드 및 정밀 골드 마이크로니들을 결합하여 진피 리모델링과 타이트닝을 구현합니다.'
    },
    specs: ['1MHz / 2MHz Dual RF', '0.3mm – 4.0mm Robotic Depth', '25 / 49 / 64 Pin Tips', '2-Year Biomedical Warranty'],
    indications: {
      mn: 'Батганы дараах сорви, нүүр ба хүзүүний суларсан арьс татах, мелазма ба судасны гаралтай улайлт.',
      en: 'Atrophic acne scars, facial & submental skin laxity, melasma stabilization, and hyperhidrosis.',
      kr: '여드름 흉터 개선, 안면 및 턱선 리프팅, 모공 축소 및 진피 콜라겐 재생.'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    docId: 'KN-SPEC-2026-004',
    category: 'diagnostics',
    originCode: 'DE / TUTTLINGEN',
    certCode: 'CE-MDR · ISO 13485',
    tempRegime: 'Clinical Standard',
    catLabel: {
      mn: 'Эрчимт эмчилгээ · Оношилгоо',
      en: 'ICU & Perioperative Monitoring',
      kr: '중환자실 및 수술실 환자감시장치'
    },
    title: {
      mn: 'Олон параметрт өвчтөний хяналтын монитор (ICU / OR)',
      en: 'Modular Multi-Parameter ICU & Anesthesia Patient Monitor',
      kr: '모듈형 다중 파라미터 환자감시장치 (ICU / 수술실용)'
    },
    summary: {
      mn: 'Мэс засал болон эрчимт эмчилгээний тасагт гемодинамикийн үзүүлэлтүүдийг тасралтгүй хянах HL7 / HIS сүлжээнд холбогддог эмнэлгийн монитор.',
      en: 'Hospital-grade hemodynamic monitoring platform featuring 15.6" anti-glare电容 touchscreen, ST-segment analysis, and seamless HL7 hospital network integration.',
      kr: '15.6인치 고해상도 터치스크린과 실시간 혈역학 모니터링, 병원 정보 시스템(HL7) 연동을 지원하는 전문가용 모니터입니다.'
    },
    specs: ['12-Lead ECG / Masimo SpO2', 'Invasive IBP & EtCO2', '15.6" FHD Capacitive Touch', '4h Li-ion Backup'],
    indications: {
      mn: 'Мэс заслын блок, Эрчимт эмчилгээ (ICU), Яаралтай тусламж болон гоо сайхны мэс заслын наркозын хяналт.',
      en: 'Operating theaters, Intensive Care Units (ICU), Plastic Surgery recovery suites, and Emergency departments.',
      kr: '종합병원 수술실, 중환자실(ICU), 성형외과 수면/전신마취 모니터링.'
    },
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    docId: 'KN-SPEC-2026-005',
    category: 'consumables',
    originCode: 'JP / TOKYO',
    certCode: 'JIS · CE · FDA 510(k)',
    tempRegime: 'EO Sterile · Dry Storage',
    catLabel: {
      mn: 'Мэргэжлийн тарилгын хэрэгсэл',
      en: 'Precision Injection Consumables',
      kr: '프리미엄 미용 주사 소모품 · 마이크로 캐뉼라'
    },
    title: {
      mn: 'Хэт нимгэн ханатай Микро-Канюля ба Нано Мезо Зүү',
      en: 'Ultra-Thin Wall Blunt-Tip Micro-Cannula & 34G Nano Needles',
      kr: '초박형 블런트 팁 마이크로 캐뉼라 & 34G 나노 니들'
    },
    summary: {
      mn: 'Судас гэмтээх эрсдэл болон тарилгын дараах хөхрөлт, хаванг хамгийн бага түвшинд байлгах лазер зүсэлттэй, силикон бүрхүүлтэй канюля.',
      en: 'Laser-calibrated side-port blunt cannulas with surface micro-polishing that reduce extrusion force by 35% and prevent intravascular complications.',
      kr: '혈관 손상 및 시술 후 멍·부기를 최소화하는 정밀 레이저 가공 블런트 캐뉼라 및 초미세 나노 니들입니다.'
    },
    specs: ['22G / 25G / 27G / 30G', '38mm / 50mm / 70mm', 'Ultra-Thin Wall (UTW)', 'Box of 20 / 100 Sterile Units'],
    indications: {
      mn: 'Дермал филлер, биоревитализаци, ПДРН скинбүүстер болон өөх хайлуулах тарилгын аюулгүй гүйцэтгэл.',
      en: 'Atraumatic dermal filler placement, tear-trough correction, full-face mesotherapy, and threads.',
      kr: '안전한 필러 시술, 눈밑 고랑 교정, 풀페이스 스킨부스터 및 메조테라피.'
    },
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    docId: 'KN-SPEC-2026-006',
    category: 'diagnostics',
    originCode: 'DE / MUNICH',
    certCode: 'EN 13060 Class-B · CE',
    tempRegime: 'Hospital Sterilization',
    catLabel: {
      mn: 'Ариутгал халдваргүйжүүлэлт',
      en: 'Central Sterilization & Infection Control',
      kr: '의료용 고압증기멸균기 (Class-B 오토클레이브)'
    },
    title: {
      mn: 'EN 13060 Стандартын Вакуум Уурын Автоклав (Class-B)',
      en: 'EN 13060 Medical Class-B Fractionated Vacuum Steam Autoclave',
      kr: '유럽 EN 13060 규격 Class-B 의료용 진공 멸균기'
    },
    summary: {
      mn: '3 үе шаттай фракцийн вакуум систем болон Bowie & Dick тесттэй, хөндий болон нарийн мэс заслын багажийг 100% найдвартай ариутгах автоклав.',
      en: 'Features triple fractionated pre-vacuum, integrated steam generator, USB/thermal cycle logging, and automated water quality conductivity sensor.',
      kr: '3단계 프리바쿰(선진공) 시스템과 디지털 멸균 기록 로거를 탑재하여 중공 기구까지 완벽히 멸균하는 의료용 오토클레이브입니다.'
    },
    specs: ['23L / 45L Stainless Chamber', '121°C / 134°C Prion Cycle', 'Bowie & Dick / Helix Test', 'Built-in USB Data Logger'],
    indications: {
      mn: 'Гоо сайхны мэс засал, арьс гоо засал, шүд болон ерөнхий мэс заслын клиникийн өдөр тутмын багаж ариутгал.',
      en: 'Plastic surgery centers, dermatology clinics, dental surgical suites, and outpatient procedures.',
      kr: '성형외과, 피부과, 치과 및 외래 수술 센터의 기구 완벽 멸균.'
    },
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80'
  }
];

const PIPELINE_STEPS = [
  {
    step: '01',
    sop: 'SOP-QA-001 · GMP AUDIT',
    title: {
      mn: 'Үйлдвэрийн чанарын аудит ба Шууд гэрээт татан авалт',
      en: 'GMP Manufacturer Audit & Direct Batch Release',
      kr: '제조사 GMP 품질 검증 및 공식 직수입 출고'
    },
    desc: {
      mn: 'БНСУ, ХБНГУ, Швейцарийн KGMP / ISO 13485 гэрчилгээтэй үйлдвэрүүдээс цувралын дугаар (Batch No), чанарын шинжилгээний бичиг (CoA)-ийг тулган шууд үйлдвэрийн агуулахаас хүлээн авна.',
      en: 'Every shipment originates directly from KGMP and ISO 13485 certified manufacturing facilities in South Korea and Europe, accompanied by verified Certificates of Analysis (CoA) and batch traceability.',
      kr: '대한민국 및 유럽의 KGMP / ISO 13485 인증 제조소로부터 배치 번호(Lot No.)와 시험성적서(CoA)가 검증된 정품만을 100% 공식 직수입합니다.'
    },
    metrics: [
      { label: 'ORIGIN VERIFICATION', val: '100% Direct CoA' },
      { label: 'QUALITY STANDARD', val: 'KGMP / ISO 13485' },
      { label: 'COUNTERFEIT RISK', val: '0.0% Zero-Tolerance' }
    ]
  },
  {
    step: '02',
    sop: 'SOP-LOG-002 · COLD AIR FREIGHT',
    title: {
      mn: 'Олон улсын 2.0°C – 8.0°C Хүйтэн хэлхээний агаарын тээвэр',
      en: 'Validated 2.0°C – 8.0°C Cold-Chain Air Cargo Transit',
      kr: '국제 2.0°C – 8.0°C 콜드체인 항공 운송 시스템'
    },
    desc: {
      mn: 'Сөүл (ICN) – Улаанбаатар (UBN) чиглэлд биологийн идэвхт тарилга, филлер, полинуклеотидийг фазын өөрчлөлттэй хөргөлтийн элемент болон тасралтгүй температур бүртгэгч (USB PDF Data Logger)-тэйгээр тээвэрлэнэ.',
      en: 'Temperature-sensitive injectables and biological matrices are transported via direct Incheon (ICN) to Ulaanbaatar (UBN) air freight inside validated thermal containers with continuous USB PDF data loggers.',
      kr: '인천(ICN)–울란바토르(UBN) 직항 항공편을 통해 온도 민감성 바이오 제제 및 필러를 실시간 USB 온도 기록계(Data Logger)가 장착된 밸리데이션 보냉 컨테이너로 운송합니다.'
    },
    metrics: [
      { label: 'TRANSIT CORRIDOR', val: 'ICN ✈ UBN (3.5 hrs)' },
      { label: 'THERMAL RANGE', val: '2.0°C to 8.0°C' },
      { label: 'TELEMETRY LOGGING', val: 'Every 5 Minutes' }
    ]
  },
  {
    step: '03',
    sop: 'SOP-REG-003 · MOH COMPLIANCE',
    title: {
      mn: 'ЭМЯ болон ЭХХЗГ-ын албан ёсны бүртгэл ба Гаалийн хяналт',
      en: 'Ministry of Health (MOH) Registration & Customs Clearance',
      kr: '몽골 보건부(MOH) 공식 인허가 및 통관 규정 준수'
    },
    desc: {
      mn: 'Монгол Улсын Эм, эмнэлгийн хэрэгслийн хяналт зохицуулалтын газар (ЭХХЗГ)-т бүтээгдэхүүнийг албан ёсоор бүртгүүлж, импортын лицензийн дагуу гаалийн тусгай хөргүүрт терминалаар дамжуулан татан авна.',
      en: 'Our in-house regulatory affairs specialists manage complete product registration with the Mongolian Ministry of Health and Medicine & Medical Devices Regulatory Agency (MMDRA).',
      kr: '전담 인허가(RA) 팀이 몽골 보건부(MOH) 및 의료기기규제청(MMDRA)의 정식 품목 허가와 수입 라이선스 절차를 신속하고 투명하게 수행합니다.'
    },
    metrics: [
      { label: 'REGULATORY BODY', val: 'MOH / MMDRA Licensed' },
      { label: 'CUSTOMS CLEARANCE', val: 'Priority Cold Terminal' },
      { label: 'DOCUMENTATION', val: 'Full Dossier & SDS' }
    ]
  },
  {
    step: '04',
    sop: 'SOP-WH-004 · GDP WAREHOUSE',
    title: {
      mn: 'Улаанбаатар дахь GDP Стандартын Эмнэлгийн Агуулах',
      en: 'GDP-Compliant Medical Cold Storage in Ulaanbaatar',
      kr: '울란바토르 GDP 규격 전용 의약품·의료기기 보관소'
    },
    desc: {
      mn: 'Хан-Уул дүүрэгт байрлах манай төв агуулах нь 24/7 автомат дулаан, чийгшлийн мэдрэгч, нөөц цахилгаан үүсгүүр болон FEFO (хугацаа дуусах дарааллаар гаргах) удирдлагын системээр тоноглогдсон.',
      en: 'Located in Khan-Uul District, our distribution facility operates under Good Distribution Practice (GDP) standards with 24/7 redundant cooling, backup power, and FEFO inventory serialization.',
      kr: '울란바토르 한울구에 위치한 GDP(우수유통관리기준) 물류 센터는 24시간 이중 온도 감시 알람, 비상 발전 설비 및 바코드 시리얼 추적 시스템을 갖추고 있습니다.'
    },
    metrics: [
      { label: 'FACILITY STANDARD', val: 'WHO-GDP Compliant' },
      { label: 'MONITORING', val: '24/7 Cloud Alarm' },
      { label: 'INVENTORY SYSTEM', val: 'FEFO Batch Tracked' }
    ]
  },
  {
    step: '05',
    sop: 'SOP-CLIN-005 · CLINIC DELIVERY',
    title: {
      mn: '120+ Клиникт хүргэлт ба Эмч нарын гардан сургалт',
      en: 'Last-Mile Clinical Delivery & Physician KOL Onboarding',
      kr: '120+ 파트너 클리닉 직배송 및 의료진 핸즈온 교육'
    },
    desc: {
      mn: 'Гэрээт гоо сайхны болон нэгдсэн эмнэлгүүдэд захиалгыг 24 цагийн дотор тусгай зөөврийн хөргүүртэй хүргэж, эмч нарт зориулсан тарилгын протокол, аюулгүй ажиллагааны сургалтыг хамт үзүүлдэг.',
      en: 'Direct same-day delivery to 120+ partner dermatology and plastic surgery clinics in Ulaanbaatar, paired with hands-on clinical protocols and biomedical engineering support.',
      kr: '울란바토르 내 120개 이상의 협력 피부과·성형외과에 24시간 내 콜드박스로 직배송하며, KOL 의료진 시술 프로토콜 세미나를 지속적으로 지원합니다.'
    },
    metrics: [
      { label: 'CLINIC NETWORK', val: '120+ Partner Centers' },
      { label: 'SLA DELIVERY', val: '< 24 Hours in UB' },
      { label: 'CLINICAL SUPPORT', val: 'KOL Hands-On Academy' }
    ]
  }
];

let currentLang = 'mn';
let currentCategory = 'all';
let searchQuery = '';
let activePipelineIdx = 0;

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const titleStr = (p.title[currentLang] || p.title.en).toLowerCase();
    const sumStr = (p.summary[currentLang] || p.summary.en).toLowerCase();
    const specStr = p.specs.join(' ').toLowerCase();
    const matchSearch = !searchQuery || titleStr.includes(searchQuery) || sumStr.includes(searchQuery) || specStr.includes(searchQuery);
    return matchCat && matchSearch;
  });

  const actionLabel = {
    mn: 'Клиник үзүүлэлт харах →',
    en: 'Clinical Datasheet →',
    kr: '상세 스펙 및 데이터시트 →'
  }[currentLang];

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-white); border-radius: 16px; border: 1px solid var(--border-subtle);">
        <p style="color: var(--ink-500); font-size: 0.95rem;">Хайлтад тохирох бүтээгдэхүүн олдсонгүй / No matching clinical items found.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="clinical-product-card" onclick="openSpecDrawer(${item.id})">
      <div class="cp-media">
        <img src="${item.image}" alt="${item.title[currentLang]}" loading="lazy" />
        <span class="cp-origin-tag">${item.originCode}</span>
        <span class="cp-cert-tag">${item.certCode}</span>
      </div>
      <div class="cp-content">
        <div class="cp-category-code">${item.catLabel[currentLang]}</div>
        <h3 class="cp-title">${item.title[currentLang]}</h3>
        <p class="cp-summary">${item.summary[currentLang]}</p>
        <div class="cp-specs-preview">
          ${item.specs.map(s => `<span class="cp-spec-pill">${s}</span>`).join('')}
        </div>
        <div class="cp-footer">
          <span class="cp-temp-regime">● ${item.tempRegime}</span>
          <span class="cp-action-link">${actionLabel}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderPipeline() {
  const stepsContainer = document.getElementById('pipelineStepsList');
  const inspector = document.getElementById('pipelineInspector');
  if (!stepsContainer || !inspector) return;

  stepsContainer.innerHTML = PIPELINE_STEPS.map((item, idx) => `
    <button class="pipeline-step-btn ${idx === activePipelineIdx ? 'active' : ''}" onclick="selectPipelineStep(${idx})">
      <div class="step-btn-left">
        <span class="step-num">${item.step}</span>
        <div>
          <div class="step-btn-title">${item.title[currentLang]}</div>
          <div class="step-btn-code">${item.sop}</div>
        </div>
      </div>
      <span>→</span>
    </button>
  `).join('');

  const active = PIPELINE_STEPS[activePipelineIdx];
  inspector.innerHTML = `
    <div>
      <div class="inspector-header">
        <span class="inspector-sop-code">${active.sop}</span>
        <span class="mono" style="font-size: 0.75rem; color: #94A3B8;">STAGE ${active.step} / 05 · VERIFIED</span>
      </div>
      <h3 class="inspector-title">${active.title[currentLang]}</h3>
      <p class="inspector-desc">${active.desc[currentLang]}</p>
    </div>
    <div class="inspector-metrics-grid">
      ${active.metrics.map(m => `
        <div class="insp-metric">
          <div class="insp-metric-label">${m.label}</div>
          <div class="insp-metric-val">${m.val}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function selectPipelineStep(idx) {
  activePipelineIdx = idx;
  renderPipeline();
}

function openSpecDrawer(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const backdrop = document.getElementById('specDrawerBackdrop');
  const docIdEl = document.getElementById('drawerDocId');
  const bodyEl = document.getElementById('drawerBody');
  const inquireBtn = document.getElementById('drawerInquireBtn');

  docIdEl.textContent = `${item.docId} · ${item.certCode}`;

  const labels = {
    mn: {
      origin: 'Үйлдвэрлэсэн улс',
      cert: 'Олон улсын сертификат',
      storage: 'Хадгалалтын горим',
      specs: 'Техникийн үзүүлэлт',
      indications: 'Эмнэлзүйн заалт',
      supply: 'Нийлүүлэлтийн нөхцөл',
      supplyVal: 'Албан ёсны гэрээт эмнэлэг болон дистрибьюторын захиалгаар',
      btn: 'Энэ бүтээгдэхүүний үнийн санал / дээж авах'
    },
    en: {
      origin: 'Country of Origin',
      cert: 'Regulatory Approvals',
      storage: 'Storage & Cold-Chain',
      specs: 'Key Specifications',
      indications: 'Clinical Indications',
      supply: 'Distribution Channel',
      supplyVal: 'Licensed Hospitals, Aesthetic Clinics & B2B Partners',
      btn: 'Request Official Quotation / Sample Dossier'
    },
    kr: {
      origin: '원산지 / 제조 거점',
      cert: '글로벌 인허가 및 인증',
      storage: '보관 및 콜드체인 기준',
      specs: '주요 기술 사양',
      indications: '임상 적응증 (Indications)',
      supply: '공급 및 유통 채널',
      supplyVal: '공식 협약 병원, 피부과·성형외과 클리닉 및 B2B 파트너',
      btn: '공식 견적 및 제품 도시에(Dossier) 요청'
    }
  }[currentLang];

  bodyEl.innerHTML = `
    <div class="drawer-img-box">
      <img src="${item.image}" alt="${item.title[currentLang]}" />
    </div>
    <div class="cp-category-code">${item.catLabel[currentLang]}</div>
    <h3 style="font-family: var(--font-serif); font-size: 1.85rem; color: var(--ink-950); margin-bottom: 12px; line-height: 1.2;">
      ${item.title[currentLang]}
    </h3>
    <p style="font-size: 0.92rem; color: var(--ink-700); margin-bottom: 20px;">
      ${item.summary[currentLang]}
    </p>
    <table class="drawer-table">
      <tr>
        <th>${labels.origin}</th>
        <td class="mono">${item.originCode}</td>
      </tr>
      <tr>
        <th>${labels.cert}</th>
        <td class="mono">${item.certCode}</td>
      </tr>
      <tr>
        <th>${labels.storage}</th>
        <td class="mono" style="color: var(--bioteal-600);">${item.tempRegime}</td>
      </tr>
      <tr>
        <th>${labels.specs}</th>
        <td>${item.specs.join(' · ')}</td>
      </tr>
      <tr>
        <th>${labels.indications}</th>
        <td>${item.indications[currentLang]}</td>
      </tr>
      <tr>
        <th>${labels.supply}</th>
        <td>${labels.supplyVal}</td>
      </tr>
    </table>
  `;

  inquireBtn.textContent = labels.btn;
  inquireBtn.onclick = () => {
    closeSpecDrawer();
    const msgBox = document.getElementById('contactMessage');
    if (msgBox) {
      msgBox.value = `[${item.docId}] ${item.title[currentLang]} — дэлгэрэнгүй каталог болон хамтран ажиллах үнийн санал авъя.`;
    }
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  backdrop.classList.add('open');
  document.body.classList.add('drawer-open');
}

function closeSpecDrawer() {
  const backdrop = document.getElementById('specDrawerBackdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.body.classList.remove('drawer-open');
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-mn]').forEach(el => {
    const val = el.getAttribute(`data-${lang}`) || el.getAttribute('data-en');
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  renderCatalog();
  renderPipeline();
}

function handleB2BSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]').value;
  const org = form.querySelector('[name="org"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const type = form.querySelector('[name="type"]').value;
  const message = form.querySelector('[name="message"]').value;

  const subject = encodeURIComponent(`[Khundet Nobilis B2B Portal] ${type} — ${org} (${name})`);
  const body = encodeURIComponent(
    `Organization / Clinic: ${org}\nContact Person: ${name}\nPhone / WhatsApp: ${phone}\nInquiry Type: ${type}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:erkhemsaikhan@khundet-nobilis.mn?subject=${subject}&body=${body}`;
}

function initScrollAnimations() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // Animated Counters
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 36));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = current;
        }
      }, 28);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(c => counterObserver.observe(c));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  renderPipeline();
  initScrollAnimations();

  // Language buttons (MN / EN / KR)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Category filter pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentCategory = pill.dataset.cat;
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p === pill));
      renderCatalog();
    });
  });

  // Live search input
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderCatalog();
    });
  }

  // Sticky navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  // Mobile Menu
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Close drawer on backdrop click or Escape key
  const backdrop = document.getElementById('specDrawerBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeSpecDrawer();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSpecDrawer();
  });
});
