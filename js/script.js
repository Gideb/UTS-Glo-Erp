document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const slidesContainer = document.querySelector(".carousel-slides");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  let currentSlide = 0;
  let interval;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 6000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  // Pause on hover
  const carousel = document.querySelector(".carousel-container");
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);

  // Init
  showSlide(currentSlide);
  startAutoSlide();
});

const sidenav = document.querySelector(".sidenav");

function sidenavbtn() {
  sidenav.style.width = "100%";
}

function closebtn() {
  sidenav.style.width = "0";
}
