(function () {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  const dots = slider.querySelectorAll(".hero-dot");
  if (slides.length < 2) return;

  let index = 0;
  let timer;

  function goTo(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
      dot.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      resetTimer();
    });
  });

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(index + 1), 6000);
  }

  resetTimer();
})();
