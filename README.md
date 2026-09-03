# ☕ Kafeinarts — Landing Page (Tugas Kelompok)

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Collaboration](https://img.shields.io/badge/Collaboration-2_Players-orange)
![Accent](https://img.shields.io/badge/Accent-%2300205D-00205D)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple)

## 📌 Deskripsi
Repository ini memuat source code untuk **Landing Page Kafeinarts**, yang merupakan **Tugas Utama** latihan kolaborasi pengembangan web (2-Player). Proyek ini difokuskan pada pembuatan antarmuka yang rapi, modern, dan sepenuhnya responsif (Desktop & Mobile) menggunakan pendekatan kolaborasi tim yang terstruktur.

Landing Page ini menerjemahkan materi dari presentasi (PPT) Kafeinarts menjadi sebuah produk digital, yang mencakup:
- **Identitas Kafeinarts:** Siapa kami dan apa yang Tim Remaja Kafeinarts kerjakan.
- **Layanan & Produk:** Etalase dari solusi yang ditawarkan.
- **Branding Konsisten:** Menerapkan panduan visual, warna, dan tipografi Kafeinarts secara presisi.

> **Aksen warna resmi:** `#00205D` (Navy Kafeinarts) — digunakan untuk navbar, tombol, dan elemen aksen. Navbar transparan di atas hero dan solid `#00205D` saat scroll, tautan aktif diberi **underline putih**.

---

## 🔗 Repository
**GitHub Repository:**
[https://github.com/itsmebroarif/Kafeinarts](https://github.com/itsmebroarif/Kafeinarts)

**Live Preview (lokal):**
```bash
# clone
git clone https://github.com/itsmebroarif/Kafeinarts.git
cd Kafeinarts
# jalankan dengan Live Server / http server
python -m http.server 8000
# buka http://localhost:8000
```

---

## 🏢 Profil Perusahaan — Kafeinarts Interactive

### Siapa Kami?
**Kafeinarts Interactive** adalah mitra teknis andal dalam merancang **sistem manajemen** dan produk **SaaS full-stack** yang tangguh untuk mempercepat operasional serta skalabilitas bisnis. Kami memadukan **energi kreatif** dan **keahlian teknis** untuk membangun produk digital yang fungsional sekaligus estetis.

> *“Kami percaya arsitektur sistem yang baik harus dibarengi dengan antarmuka yang brilian.”*

Berawal dari dedikasi tinggi terhadap pengembangan *software* dan seni digital, Kafeinarts hadir sebagai **mitra teknis end-to-end** — dari infrastruktur *backend* yang tangguh hingga *frontend* interaktif yang memanjakan mata.

**Lokasi:** Depok, Jawa Barat, Indonesia  
**Telepon:** +62 858-1704-8266  
**Email:** halo@kafeinarts.com

### Visi & Misi
- **Visi:** Menjadi ekosistem digital yang mempercepat transformasi bisnis melalui teknologi yang skalabel, aman, dan estetik.
- **Misi:** 
  1. Merancang solusi `full-stack` yang efisien dan siap berskala.
  2. Menyajikan UI/UX intuitif dan menarik secara visual.
  3. Menggunakan *tech-stack* modern untuk performa optimal.

---

## 🧭 Struktur Halaman `index.html` — Penjelasan Detail

Landing page terdiri dari **9 section utama** + **header/footer**. Semua section menggunakan `AOS` (Animate On Scroll) dan responsif Bootstrap 5.

### 1. Header / Navbar (`#header`)
- **Posisi:** `fixed-top`, transparan `rgba(255,255,255,0)` di atas hero, berubah jadi solid `#00205D` saat `scrollY > 100` (class `scrolled` via `main.js:toggleScrolled`).
- **Logo:** Teks `Kafeinarts` (`Jost` 30px uppercase).
- **Menu:** `Beranda (#hero)` • `Tentang (#about)` • `Kelebihan (#why-us)` • `Keahlian (#skills)` • `Layanan (#services)` • `Tim (#team)` • `FAQ (#faq-2)` • `Kontak (#contact)`. Tautan **aktif** diberi `underline` putih `2.5px` (`main.css:426`) dan `color: #fff` (tetap putih).
- **Aksi:** Mobile toggle `bi-list` → `bi-x`. Scrollspy (`main.js:navmenuScrollspy`) otomatis menambah `active`.
- **Warna:** `--nav-color:#fff`, `--nav-hover-color:#fff` (tetap putih, hanya underline sebagai penanda).

### 2. Hero / Jumbotron (`#hero`)
- **Tinggi:** `min-height: 100vh / 100svh / 100dvh` — **full screen** sesuai viewport, `padding:110px 0 60px` agar tidak tertutup header, `overflow:hidden`, `display:flex; align-items:center`.
- **Background:** Override `dark-background` menjadi `#00205D` agar **seamless** dengan navbar transparan (tidak terlihat putih).
- **Konten Kiri:** 
  - `h1`: *“Inovasi Digital Bersama Kafeinarts Interactive”* (`Jost` 48px)
  - `p`: Tagline *“Mitra teknis andal … full-stack …”* (`Open Sans` 22px, `transparent 30%`)
- **CTA Baru:**
  - **Pelajari Lebih Lanjut** (`href="#about"`, `class="btn-hero-primary"`, icon `bi-book`) 
  - **Hubungi Kami** (`href="#contact"`, `class="btn-hero-outline"`, icon `bi-telephone`)
  - Style: awal `color:#fff` + `background: rgba(255,255,255,0.10)` + `border:1.5px solid rgba(255,255,255,0.92)` + `backdrop-filter:blur(6px)` → terlihat di atas navy. Hover: `background:#fff`, `color:#00205D` (aksen), `glow` `box-shadow: 0 0 32px rgba(255,255,255,0.42) + 0 8px 28px rgba(255,255,255,0.35)` + `translateY(-2px)`.
- **Kanan:** `hero-img.png` dengan animasi `up-down 2s infinite`.

### 3. About Us (`#about`)
- **Judul:** `About Us`
- **Kiri:** Paragraf *“Di Kafeinarts, kami memadukan energi kreatif …”* + 3 checklist (`bi-check2-circle` aksen `#00205D`):
  1. **Pengembangan SaaS & Web:** full-stack andal.
  2. **Desain Intuitif (UI/UX):** mulus & visual.
  3. **Teknologi Modern:** tech-stack terkini.
- **Kanan:** Paragraf *“Berawal dari dedikasi …”* + tombol `Kenali Kami Lebih Jauh` (`read-more` border aksen, hover solid `#00205D`).

### 4. Why Us (`#why-us`, `light-background #f5f6f8`)
- **Kiri:** Heading *“Mengapa Memilih Kafeinarts? Mitra Tepat untuk Transformasi Digital”* + 3 FAQ accordion:
  - `01 Pendekatan Full-Stack & Desain Estetis`
  - `02 Solusi SaaS yang Skalabel & Efisien`
  - `03 Teknologi Modern & Keandalan Jangka Panjang`
  - Aktif (`faq-active`) menampilkan konten dengan `grid-template-rows:1fr`.
- **Kanan:** Ilustrasi `why-us.png` (`max-height:70%`, `zoom-in`).

### 5. Skills (`#skills`)
- **Kiri:** Ilustrasi `illustration-10.webp`
- **Kanan:** `h3` *“Berbekal Ekosistem Teknologi Modern & Andal”* + 4 progress bar (animasi `Waypoint` 80% offset):
  - `Backend (PHP, Laravel, Node.js) 90%`
  - `Frontend (HTML, CSS, Tailwind, JS) 95%`
  - `Database & Arsitektur (MySQL) 85%`
  - `UI/UX & Multimedia Design 80%`
  - Bar `width` diisi via `aria-valuenow`.

### 6. Services (`#services`, `light-background`)
- **Judul:** *“Layanan Kami — Solusi teknologi end-to-end …”*
- **4 Kartu** (`col-xl-3 col-md-6`, `box-shadow`, `hover: translateY(-10px)`):
  1. **Website & Sistem Bisnis** (`bi-laptop`) — wajah profesional + otomatisasi.
  2. **Aplikasi Pelanggan** (`bi-phone`) — loyalitas via mobile.
  3. **Infrastruktur Digital** (`bi-cloud-arrow-up`) — penyimpanan terpusat fleksibel.
  4. **Perlindungan Data** (`bi-shield-lock`) — keamanan aset digital.
  - Kartu `p-4`, `text-center`, `icon` aksen `#00205D`.

### 7. Call To Action (`#call-to-action`, `dark-background` + `bg-8.webp` fixed)
- **Overlay:** `color-mix(background, transparent 35%)`
- **Kiri:** `Siap Mewujudkan Ide Digital Anda?` + deskripsi kolaborasi SaaS/cloud.
- **Kanan:** `Mulai Konsultasi` (`cta-btn` border putih `2px`, hover `background:#00205D`).

### 8. FAQ 2 (`#faq-2`, `light-background`)
- **Judul:** *“Pertanyaan yang Sering Diajukan (FAQ)”*
- **5 Item** (`col-lg-10` terpusat):
  1. Layanan digital apa saja?
  2. Estimasi waktu SaaS (4–8 minggu)?
  3. Teknologi (PHP/Laravel/Node.js, Tailwind, MySQL)?
  4. Maintenance jangka panjang?
  5. Langkah memulai kerja sama (form kontak → proposal)?
  - Toggle via `main.js` (`faq-item h3` click → `faq-active`).

### 9. Team (`#team`)
- **Judul:** *“Tim Kami — Kenali talenta kreatif & teknis …”*
- **Layout Baru:** 5 **portrait card** `col-xl-3 col-lg-4 col-md-6` (`justify-content-center`), `aspect-ratio:3/4`, `border-radius:18px`, `box-shadow 0 8px 28px`.
  - Foto dari `assets/img/teams/1.png` … `5.png` (portrait, `object-fit:cover`).
  - Overlay gradient `linear-gradient(to top, rgba(0,0,0,0.78) ...)` + nama & jabatan putih.
  - Icon zoom `bi-zoom-in` muncul hover (`opacity 0→1`, `scale 0.85→1`).
  - Hover card: `translateY(-6px)` + `img scale(1.07)` + shadow `0 18px 40px`.
- **Anggota (update terbaru):**
  1. **Fahrul Saputra** — Chief Executive Officer (`1.png`)
  2. **Arif Permana Putrasuryana** — Supervisor System Developer (`2.png`)
  3. **Arief Ramadhan** — Digital Marketer (`3.png`) _(data-card: William Anderson/CTO)_
  4. **Hanif Wisanggeni Prabowo** — Back End Developer (`4.png`)
  5. **Naufal Daffa Bayu Putra.T** — Digital Marketer / Lead Developer (`5.png`)
- **Popup Lightbox** (`#teamLightbox`):
  - Klik card → modal `fixed inset-0` `backdrop rgba(10,18,36,0.92) blur(8px)`, `img max-height:72vh` + caption + counter `1/5`.
  - Navigasi: tombol `prev/next` (`bi-chevron`), klik backdrop/close/`Esc`, klik foto → next, keyboard `ArrowLeft/Right`.
  - **Swipe/Tap:** `touchstart/touchend` threshold `45px` horizontal → ganti foto, `mousedown/mouseup` drag desktop `60px`, `wheel` prevent scroll, hint `swipe / geser`.
  - Logic di `assets/js/main.js:233` (`teamData`, `openLightbox`, `updateLightbox`).

### 10. Contact (`#contact`)
- **Kiri (`info-wrap` border `3px solid #00205D`):**
  - `Alamat: Depok, Jawa Barat, Indonesia` (`bi-geo-alt`)
  - `Hubungi Kami: +62 858-1704-8266` (`bi-telephone`)
  - `Email: halo@kafeinarts.com` (`bi-envelope`)
  - `iframe` Google Maps `Depok`.
- **Kanan:** Form `onsubmit="sendToWhatsApp(event)"` → `name, email, subject, message` → `window.open(wa.me/...)` (validasi `required`). Tombol `Kirim Pesan via WhatsApp` (`background:var(--accent-color) #00205D`).

### 11. Footer (`#footer`)
- **Newsletter:** `Dapatkan Pembaruan Terbaru` + input email `Berlangganan` (`accent #00205D`).
- **Footer Top 4 kolom:**
  - `Kafeinarts` + alamat/telepon/email.
  - `Tautan Berguna`: Beranda, Tentang Kami, Layanan, FAQ.
  - `Layanan Kami`: Web, Mobile, Cloud, Keamanan.
  - `Ikuti Kami`: `bi-twitter-x`, `bi-facebook`, `bi-instagram`, `bi-linkedin`, `bi-github` (border hover aksen).
- **Copyright:** `© 2026 Kafeinarts Dilindungi Undang-Undang` + `BootstrapMade`.

---

## 🎨 Panduan Visual

| Elemen | Nilai |
| :--- | :--- |
| **Aksen** | `#00205D` (Navy) — ` --accent-color` |
| **Heading** | `#37517e` → hero override `#00205D` |
| **Background** | `#ffffff` (global), `#f5f6f8` (light), `#00205D` (hero/dark) |
| **Kontras** | `#ffffff` |
| **Font Heading** | `Jost` |
| **Font Body** | `Open Sans` |
| **Font Nav** | `Poppins` |
| **Radius** | `50px` (tombol), `18px` (team card), `16px` (lightbox) |
| **Shadow Aksen** | `color-mix(accent, transparent 90%)`, lightbox `0 20px 60px rgba(0,0,0,0.55)` |

**Navbar:** Transparan `rgba(255,255,255,0)` di hero (teks putih), solid `#00205D` saat scroll + shadow `0 2px 20px rgba(0,32,93,0.18)`. Active = **underline putih** `2.5px` + `text-white`.

**Hero CTA Glow:** `0 0 0 4px rgba(255,255,255,0.14)`, `0 8px 28px rgba(255,255,255,0.35)`, `0 0 32px rgba(255,255,255,0.42)`.

---

## ✨ Fitur Utama (Update Terbaru)

- [x] **Portrait Team Card** 3:4 dari `assets/img/teams/` + popup lightbox swipe/tap/klik/keyboard.
- [x] **Navbar Transparan → Solid** `#00205D` + underline putih aktif (teks tetap putih).
- [x] **Hero 100vh** (`100vh/100svh/100dvh`) seamless navy, tanpa celah putih.
- [x] **CTA Hero Baru:** `Pelajari Lebih Lanjut` & `Hubungi Kami` — teks putih awal, hover jadi putih + glow + teks aksen `#00205D`.
- [x] **Aksen Global** `#00205D` konsisten di tombol, icon, progress, dll.
- [x] **Responsif:** `col-xl-3` team, `flex-wrap` hero, `order` header mobile, `display:none` btn-team <480px.
- [x] **AOS, Swiper, GLightbox, Waypoints, Isotope** via vendor.

---

## 🛠️ Teknologi

- **HTML5** — semantic section (`#hero`, `#about`, `#team`, dll.)
- **CSS3** — `main.css` (±4000 baris) + `Bootstrap 5.3.3` + `Bootstrap Icons` + `color-mix`, `backdrop-filter`, `aspect-ratio`
- **JavaScript** — `main.js` (toggleScrolled, mobileNav, aosInit, swiper, faq toggle, lightbox team, scrollspy)
- **Aset:** `assets/img/teams/1-5.png`, `hero-img.png`, `why-us.png`, `illustration-10.webp`, `bg-8.webp`

---

## 📂 Struktur File

```
Kafeinarts/
├── index.html              # Landing page utama (profil lengkap di atas)
├── assets/
│   ├── css/main.css        # Style global + hero 100vh + team portrait + navbar
│   ├── js/main.js          # Logic scroll, AOS, lightbox team (swipe)
│   ├── img/
│   │   ├── teams/1-5.png   # Foto tim portrait
│   │   ├── hero-img.png
│   │   └── why-us.png
│   └── vendor/             # bootstrap, aos, glightbox, swiper, etc.
├── team.html               # (opsional) template team lama
└── README.md               # Dokumentasi ini
```

---

## 🚀 Cara Menjalankan

1. **Clone & buka:**
   ```bash
   git clone https://github.com/itsmebroarif/Kafeinarts.git
   cd Kafeinarts
   ```
2. **Jalankan lokal:**
   - VS Code → `Go Live` (Live Server) atau `python -m http.server 8000`
   - Buka `http://localhost:8000` atau `index.html` langsung.
3. **Edit:** Ubah `index.html` untuk konten, `assets/css/main.css` untuk warna (`#00205D`), `assets/js/main.js` untuk lightbox.

---

## 👨‍💻 Tim Pengembang (2-Player Co-op)

Kolaborasi pengembangan ini dikerjakan oleh:

| Nama | GitHub Profile | Peran / Fokus |
| :--- | :--- | :--- |
| **Arif Permana Putrasuryana** | [@itsmebroarif](https://github.com/itsmebroarif) | Full-stack & UI Integration |
| **Mahabbatul Auliya** | [@mhbbtuliyaa](https://github.com/mhbbtuliyaa) | Frontend & Layouting |
| **Fahrul Saputra** | — | Chief Executive Officer (konten tim) |
| **Hanif Wisanggeni P.** | — | Back End Developer |
| **Arief Ramadhan** | — | Digital Marketer |
| **Naufal Daffa Bayu P.** | — | Digital Marketer |

---

## 🗺️ Alur Kerja Kolaborasi (Git Workflow)

Untuk mencegah bentrok kode (*merge conflict*) dan menjaga kerapian *history*, kita menerapkan sistem **Feature Branching**. Jangan pernah melakukan *commit* atau *push* langsung ke branch `main`.

### ASCII Flowchart Workflow
```text
(Remote)  [main] -----------------------------------------------------> [main (Updated!)]
             \                                                             ^
(Local)       \--> [git pull origin main]                                  | (Merge setelah Review)
                   [git checkout -b feat/nama-fitur]                       |
                          |                                                |
                      (Ngoding)                                            |
                          |                                                |
                   [git commit -m "..."]                                   |
                          |                                                |
(Remote)           [git push origin feat/nama-fitur] ----------------> [Pull Request]
```

**Langkah:**
1. `git pull origin main`
2. `git checkout -b feat/nama-fitur` (contoh: `feat/team-portrait`, `feat/navbar-glow`)
3. Coding + `git commit -m "feat: ..."`
4. `git push origin feat/nama-fitur`
5. Buat **Pull Request** → Review → Merge ke `main`.

---

## 📄 Lisensi
Template awal `Arsha` oleh [BootstrapMade](https://bootstrapmade.com/) — dimodifikasi untuk Kafeinarts. Konten profil (About, Why Us, Services, Team) © 2026 Kafeinarts.

## 📬 Kontak
- **Email:** halo@kafeinarts.com
- **Telepon:** +62 858-1704-8266
- **Alamat:** Depok, Jawa Barat, Indonesia
- **Maps:** `https://maps.google.com/maps?q=Depok,+West+Java,+Indonesia`

> *“Mitra teknis andal — dari backend tangguh hingga frontend memanjakan mata.”*
