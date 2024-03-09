let swiperCards = new Swiper('.reviews__content', {
    // Optional parameters
    spaceBetween: 32,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        768: {
            slidesPerView: 1,
        },
        968: {
            slidesPerView: 3,
        },
    },
});