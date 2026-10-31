// ============================================================================
// ХҮНДЭТ НОБИЛИС ХХК - Бүтээгдэхүүний жагсаалт (Эндээс бүтээгдэхүүнээ хялбар засна)
// ============================================================================
const PRODUCTS = [
  {
    id: 1,
    category: 'devices',
    badgeMn: 'Эмнэлгийн тоног төхөөрөмж',
    badgeEn: 'Medical Devices',
    titleMn: 'Олон үйлдэлт өвчтөний хяналтын монитор',
    titleEn: 'Multi-Parameter Patient Monitor',
    descMn: 'Эрчимт эмчилгээ болон мэс заслын тасагт зориулсан өндөр нарийвчлалтай, 15 инчийн мэдрэгчтэй дэлгэц бүхий хяналтын монитор.',
    descEn: 'High-precision 15-inch touchscreen patient monitor designed for ICU and operating room environments.',
    specs: ['ECG / SpO2 / NIBP', '15" HD Touch', 'CE / ISO 13485'],
    statusMn: 'Захиалгаар болон бэлэн',
    statusEn: 'In Stock & Pre-order',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    category: 'aesthetic',
    badgeMn: 'Гоо сайхны бүтээгдэхүүн',
    badgeEn: 'Aesthetic Products',
    titleMn: 'Гиалуроны хүчлийн дермал филлер ба скинбүүстер',
    titleEn: 'Hyaluronic Acid Dermal Filler & Skinbooster',
    descMn: 'Арьсны гүн чийгшүүлэлт, залуужуулалт болон хэлбэржүүлэлтэд зориулсан клиникийн өндөр цэвэршилттэй тарилгын бүтээгдэхүүн.',
    descEn: 'High-purity clinical cross-linked hyaluronic acid filler and skinbooster for facial contouring and deep hydration.',
    specs: ['Cross-linked HA', '1.1ml x 2 Syringes', 'KFDA / CE Certified'],
    statusMn: 'Бэлэн нийлүүлэгдэнэ',
    statusEn: 'Available in Stock',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    category: 'devices',
    badgeMn: 'Эмнэлгийн тоног төхөөрөмж',
    badgeEn: 'Medical Devices',
    titleMn: 'Дижитал зөөврийн ЭХО оношилгооны аппарат',
    titleEn: 'Portable Color Doppler Ultrasound System',
    descMn: 'Дүрсний өндөр ялгарал, хиймэл оюунд суурилсан хэмжилтийн системтэй клиник оношилгооны ЭХО аппарат.',
    descEn: 'Advanced color Doppler ultrasound imaging system with crystal-clear resolution and multi-probe support.',
    specs: ['4D Doppler Imaging', '3 Probe Ports', 'DICOM 3.0'],
    statusMn: 'Баталгаат хугацаа: 2 жил',
    statusEn: '2-Year Warranty',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    category: 'aesthetic',
    badgeMn: 'Гоо сайхны бүтээгдэхүүн',
    badgeEn: 'Aesthetic Products',
    titleMn: 'RF Microneedling & Арьс чангалах лазер аппарат',
    titleEn: 'Fractional RF Microneedling System',
    descMn: 'Арьсны коллаген нөхөн төлжүүлэх, нүхжилт болон сорви багасгах, нүүр өргөж чангалах мэргэжлийн клиникийн төхөөрөмж.',
    descEn: 'Professional clinical aesthetic device for collagen remodeling, scar reduction, and non-surgical skin tightening.',
    specs: ['Gold Insulated Needles', '0.5mm - 3.5mm Depth', 'Сургалт дагалдана'],
    statusMn: 'Суурилуулалт + Сургалт',
    statusEn: 'Installation + Training',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    category: 'consumables',
    badgeMn: 'Эмнэлгийн хэрэгсэл',
    badgeEn: 'Medical Consumables',
    titleMn: 'Мэс засал ба Тарилгын ариун нэг удаагийн хэрэгслүүд',
    titleEn: 'Sterile Surgical & Aesthetic Consumables',
    descMn: 'Эмнэлэг болон гоо сайхны клиникт өдөр тутам хэрэглэгдэх нано зүү, канюля, мэс заслын утас, ариун бээлий болон бусад хэрэгсэл.',
    descEn: 'Premium sterile micro-cannulas, meso-needles, surgical sutures, and daily clinical consumables.',
    specs: ['EO Sterile', 'Nano-thin Wall', 'Бөөний нийлүүлэлт'],
    statusMn: 'Бэлэн / Бөөний үнээр',
    statusEn: 'Wholesale Available',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    category: 'consumables',
    badgeMn: 'Лаборатори ба Ариутгал',
    badgeEn: 'Sterilization & Lab',
    titleMn: 'Автомат уурын автоклав (B ангилал)',
    titleEn: 'Class-B Vacuum Steam Autoclave Sterilizer',
    descMn: 'Эмнэлэг, шүд болон гоо сайхны клиникийн багаж хэрэгслийг 100% найдвартай ариутгах вакуум уурын автоклав.',
    descEn: 'Medical-grade Class-B vacuum steam autoclave with digital thermal printer and rapid sterilization cycles.',
    specs: ['23L / 45L Capacity', 'Triple Vacuum', 'LCD Smart Control'],
    statusMn: 'Бэлэн нийлүүлэгдэнэ',
    statusEn: 'Available in Stock',
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
    const btnText = currentLang === 'mn' ? 'Үнийн санал авах' : 'Request Quote';

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

  const subject = encodeURIComponent(`Хамтран ажиллах / Үнийн санал авах хүсэлт - ${name}`);
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
