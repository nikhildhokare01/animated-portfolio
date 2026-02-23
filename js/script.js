// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// CURSOR GLOW
const cursor = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
