// Smooth reveal for sections
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.style.opacity = 0;
      setTimeout(() => {
        targetSection.style.transition = "opacity 0.5s ease";
        targetSection.style.opacity = 1;
      }, 100);
    }
  });
});

console.log("Animation Portfolio Loaded with Spring Effects");
