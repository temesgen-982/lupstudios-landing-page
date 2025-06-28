const openBtn = document.querySelector(".nav-open");
const closeBtn = document.querySelector(".nav-close");
const menu = document.querySelector(".nav");

openBtn.addEventListener("click", () => {
  menu.classList.remove("is-hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("is-hidden");
});
