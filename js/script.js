document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cards");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger when 10% of the element is visible

  cards.forEach((card) => {
    observer.observe(card);
  });
});
