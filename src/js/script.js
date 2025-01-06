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

// Script pour le carrousel
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let currentIndex = 1;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
}

function showNextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function showPrevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

nextButton.addEventListener("click", showNextItem);
prevButton.addEventListener("click", showPrevItem);

setInterval(showNextItem, 5000);
