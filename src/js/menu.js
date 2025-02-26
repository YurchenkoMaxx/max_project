(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    overlay: document.querySelector('[data-menu-overlay]'), // Добавляем оверлей
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.overlay.addEventListener('click', toggleModal); // Закрытие по клику на фон
  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.overlay.classList.toggle('is-open'); // Показываем/скрываем фон
  }
})();