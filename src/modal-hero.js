(() => {
  const refs = {
    openModalHeroBtn: document.querySelector("[data-modal-hero-open]"),
    closeModalHeroBtn: document.querySelector("[data-modal-hero-close]"),
    modalHero: document.querySelector("[data-modal-hero]"),
    body: document.querySelector('body')
  };

  refs.openModalHeroBtn.addEventListener("click", toggleModal);
  refs.closeModalHeroBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalHero.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();