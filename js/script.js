// 1. Masukkan nomor WhatsApp di sini
// Format: Gunakan kode negara tanpa tanda "+" atau "0" di depan (Contoh: 62812...)
const phoneNumberAdmin = "6285817048266";
const phoneNumberUsers = "6281211978784";

// 2. Tangkap event submit pada form
document.getElementById("waForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah halaman reload saat form disubmit

  // Ambil nilai dari inputan
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  const tujuan = document.getElementById("tujuan").value;

  // Tentukan nomor tujuan berdasarkan opsi yang dipilih (Admin atau Users)
  const targetNumber = tujuan === "admin" ? phoneNumberAdmin : phoneNumberUsers;

  // Format pesan agar rapi di WhatsApp (Gunakan encodeURIComponent agar karakter khusus aman)
  // %0A digunakan untuk enter/baris baru di URL
  const textWA = `Halo, perkenalkan saya *${nama}*.%0A%0A*Pesan:*%0A${pesan}`;

  // Buat URL API WhatsApp
  const waLink = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${textWA}`;

  // Buka aplikasi/web WhatsApp di tab baru
  window.open(waLink, "_blank");
});
