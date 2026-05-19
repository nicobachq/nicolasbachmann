/* Nicolas Bachmann — minimal interactivity */

/* Auto-update copyright year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Nav: solid background after scrolling past hero */
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 60) nav.classList.add('is-stuck');
  else nav.classList.remove('is-stuck');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Mobile nav toggle */
const toggle = document.getElementById('navToggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
/* Close mobile nav when a link is tapped */
document.querySelectorAll('.nav__links a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
