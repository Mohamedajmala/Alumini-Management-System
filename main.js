document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('siteHeader');
  const back = document.getElementById('backToTop');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function onScroll() {
    if (window.scrollY > 40) header.classList.add('shrink'); else header.classList.remove('shrink');
    if (window.scrollY > 320) back.style.display = 'block'; else back.style.display = 'none';
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  back.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  navToggle.addEventListener('click', ()=> {
    if (navMenu.style.display === 'block') navMenu.style.display = ''; else navMenu.style.display = 'block';
  });

  // Modal
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const id = btn.getAttribute('data-open-modal');
      const modal = document.querySelector(id);
      if (modal) { modal.setAttribute('open',''); modal.removeAttribute('aria-hidden'); }
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(btn => btn.addEventListener('click', ()=>{
    const modal = btn.closest('.modal'); if (modal) { modal.removeAttribute('open'); modal.setAttribute('aria-hidden','true'); }
  }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.querySelectorAll('.modal[open]').forEach(m => { m.removeAttribute('open'); m.setAttribute('aria-hidden','true'); }); } });

  // Lightbox gallery
  document.querySelectorAll('.gallery-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const img = document.getElementById('lightbox-img');
      const caption = document.getElementById('lightbox-caption');
      img.src = src;
      caption.textContent = btn.querySelector('.caption') ? btn.querySelector('.caption').textContent : '';
      const m = document.getElementById('lightbox');
      if (m) { m.setAttribute('open',''); m.removeAttribute('aria-hidden'); }
    });
  });

  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target.classList.contains('modal-backdrop')) { m.removeAttribute('open'); m.setAttribute('aria-hidden','true'); }
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      if (panel.style.display === 'block') panel.style.display = 'none'; else panel.style.display = 'block';
    });
  });

  // Join form demo
  const joinForm = document.getElementById('joinForm');
  if (joinForm) joinForm.addEventListener('submit', e => { e.preventDefault(); alert('Thanks! We received your request.'); const modal = joinForm.closest('.modal'); if (modal) { modal.removeAttribute('open'); modal.setAttribute('aria-hidden','true'); } });
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', e => { e.preventDefault(); document.getElementById('contact-msg').textContent = 'Thanks — we will reply within 48 hours.'; contactForm.reset(); });

  // Reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.animate-fade').forEach(el => observer.observe(el));
});
