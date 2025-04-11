document.querySelectorAll(".footer__section--mobile").forEach((article) => {
  const header = article.querySelector(".footer__section-header");
  const links = article.querySelector(".footer__section-links");
  const arrow = article.querySelector(".footer__section-arrow");

  let isOpen = false;

  header.addEventListener("click", () => {
    if (!isOpen) {
      links.style.maxHeight = links.scrollHeight + "px";
      arrow.classList.add("rotate-180");
    } else {
      links.style.maxHeight = "0";
      arrow.classList.remove("rotate-180");
    }
    isOpen = !isOpen;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const dots = document.querySelectorAll(".dot");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  // Pegamos qualquer produto pra calcular a largura
  const product = carousel.querySelector(".main__product");

  const scrollAmount = product.offsetWidth + parseInt(getComputedStyle(carousel).gap || 12); // fallback gap=12px

  leftBtn?.addEventListener("click", () => scrollCarousel(-1));
  rightBtn?.addEventListener("click", () => scrollCarousel(1));

  function scrollCarousel(direction) {
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });

    clearTimeout(carousel._scrollTimeoutManual);
    carousel._scrollTimeoutManual = setTimeout(updateDots, 300);
  }

  function updateDots() {
    const scrollLeft = carousel.scrollLeft;
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    const progress = scrollLeft / scrollWidth;
    const index = Math.round(progress * (dots.length - 1));

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-gray-darkest", i === index);
      dot.classList.toggle("bg-[#838383]", i !== index);
      dot.classList.toggle("w-3", i === index);
      dot.classList.toggle("w-2.5", i !== index);
    });
  }

  carousel.addEventListener("scroll", () => {
    clearTimeout(carousel._scrollTimeout);
    carousel._scrollTimeout = setTimeout(updateDots, 50);
  });

  window.addEventListener("load", updateDots);
});

