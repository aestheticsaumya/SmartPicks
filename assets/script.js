document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Image Slider with Arrow Navigation
    const heroImages = ["smartphone1.jpg", "smartphone2.jpg", "smartphone3.jpg"];
    let heroIndex = 0;
    const heroImageElement = document.querySelector(".slider-image");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");

    function updateHeroImage() {
        heroImageElement.src = heroImages[heroIndex];
    }

    prevArrow.addEventListener("click", () => {
        heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
        updateHeroImage();
    });

    nextArrow.addEventListener("click", () => {
        heroIndex = (heroIndex + 1) % heroImages.length;
        updateHeroImage();
    });
});
