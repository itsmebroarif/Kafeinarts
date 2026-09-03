/**
 * Kafeinarts WhatsApp - 2 Tujuan
 * SPV IT: 085817048200 -> 6285817048200
 * Tim Marketing: 0895331847715 -> 62895331847715
 * Data juga tersedia di assets/data/data.js -> siteData.contact.form.whatsapp
 */

// Fallback numbers (jika data.js belum load)
const phoneNumberSPVIT = "6285817048200";
const phoneNumberMarketing = "62895331847715";
// Legacy aliases
const phoneNumberAdmin = phoneNumberSPVIT;
const phoneNumberUsers = phoneNumberMarketing;

function getWhatsAppTarget() {
  // Prioritas: baca dari siteData jika ada
  if (window.siteData && window.siteData.contact && window.siteData.contact.form) {
    const wa = window.siteData.contact.form.whatsapp;
    const sel = document.getElementById("wa-target");
    const key = sel ? sel.value : window.siteData.contact.form.defaultTarget || "staffIT";
    if ((key === "staffCS" || key === "marketing") && (wa.staffCS || wa.marketing)) return (wa.staffCS || wa.marketing).wa;
    if ((key === "staffIT" || key === "spvIT") && (wa.staffIT || wa.spvIT)) return (wa.staffIT || wa.spvIT).wa;
    // fallback
    if (wa.staffIT) return wa.staffIT.wa;
    if (wa.spvIT) return wa.spvIT.wa;
  }
  // Fallback selector manual
  const sel = document.getElementById("wa-target");
  if (sel) {
    if (sel.value === "staffCS" || sel.value === "marketing") return phoneNumberMarketing;
    if (sel.value === "staffIT" || sel.value === "spvIT") return phoneNumberSPVIT;
  }
  return phoneNumberSPVIT;
}

function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name-field")?.value?.trim() || "";
  const email = document.getElementById("email-field")?.value?.trim() || "";
  const subject = document.getElementById("subject-field")?.value?.trim() || "";
  const message = document.getElementById("message-field")?.value?.trim() || "";
  const targetSel = document.getElementById("wa-target");
  const targetLabel = targetSel ? targetSel.options[targetSel.selectedIndex].text : "SPV IT";

  if (!name || !email || !subject || !message) {
    alert("Mohon lengkapi semua field sebelum mengirim.");
    return;
  }

  const targetNumber = getWhatsAppTarget();

  // Format pesan lebih rapi + info tujuan
  const waText =
    `Halo Kafeinarts *${targetLabel}* 👋%0A%0A` +
    `Perkenalkan saya *${name}*%0A` +
    `Email: ${email}%0A%0A` +
    `*Subjek:* ${subject}%0A` +
    `*Pesan:*%0A${message}%0A%0A` +
    `— dikirim via kafeinarts.id`;

  const whatsappUrl = `https://wa.me/${targetNumber}?text=${waText}`;
  window.open(whatsappUrl, "_blank");

  // Optional: log untuk debug
  console.log(`[WhatsApp] -> ${targetLabel} (${targetNumber})`);
}

// Expose global
window.sendToWhatsApp = sendToWhatsApp;
window.getWhatsAppTarget = getWhatsAppTarget;
