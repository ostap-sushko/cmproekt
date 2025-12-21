const formEl = document.querySelector(".footer__form");
const backdropEl = document.querySelector(".backdropnew");
console.log(backdropEl);

const closeBtn = document.querySelector(".backdropnew__btn");

function closeBackdrop() {
    backdropEl.classList.add("is-hidden");
}

function openBackdrop() {
    backdropEl.classList.remove("is-hidden");
}

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Ура");
    
    openBackdrop();
});

closeBtn.addEventListener("click", closeBackdrop);

backdropEl.addEventListener("click", function (event) {
    if (event.target === backdropEl) {
        closeBackdrop();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeBackdrop();
    }
});