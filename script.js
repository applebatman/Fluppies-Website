1 //html different ID

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initialiseCarasol();
document.addEventListener("DOMContentLoaded", initialiseCarasol)

function initialiseCarasol() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId=setInterval(nextSlide, 5000);
}

    }


function showSlide(index){

}
function prevSlide(){

}

function nextSlide(){

}