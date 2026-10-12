(() => {
  const toast = document.querySelector('.toast');
  const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2200); };
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copy;
      try { await navigator.clipboard.writeText(value); }
      catch { const area = document.createElement('textarea'); area.value = value; area.style.position = 'fixed'; area.style.opacity = '0'; document.body.append(area); area.select(); document.execCommand('copy'); area.remove(); }
      showToast('آدرس با موفقیت کپی شد');
    });
  });
  document.querySelector('[data-action="language"]').addEventListener('click', () => showToast('نسخه انگلیسی به‌زودی اضافه می‌شود'));
})();
