(() => {  
  const refs = {  
    openModalBtn: document.querySelector("[data-modal-open-products-second]"),  
    closeModalBtn: document.querySelector("[data-modal-close-products-second]"),  
    modal: document.querySelector("[data-modal-products-second]"),  
  };  
  
  refs.openModalBtn.addEventListener("click", toggleModal);  
  refs.closeModalBtn.addEventListener("click", toggleModal);  
  
  function toggleModal() {  
    refs.modal.classList.toggle("is-hidden");  
  }  
})();