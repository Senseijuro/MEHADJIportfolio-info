/* ============================================================
   filtres.js — filtrage des projets par dominante (Info / Com)
   Chaque carte .proj porte data-cat="info" | "com" | "info com"
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.proj');
  if (!buttons.length || !cards.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter; // "all" | "info" | "com"
      cards.forEach(card => {
        const cats = (card.dataset.cat || '').split(' ');
        const show = filter === 'all' || cats.includes(filter);
        card.classList.toggle('hidden', !show);
      });
    });
  });
});
