/* ============================================================
   modal.js — fiches détaillées au clic (projets & loisirs)
   Un élément avec data-modal="m-xxx" ouvre l'overlay #m-xxx
   Fermeture : croix, clic sur le fond, touche Échap
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const openers = document.querySelectorAll('[data-modal]');
  if (!openers.length) return;

  let current = null;

  const open = (id) => {
    const ov = document.getElementById(id);
    if (!ov) return;
    ov.classList.add('show');
    document.body.style.overflow = 'hidden';
    current = ov;
    const btn = ov.querySelector('.modal-close');
    if (btn) btn.focus();
  };

  const close = () => {
    if (!current) return;
    current.classList.remove('show');
    document.body.style.overflow = '';
    current = null;
  };

  openers.forEach(el => {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.addEventListener('click', (e) => {
      // ne pas ouvrir la fiche si on clique sur un lien interne à la carte
      if (e.target.closest('a')) return;
      open(el.dataset.modal);
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(el.dataset.modal); }
    });
  });

  document.querySelectorAll('.overlay').forEach(ov => {
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    const btn = ov.querySelector('.modal-close');
    if (btn) btn.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
});
