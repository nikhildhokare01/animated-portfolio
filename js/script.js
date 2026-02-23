// ===========================
// Mobile Menu Toggle (Safe)
// ===========================
const hamburger = document.getElementsByClassName("hamburger")[0];
const mobileNavs = document.getElementsByClassName("nav-links")[0];

if (hamburger && mobileNavs) {
  hamburger.addEventListener("click", () => {
    mobileNavs.classList.toggle("active");
  });
}


// ===========================
// Scroll Reveal Animations
// ===========================
const animatedItems = document.querySelectorAll(".animate");

if (animatedItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedItems.forEach(item => observer.observe(item));
}
