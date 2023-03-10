let darkMode1 = document.querySelector(".darkmode");
let html = document.querySelector("html");

function darkModehendel(){
    html.classList.toggle("dark");
};

darkMode1.addEventListener("click",darkModehendel);