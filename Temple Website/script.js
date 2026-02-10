// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-item').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn?.classList.remove('active');
  });
});

// Update active nav item on scroll
window.addEventListener('scroll', () => {
  updateActiveNavItem();
});

function updateActiveNavItem() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');
  
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id') || '';
    }
  });

  navItems.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('href')?.includes(current)) {
      item.classList.add('active');
    }
  });
}

// Smooth scroll for hero scroll indicator
const heroScroll = document.querySelector('.hero-scroll');
heroScroll?.addEventListener('click', () => {
  const nextSection = document.querySelector('.features-section');
  nextSection?.scrollIntoView({ behavior: 'smooth' });
});
