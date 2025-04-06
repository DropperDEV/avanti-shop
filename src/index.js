const header = document.getElementById("article-header");
const links = document.getElementById("footer-links");
const arrow = document.getElementById("article-arrow");

let isOpen = false;

header.addEventListener("click", () => {
  if (!isOpen) {
    links.style.maxHeight = links.scrollHeight + "px"; // abre suavemente
    arrow.classList.add("rotate-180");
  } else {
    links.style.maxHeight = "0"; // fecha suavemente
    arrow.classList.remove("rotate-180");
  }
  isOpen = !isOpen;
});
