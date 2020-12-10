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


    // tabs
    const tabs = document.querySelectorAll('.future-products__type'),
        tabsContent = document.querySelectorAll('.future-products__catalog'),
        tabsParent = document.querySelector('.future-products__types');


    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
        tabs.forEach(item => {
            item.classList.remove('future-products__catalog_active');
            item.style.cssText = `color: #fff; border-bottom: none`;
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('future-products__catalog_active');
        tabs[i].style.cssText = `color: #e2b024; border-bottom-color: #e2b024; z-index: 2`;

    }
    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', () => {
        if (event.target && event.target.classList.contains('future-products__type')) {

            tabs.forEach((item, index) => {
                if (event.target == item) {
                    hideTabsContent();
                    showTabsContent(index);
                }
            });
        }

    });



});