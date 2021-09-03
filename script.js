const closeNavBtn = document.querySelector("#close-nav");
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavBtn.addEventListener("click", () => {
  mobileNav.classList.add("show");
});

closeNavBtn.addEventListener("click", () => {
  mobileNav.classList.remove("show");
});
