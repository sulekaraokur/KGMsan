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
Object.assign(translations.tr, {
    "page-title": "Konveyör Ruloları",
    "page-desc": "Uluslararası standartlara uygun, dayanıklı ve yüksek performanslı rulo çözümleri.",
    "roller-p1-title": "Çelik Konveyör Rulo",
    "roller-p1-desc": "Taşıyıcı ve dönüş tarafında yük desteği sağlayan temel konveyör bileşeni. Özel ölçü ve uluslararası standartlarda üretim.",
    "roller-p1-btn": "Teklif Al",
    "roller-p2-title": "HDPE Rulo",
    "roller-p2-desc": "Aşırı hava koşulları ve korozyona dayanıklı Polietilen rulolar. Geleneksel çelik rulolara göre daha hafif ve çok daha uzun ömürlüdür.",
    "roller-p2-btn": "Teklif Al",
    "roller-p3-title": "Kauçuk Darbe Rulosu",
    "roller-p3-desc": "Yükleme ve transfer noktalarında, serbest düşen malzemelerin banta vereceği zararı sönümleyen darbe emici kauçuk kaplı rulolar.",
    "roller-p3-btn": "Teklif Al",
    "roller-p4-title": "Kauçuk Diskli Dönüş Rulosu",
    "roller-p4-desc": "Bant yüzeyinde malzeme birikimini önleyerek aşınmayı ve çap farklılıklarından doğacak bant sapmalarını engelleyen dönüş ruloları.",
    "roller-p4-btn": "Teklif Al",
    "roller-p5-title": "Yönlendirme Rulosu",
    "roller-p5-desc": "Konveyör bandının hizasını koruyan, bant kaymalarını ve sistem aşınmalarını önleyen güvenilir kılavuz ve denge ruloları.",
    "roller-p5-btn": "Teklif Al",
    "roller-p6-title": "Çelik Spiral Dönüş Rulosu",
    "roller-p6-desc": "Kendi kendini temizleyen özel konstrüksiyonu sayesinde yaş ve yapışkan dökme malzemelerin bant altına birikmesini engeller.",
    "roller-p6-btn": "Teklif Al",
    "roller-p7-title": "Standart Çelik Rulo",
    "roller-p7-desc": "Uluslararası standartlarda dizayn edilmiş konveyör bileşenleridir. Taşıyıcı ve dönüş tarafı için özel üretim imkanı.",
    "roller-p7-btn": "Teklif Al",
    "roller-p8-title": "Sabit Açılı Kenar Rulosu",
    "roller-p8-desc": "Mobil kırıcı ve elek makinalarının standartlarına tam uyumlu olarak üretilen, bant aşınmasını kontrol altına alan sabit açılı rulolar.",
    "roller-p8-btn": "Teklif Al",
    "roller-p9-title": "Kauçuk Kaplı Rulo",
    "roller-p9-desc": "Aşınan yüzeyin ömrünü uzatmak veya bant ile rulo arasındaki sürtünmeyi olumlu yönde artırmak amacıyla uygulanan vulkanize kaplamalı rulolar.",
    "roller-p9-btn": "Teklif Al",
    "roller-p10-title": "Çırpıcı Dönüş Rulosu",
    "roller-p10-desc": "Banta yapışma eğilimi gösteren zorlu malzemelerin birikmesini engellemek için özel olarak geliştirilmiş operasyon verimi sağlayan rulolar.",
    "roller-p10-btn": "Teklif Al",
    "roller-p11-title": "Kılavuz Rulosu",
    "roller-p11-desc": "Konveyör bandının hizasını kesintisiz korumak için tasarlanmıştır. Bant hasarlarını engelleyerek taşıma sisteminizin toplam ömrünü artırır.",
    "roller-p11-btn": "Teklif Al",
    "roller-p12-title": "Tahrikli (Yastık Rulmanlı) Rulo",
    "roller-p12-desc": "Ağır hizmet tipi yüksek gerilimli hatlarda ve besleyici uygulamalarda çalışmak üzere dıştan rulmanlı olarak tasarlanmış dayanıklı modeldir.",
    "roller-p12-btn": "Teklif Al",
    "roller-p13-title": "Boru Tipi Konveyör Rulosu",
    "roller-p13-desc": "Kapalı boru tipli taşıma sistemlerinde, malzemenin dökülme olmadan güvenle transfer edilmesini sağlamak üzere optimize edilmiş boru biçimi rulolar.",
    "roller-p13-btn": "Teklif Al"
});

