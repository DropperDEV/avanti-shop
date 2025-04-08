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
