1 //html different ID

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initialiseCarasol();
document.addEventListener("DOMContentLoaded", initialiseCarasol)

function initialiseCarasol() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        //changes slides every 5 seconds
        intervalId=setInterval(nextSlide, 5000); 
}

    }


function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index <0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => 
    {slide.classList.remove("displaySlide");

    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


