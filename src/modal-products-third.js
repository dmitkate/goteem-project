(() => {  
  const refs = {  
    openModalBtn: document.querySelector("[data-modal-open-products-third]"),  
    closeModalBtn: document.querySelector("[data-modal-close-products-third]"),  
    modal: document.querySelector("[data-modal-products-third]"),
    body: document.querySelector('body')  
  };  
  
  refs.openModalBtn.addEventListener("click", toggleModal);  
  refs.closeModalBtn.addEventListener("click", toggleModal);  
  
  function toggleModal() {  
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");  
  }  
})();