var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    // responsive breakpoint

    breakpoints:{
        768:{
            slidesPerView:3,
            spaceBetween:30
        }
    }
}); 
var swiper = new Swiper(".abc", {
    slidesPerView: 1,
    spaceBetween: 80,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
}); 
