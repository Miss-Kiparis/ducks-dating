console.log("Hello world!");

const startButton = document.querySelector(".start__button");
const startPage = document.querySelector(".overflow__page");
const headerPage = document.querySelector(".header__page");

startButton.addEventListener("click", function (e) {
  startButton.classList.toggle("show");

  if (startButton.classList.contains("show")) {
    startPage.style.cssText = `display: none;`;
    headerPage.style.cssText = `display: block`;
  } else {
    startPage.style.cssText = `@media (max-width: 992px) {
        display: none;}`;
  }
  e.stopPropagation();
});

// popup

const termsText = document.querySelector(".item--text");
const privacyText = document.querySelector(".item--text2");
const privacy = document.querySelector(".item--privacy");
const terms = document.querySelector(".item--terms");

terms.addEventListener("click", function (e) {
  terms.classList.toggle("pops");
  if (terms.classList.contains("pops")) {
    termsText.style.cssText = `visibility: visible;`;
  } else {
    termsText.style.cssText = `@media (max-width: 992px) {
      display: none;}`;
  }
  e.stopPropagation();
});

privacy.addEventListener("click", function (e) {
  privacy.classList.toggle("pops");
  if (privacy.classList.contains("pops")) {
    privacyText.style.cssText = `visibility: visible;`;
  } else {
    privacyText.style.cssText = `@media (max-width: 992px) {
      display: none;}`;
  }
  e.stopPropagation();
});

// hide popup

document.addEventListener("click", function (e) {
  if (
    e &&
    e.target.className !== ".item--terms" &&
    e.target.className !== ".item--text"
  ) {
    terms.classList.remove("pops");

    termsText.style.cssText = `@media (max-width: 992px) {
  display: none;}`;
  }
});

document.addEventListener("click", function (e) {
  if (
    e &&
    e.target.className !== ".item--privacy" &&
    e.target.className !== ".item--text2"
  ) {
    privacy.classList.remove("pops");

    privacyText.style.cssText = `@media (max-width: 992px) {
  display: none;}`;
  }
});
