/**
 * Kafeinarts Component Loader
 * Memisah index.html jadi komponen terpisah di /components/*.html
 * dan merender data dinamis dari assets/data/data.js
 */
(function () {
  "use strict";

  // Mapping komponen -> file + target container
  const components = [
    { file: "components/header.html", target: "header-root" },
    { file: "components/hero.html", target: "hero-root" },
    { file: "components/about.html", target: "about-root" },
    { file: "components/why-us.html", target: "why-us-root" },
    { file: "components/skills.html", target: "skills-root" },
    { file: "components/services.html", target: "services-root" },
    { file: "components/cta.html", target: "cta-root" },
    { file: "components/faq.html", target: "faq-root" },
    { file: "components/team.html", target: "team-root" },
    { file: "components/contact.html", target: "contact-root" },
    { file: "components/footer.html", target: "footer-root" },
  ];

  async function loadComponent(file, targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(res.statusText);
      const html = await res.text();
      el.innerHTML = html;
    } catch (e) {
      console.error(`Gagal load ${file}:`, e);
      el.innerHTML = `<div style="padding:20px;color:red">Gagal memuat ${file}</div>`;
    }
  }

  // Render Team dari siteData - Satu Row Slider + Flip Card + Glow
  function renderTeamFromData() {
    const data = window.siteData;
    if (!data || !data.team || !data.team.members) return;
    const members = data.team.members;

    // Update judul/subtitle
    const titleEl = document.querySelector("#team .section-title h2");
    const subEl = document.querySelector("#team .section-title p");
    if (titleEl && data.team.title) titleEl.textContent = data.team.title;
    if (subEl && data.team.subtitle) subEl.textContent = data.team.subtitle;

    // Cek apakah ada swiper-wrapper (mode slider baru)
    const swiperWrapper = document.querySelector("#team-swiper-wrapper") || document.querySelector("#team .swiper-wrapper");
    if (swiperWrapper) {
      swiperWrapper.innerHTML = members
        .map(
          (m, i) => `
          <div class="swiper-slide" data-aos="fade-up" data-aos-delay="${m.delay}">
            <div class="flip-card" data-index="${i}" data-name="${m.name}" data-role="${m.role}" data-img="${m.img}" tabindex="0" role="button" aria-label="Lihat detail ${m.name}">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="team-portrait-img">
                    <img src="${m.img}" alt="${m.alt}" loading="lazy">
                    <div class="team-portrait-overlay">
                      <h4>${m.name}</h4>
                      <span>${m.role}</span>
                    </div>
                    <div class="team-portrait-zoom"><i class="bi bi-arrows-angle-expand"></i></div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <h4>${m.name}</h4>
                  <span>${m.role}</span>
                  <p>${m.bio || "Talenta Kafeinarts yang berdedikasi untuk inovasi digital."}</p>
                  <button class="btn-flip-close" aria-label="Kembali"><i class="bi bi-arrow-left"></i> Kembali</button>
                  <button class="btn-flip-lightbox" style="margin-top:8px; background:transparent; border:1px solid rgba(255,255,255,0.7); color:#fff; border-radius:50px; padding:6px 14px; font-size:12px; cursor:pointer;"><i class="bi bi-zoom-in"></i> Lihat Foto</button>
                </div>
              </div>
            </div>
          </div>`
        )
        .join("");

      // Bind flip & lightbox
      bindFlipCards();
      return;
    }

    // Fallback lama: grid
    const targetRow =
      document.querySelector("#team .row") ||
      document.querySelector("#team-root .row");
    if (!targetRow) return;
    targetRow.innerHTML = members
      .map(
        (m, i) => `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="${m.delay}">
          <div class="team-portrait-card" data-index="${i}" data-name="${m.name}" data-role="${m.role}" data-img="${m.img}" tabindex="0" role="button" aria-label="Lihat foto ${m.name}">
            <div class="team-portrait-img">
              <img src="${m.img}" alt="${m.alt}" loading="lazy">
              <div class="team-portrait-overlay">
                <h4>${m.name}</h4>
                <span>${m.role}</span>
              </div>
              <div class="team-portrait-zoom"><i class="bi bi-zoom-in"></i></div>
            </div>
          </div>
        </div>`,
      )
      .join("");
  }

  function bindFlipCards() {
    const cards = document.querySelectorAll(".flip-card");
    cards.forEach((card) => {
      if (card.dataset.flipBound === "1") return;
      card.dataset.flipBound = "1";
      const closeBtn = card.querySelector(".btn-flip-close");
      const lightboxBtn = card.querySelector(".btn-flip-lightbox");
      // Klik card = flip (kecuali klik tombol close/lightbox)
      card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-flip-close") || e.target.closest(".btn-flip-lightbox")) return;
        card.classList.toggle("flipped");
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.classList.toggle("flipped");
        }
        if (e.key === "Escape") card.classList.remove("flipped");
      });
      if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          card.classList.remove("flipped");
        });
      }
      if (lightboxBtn) {
        lightboxBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          // Trigger lightbox dengan data card
          const teamLightbox = document.getElementById("teamLightbox");
          if (teamLightbox && window.openTeamLightbox) {
            const idx = parseInt(card.getAttribute("data-index") || "0", 10);
            window.openTeamLightbox(idx);
          }
        });
      }
    });
  }

  // Render Services dari data (opsional - jika ingin dinamis)
  function renderServicesFromData() {
    const data = window.siteData;
    if (!data || !data.services) return;
    const section = document.getElementById("services");
    if (!section) return;
    const row = section.querySelector(".row");
    if (!row) return;
    // Jika sudah ada 4 item dan sesuai data, biarkan - tapi kita sync dari data untuk konsistensi
    const services = data.services;
    row.innerHTML = services
      .map(
        (s) => `
        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="${s.delay}">
          <div class="service-item position-relative text-center h-100 w-100 p-4">
            <div class="icon mx-auto mb-4 d-flex align-items-center justify-content-center">
              <i class="bi ${s.icon} fs-1"></i>
            </div>
            <h4><a href="" class="stretched-link">${s.title}</a></h4>
            <p>${s.desc}</p>
          </div>
        </div>`,
      )
      .join("");
  }

  // Inject WhatsApp selector ke form contact
  function initWhatsApp() {
    const data = window.siteData;
    if (!data || !data.contact || !data.contact.form) return;
    const wa = data.contact.form.whatsapp;
    const form = document.querySelector("#contact form");
    if (!form) return;

    // Cek apakah selector sudah ada
    if (document.getElementById("wa-target")) return;

    const subjectField = document.getElementById("subject-field");
    if (!subjectField) return;

    const col = subjectField.closest(".col-md-12");
    if (!col) return;

    // Support alias: Staff IT / Staff Customer Service
    const staffIT = wa.staffIT || wa.spvIT;
    const staffCS = wa.staffCS || wa.marketing;

    // Buat row selector setelah subject - dropdown Staff IT / Staff Customer Service
    const waRow = document.createElement("div");
    waRow.className = "col-md-12";
    waRow.innerHTML = `
      <label for="wa-target" class="pb-2">Tujuan WhatsApp <span style="color:#00205D">*</span></label>
      <select id="wa-target" class="form-control" required style="padding:10px 15px; border-color: color-mix(in srgb, var(--default-color), transparent 80%); border-radius:4px;">
        <option value="staffIT">${staffIT.label} — ${staffIT.display}</option>
        <option value="staffCS">${staffCS.label} — ${staffCS.display}</option>
      </select>
      <small class="text-muted" style="font-size:12px;">Pilih <strong>Staff IT</strong> untuk teknis / <strong>Staff Customer Service</strong> untuk layanan pelanggan.</small>
    `;
    col.insertAdjacentElement("afterend", waRow);

    // Update info-telephone display dari data
    const phoneEl = document.querySelector(
      "#contact .info-item:nth-child(2) p",
    );
    if (phoneEl) {
      phoneEl.innerHTML = `${staffIT.display} (${staffIT.label}) / ${staffCS.display} (${staffCS.label})`;
    }
  }

  // Re-init library setelah komponen di-inject
  function reInit() {
    // AOS
    if (window.AOS) {
      try {
        AOS.init({
          duration: 600,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
        AOS.refresh();
      } catch (e) {}
    }

    // Swiper
    if (window.Swiper) {
      try {
        document
          .querySelectorAll(".init-swiper")
          .forEach(function (swiperElement) {
            const cfgEl = swiperElement.querySelector(".swiper-config");
            if (!cfgEl) return;
            const config = JSON.parse(cfgEl.innerHTML.trim());
            new Swiper(swiperElement, config);
          });
      } catch (e) {}
    }

    // FAQ toggle (re-bind)
    document
      .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
      .forEach((item) => {
        // hindari double listener
        const clone = item.cloneNode(true);
        item.parentNode.replaceChild(clone, item);
      });
    document
      .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
      .forEach((faqItem) => {
        faqItem.addEventListener("click", () => {
          faqItem.parentNode.classList.toggle("faq-active");
        });
      });

    // Waypoints for skills
    if (window.Waypoint) {
      document.querySelectorAll(".skills-animation").forEach((item) => {
        new Waypoint({
          element: item,
          offset: "80%",
          handler: function () {
            const bars = item.querySelectorAll(".progress .progress-bar");
            bars.forEach((el) => {
              el.style.width = el.getAttribute("aria-valuenow") + "%";
            });
          },
        });
      });
    }

    // ===== NAVBAR FIX: tetap aktif & tidak error setelah komponen di-load =====
    (function initNavbar() {
      // Toggle scrolled
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      function toggleScrolled() {
        if (!selectHeader) return;
        if (
          !selectHeader.classList.contains("scroll-up-sticky") &&
          !selectHeader.classList.contains("sticky-top") &&
          !selectHeader.classList.contains("fixed-top")
        )
          return;
        window.scrollY > 100
          ? selectBody.classList.add("scrolled")
          : selectBody.classList.remove("scrolled");
      }
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
      document.addEventListener("scroll", toggleScrolled);
      window.addEventListener("load", toggleScrolled);
      toggleScrolled();
      window.toggleScrolled = toggleScrolled; // expose

      // Mobile toggle
      const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
      function mobileNavToogle() {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.classList.toggle("bi-list");
          mobileNavToggleBtn.classList.toggle("bi-x");
        }
      }
      window.mobileNavToogle = mobileNavToogle;
      if (mobileNavToggleBtn && !mobileNavToggleBtn.dataset.bound) {
        mobileNavToggleBtn.dataset.bound = "1";
        mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
      }

      // Hide mobile nav + aktif underline animasi saat klik komponen lain
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        if (navmenu.dataset.bound) return;
        navmenu.dataset.bound = "1";
        navmenu.addEventListener("click", function () {
          // Aktifkan underline animasi langsung saat klik (tidak tunggu scroll)
          document
            .querySelectorAll("#navmenu a.active")
            .forEach((link) => link.classList.remove("active"));
          this.classList.add("active");
          // Force reflow untuk memicu animasi scaleX
          void this.offsetWidth;
          if (document.querySelector(".mobile-nav-active")) {
            mobileNavToogle();
          }
        });
      });

      // Dropdown toggle
      document
        .querySelectorAll(".navmenu .toggle-dropdown")
        .forEach((navmenu) => {
          if (navmenu.dataset.bound) return;
          navmenu.dataset.bound = "1";
          navmenu.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle("active");
            this.parentNode.nextElementSibling.classList.toggle(
              "dropdown-active",
            );
            e.stopImmediatePropagation();
          });
        });

      // Scrollspy - navbar tetap aktif dengan underline
      const navmenulinks = document.querySelectorAll(".navmenu a");
      function navmenuScrollspy() {
        navmenulinks.forEach((navmenulink) => {
          if (!navmenulink.hash) return;
          const section = document.querySelector(navmenulink.hash);
          if (!section) return;
          const position = window.scrollY + 200;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            document
              .querySelectorAll(".navmenu a.active")
              .forEach((link) => link.classList.remove("active"));
            navmenulink.classList.add("active");
          } else {
            navmenulink.classList.remove("active");
          }
        });
      }
      window.navmenuScrollspy = navmenuScrollspy;
      window.removeEventListener("load", navmenuScrollspy);
      document.removeEventListener("scroll", navmenuScrollspy);
      window.addEventListener("load", navmenuScrollspy);
      document.addEventListener("scroll", navmenuScrollspy);
      navmenuScrollspy();

      // Scroll top button
      const scrollTop = document.querySelector(".scroll-top");
      if (scrollTop && !scrollTop.dataset.bound) {
        scrollTop.dataset.bound = "1";
        function toggleScrollTop() {
          window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
        }
        scrollTop.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        window.addEventListener("load", toggleScrollTop);
        document.addEventListener("scroll", toggleScrollTop);
      }

      // Preloader
      const preloader = document.querySelector("#preloader");
      if (preloader) {
        window.addEventListener("load", () => preloader.remove(), {
          once: true,
        });
      }
    })();

    // Team lightbox - re-init dari main.js logic (duplikat di sini agar work setelah render dinamis)
    initTeamLightbox();
  }

  function initTeamLightbox() {
    // Support both grid portrait dan slider flip-card
    const teamCards = document.querySelectorAll(".flip-card, .team-portrait-card");
    const teamLightbox = document.getElementById("teamLightbox");
    if (!teamCards.length || !teamLightbox) return;

    // Hindari double init - reset jika sudah ada (untuk re-render)
    if (teamLightbox.dataset.bound === "1") {
      // Rebuild data jika sudah bound tapi cards baru
      teamLightbox.dataset.bound = "0";
    }
    teamLightbox.dataset.bound = "1";

    const lbImg = document.getElementById("teamLightboxImg");
    const lbName = document.getElementById("teamLightboxName");
    const lbRole = document.getElementById("teamLightboxRole");
    const lbCounter = document.getElementById("teamLightboxCounter");
    const lbBackdrop = teamLightbox.querySelector(".team-lightbox-backdrop");
    const lbClose = teamLightbox.querySelector(".team-lightbox-close");
    const lbPrev = teamLightbox.querySelector(".team-lightbox-nav.prev");
    const lbNext = teamLightbox.querySelector(".team-lightbox-nav.next");
    const lbContent = teamLightbox.querySelector(".team-lightbox-content");

    const teamData = Array.from(teamCards).map((card) => ({
      src:
        card.getAttribute("data-img") ||
        card.querySelector("img")?.getAttribute("src") ||
        "",
      name:
        card.getAttribute("data-name") ||
        card.querySelector("h4")?.textContent?.trim() ||
        "",
      role:
        card.getAttribute("data-role") ||
        card.querySelector("span")?.textContent?.trim() ||
        "",
      alt: card.querySelector("img")?.getAttribute("alt") || "",
    }));

    let current = 0;
    let touchStartX = 0,
      touchStartY = 0,
      touchEndX = 0,
      touchEndY = 0;

    function updateLightbox(index, withAnim = true) {
      if (index < 0) index = teamData.length - 1;
      if (index >= teamData.length) index = 0;
      current = index;
      const d = teamData[current];
      if (withAnim && lbImg) {
        lbImg.style.opacity = "0";
        lbImg.style.transform = "scale(0.98)";
        setTimeout(() => {
          lbImg.src = d.src;
          lbImg.alt = d.alt || `${d.name} - ${d.role}`;
          lbName.textContent = d.name;
          lbRole.textContent = d.role;
          lbCounter.textContent = current + 1 + " / " + teamData.length;
          lbImg.onload = () => {
            lbImg.style.opacity = "1";
            lbImg.style.transform = "scale(1)";
          };
          if (lbImg.complete) {
            lbImg.style.opacity = "1";
            lbImg.style.transform = "scale(1)";
          }
        }, 140);
      } else {
        lbImg.src = d.src;
        lbImg.alt = d.alt || `${d.name} - ${d.role}`;
        lbName.textContent = d.name;
        lbRole.textContent = d.role;
        lbCounter.textContent = current + 1 + " / " + teamData.length;
      }
    }
    function openLightbox(index) {
      updateLightbox(index, false);
      teamLightbox.classList.add("active");
      teamLightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("team-lightbox-open");
      if (lbClose) lbClose.focus({ preventScroll: true });
    }
    // Expose untuk flip-card tombol Lihat Foto
    window.openTeamLightbox = openLightbox;
    window.closeTeamLightbox = function(){ 
      const lb = document.getElementById("teamLightbox");
      if(lb) { lb.classList.remove("active"); lb.setAttribute("aria-hidden","true"); document.body.classList.remove("team-lightbox-open"); }
    };
    function closeLightbox() {
      teamLightbox.classList.remove("active");
      teamLightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("team-lightbox-open");
      const activeCard = teamCards[current];
      if (activeCard) activeCard.focus({ preventScroll: true });
    }
    function next() {
      updateLightbox(current + 1);
    }
    function prev() {
      updateLightbox(current - 1);
    }

    teamCards.forEach((card, i) => {
      // Flip-card sudah punya handler flip sendiri, jangan buka lightbox langsung
      if (card.classList.contains("flip-card")) return;
      card.addEventListener("click", () => openLightbox(i));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(i);
        }
      });
    });
    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    if (lbBackdrop) lbBackdrop.addEventListener("click", closeLightbox);
    if (lbNext)
      lbNext.addEventListener("click", (e) => {
        e.stopPropagation();
        next();
      });
    if (lbPrev)
      lbPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        prev();
      });
    document.addEventListener("keydown", (e) => {
      if (!teamLightbox.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
    if (lbImg) {
      lbImg.addEventListener("click", (e) => {
        e.stopPropagation();
        next();
      });
      lbImg.style.cursor = "pointer";
    }
    const swipeTarget = lbContent || teamLightbox;
    swipeTarget.addEventListener(
      "touchstart",
      (e) => {
        if (!teamLightbox.classList.contains("active")) return;
        const t = e.changedTouches[0];
        touchStartX = t.clientX;
        touchStartY = t.clientY;
      },
      { passive: true },
    );
    swipeTarget.addEventListener(
      "touchend",
      (e) => {
        if (!teamLightbox.classList.contains("active")) return;
        const t = e.changedTouches[0];
        touchEndX = t.clientX;
        touchEndY = t.clientY;
        const dx = touchEndX - touchStartX,
          dy = touchEndY - touchStartY;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        } else if (Math.abs(dy) > 120 && Math.abs(dy) > Math.abs(dx) && dy > 0)
          closeLightbox();
      },
      { passive: true },
    );
  }

  // Main load sequence
  async function init() {
    // Load semua komponen paralel
    await Promise.all(components.map((c) => loadComponent(c.file, c.target)));

    // Render data dinamis
    renderTeamFromData();
    renderServicesFromData();
    initWhatsApp();

    // Re-init library & lightbox
    // Beri delay kecil agar DOM stabil
    setTimeout(() => {
      reInit();
      // Trigger scroll untuk header & AOS
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("load"));
    }, 150);
  }

  // Jalankan saat DOM siap
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose untuk debug
  window.KafeinLoader = { loadComponent, renderTeamFromData, reInit };
})();
