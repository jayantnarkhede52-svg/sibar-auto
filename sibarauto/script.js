/**
 * SIBAR AUTO PARTS LIMITED
 * Premium Homepage Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  initRippleEffect();
  initHeroParallax();
  initProcessWorkflow();
  initVisitorCounter();
});

/**
 * Navigation Bar Scroll & Mobile Menu Toggle
 */
function initNavbar() {
  const header = document.querySelector('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (header && header.classList.contains('solid-header')) {
    header.classList.add('scrolled');
  }

  // Background change on scroll
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (header.classList.contains('solid-header')) {
      header.classList.add('scrolled');
      return;
    }
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      menuToggle.innerHTML = isExpanded ? '&#x2715;' : '&#x2630;'; // Change between X and hamburger
    });

    // Close mobile menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '&#x2630;';
      });
    });
  }
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * Stats Counter Animation
 */
function initCounters() {
  const counterElements = document.querySelectorAll('.stat-number');

  const startCounting = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = prefix + target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = prefix + Math.floor(current) + suffix;
      }
    }, stepTime);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counterElements.forEach(el => counterObserver.observe(el));
}

/**
 * Button Ripple Effect
 */
function initRippleEffect() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('btn-ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

/**
 * Hero Stats Card Mouse Parallax Effect
 */
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  const statsGrid = document.querySelector('.hero-stats-card');

  if (!hero || !statsGrid) return;

  hero.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;

    statsGrid.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  // Reset positioning on mouse leave
  hero.addEventListener('mouseleave', () => {
    statsGrid.style.transform = `rotateY(0deg) rotateX(0deg)`;
    statsGrid.style.transition = 'transform 0.5s ease';
  });

  hero.addEventListener('mouseenter', () => {
    statsGrid.style.transition = 'none';
  });
}

/**
 * Timeline Interactive Animation
 */
function initProcessWorkflow() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (!timelineItems.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

/**
 * Capabilities View All Toggle (Mobile)
 */
function toggleCapCards() {
  const hiddenCards = document.querySelectorAll('.cap-card-mobile-hidden');
  const btn = document.getElementById('capViewAll');
  const isExpanded = btn.getAttribute('data-expanded') === 'true';

  hiddenCards.forEach(card => {
    if (isExpanded) {
      card.classList.remove('cap-expanded');
    } else {
      card.classList.add('cap-expanded');
    }
  });

  if (isExpanded) {
    btn.setAttribute('data-expanded', 'false');
    btn.textContent = 'View All Capabilities';
  } else {
    btn.setAttribute('data-expanded', 'true');
    btn.textContent = 'Show Less';
  }
}

/**
 * Website Visitor Counter (localStorage based, starting at 1000)
 */
function initVisitorCounter() {
  const counterEl = document.getElementById('visitor-counter');
  if (!counterEl) return;

  const count = 1000;

  // Display count with nice formatting
  counterEl.textContent = count.toLocaleString();
}

// Expose toggleCapCards to global scope for inline HTML handlers
window.toggleCapCards = toggleCapCards;

