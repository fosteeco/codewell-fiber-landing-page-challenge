const images = [
  "./Assets/Sign Up Image.png",
  "./Assets/hero-Illustration.png",
  "./Assets/Page Image.png",
  "./Assets/hero-Illustration.png",
];
let imageIndex = 0;
const imageCircles = document.querySelectorAll(".image-circle");
const signUpImg = document.querySelector("#sign-up-showcase-img");

function removeCurrent() {
  const currentCircle = document.querySelector(".image-circle.current");
  currentCircle.classList.remove("current");
}

imageCircles.forEach((circle, idx) => {
  circle.addEventListener("click", () => {
    removeCurrent();
    imageIndex = idx;
    circle.classList.add("current");
    signUpImg.src = images[idx];
  });
});

setInterval(() => {
  if (imageIndex < images.length - 1) {
    imageIndex += 1;
  } else {
    imageIndex = 0;
  }
  removeCurrent();
  imageCircles[imageIndex].classList.add("current");
  signUpImg.src = images[imageIndex];
}, 4000);
