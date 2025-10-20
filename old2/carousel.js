const carousel = document.getElementById("carousel");
const carouselItems = document.querySelectorAll(".carousel-item");

// Duplicate carousel items to create seamless scrolling
const items = Array.from(carouselItems);
items.forEach((item) => {
  const clone = item.cloneNode(true);
  carousel.appendChild(clone);
});

let scrollPosition = 0;
let scrollSpeed = 1; // Default scroll speed (pixels per frame)

function startCarousel() {
  scrollPosition -= scrollSpeed;

  // Reset position if scrolled past the first set of items
  if (Math.abs(scrollPosition) >= carousel.offsetWidth / 2) {
    scrollPosition = 0;
  }

  // Apply translation
  carousel.style.transform = `translateX(${scrollPosition}px)`;

  requestAnimationFrame(startCarousel);
}

// Adjust scrolling speed on hover
carouselItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    scrollSpeed = 0; // Slow down by 50%
  });

  item.addEventListener("mouseleave", () => {
    scrollSpeed = 1; // Restore normal speed
  });
});

// Initialize the carousel animation
startCarousel();
