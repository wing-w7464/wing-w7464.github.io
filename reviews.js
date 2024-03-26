const reviewSwiper = new Swiper('.review-container', {
    // Configuration
    slidesPerView: 'auto',
    centeredSlides: true, // Center the slides
    // spaceBetween: 10, // Maintain original gap if desired
    loop: true,
    // centeredSlides: true, // Center the slides
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, // Continue autoplay on interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Adjusting for different screen sizes
        '@0.75': {
            slidesPerView: 2,
        },
        '@1.00': {
            slidesPerView: 3,
        },
        '@1.25': {
            slidesPerView: 4,
        },
    }
});
