
// MENU NAVIGASI MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// MENUTUP MENU SETELAH DIKLIK
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// ANIMASI SAAT SCROLL
const revealElements = document.querySelectorAll(
    ".section, .card, .about-content"
);

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});
