/* ============================================================
   main.js — navigation mobile, lien actif, animations reveal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu mobile ---------- */
  const burger = document.querySelector('.burger');
  const links  = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
      })
    );
  }

  /* ---------- Lien actif (basé sur data-page du <body>) ---------- */
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('.nav-links a[data-link]').forEach(a => {
      if (a.dataset.link === page) a.classList.add('active');
    });
  }

  /* ---------- Apparition au scroll ---------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .level').forEach(el => observer.observe(el));

  /* ---------- Année du footer ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
