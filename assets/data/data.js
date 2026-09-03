/**
 * Kafeinarts - Central Data Store
 * Semua data dinamis (foto, teks, layanan, FAQ, tim) terpusat di sini
 * agar mudah dirawat dan konsisten antar komponen.
 * Dipanggil oleh assets/js/loader.js untuk render komponen.
 */

const siteData = {
  brand: {
    name: "Kafeinarts",
    logo: "assets/img/logo.png",
    favicon: "assets/img/favicon.png",
    appleTouchIcon: "assets/img/apple-touch-icon.png",
    accent: "#00205D",
    headingColor: "#37517e",
  },

  nav: [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Kelebihan", href: "#why-us" },
    { label: "Keahlian", href: "#skills" },
    { label: "Layanan", href: "#services" },
    { label: "Tim", href: "#team" },
    { label: "FAQ", href: "#faq-2" },
    { label: "Kontak", href: "#contact" },
  ],

  hero: {
    title: "Inovasi Digital Bersama<br>Kafeinarts Interactive",
    subtitle:
      "Mitra teknis andal dalam merancang sistem manajemen dan produk SaaS <em>full-stack</em> yang tangguh untuk mempercepat operasional serta skalabilitas bisnis Anda.",
    ctaPrimary: { label: "Pelajari Lebih Lanjut", href: "#about", icon: "bi-book" },
    ctaSecondary: { label: "Hubungi Kami", href: "#contact", icon: "bi-telephone" },
    image: "assets/img/hero-img.png",
    imageAlt: "Kafeinarts Interactive SaaS Dashboard",
  },

  about: {
    title: "About Us",
    left: {
      intro:
        "Di <strong>Kafeinarts</strong>, kami memadukan energi kreatif dan keahlian teknis untuk membangun produk digital yang fungsional sekaligus estetis. Kami percaya bahwa arsitektur sistem yang baik harus dibarengi dengan antarmuka yang brilian.",
      features: [
        {
          icon: "bi-check2-circle",
          title: "Pengembangan SaaS & Web:",
          desc: "Solusi <em>full-stack</em> yang andal, efisien, dan siap berskala.",
        },
        {
          icon: "bi-check2-circle",
          title: "Desain Intuitif (UI/UX):",
          desc: "Menyajikan pengalaman pengguna yang mulus dan menarik secara visual.",
        },
        {
          icon: "bi-check2-circle",
          title: "Teknologi Modern:",
          desc: "Menggunakan <em>tech-stack</em> terkini untuk performa aplikasi yang optimal.",
        },
      ],
    },
    right: {
      text:
        "Berawal dari dedikasi tinggi terhadap pengembangan <em>software</em> dan seni digital, Kafeinarts hadir sebagai mitra teknis andal untuk bisnis Anda. Kami tidak sekadar menulis kode; kami merancang ekosistem digital yang utuh—dari infrastruktur <em>backend</em> yang tangguh untuk sistem manajemen atau operasional, hingga <em>frontend</em> interaktif yang memanjakan mata. Kami siap membantu Anda mengubah ide kompleks menjadi produk digital yang berkinerja tinggi.",
      cta: { label: "Kenali Kami Lebih Jauh", href: "#" },
    },
  },

  whyUs: {
    heading: '<span>Mengapa Memilih Kafeinarts? </span><strong>Mitra Tepat untuk Transformasi Digital Anda</strong>',
    desc:
      "Kami tidak sekadar menulis kode atau menggambar desain. Kami merancang solusi teknologi yang disesuaikan dengan kebutuhan bisnis Anda, menggabungkan performa tinggi di balik layar dengan visual yang memukau di layar depan.",
    image: "assets/img/why-us.png",
    imageAlt: "Kafeinarts Web Development Illustration",
    items: [
      {
        id: "01",
        title: "Pendekatan Full-Stack & Desain Estetis",
        desc:
          "Dari arsitektur <em>database</em> yang kokoh hingga antarmuka pengguna yang responsif. Kami memastikan setiap baris kode dan elemen desain bekerja secara harmonis untuk menciptakan pengalaman pengguna (UI/UX) yang intuitif dan berkesan.",
        active: true,
      },
      {
        id: "02",
        title: "Solusi SaaS yang Skalabel & Efisien",
        desc:
          "Aplikasi yang kami bangun dirancang untuk tumbuh bersama bisnis Anda. Kami berfokus pada digitalisasi alur kerja dan sistem manajemen yang kompleks agar operasional harian Anda menjadi lebih cepat, terstruktur, dan efisien.",
        active: false,
      },
      {
        id: "03",
        title: "Teknologi Modern & Keandalan Jangka Panjang",
        desc:
          "Kami memanfaatkan <em>tech-stack</em> pengembangan web terkini untuk membangun ekosistem digital yang tangguh. Hasilnya adalah produk <em>software</em> yang tidak hanya cepat saat diluncurkan, tetapi juga aman dan mudah dipelihara di masa depan.",
        active: false,
      },
    ],
  },

  skills: {
    heading: "Berbekal Ekosistem Teknologi Modern & Andal",
    desc:
      "Kami memadukan arsitektur sistem yang tangguh, framework mutakhir, serta elemen desain visual untuk membangun aplikasi SaaS yang cepat, aman, dan memanjakan mata.",
    image: "assets/img/illustration/illustration-10.webp",
    imageAlt: "Kafeinarts Technology Stack",
    items: [
      { label: "Backend (PHP, Laravel, Node.js)", value: 90 },
      { label: "Frontend (HTML, CSS, Tailwind, JS)", value: 95 },
      { label: "Database & Arsitektur (MySQL)", value: 85 },
      { label: "UI/UX & Multimedia Design", value: 80 },
    ],
  },

  services: [
    {
      icon: "bi-laptop",
      title: "Website & Sistem Bisnis",
      desc:
        "Hadirkan wajah profesional di dunia digital sekaligus otomatisasi proses operasional harian Anda dalam satu platform.",
      delay: 100,
    },
    {
      icon: "bi-phone",
      title: "Aplikasi Pelanggan",
      desc:
        "Jangkau target pasar lebih dekat melalui aplikasi smartphone yang dirancang untuk meningkatkan loyalitas dan interaksi pelanggan.",
      delay: 200,
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Infrastruktur Digital",
      desc:
        "Sistem penyimpanan terpusat yang fleksibel, memastikan bisnis Anda tetap berjalan lancar dan siap dikembangkan kapan saja.",
      delay: 300,
    },
    {
      icon: "bi-shield-lock",
      title: "Perlindungan Data",
      desc:
        "Amankan aset digital, privasi pelanggan, dan data rahasia perusahaan Anda agar bisnis dapat terus beroperasi dengan tenang.",
      delay: 400,
    },
  ],

  cta: {
    bg: "assets/img/bg/bg-8.webp",
    bgAlt: "Latar Belakang Kafeinarts",
    title: "Siap Mewujudkan Ide Digital Anda?",
    desc:
      "Jangan biarkan ide cemerlang Anda hanya menjadi rencana. Baik itu pengembangan aplikasi SaaS, sistem manajemen, hingga solusi cloud, kami siap berkolaborasi merancang teknologi yang mempercepat pertumbuhan bisnis Anda. Mari diskusikan kebutuhan Anda bersama Kafeinarts.",
    button: { label: "Mulai Konsultasi", href: "#contact" },
  },

  faq: [
    {
      q: "Layanan digital apa saja yang disediakan oleh Kafeinarts?",
      a:
        "Kami berfokus pada pengembangan produk SaaS (Software as a Service), pembuatan website atau aplikasi web khusus (custom), perancangan antarmuka pengguna (UI/UX), hingga pengelolaan <em>cloud</em> dan keamanan sistem untuk mendukung operasional bisnis Anda dari hulu ke hilir.",
      active: true,
      delay: 200,
    },
    {
      q: "Berapa lama estimasi waktu pengerjaan untuk satu proyek aplikasi SaaS?",
      a:
        "Waktu pengerjaan sangat bergantung pada skala, fitur, dan kompleksitas proyek. Untuk sistem manajemen skala kecil hingga menengah biasanya memakan waktu 4-8 minggu. Kami akan memberikan jadwal (<em>timeline</em>) yang transparan dan terukur setelah tahap diskusi dan analisis kebutuhan awal selesai.",
      active: false,
      delay: 300,
    },
    {
      q: "Teknologi apa saja yang digunakan dalam proses pengembangan?",
      a:
        "Kami menyusun arsitektur sistem menggunakan ekosistem teknologi yang tangguh dan modern. Secara umum, kami memanfaatkan PHP, Laravel, atau Node.js untuk <em>backend</em>; HTML, CSS, Tailwind, dan JavaScript untuk <em>frontend</em> yang responsif; serta arsitektur <em>database</em> relasional seperti MySQL untuk menjamin integritas data Anda.",
      active: false,
      delay: 400,
    },
    {
      q: "Apakah ada layanan pemeliharaan (maintenance) setelah aplikasi dirilis?",
      a:
        "Tentu saja. Kami memahami bahwa produk digital membutuhkan pengawasan agar tetap aman dan berjalan optimal. Kami menawarkan paket dukungan teknis dan pemeliharaan jangka panjang untuk menangani perbaikan <em>bug</em>, pembaruan keamanan, hingga penambahan fitur baru di masa mendatang.",
      active: false,
      delay: 500,
    },
    {
      q: "Bagaimana langkah pertama untuk memulai kerja sama?",
      a:
        "Sangat mudah! Anda cukup menghubungi kami melalui form kontak atau tombol konsultasi. Kita akan menjadwalkan diskusi santai untuk memahami kendala, target, dan kebutuhan bisnis Anda. Setelah itu, kami akan menyusun draf proposal yang mencakup solusi teknis serta estimasi investasi yang dibutuhkan.",
      active: false,
      delay: 600,
    },
  ],

  team: {
    title: "Tim Kami",
    subtitle: "Kenali talenta kreatif & teknis di balik setiap inovasi Kafeinarts",
    members: [
      {
        name: "Fahrul Saputra",
        role: "Chief Executive Officer",
        img: "assets/img/teams/1.png",
        alt: "Fahrul Saputra - Chief Executive Officer",
        delay: 100,
      },
      {
        name: "Arif Permana Putrasuryana",
        role: "Supervisor System Developer",
        img: "assets/img/teams/2.png",
        alt: "Arif Permana Putrasuryana - Supervisor System Developer",
        delay: 150,
      },
      {
        name: "Arief Ramadhan",
        role: "Digital Marketer",
        img: "assets/img/teams/3.png",
        alt: "Arief Ramadhan - Digital Marketer",
        delay: 200,
      },
      {
        name: "Hanif Wisanggeni Prabowo",
        role: "Back End Developer",
        img: "assets/img/teams/4.png",
        alt: "Hanif Wisanggeni Prabowo - Back End Developer",
        delay: 250,
      },
      {
        name: "Naufal Daffa Bayu Putra.T",
        role: "Digital Marketer",
        img: "assets/img/teams/5.png",
        alt: "Naufal Daffa Bayu Putra.T - Digital Marketer",
        delay: 300,
      },
    ],
  },

  contact: {
    title: "Kontak",
    subtitle:
      "Mari diskusikan kebutuhan proyek digital Anda. Kami siap membantu dari tahap perencanaan hingga implementasi.",
    info: {
      address: "Depok, Jawa Barat, Indonesia",
      phone: "+62 858-1704-8266",
      email: "halo@kafeinarts.com",
      mapSrc:
        "https://maps.google.com/maps?q=Depok,%20West%20Java,%20Indonesia&t=&z=12&ie=UTF8&iwloc=&output=embed",
    },
    form: {
      whatsapp: {
        // Nomor sudah dalam format internasional tanpa + — dropdown Staff IT / Staff Customer Service
        spvIT: { label: "Staff IT", display: "0858-1704-8200", wa: "6285817048200" },
        marketing: { label: "Staff Customer Service", display: "0895-3318-47715", wa: "62895331847715" },
        // alias agar kompatibel dengan kode lama & baru
        staffIT: { label: "Staff IT", display: "0858-1704-8200", wa: "6285817048200" },
        staffCS: { label: "Staff Customer Service", display: "0895-3318-47715", wa: "62895331847715" },
      },
      // Default tujuan jika tidak memilih
      defaultTarget: "spvIT",
    },
  },

  footer: {
    newsletter: {
      title: "Dapatkan Pembaruan Terbaru",
      desc:
        "Berlangganan newsletter kami untuk mendapatkan wawasan teknologi, tips pengembangan SaaS, dan berita terbaru dari Kafeinarts!",
      placeholder: "Masukkan email Anda",
      button: "Berlangganan",
    },
    about: {
      title: "Kafeinarts",
      address: ["Depok, Jawa Barat", "Indonesia"],
      phone: "+62 858-1704-8266",
      email: "halo@kafeinarts.com",
    },
    links: {
      useful: [
        { label: "Beranda", href: "#hero" },
        { label: "Tentang Kami", href: "#about" },
        { label: "Layanan", href: "#services" },
        { label: "Tanya Jawab (FAQ)", href: "#faq-2" },
      ],
      services: [
        { label: "Pengembangan Web", href: "#services" },
        { label: "Pengembangan Mobile", href: "#services" },
        { label: "Cloud Development", href: "#services" },
        { label: "Keamanan Sistem", href: "#services" },
      ],
    },
    social: [
      { icon: "bi-twitter-x", href: "#" },
      { icon: "bi-facebook", href: "#" },
      { icon: "bi-instagram", href: "#" },
      { icon: "bi-linkedin", href: "#" },
      { icon: "bi-github", href: "#" },
    ],
    copyright: "© 2026 Kafeinarts Dilindungi Undang-Undang",
  },
};

// Expose globally for non-module scripts
if (typeof window !== "undefined") {
  window.siteData = siteData;
}

// ES Module export juga
if (typeof module !== "undefined" && module.exports) {
  module.exports = siteData;
}
