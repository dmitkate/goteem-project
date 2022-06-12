(() => {
  const refs = {
    openModalBtn: document.querySelector("[header-modal-open]"),
     openModalBtne: document.querySelector("[header-modal-opene]"),
    closeModalBtn: document.querySelector("[header-modal-close]"),
    modal: document.querySelector("[header-modal]"),
  };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtne.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();