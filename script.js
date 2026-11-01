// ============================================================================
// ХҮНДЭТ НОБИЛИС ХХК - Бүтээгдэхүүний жагсаалт
// ============================================================================
const PRODUCTS = [
  {
    id: 1,
    category: 'aesthetic',
    badgeMn: 'Өмнөд Солонгос 🇰🇷 | KFDA',
    badgeEn: 'South Korea 🇰🇷 | KFDA',
    titleMn: 'Гиалуроны хүчлийн дээд зэрэглэлийн дермал филлер',
    titleEn: 'Cross-linked Hyaluronic Acid Dermal Filler (Monophasic)',
    descMn: 'Нүүрний хэлбэржүүлэлт, уруул болон гүн үрчлээ тэнийлгэх зориулалттай, удаан хугацааны хадгалалттай, өндөр цэвэршилттэй тарилгын филлер.',
    descEn: 'Ultra-pure monophasic cross-linked HA filler engineered for smooth volumization, facial contouring, and deep wrinkle reduction.',
    specs: ['Cross-linked HA 24mg/ml', 'Lidocaine 0.3%', 'KFDA / CE Certified'],
    statusMn: 'Бэлэн нийлүүлэгдэнэ',
    statusEn: 'In Stock & Ready to Deliver',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    category: 'aesthetic',
    badgeMn: 'Өмнөд Солонгос 🇰🇷 | K-Aesthetics',
    badgeEn: 'South Korea 🇰🇷 | K-Aesthetics',
    titleMn: 'PDRN Полинуклеотид + Глутатион скинбүүстер',
    titleEn: 'PDRN Salmon DNA Regenerative Skinbooster',
    descMn: 'Арьсны эсийн ДНХ-г нөхөн сэргээх, нүхжилт агшаах, уян хатан чанарыг сэргээх эмнэлзүйн тарилгын скинбүүстер уусмал.',
    descEn: 'Advanced salmon DNA polynucleotide regenerative complex for cellular matrix repair, tone brightening, and intense dermal elasticity.',
    specs: ['PDRN 2% + Glutathione', '5 vials x 3ml', 'Эмнэлгийн зориулалттай'],
    statusMn: 'Эрэлт ихтэй / Бэлэн',
    statusEn: 'Top Seller / Available',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    category: 'devices',
    badgeMn: 'ХБНГУ 🇩🇪 | CE / ISO',
    badgeEn: 'Germany 🇩🇪 | CE / ISO',
    titleMn: 'Олон үйлдэлт өвчтөний хяналтын монитор (ICU)',
    titleEn: 'Multi-Parameter Patient Monitor (Intensive Care)',
    descMn: 'Эрчимт эмчилгээ, мэдээгүйжүүлэг болон мэс заслын тасагт зориулсан 15 инчийн HD мэдрэгчтэй дэлгэцтэй, өндөр нарийвчлалт монитор.',
    descEn: 'High-precision 15-inch touchscreen patient monitor designed for ICU, anesthesia, and surgical suites with advanced arrhythmia detection.',
    specs: ['ECG / SpO2 / NIBP / Temp', '15" HD Touch', 'CE / ISO 13485'],
    statusMn: 'Баталгаат хугацаа: 2 жил',
    statusEn: '2-Year Warranty',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    category: 'aesthetic',
    badgeMn: 'Өмнөд Солонгос 🇰🇷 | K-Device',
    badgeEn: 'South Korea 🇰🇷 | K-Device',
    titleMn: 'Фракцийн RF Microneedling & Арьс чангалах систем',
    titleEn: 'Fractional RF Microneedling & Skin Tightening System',
    descMn: 'Арьсны гүн коллаген сэргээх, сорви нүхжилт арилгах, арьс татаж чангалах гоо сайхны эмнэлгүүдийн алтан стандарт төхөөрөмж.',
    descEn: 'Medical aesthetic system delivering targeted radiofrequency energy to remodel collagen, reduce acne scars, and tighten lax skin.',
    specs: ['Insulated Gold Needles', '0.5mm - 3.5mm Depth', 'Сургалт + Сертификат'],
    statusMn: 'Суурилуулалт + Сургалт',
    statusEn: 'Installation + Doctor Training',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    category: 'consumables',
    badgeMn: 'Япон 🇯🇵 | Sterile',
    badgeEn: 'Japan 🇯🇵 | Sterile',
    titleMn: 'Тарилгын хэт нарийн Нано зүү ба Микро канюля',
    titleEn: 'Ultra-Fine Aesthetic Nano Needles & Flexible Cannulas',
    descMn: 'Филлер болон скинбүүстер хийх үеийн өвдөлт, хөхрөлтийг 80% бууруулах зориулалттай эмнэлгийн зориулалтын уян канюлянууд.',
    descEn: 'Premium Japanese engineered flexible micro-cannulas and nano-thin meso needles for painless injections and reduced bruising.',
    specs: ['25G / 27G / 30G / 32G', 'EO Gas Sterile', 'Бөөний нийлүүлэлт'],
    statusMn: 'Бэлэн / Бөөний үнээр',
    statusEn: 'Wholesale In Stock',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    category: 'consumables',
    badgeMn: 'ХБНГУ 🇩🇪 | Class B',
    badgeEn: 'Germany 🇩🇪 | Class B',
    titleMn: 'Эмнэлгийн автомат вакуум уурын автоклав (Class B)',
    titleEn: 'Class-B Medical Vacuum Steam Autoclave Sterilizer',
    descMn: 'Эмнэлэг, мэс засал болон гоо заслын клиникийн бүх төрлийн багажийг 100% найдвартай ариутгах дижитал автоклав.',
    descEn: 'European standard Class-B vacuum steam autoclave with digital thermal printer and rapid, validated sterilization cycles.',
    specs: ['23L / 45L Chamber', 'Triple Pulsed Vacuum', 'LCD Smart Control'],
    statusMn: 'Бэлэн нийлүүлэгдэнэ',
    statusEn: 'Available for Delivery',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80'
  }
];

