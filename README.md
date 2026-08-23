# ☕ Kafeinarts — Latihan Landing Page

## 📌 Deskripsi 

Repo **Landing Page Kafeinarts** yang memiliki tampilan rapi, modern, dan responsif pada desktop maupun mobile.

Landing Page harus memberikan informasi mengenai **Kafeinarts**, berdasarkan materi yang terdapat pada PPT, terutama mengenai:

* Siapa Kafeinarts 
* Apa yang Tim Remaja Kafeinarts kerjakan
* Layanan atau produk yang dimiliki
* Informasi penting lainnya yang tersedia pada PPT
* Identitas dan branding Kafeinarts

Pastikan struktur halaman mudah dipahami, visual konsisten, dan responsive pada berbagai ukuran layar.

---

## 🔗 Repository

**GitHub Repository:**

https://github.com/itsmebroarif/Kafeinarts

---

## 👨‍💻 Developer

* **Arif Permana Putrasuryana**

  * https://github.com/itsmebroarif

* **Mahabbatul Auliya**

  * https://github.com/mhbbtuliyaa

---

# 🚀 Cara Memulai Project

## 1. Clone Repository

Buka Terminal / Git Bash, kemudian jalankan:

```bash
git clone https://github.com/itsmebroarif/Kafeinarts.git
```

Masuk ke folder project:

```bash
cd Kafeinarts
```

---

## 2. Cek Repository

Pastikan repository sudah berhasil di-clone:

```bash
git status
```

Kemudian cek remote repository:

```bash
git remote -v
```

Pastikan mengarah ke:

```text
https://github.com/itsmebroarif/Kafeinarts.git
```

---

# 🌿 Workflow Pengerjaan

Jangan langsung mengerjakan di branch `main`.

Buat branch baru terlebih dahulu.

## 3. Update `main`

Sebelum membuat branch:

```bash
git checkout main
git pull origin main
```

---

## 4. Buat Branch Baru

Gunakan nama branch yang menjelaskan pekerjaan.

Contoh:

```bash
git checkout -b feat/landing-page
```

Atau jika mengerjakan bagian tertentu:

```bash
git checkout -b feat/hero-section
```

```bash
git checkout -b feat/about-section
```

```bash
git checkout -b feat/service-section
```

### Format Branch

Gunakan format:

```text
feat/nama-fitur
fix/nama-perbaikan
refactor/nama-refactor
docs/nama-dokumentasi
```

Contoh:

```text
feat/landing-page
feat/navbar
feat/about-kafeinarts
fix/responsive-mobile
fix/layout-section
```

---

# 💻 5. Kerjakan Task

Setelah branch dibuat, mulai mengerjakan project.

Contoh:

```bash
git status
```

Periksa file yang berubah:

```bash
git diff
```

Pastikan kode yang dibuat:

* [ ] Mengikuti struktur project
* [ ] Responsive
* [ ] Tidak merusak fitur yang sudah ada
* [ ] Tidak terdapat error di Console
* [ ] Tidak terdapat error pada halaman
* [ ] Tampilan desktop sudah sesuai
* [ ] Tampilan mobile sudah sesuai
* [ ] Menggunakan asset yang sesuai
* [ ] Mengikuti branding Kafeinarts
* [ ] Tidak memasukkan file yang tidak diperlukan

---

# 💾 6. Commit Perubahan

Setelah pekerjaan selesai:

```bash
git status
```

Tambahkan perubahan:

```bash
git add .
```

Kemudian commit:

```bash
git commit -m "feat: create Kafeinarts landing page"
```

Gunakan commit message yang jelas.

Contoh:

```bash
git commit -m "feat: add hero section"
```

```bash
git commit -m "feat: add about Kafeinarts section"
```

```bash
git commit -m "fix: improve mobile responsiveness"
```

---

# ⬆️ 7. Push ke GitHub

Push branch ke repository:

```bash
git push -u origin feat/landing-page
```

Jika menggunakan nama branch lain, sesuaikan:

```bash
git push -u origin nama-branch
```

---

# 🔀 8. Membuat Pull Request

Setelah branch berhasil di-push:

1. Buka repository GitHub.
2. Pilih branch yang baru dibuat.
3. Klik **Compare & pull request**.
4. Pastikan:

   * **Base:** `main`
   * **Compare:** branch pekerjaan kamu
5. Isi judul Pull Request.
6. Isi deskripsi menggunakan template di bawah.
7. Review kembali perubahan.
8. Klik **Create Pull Request**.

---

# 📝 Starter Pull Request

Gunakan template berikut ketika membuat Pull Request:

## Title

```text
feat: create Kafeinarts landing page
```

## Description

```markdown
## 📌 Summary

Membuat dan mengembangkan Landing Page Kafeinarts berdasarkan materi dan informasi yang tersedia pada PPT.

## ✨ Changes

- Membuat struktur Landing Page Kafeinarts
- Menambahkan section informasi Kafeinarts
- Menambahkan informasi mengenai layanan/produk
- Menyesuaikan tampilan dengan branding Kafeinarts
- Membuat tampilan responsive
- Menyesuaikan layout untuk desktop dan mobile

## 🧪 Testing

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] Chrome
- [ ] Firefox
- [ ] Edge
- [ ] Tidak ada error pada Console
- [ ] Tidak ada broken layout

## 📸 Screenshot

Tambahkan screenshot hasil implementasi di sini.

## 🔗 Related Task

Kafeinarts Landing Page

## ✅ Checklist

- [ ] Code sudah dirapikan
- [ ] Tidak ada error
- [ ] Responsive
- [ ] Tidak ada file yang tidak diperlukan
- [ ] Commit message sudah sesuai
- [ ] Sudah melakukan testing
- [ ] Siap untuk di-review
```

---

# 🔄 Workflow Singkat

Untuk pengerjaan sehari-hari, gunakan alur:

```bash
git checkout main
git pull origin main

git checkout -b feat/nama-fitur

# Kerjakan project...

git status
git add .
git commit -m "feat: nama perubahan"

git push -u origin feat/nama-fitur
```

Kemudian:

```text
GitHub
  ↓
Open Pull Request
  ↓
Review
  ↓
Request Changes / Approve
  ↓
Merge ke main
```

---

# ⚠️ Catatan

**Jangan melakukan push langsung ke `main`** untuk pekerjaan fitur.

Gunakan:

```text
main
 ├── feat/landing-page
 ├── feat/navbar
 ├── feat/about-section
 ├── feat/service-section
 └── fix/responsive-mobile
```

Setelah pekerjaan selesai, lakukan **Pull Request ke `main`**.

Dengan workflow ini, setiap perubahan dapat di-review terlebih dahulu sebelum masuk ke branch utama. 🚀
