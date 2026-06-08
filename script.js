//initialiseCarasol();
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//only runs if slide images exist on page
if (slides.length>0) {
document.addEventListener("DOMContentLoaded", initialiseCarasol)

}

function initialiseCarasol() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        //changes slides every 5 seconds
        intervalId=setInterval(nextSlide, 5000); 
}

    }


function showSlide(index){
    if(slides.length===0) return;

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

//display products
const productContainer = document.querySelector(".product-list");
const isProductDetailPage = document.querySelector(".product-detail");


const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category')

if (productContainer) {
    displayProducts();
} else if (isProductDetailPage) {
    displayProductDetail();
}

function displayProducts() {

    let filteredProducts = products;

    if (selectedCategory) {
        filteredProducts = products.filter(p => p.category === selectedCategory);
    }
    filteredProducts.forEach(product=> {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        <div class="img-box">
            <img src="${product.colors[0].mainImage}">
        </div>
        <h2 class="title">${product.title}</h2>
        <span class = "price">${product.price}</span>
        `;
        productContainer.appendChild(productCard);
        
        const imgBox = productCard.querySelector(".img-box");
        imgBox.addEventListener("click",() => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        })
    }

    )
}

//display detail for products//

function displayProductDetail(){
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"))

    const titleEl = document.querySelector(".title");
    const priceEl = document.querySelector(".price");
    const descriptionEl = document.querySelector(".description");
    const mainImageContainer = document.querySelector(".main-img");
    const thumbnailContainer = document.querySelector(".thumbnail-list");
    const sizeContainer = document.querySelectorAll(".size-options");
    const addToCartBtn = document.querySelector("#add-cart-btn");

    mainImageContainer.innerHTML = '<img src'    
}