let currentLang = 'mn';
let currentCategory = 'all';

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = currentCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(item => item.category === currentCategory);

  grid.innerHTML = filtered.map(item => {
    const badge = currentLang === 'mn' ? item.badgeMn : item.badgeEn;
    const title = currentLang === 'mn' ? item.titleMn : item.titleEn;
    const desc = currentLang === 'mn' ? item.descMn : item.descEn;
    const status = currentLang === 'mn' ? item.statusMn : item.statusEn;
    const btnText = currentLang === 'mn' ? 'Үнийн санал авах' : 'Request Quotation';

    return `
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${item.image}" alt="${title}" loading="lazy" />
          <span class="product-badge">${badge}</span>
        </div>
        <div class="product-body">
          <h3 class="product-title">${title}</h3>
          <p class="product-desc">${desc}</p>
          <div class="product-specs">
            ${item.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}
          </div>
          <div class="product-footer">
            <span class="product-status">● ${status}</span>
            <button class="product-btn" onclick="openProductModal(${item.id})">${btnText}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderProducts();
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-mn]').forEach(el => {
    const text = lang === 'mn' ? el.getAttribute('data-mn') : el.getAttribute('data-en');
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });

  renderProducts();
}

function openProductModal(id) {
  const item = PRODUCTS.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('quoteModal');
  const titleEl = document.getElementById('modalProductTitle');
  const productInput = document.getElementById('quoteProductInput');

  const title = currentLang === 'mn' ? item.titleMn : item.titleEn;
  titleEl.textContent = title;
  if (productInput) productInput.value = title;

  modal.classList.add('open');
}

function closeProductModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) modal.classList.remove('open');
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const category = form.querySelector('[name="category"]').value;
  const message = form.querySelector('[name="message"]').value;

  const subject = encodeURIComponent(`Хамтран ажиллах / Албан ёсны хүсэлт - ${name}`);
  const body = encodeURIComponent(
    `Нэр / Байгууллага: ${name}\nУтас: ${phone}\nСонирхож буй чиглэл: ${category}\n\nЗурвас:\n${message}`
  );

  window.location.href = `mailto:erkhemsaikhan@khundet-nobilis.mn?subject=${subject}&body=${body}`;
}

function handleModalSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const product = form.querySelector('[name="product"]').value;
  const name = form.querySelector('[name="name"]').value;
  const phone = form.querySelector('[name="phone"]').value;

  const subject = encodeURIComponent(`Үнийн санал авах: ${product}`);
  const body = encodeURIComponent(
    `Бүтээгдэхүүн: ${product}\nЗахиалагчийн нэр / Эмнэлэг: ${name}\nХолбогдох утас: ${phone}`
  );

  window.location.href = `mailto:erkhemsaikhan@khundet-nobilis.mn?subject=${subject}&body=${body}`;
  closeProductModal();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  // Category filter buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => setCategory(btn.dataset.cat));
  });

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Close modal when clicking backdrop
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProductModal();
    });
  }
});
