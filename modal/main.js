const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
const modalBg = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("open-modal");
});

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalBg.classList.remove("open-modal");
}

modalBg.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  event.stopPropagation();
});
