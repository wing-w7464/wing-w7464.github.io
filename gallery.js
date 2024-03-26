const images = [
    'img/gallery/image01.png',
    'img/gallery/image02.png',
    'img/gallery/image03.png',
    'img/gallery/image04.png',
    'img/gallery/image05.png',
    'img/gallery/image06.png',
    'img/gallery/image07.png',
    'img/gallery/image08.png',
    'img/gallery/image09.png',
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

images.forEach(image => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${image}" alt="Gallery image">`;
    swiperWrapper.appendChild(slide);
});

const mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 1, // Display a custom number of slides based on container width
    breakpoints: {
        '@0.80': {
            slidesPerView: 2,
        },
        '@1.50': {
            slidesPerView: 3,
        }

    },
    spaceBetween: 0, // Space between slides in pixels
    loop: true, // Enable looping
    centeredSlides: true, // Center the slides
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, // Continue autoplay on interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // Enable smooth continuous scrolling effect
    speed: 400, // Speed of transition between slides (in ms)
    freeMode: true, // Enable free mode for a continuous scrolling effect
    freeModeMomentum: true, // Keep momentum after releasing touch or mouse click
});


