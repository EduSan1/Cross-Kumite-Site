function abrir() {
  document.querySelector(".menu-burger-container").classList.toggle("active");
}
function fechar() {
  document.querySelector(".menu-burger-container").classList.remove("active");
}
document
  .querySelector(".menu-burger-container")
  .addEventListener("click", abrir);
