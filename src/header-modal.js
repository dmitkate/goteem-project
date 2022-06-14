(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-header-modal-open]"),
     openModalBtne: document.querySelector("[data-header-modal-opene]"),
    closeModalBtn: document.querySelector("[data-header-modal-close]"),
    modal: document.querySelector("[data-header-modal]"),
    body: document.querySelector('body')
  };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtne.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();