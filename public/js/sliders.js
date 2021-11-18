const swiper1 = new Swiper('.swiper-4', {
    slidesPerView: 2,
    spaceBetween: 4,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 4,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }
});
  
// const swiper2 = new Swiper('.swiper-offers', {
//     slidesPerView: 2,
//     spaceBetween: 4,
//     breakpoints: {
//         // when window width is >= 992px
//         767: {
//             slidesPerView: 2,
//             spaceBetween: 16,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 16,
//         }
//     }
// });

// const swiper3 = new Swiper('.swiper-reviews', {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 16,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 16,
//         }
//     }
// });

// const swiper4 = new Swiper('.swiper-about', {
//     slidesPerView: 2,
//     spaceBetween: 4,
// });

// const swiper5 = new Swiper(".soops", {
//     slidesPerView: "auto",
//     spaceBetween: 0,
//     freeMode: true,
// });

// const swiper6 = new Swiper(".subcategories", {
//     slidesPerView: "auto",
//     spaceBetween: 20,
//     freeMode: true,
// });

// const swiper7 = new Swiper(".swiper-gallery", {
//     slidesPerView: "auto",
//     spaceBetween: 16,
//     freeMode: true,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//     },
//     breakpoints: {
//         992: {
//             spaceBetween: 24,
//         }
//     }
// });

// const swiper8 = new Swiper(".swiper-6", {
//     slidesPerView: 2,
//     spaceBetween: 4,
//     freeMode: true,
//     breakpoints: {
//         576: {
//             slidesPerView: 3,
//             spaceBetween: 8,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 16,
//         },
//         992: {
//             slidesPerView: 4,
//             spaceBetween: 16,
//         },
//         1200: {
//             slidesPerView: 5,
//             spaceBetween: 16,
//         },
//         1400: {
//             slidesPerView: 6,
//             spaceBetween: 16,
//         },
//         1660: {
//             spaceBetween: 24,
//             slidesPerView: 6,
//         }
//     }
// });