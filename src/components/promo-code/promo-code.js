const STATUS_RESET_DELAY = 2000;

const copyToClipboard = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.append(field);
  field.select();
  const isCopied = document.execCommand('copy');
  field.remove();

  if (!isCopied) throw new Error('Copy failed');
};

document.querySelectorAll('.promo-code').forEach((promo) => {
  const code = promo.querySelector('.promo-code__value').textContent.trim();
  const button = promo.querySelector('.promo-code__copy');
  const status = promo.querySelector('.promo-code__status');
  const defaultStatus = status.textContent;
  let resetTimer;

  button.addEventListener('click', async () => {
    try {
      await copyToClipboard(code);
      status.textContent = 'Скопировано';
      promo.classList.add('promo-code--copied');
    } catch {
      status.textContent = 'Выделите вручную';
    }

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      status.textContent = defaultStatus;
      promo.classList.remove('promo-code--copied');
    }, STATUS_RESET_DELAY);
  });
});
