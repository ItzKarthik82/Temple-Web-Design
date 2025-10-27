
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn?.addEventListener('click', () => {
  mobileNav.toggleAttribute('hidden');
  menuBtn.setAttribute('aria-expanded', String(!mobileNav.hasAttribute('hidden')));
});

// Simple slider
(function(){
  const slider = document.querySelector('.slider');
  if(!slider) return;
  const track = slider.querySelector('.slides');
  const slides = Array.from(track.children);
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dots = Array.from(slider.querySelectorAll('.dot'));
  let idx = 0;
  function go(i){
    idx = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${idx * -100}%)`;
    dots.forEach((d,k)=>d.classList.toggle('active', k===idx));
  }
  prev.addEventListener('click', ()=>go(idx-1));
  next.addEventListener('click', ()=>go(idx+1));
  dots.forEach((d,k)=>d.addEventListener('click', ()=>go(k)));
  setInterval(()=>go(idx+1), 6000);
  go(0);
})();

// Smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.length>1){
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
    }
  });
});

// Mailto helper
function sendMail(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const msg = encodeURIComponent(form.message.value.trim());
  const subject = `Temple inquiry from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${msg}`;
  window.location.href = `mailto:contact.aha@aha-svtemple.org?subject=${subject}&body=${body}`;
}
window.sendMail = sendMail;