Object.assign(translations.en, {
    "page-title": "Conveyor Rollers",
    "page-desc": "Durable and high-performance roller solutions conforming to international standards.",
    "roller-p1-title": "Steel Conveyor Roller",
    "roller-p1-desc": "Essential conveyor component providing load support on carry and return sides. Custom sizing and production according to international standards.",
    "roller-p1-btn": "Get a Quote",
    "roller-p2-title": "HDPE Roller",
    "roller-p2-desc": "Extreme weather and corrosion-resistant Polyethylene rollers. Lighter and significantly longer-lasting than traditional steel rollers.",
    "roller-p2-btn": "Get a Quote",
    "roller-p3-title": "Rubber Impact Roller",
    "roller-p3-desc": "Impact-absorbing rubber-coated rollers that cushion the damage caused by free-falling materials on the belt at loading and transfer points.",
    "roller-p3-btn": "Get a Quote",
    "roller-p4-title": "Rubber Disc Return Roller",
    "roller-p4-desc": "Return rollers that prevent material buildup on the belt surface, avoiding wear and belt misalignment caused by diameter differences.",
    "roller-p4-btn": "Get a Quote",
    "roller-p5-title": "Wing Roller",
    "roller-p5-desc": "Reliable guide and balance rollers that maintain conveyor belt alignment, preventing belt drift and system wear.",
    "roller-p5-btn": "Get a Quote",
    "roller-p6-title": "Steel Spiral Return Roller",
    "roller-p6-desc": "Self-cleaning special construction prevents wet and sticky bulk materials from accumulating under the belt.",
    "roller-p6-btn": "Get a Quote",
    "roller-p7-title": "Standard Steel Rollers",
    "roller-p7-desc": "Conveyor components designed to international standards. Custom production available for carrying and return sides.",
    "roller-p7-btn": "Get a Quote",
    "roller-p8-title": "Fixed Angle Wing Rollers",
    "roller-p8-desc": "Fixed angle rollers fully compatible with mobile crusher and screen machine standards, effectively controlling belt wear.",
    "roller-p8-btn": "Get a Quote",
    "roller-p9-title": "Rubber Lagging Roller",
    "roller-p9-desc": "Vulcanized coated rollers applied to extend wear surface life or positively increase friction between the belt and the roller.",
    "roller-p9-btn": "Get a Quote",
    "roller-p10-title": "Beater Return Roller",
    "roller-p10-desc": "Specially developed rollers to prevent buildup of tough, sticky materials on the belt, providing higher operational efficiency.",
    "roller-p10-btn": "Get a Quote",
    "roller-p11-title": "Guide Rollers",
    "roller-p11-desc": "Designed to continuously maintain conveyor belt alignment. Prevents belt damage and increases the overall life of your conveying system.",
    "roller-p11-btn": "Get a Quote",
    "roller-p12-title": "Live Shaft Idler Roller",
    "roller-p12-desc": "Durable model designed with external bearings for operation in heavy-duty high-tension lines and feeder applications.",
    "roller-p12-btn": "Get a Quote",
    "roller-p13-title": "Pipe Conveyor Roller",
    "roller-p13-desc": "Pipe-shaped rollers optimized for enclosed pipe conveying systems to ensure safe and spill-free material transfer.",
    "roller-p13-btn": "Get a Quote"
});

