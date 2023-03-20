let darkMode1 = document.querySelector(".darkmode");
let html = document.querySelector("html");

function darkModehendel(){
    html.classList.toggle("dark");
};

darkMode1.addEventListener("click",darkModehendel);

$(function(){
    'use strict'
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

    //   YEAR 
    let FullYear= new Date().getFullYear();
    document.querySelector(".year").innerHTML=FullYear;
})
