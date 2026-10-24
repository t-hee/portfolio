(() => {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const mobile = window.matchMedia('(max-width: 760px)');
  const header = document.querySelector('.site-header');

  if (!toggle || !navigation) return;

  function updateHeaderHeight() {
    if (header) {
      document.documentElement.style.setProperty('--header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
    }
  }

  if (header && 'ResizeObserver' in window) {
    new ResizeObserver(updateHeaderHeight).observe(header);
  }
  window.addEventListener('resize', updateHeaderHeight);

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = open
      ? '메뉴 닫기 <span aria-hidden="true">−</span>'
      : '메뉴 열기 <span aria-hidden="true">＋</span>';
    navigation.hidden = mobile.matches && !open;
    updateHeaderHeight();
  }

  function syncNavigation() {
    // Keep navigation visible without JavaScript and on desktop.
    // Restore focus before hiding controls at a responsive breakpoint.
    if (mobile.matches && navigation.contains(document.activeElement)) {
      toggle.hidden = false;
      toggle.focus();
    } else if (!mobile.matches && document.activeElement === toggle) {
      navigation.hidden = false;
      navigation.querySelector('a').focus();
    }
    toggle.hidden = !mobile.matches;
    setMenu(false);
  }

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !mobile.matches) return;
    const destination = document.querySelector(link.getAttribute('href'));
    setMenu(false);
    // Keep native fragment/history scrolling and its sticky-header offset.
    // After the browser follows the anchor, focus its heading, not the section.
    const heading = destination?.querySelector('h1, h2, h3');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      window.requestAnimationFrame(() => heading.focus({ preventScroll: true }));
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
      setMenu(false);
      toggle.focus();
    }
  });

  mobile.addEventListener('change', syncNavigation);
  syncNavigation();

  if ('IntersectionObserver' in window) {
    const links = Array.from(navigation.querySelectorAll('a'));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      const current = visible[0].target.id;
      links.forEach((link) => {
        if (link.getAttribute('href') === `#${current}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });

    document.querySelectorAll('main > section[id]').forEach((section) => {
      observer.observe(section);
    });
  }
})();
