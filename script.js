var swiper =new swiper(".mySwiper-1",{
     slidesPerView:1,
     spaceBetween:30,
     lopp:true,
     pagination:{
        el:".swiper-pagination",
        clickable:true,

     },
     navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
     }
});
var swiper =new swiper(".mySwiper-1",{
    slidesPerView:3,
    spaceBetween:20,
    lopp:true,
    loppFillGroupWithBlank:true,
    navigation: {
       nextEl:".swiper-button-next",
       prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0:{
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,

        }
    }
})

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input){

    tabInputs.addEventListener("change",function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById("swiper" +id);
        thisSwiper.swiper.update();
    })

});