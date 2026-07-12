// ── THEME INIT (runs before DOM paint to prevent flash) ──
// This is handled in <head> inline script per page.
// main.js only handles the toggle button.

// ── SCROLL PROGRESS BAR ──
const progressBar = document.getElementById('scroll-progress');
function updateProgress() {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ── STICKY HEADER SHADOW ──
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

// ── ACTIVE NAV LINK ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── THEME TOGGLE ──
const themeToggle = document.getElementById('theme-toggle');

function applyThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark-mode');
  document.querySelectorAll('.sun-icon').forEach(el => el.style.display = isDark ? 'block' : 'none');
  document.querySelectorAll('.moon-icon').forEach(el => el.style.display = isDark ? 'none' : 'block');
}
applyThemeIcons();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const theme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyThemeIcons();
  });
}

// ── CARD ENTRANCE ANIMATIONS (IntersectionObserver) ──
const animatables = document.querySelectorAll('.card, .team-card, .contact-card');
if ('IntersectionObserver' in window && animatables.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on position in its grid row
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx % 3) * 80 + 'ms';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  animatables.forEach(el => observer.observe(el));
} else {
  // Fallback: show all immediately if IntersectionObserver not supported
  animatables.forEach(el => el.classList.add('visible'));
}
