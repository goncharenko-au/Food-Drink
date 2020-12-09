document.addEventListener("DOMContentLoaded", () => {

    // Slider in new-wines
    let mySwiper = new Swiper(".new-wines__slider", {
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // active buttons in new-wines
    const learnBtn = document.querySelector('.new-wines__learn-btn'),
        viewBtn = document.querySelector('.new-wines__view-btn');

    viewBtn.addEventListener('mouseover', () => {
        viewBtn.classList.add('active');
        learnBtn.classList.remove('active');
    });

    viewBtn.addEventListener('mouseout', () => {
        viewBtn.classList.remove('active');
        learnBtn.classList.add('active');
    });

});