(function () {
  'use strict';

  // ── Scroll shadow on header ──────────────────────────────
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Hamburger menu ───────────────────────────────────────
  const btn       = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (btn && mobileNav) {
    const open = () => {
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Menüyü kapat');
      mobileNav.setAttribute('aria-hidden', 'false');
      mobileNav.classList.add('is-open');
    };

    const close = () => {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Menüyü aç');
      mobileNav.setAttribute('aria-hidden', 'true');
      mobileNav.classList.remove('is-open');
    };

    btn.addEventListener('click', () =>
      btn.getAttribute('aria-expanded') === 'true' ? close() : open()
    );

    // Close on any nav link click
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        close();
        btn.focus();
      }
    });

    // Close when clicking outside header
    document.addEventListener('click', e => {
      if (
        btn.getAttribute('aria-expanded') === 'true' &&
        !header.contains(e.target)
      ) close();
    });
  }

  // ── Scroll reveal ────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ── Active nav link ──────────────────────────────────────
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
