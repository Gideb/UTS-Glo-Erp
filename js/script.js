window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const container = document.getElementById("container");

  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
  container.classList.add("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active-slide");
    });

    slides[index].classList.add("active-slide");
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);

  // Auto-move carousel every 3 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
});

document.getElementById("copyright-date").textContent =
  new Date().getFullYear();
