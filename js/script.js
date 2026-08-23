const phoneNumberAdmin = "6285817048266";
      const phoneNumberUsers = "6281211978784";

      function sendToWhatsApp(event) {
        event.preventDefault(); // Mencegah form melakukan refresh halaman

        // Mengambil nilai dari input form
        const name = document.getElementById('name-field').value;
        const email = document.getElementById('email-field').value;
        const subject = document.getElementById('subject-field').value;
        const message = document.getElementById('message-field').value;

        // Menyusun format pesan yang akan dikirim ke WhatsApp
        const whatsappMessage = `Halo Kafeinarts,%0A%0APerkenalkan saya *${name}* (${email}).%0A%0A*Terkait:* ${subject}%0A*Pesan:* %0A${message}`;

        // Membuat URL WhatsApp. Di sini saya mengarahkan ke phoneNumberAdmin untuk keperluan kontak bisnis. 
        // Anda bisa menggantinya ke phoneNumberUsers jika alurnya berbeda.
        const whatsappUrl = `https://wa.me/${phoneNumberAdmin}?text=${whatsappMessage}`;

        // Membuka tab baru yang langsung mengarah ke WhatsApp
        window.open(whatsappUrl, '_blank');
      }