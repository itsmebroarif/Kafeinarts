# ☕ Kafeinarts — Landing Page (Tugas Kelompok)

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Collaboration](https://img.shields.io/badge/Collaboration-2_Players-orange)

## 📌 Deskripsi

Repository ini memuat source code untuk **Landing Page Kafeinarts**, yang merupakan **Tugas Utama** latihan kolaborasi pengembangan web (2-Player) Mengikuti tugas yang niat awalnya bikin di lovable tapi jadinya template. Proyek ini difokuskan pada pembuatan antarmuka yang rapi, modern, dan sepenuhnya responsif (Desktop & Mobile) menggunakan pendekatan kolaborasi tim yang terstruktur.

Landing Page ini menerjemahkan materi dari presentasi (PPT) Kafeinarts menjadi sebuah produk digital, yang mencakup:
- **Identitas Kafeinarts:** Siapa kami dan apa yang Tim Remaja Kafeinarts kerjakan.
- **Layanan & Produk:** Etalase dari solusi yang ditawarkan.
- **Branding Konsisten:** Menerapkan panduan visual, warna, dan tipografi Kafeinarts secara presisi.

Pastikan struktur halaman mudah dipahami, visual konsisten, dan responsive pada berbagai ukuran layar.

---

## 🔗 Repository
**GitHub Repository:**
[https://github.com/itsmebroarif/Kafeinarts](https://github.com/itsmebroarif/Kafeinarts)

---

## 👨‍💻 Tim Pengembang (2-Player Co-op)

Kolaborasi pengembangan ini dikerjakan oleh:

| Nama | GitHub Profile | Peran / Fokus |
| :--- | :--- | :--- |
| **Arif Permana Putrasuryana** | [@itsmebroarif](https://github.com/itsmebroarif) | Full-stack & UI Integration |
| **Mahabbatul Auliya** | [@mhbbtuliyaa](https://github.com/mhbbtuliyaa) | Frontend & Layouting |

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
