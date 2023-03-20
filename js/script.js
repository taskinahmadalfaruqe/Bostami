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
        
      });
})
