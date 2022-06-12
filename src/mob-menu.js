(() => {
  const refs = {
    openMenuBtn: document.querySelector(".site-nav_btn-burger"),
    closeMenuBtn: document.querySelector(".site-nav_btn-cross"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();