Object.assign(translations.tr, {
    "idler-page-title": "Konveyör İstasyonları",
    "idler-page-desc": "Gelişmiş taşıma sistemleri için dayanıklı ve güvenilir konveyör istasyon çözümleri.",
    "idler-p1-title": "Taşıyıcı İstasyon",
    "idler-p1-desc": "Bant ve taşıma bölümündeki yükü destekleyerek güvenli bir taşıma sağlar. 20°, 35°, 45° açılarda özel olarak üretilmektedir.",
    "idler-p1-btn": "Teklif Al",
    "idler-p2-title": "Şaşırtmalı Taşıyıcı İstasyon",
    "idler-p2-desc": "Ruloların hafifçe kaydırılmış / şaşırtmalı olarak konumlandırıldığı bu sistem, bantı merkezleyip hizalamayı kolaylaştırarak operasyon kararlılığını artırır.",
    "idler-p2-btn": "Teklif Al",
    "idler-p3-title": "Darbe İstasyonu",
    "idler-p3-desc": "Yükleme noktalarında düşen malzemelerin etkisini emerek bantı korur. Standart açıların dışında özel projelere uygun üretim de yapılabilir.",
    "idler-p3-btn": "Teklif Al",
    "idler-p4-title": "Düz Dönüş İstasyonu",
    "idler-p4-desc": "Konveyör bandının dönüş kısmını desteklemek için kullanılır. Yapışkan veya aşındırıcı olmayan standart taşımacılık sistemlerinde idealdir.",
    "idler-p4-btn": "Teklif Al",
    "idler-p5-title": "Kauçuk Diskli Dönüş İstasyonu",
    "idler-p5-desc": "Yapışkan, korozyona yol açan veya aşındırıcı özellikteki zorlu malzemelerin bulunduğu dönüş hatlarını desteklemek için özel kauçuk disklerle donatılmıştır.",
    "idler-p5-btn": "Teklif Al",
    "idler-p6-title": "Çelik Spiral Dönüş İstasyonu",
    "idler-p6-desc": "Sadece kendini temizlemekle kalmaz, aynı zamanda zorlu dönüş şeridinde malzemeyi sıyırarak bant sapması sorunlarını en aza indirir.",
    "idler-p6-btn": "Teklif Al",
    "idler-p7-title": "V Tipi Dönüş İstasyonu",
    "idler-p7-desc": "Konveyör bandının dönüş hattında V formunda konumlanmış makaralarla bantın merkezde kalmasını sağlar, sapmayı engeller ve dayanıklılığı artırır.",
    "idler-p7-btn": "Teklif Al",
    "idler-p8-title": "Merkezleme İstasyonu",
    "idler-p8-desc": "Bant eksenindeki kaymaları otomatik olarak düzelterek taşıma işleminin kesintisiz olarak sürekli merkez konumda kalmasını sağlayan taşıyıcı istasyonlardır.",
    "idler-p8-btn": "Teklif Al",
    "idler-p9-title": "Merkezleme Dönüş İstasyonu",
    "idler-p9-desc": "Sistemin alt/dönüş bandındaki sapmaları tespit edip otomatik olarak merkez pozisyonuna getiren hayati hizalama istasyonlarıdır.",
    "idler-p9-btn": "Teklif Al"
});

Object.assign(translations.en, {
    "idler-page-title": "Conveyor Idlers",
    "idler-page-desc": "Durable and reliable conveyor idler solutions for advanced conveying systems.",
    "idler-p1-title": "Troughing Carrying Idler",
    "idler-p1-desc": "Supports the belt and load in the transport section of the conveyor. Designed and manufactured with trough angles of 20°, 35°, 45°.",
    "idler-p1-btn": "Get a Quote",
    "idler-p2-title": "Offset Trough Idlers",
    "idler-p2-desc": "Positioned slightly offset to create a trough shape, helping to guide and center the belt, preventing it from off-tracking.",
    "idler-p2-btn": "Get a Quote",
    "idler-p3-title": "Troughing Impact Idler",
    "idler-p3-desc": "Protects the belt by absorbing impacts at loading and transfer points. Available in various angles up to custom designs.",
    "idler-p3-btn": "Get a Quote",
    "idler-p4-title": "Flat Return Idler",
    "idler-p4-desc": "Used as support for the return side of the belt. Ideal where materials are not sticky, corrosive, or abrasive.",
    "idler-p4-btn": "Get a Quote",
    "idler-p5-title": "Rubber Disc Return Idler",
    "idler-p5-desc": "Equipped with rubber discs as support for the return side of the belt where sticky, corrosive, or abrasive materials are present.",
    "idler-p5-btn": "Get a Quote",
    "idler-p6-title": "Steel Spiral Return Idler",
    "idler-p6-desc": "Cleans itself and keeps the belt clean; its double spiral configuration minimizes belt training problems such as misalignment.",
    "idler-p6-btn": "Get a Quote",
    "idler-p7-title": "Vee Return Idlers",
    "idler-p7-desc": "Designed with a V-shape to support and guide the returning side, creating tension and preventing sagging or misaligning.",
    "idler-p7-btn": "Get a Quote",
    "idler-p8-title": "Self-Aligning Idler",
    "idler-p8-desc": "Self-acting tracking set used for correcting belt tracking issues and constantly maintaining the belt in a central position.",
    "idler-p8-btn": "Get a Quote",
    "idler-p9-title": "Self-Aligning Return Idler",
    "idler-p9-desc": "Crucial alignment return sets used for correcting belt tracking errors precisely on the return side.",
    "idler-p9-btn": "Get a Quote"
});

