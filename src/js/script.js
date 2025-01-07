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

const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let scrollAmount = 0;

prevButton.addEventListener("click", () => {
  scrollAmount -= 300; 
  if (scrollAmount < 0) {
    scrollAmount = 0; 
  }
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

nextButton.addEventListener("click", () => {
  scrollAmount += 300; 
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll; 
  }
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

