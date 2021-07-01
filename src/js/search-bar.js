console.log("new js")

const ipTracker = document.querySelector(".ip-tracker__search");
const ipForm = document.querySelector(".ip-tracker__form");
const ipInput = document.querySelector(".ip-tracker__input");

ipTracker.addEventListener('click', () => {
    ipTracker.classList.toggle("ip-tracker__search--active");
    ipForm.classList.toggle("ip-tracker__form--active");
    ipInput.classList.toggle("ip-tracker__input--active");

})


