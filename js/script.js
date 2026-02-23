// ===========================
// Mobile Menu Toggle (Safe)
// ===========================
const hamburger = document.getElementsByClassName("hamburger")[0];
const mobileNavs = document.getElementsByClassName("nav-links")[0];

if (hamburger && mobileNavs) {
  hamburger.addEventListener("click", () => {
    mobileNavs.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
}


// ===========================
// Scroll Reveal Animations
// ===========================
const animatedItems = document.querySelectorAll(".animate");

if (animatedItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.08}s`;
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedItems.forEach(item => observer.observe(item));
}
