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

const lightBox = document.querySelector("#lightbox");
const lightBoxImg = lightBox.querySelector("img");

document.body.addEventListener("click", (evt) => {
  console.log(evt.target);

  if (evt.target.matches("[data-full-image]")) {
    lightBoxImg.src = evt.target.dataset.fullImage;
    lightBox.showModal();
  }
});

lightBox.addEventListener("click", (evt) => {
  lightBox.classList.add("sortie");

  lightBox.addEventListener(
    "animationend",
    () => {
      lightBox.classList.remove("sortie");
      lightBox.close();
    },
    { once: true }
  );
}); 