Object.assign(translations.tr, {
    "pulley-page-title": "Konveyör Tamburları",
    "pulley-page-desc": "Bantlı konveyör sistemleri için yüksek performanslı ve uzun ömürlü tahrik, kuyruk ve gergi tamburları.",
    "pulley-p1-title": "Tahrik Tamburu",
    "pulley-p1-desc": "Gücü aktarmak için sistemin ana parçasıdır. Taşıma kapasitesine göre hafif, orta ve ağır hizmet tiplerinde üretilebilir. Çeşitli mil çapları ve eksen açıklıklarında mevcuttur.",
    "pulley-p1-btn": "Teklif Al",
    "pulley-p2-title": "Kuyruk Tamburu",
    "pulley-p2-desc": "Konveyör bandını tahrik tamburuna geri yönlendirmek için kullanılır. İç veya dış rulmanlarla monte edilebilir ve genellikle konveyör hattının sonunda bulunur. Aynı zamanda gergi tamburu olarak da görev yapabilir.",
    "pulley-p2-btn": "Teklif Al",
    "pulley-p3-title": "Kelebek Tambur (Wing Pulley)",
    "pulley-p3-desc": "Otomatik kendini temizleme özelliği sayesinde dönme sırasında yabancı maddeleri yanlara boşaltır. Özel kanat tasarımı bant kaymasını ve aşınmasını azaltırken, malzeme birikmesini engeller.",
    "pulley-p3-btn": "Teklif Al"
});

Object.assign(translations.en, {
    "pulley-page-title": "Conveyor Pulleys",
    "pulley-page-desc": "High-performance and long-lasting drive, tail, and take-up pulleys for belt conveyor systems.",
    "pulley-p1-title": "Head Drive Pulley",
    "pulley-p1-desc": "The main part for transmitting power. Can be divided into light duty, medium duty, and heavy duty based on carrying capacities, with various axle diameters and central spans.",
    "pulley-p1-btn": "Get a Quote",
    "pulley-p2-title": "Tail Pulley",
    "pulley-p2-desc": "Used to redirect a conveyor belt back toward the drive pulley. Can have internal or external bearings, usually located at the end of the bed, commonly serving as a take-up pulley.",
    "pulley-p2-btn": "Get a Quote",
    "pulley-p3-title": "Wing Pulleys",
    "pulley-p3-desc": "Provide automatic self-cleaning action by discharging foreign material to the side. Individual wing construction reduces belt misalignment and wear by preventing material build-up.",
    "pulley-p3-btn": "Get a Quote"
});

