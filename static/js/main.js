document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});
