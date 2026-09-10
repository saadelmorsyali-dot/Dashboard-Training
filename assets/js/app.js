const modules = Array.from(document.querySelectorAll('.lesson'));
const navLinks = Array.from(document.querySelectorAll('[data-lesson]'));
const search = document.getElementById('search');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const mobileMenu = document.getElementById('mobileMenu');
const sidebar = document.querySelector('.sidebar');

function showLesson(id) {
  modules.forEach(m => m.classList.toggle('active', m.id === id));
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.lesson === id));
  window.scrollTo({top: 0, behavior: 'smooth'});
  localStorage.setItem('dashboardTrainingLesson', id);
  updateProgress();
  if (sidebar) sidebar.classList.remove('open');
}

function updateProgress() {
  const completed = JSON.parse(localStorage.getItem('dashboardTrainingCompleted') || '[]');
  const total = modules.length;
  const pct = total ? Math.round((completed.length / total) * 100) : 0;
  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${pct}% complete`;
  modules.forEach(m => {
    const button = m.querySelector('.complete-btn');
    if (button) {
      const done = completed.includes(m.id);
      button.textContent = done ? '✓ Completed' : 'Mark as complete';
      button.classList.toggle('done', done);
    }
  });
}

function completeLesson(id) {
  const completed = JSON.parse(localStorage.getItem('dashboardTrainingCompleted') || '[]');
  if (!completed.includes(id)) completed.push(id);
  localStorage.setItem('dashboardTrainingCompleted', JSON.stringify(completed));
  updateProgress();
}

function copyText(button) {
  const target = button.closest('.prompt-box, .code-box').querySelector('pre');
  if (!target) return;
  navigator.clipboard.writeText(target.innerText).then(() => {
    const old = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = old, 1200);
  });
}

document.addEventListener('click', e => {
  const link = e.target.closest('[data-lesson]');
  if (link) {
    e.preventDefault();
    showLesson(link.dataset.lesson);
  }
  const complete = e.target.closest('.complete-btn');
  if (complete) completeLesson(complete.closest('.lesson').id);
  const copy = e.target.closest('.copy-btn');
  if (copy) copyText(copy);
  const next = e.target.closest('[data-next]');
  if (next) showLesson(next.dataset.next);
  const prev = e.target.closest('[data-prev]');
  if (prev) showLesson(prev.dataset.prev);
});

if (search) {
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    navLinks.forEach(link => {
      const item = link.closest('.nav-item');
      item.style.display = !q || link.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

if (mobileMenu) mobileMenu.addEventListener('click', () => sidebar.classList.toggle('open'));

const saved = localStorage.getItem('dashboardTrainingLesson');
showLesson(saved && document.getElementById(saved) ? saved : 'lesson-00');
updateProgress();