Object.assign(translations.tr, {
    "products-page-title": "Ürünlerimiz",
    "products-page-desc": "Gelişmiş taşıma sistemlerinde dünya standartlarındaki kaliteli konveyör ekipmanları.",
    "prod-cat1-title": "Konveyör Rulo",
    "prod-cat1-desc": "Taşıyıcı, darbe ve dönüş alanlarında sistemin can damarı olan yüksek standartlı rulolar.",
    "prod-cat1-btn": "Ürünleri İncele",
    "prod-cat2-title": "Konveyör İstasyon",
    "prod-cat2-desc": "Taşıma, merkezleme ve dönüş bölümlerinde stabiliteyi maksimuma çıkaran istasyon grupları.",
    "prod-cat2-btn": "Ürünleri İncele",
    "prod-cat3-title": "Konveyör Tambur",
    "prod-cat3-desc": "Sistemdeki gücü aktarmak veya bandı gerip yönlendirmek için kullanılan ana bileşenler.",
    "prod-cat3-btn": "Ürünleri İncele",
    "hero1-w1": "Güvenilir",
    "hero1-w2": "Teknolojik",
    "hero1-w3": "Kaliteli",
    "hero1-title": "KGM-SAN",
    "hero1-btn1": "Ürünlerimiz",
    "hero1-btn2": "Hakkımızda",
    "hero-title2": "Yeşil Enerji Odaklı Üretim",
    "hero-desc2": "Geleceğin teknolojileriyle doğaya duyarlı, yüksek verimli sistemler tasarlıyoruz.",
    "hero-btn2": "Vizyonumuzu Keşfedin",
    "hero-title3": "Projeye Özel Mühendislik",
    "hero-desc3": "İhtiyaçlarınıza tam uyumlu, dayanıklı ve yenilikçi AR-GE çözümleri.",
    "hero-btn3": "İletişime Geçin",
    "hero-title4": "Yüksek Kaliteli Rulolar",
    "hero-desc4": "Sisteminizin can damarı olan uluslararası standartlarda konveyör rulo çözümleri.",
    "hero-btn4": "Ruloları İnceleyin"
});

Object.assign(translations.en, {
    "products-page-title": "Our Products",
    "products-page-desc": "World-class quality conveyor equipment for advanced bulk material handling systems.",
    "prod-cat1-title": "Conveyor Roller",
    "prod-cat1-desc": "High standard rollers constituting the lifeblood of the system in carrying, impact, and return areas.",
    "prod-cat1-btn": "View Products",
    "prod-cat2-title": "Conveyor Idler",
    "prod-cat2-desc": "Idler sets that maximize stability in carrying, aligning, and return sections.",
    "prod-cat2-btn": "View Products",
    "prod-cat3-title": "Conveyor Pulley",
    "prod-cat3-desc": "The main parts used for transmitting power in the system or tensioning and redirecting the belt.",
    "prod-cat3-btn": "View Products",
    "hero1-w1": "Reliable",
    "hero1-w2": "Technological",
    "hero1-w3": "High Quality",
    "hero1-title": "KGM-SAN",
    "hero1-btn1": "Our Products",
    "hero1-btn2": "About Us",
    "hero-title2": "Green Energy Focused Production",
    "hero-desc2": "Designing eco-friendly, high-efficiency systems with future technologies.",
    "hero-btn2": "Discover Our Vision",
    "hero-title3": "Custom Engineering",
    "hero-desc3": "Durable and innovative R&D solutions perfectly tailored to your needs.",
    "hero-btn3": "Contact Us",
    "hero-title4": "High Quality Rollers",
    "hero-desc4": "Standard-compliant roller solutions acting as the lifeblood of your system.",
    "hero-btn4": "View Rollers"
});

// --- HERO SLIDER LOGIC ---
let slideIndex = 0;
let slideTimer;

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    if(slides.length === 0) return;
    
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function changeSlide(n) {
    clearInterval(slideTimer);
    slideIndex += n;
    showSlides(slideIndex);
    startSlider();
}

function currentSlide(n) {
    clearInterval(slideTimer);
    slideIndex = n;
    showSlides(slideIndex);
    startSlider();
}

function startSlider() {
    let slides = document.querySelectorAll('.slide');
    if(slides.length > 0) {
        slideTimer = setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 9000); // 9 seconds to accommodate Pres-san style cinematic text animation
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    startSlider();

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll reveal for product cards
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show-card');
                }, index * 200); // 200ms stagger
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.card').forEach(card => {
        cardObserver.observe(card);
    });

    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-title');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const prodTitle = document.getElementById('products-title');
    if (prodTitle) {
        titleObserver.observe(prodTitle);
    }
});