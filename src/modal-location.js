(() => {
const refs = {
    openLocationBtn: document.querySelector("[data-modal-location-open]"),
    closeLocationBtn: document.querySelector("[data-modal-location-close]"),
    location: document.querySelector("[data-modal-location]"),
};

refs.openLocationBtn.addEventListener("click", toggleLocation);
refs.closeLocationBtn.addEventListener("click", toggleLocation);

function toggleLocation() {
    refs.location.classList.toggle("is-hidden");
}
})();