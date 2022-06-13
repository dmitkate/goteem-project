(() => {
const refs = {
    openFranchiseBtn: document.querySelector("[data-modal-franchise-open]"),
    closeFranchiseBtn: document.querySelector("[data-modal-franchise-close]"),
    franchise: document.querySelector("[data-modal-franchise]"),
};

refs.openFranchiseBtn.addEventListener("click", toggleFranchise);
refs.closeFranchiseBtn.addEventListener("click", toggleFranchise);

function toggleFranchise() {
    refs.franchise.classList.toggle("is-hidden");
}
})();