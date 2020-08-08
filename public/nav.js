const nav = document.querySelector(".navbar-nav");
const burger = document.querySelector(".burger-div");
const link1 = document.querySelector(".menu-1");
const link2 = document.querySelector(".menu-2");
const link3 = document.querySelector(".menu-3");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

link1.addEventListener("click", () => {
  nav.classList.toggle("show");
});

link2.addEventListener("click", () => {
  nav.classList.toggle("show");
});

link3.addEventListener("click", () => {
  nav.classList.toggle("show");
});
