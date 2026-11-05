// Animazione di comparsa delle sezioni (usata da tutte le pagine)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // anima una volta sola
            }
        });
    }, { threshold: 0.01 });

    sections.forEach(section => observer.observe(section));
});
