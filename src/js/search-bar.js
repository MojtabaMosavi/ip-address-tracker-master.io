console.log("new js")

const ipTracker = document.querySelector(".ip-tracker__search");
const ipForm = document.querySelector(".ip-tracker__form");
const ipInput = document.querySelector(".ip-tracker__input");
const controlInfo = document.querySelector(".ip-tracker__control-info");
const infoList = document.querySelector(".ip-tracker__info");



ipTracker.addEventListener('click', () => {
    ipTracker.classList.toggle("ip-tracker__search--active");
    ipForm.classList.toggle("ip-tracker__form--active");
    ipInput.classList.toggle("ip-tracker__input--active");
    infoList.classList.toggle("ip-tracker__info--active");



})


