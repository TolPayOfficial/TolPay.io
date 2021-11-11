const swiperPartner = new Swiper('.swiper-partner', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1370: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

const swiperVision = new Swiper('.swiper-vision', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1370: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});


const swiperFeatures = new Swiper('.swiper-features', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1370: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});