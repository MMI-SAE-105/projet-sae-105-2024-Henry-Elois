const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

document.querySelector(".menu-back").addEventListener("click", function () {
  document.getElementById("mainNav").setAttribute("aria-hidden", "true");
});

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const carouselContainer = document.querySelector(".carousel-container");

if (nextButton) {
  nextButton.addEventListener("click", () => {
    carouselContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
}
if (prevButton) {
  prevButton.addEventListener("click", () => {
    carouselContainer.scrollBy({ left: -300, behavior: "smooth" });
  });
}

