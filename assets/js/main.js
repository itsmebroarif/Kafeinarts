/**
* Template Name: Arsha
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Updated: Feb 22 2025 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Team Portrait Lightbox - click popup + swipe / tap navigation
   */
  const teamCards = document.querySelectorAll('.team-portrait-card');
  const teamLightbox = document.getElementById('teamLightbox');
  if (teamCards.length && teamLightbox) {
    const lbImg = document.getElementById('teamLightboxImg');
    const lbName = document.getElementById('teamLightboxName');
    const lbRole = document.getElementById('teamLightboxRole');
    const lbCounter = document.getElementById('teamLightboxCounter');
    const lbBackdrop = teamLightbox.querySelector('.team-lightbox-backdrop');
    const lbClose = teamLightbox.querySelector('.team-lightbox-close');
    const lbPrev = teamLightbox.querySelector('.team-lightbox-nav.prev');
    const lbNext = teamLightbox.querySelector('.team-lightbox-nav.next');
    const lbContent = teamLightbox.querySelector('.team-lightbox-content');

    // Build ordered data from cards
    const teamData = Array.from(teamCards).map(card => ({
      src: card.getAttribute('data-img') || card.querySelector('img')?.getAttribute('src') || '',
      name: card.getAttribute('data-name') || card.querySelector('h4')?.textContent?.trim() || '',
      role: card.getAttribute('data-role') || card.querySelector('span')?.textContent?.trim() || '',
      alt: card.querySelector('img')?.getAttribute('alt') || ''
    }));

    let current = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    function updateLightbox(index, withAnim = true) {
      if (index < 0) index = teamData.length - 1;
      if (index >= teamData.length) index = 0;
      current = index;
      const d = teamData[current];
      if (withAnim && lbImg) {
        lbImg.style.opacity = '0';
        lbImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          lbImg.src = d.src;
          lbImg.alt = d.alt || `${d.name} - ${d.role}`;
          lbName.textContent = d.name;
          lbRole.textContent = d.role;
          lbCounter.textContent = (current + 1) + ' / ' + teamData.length;
          lbImg.onload = () => {
            lbImg.style.opacity = '1';
            lbImg.style.transform = 'scale(1)';
          };
          // fallback if cached
          if (lbImg.complete) {
            lbImg.style.opacity = '1';
            lbImg.style.transform = 'scale(1)';
          }
        }, 140);
      } else {
        lbImg.src = d.src;
        lbImg.alt = d.alt || `${d.name} - ${d.role}`;
        lbName.textContent = d.name;
        lbRole.textContent = d.role;
        lbCounter.textContent = (current + 1) + ' / ' + teamData.length;
      }
    }

    function openLightbox(index) {
      updateLightbox(index, false);
      teamLightbox.classList.add('active');
      teamLightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('team-lightbox-open');
      // trap focus to close button for accessibility
      if (lbClose) lbClose.focus({ preventScroll: true });
    }

    function closeLightbox() {
      teamLightbox.classList.remove('active');
      teamLightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('team-lightbox-open');
      // return focus to current card
      const activeCard = teamCards[current];
      if (activeCard) activeCard.focus({ preventScroll: true });
    }

    function next() { updateLightbox(current + 1); }
    function prev() { updateLightbox(current - 1); }

    teamCards.forEach((card, i) => {
      card.addEventListener('click', () => openLightbox(i));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(i);
        }
      });
    });

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
    if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); next(); });
    if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prev(); });

    // Keyboard: Esc, ArrowLeft, ArrowRight
    document.addEventListener('keydown', (e) => {
      if (!teamLightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    // Click on image -> next (tap to navigate)
    if (lbImg) {
      lbImg.addEventListener('click', (e) => {
        // avoid if user dragged
        e.stopPropagation();
        next();
      });
      lbImg.style.cursor = 'pointer';
      lbImg.title = 'Klik untuk foto berikutnya';
    }

    // Swipe handling on lightbox content / backdrop
    const swipeTarget = lbContent || teamLightbox;
    swipeTarget.addEventListener('touchstart', (e) => {
      if (!teamLightbox.classList.contains('active')) return;
      const t = e.changedTouches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
    }, { passive: true });

    swipeTarget.addEventListener('touchend', (e) => {
      if (!teamLightbox.classList.contains('active')) return;
      const t = e.changedTouches[0];
      touchEndX = t.clientX;
      touchEndY = t.clientY;
      const dx = touchEndX - touchStartX;
      const dy = touchEndY - touchStartY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      // horizontal swipe threshold 45px and horizontal > vertical
      if (absDx > 45 && absDx > absDy) {
        if (dx < 0) next(); else prev();
      } else if (absDy > 120 && absDy > absDx) {
        // swipe down to close (optional)
        if (dy > 0) closeLightbox();
      }
    }, { passive: true });

    // Mouse drag simulation for desktop swipe
    let isDown = false;
    let startX = 0;
    swipeTarget.addEventListener('mousedown', (e) => {
      if (!teamLightbox.classList.contains('active')) return;
      isDown = true;
      startX = e.clientX;
      swipeTarget.style.cursor = 'grabbing';
    });
    swipeTarget.addEventListener('mouseup', (e) => {
      if (!isDown) return;
      isDown = false;
      swipeTarget.style.cursor = '';
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 60) {
        if (dx < 0) next(); else prev();
      }
    });
    swipeTarget.addEventListener('mouseleave', () => {
      isDown = false;
      swipeTarget.style.cursor = '';
    });

    // Prevent scroll propagation when lightbox open
    teamLightbox.addEventListener('wheel', (e) => {
      if (teamLightbox.classList.contains('active')) {
        e.preventDefault();
      }
    }, { passive: false });
  }

})();