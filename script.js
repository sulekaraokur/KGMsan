const translations = {
    "tr": {
        "nav-home": "Anasayfa",
        "nav-about": "Hakkımızda",
        "nav-products": "Ürünler",
        "nav-cat1": "Konveyör Rulo",
        "nav-cat2": "Konveyör İstasyon",
        "nav-cat3": "Konveyör Tambur",
        "nav-contact": "İletişim",
        "hero-title": "KGM-SAN",
        "hero-desc": "Endüstriyel çözümlerde güven ve kalitenin adresi.",
        "about-title": "Hakkımızda",
        "about-text": "2021 yılında kurulan KGM-SAN, tekstil yedek parçaları ve makinaları üretimiyle sektöre adım atmıştır. Yenilikçi ve müşteri odaklı yaklaşımıyla kısa sürede tanınan firmamız, tekstil sektöründeki başarısını konveyör bant sistemleri üretimine de taşımıştır. Müşteri ihtiyaçlarına göre özelleştirilebilen bu sistemler, yüksek kalite standartlarında üretilmekte ve güvenilir bir kullanım sunmaktadır.",
        "mission-title": "Misyonumuz",
        "mission-text": "Yenilikçi yaklaşımımızla müşterilerimizin ihtiyaçlarına özel, yüksek kalite standartlarında, enerji verimliliği sağlayan, dayanıklı ve güvenilir konveyör bant sistemleri ile makine parçaları üreterek sektöre değer katmak.",
        "vision-title": "Vizyonumuz",
        "vision-text": "Global ölçekli enerji krizinde çözüm ortağı olmak amacıyla Ar-Ge ve Ür-Ge çalışmalarına odaklanmak ve hayata geçirilecek projelerle \"Yeşil Enerji\" dönüşümünün güçlü bir parçası olmak.",
        "products-title": "Ürün Kategorilerimiz",
        "cat1-title": "Konveyör Rulo",
        "cat1-desc": "Uluslararası standartlara uygun üst ve alt rulo çözümleri.",
        "cat1-btn": "Detaylar",
        "cat2-title": "Konveyör İstasyon",
        "cat2-desc": "Taşıyıcı, dönüş, merkezleme ve darbe istasyonları.",
        "cat2-btn": "Detaylar",
        "cat3-title": "Konveyör Tambur",
        "cat3-desc": "Tahrik, kuyruk, gergi ve saptırma tamburları.",
        "cat3-btn": "Detaylar",
        "contact-title": "İletişim",
        "contact-founder1": "Kurucu Ortak:",
        "contact-founder2": "Kurucu Ortak:",
        "contact-email": "E-posta:",
        "contact-address": "Adres:",
        "footer-text": "© 2026 KGMsan. Tüm hakları saklıdır."
    },
    "en": {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-products": "Products",
        "nav-cat1": "Conveyor Roller",
        "nav-cat2": "Conveyor Idler",
        "nav-cat3": "Conveyor Pulley",
        "nav-contact": "Contact",
        "hero-title": "KGM-SAN",
        "hero-desc": "The address of trust and quality in industrial solutions.",
        "about-title": "About Us",
        "about-text": "Founded in 2021, KGM-SAN stepped into the sector by producing textile spare parts and machinery. Recognized in a short time with its innovative and customer-oriented approach, our company has carried its success in the textile sector to the production of conveyor belt systems. These customized systems are produced with high quality standards and offer reliable use.",
        "mission-title": "Our Mission",
        "mission-text": "To add value to the sector by producing durable and reliable conveyor belt systems and machine parts that are customized to our customers' needs, with high quality standards and energy efficiency, through our innovative approach.",
        "vision-title": "Our Vision",
        "vision-text": "To focus on R&D and P&D studies to be a solution partner in the global energy crisis and to become a strong part of the \"Green Energy\" transformation.",
        "products-title": "Our Product Categories",
        "cat1-title": "Conveyor Roller",
        "cat1-desc": "Top and bottom roller solutions meeting international standards.",
        "cat1-btn": "Learn More",
        "cat2-title": "Conveyor Idler",
        "cat2-desc": "Troughing, return, self-aligning, and impact idlers.",
        "cat2-btn": "Learn More",
        "cat3-title": "Conveyor Pulley",
        "cat3-desc": "Drive, tail, take-up, and wing pulleys.",
        "cat3-btn": "Learn More",
        "contact-title": "Contact",
        "contact-founder1": "Co-Founder:",
        "contact-founder2": "Co-Founder:",
        "contact-email": "Email:",
        "contact-address": "Address:",
        "footer-text": "© 2026 KGMsan. All rights reserved."
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    for (const key in translations[lang]) {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'STRONG') {
                element.innerHTML = translations[lang][key];
            } else if (element.innerHTML.includes('<strong>')) {
                const strongTag = element.querySelector('strong');
                if (strongTag) {
                   const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
                   strongTag.innerHTML = translations[lang][key];
                   if(lang === 'en' && key === 'contact-address' && textNode) textNode.textContent = " Organized Industrial Zone, Denizli, Turkey";
                   if(lang === 'tr' && key === 'contact-address' && textNode) textNode.textContent = " Organize Sanayi Bölgesi, Denizli, Türkiye";
                   if(lang === 'en' && key.includes('founder') && textNode) textNode.textContent = textNode.textContent.replace('İsim Soyisim', 'Name Surname');
                   if(lang === 'tr' && key.includes('founder') && textNode) textNode.textContent = textNode.textContent.replace('Name Surname', 'İsim Soyisim');
                }
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    }
}

Object.assign(translations.tr, {
    "footer-desc": "Endüstriyel taşıma sistemlerinde güvenilir çözüm ortağınız.",
    "footer-quick-links": "Hızlı Linkler",
    "footer-home": "Anasayfa",
    "footer-about": "Hakkımızda",
    "footer-products": "Ürünler",
    "footer-contact": "İletişim",
    "footer-prod-links": "Ürünlerimiz",
    "footer-p1": "Konveyör Rulo",
    "footer-p2": "Konveyör İstasyon",
    "footer-p3": "Konveyör Tambur",
    "footer-contact-title": "İletişim",
    "footer-address": "Organize Sanayi Bölgesi, Denizli, Türkiye",
    "footer-copy": "© 2026 KGMsan. Tüm hakları saklıdır."
});

Object.assign(translations.en, {
    "footer-desc": "Your reliable solution partner in industrial conveying systems.",
    "footer-quick-links": "Quick Links",
    "footer-home": "Home",
    "footer-about": "About Us",
    "footer-products": "Products",
    "footer-contact": "Contact",
    "footer-prod-links": "Our Products",
    "footer-p1": "Conveyor Roller",
    "footer-p2": "Conveyor Idler",
    "footer-p3": "Conveyor Pulley",
    "footer-contact-title": "Contact",
    "footer-address": "Organized Industrial Zone, Denizli, Turkey",
    "footer-copy": "© 2026 KGMsan. All rights reserved."
});