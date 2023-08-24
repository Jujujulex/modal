"use strict";

"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
