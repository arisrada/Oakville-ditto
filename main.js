let slideIndex = 0;
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

function showSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500);
}
showSlides();


var time = 2000;
var index = 0;
var container = document.getElementById("container");
var childrenCount = document.getElementsByClassName("scroll-images").length;
function slideToNext() {

  index = (index + 1) % childrenCount;
  console.log(index);
  container.style.marginLeft = -index * 30 + "%";

}
var pt = window.setInterval(function() {
    slideToNext();
}, time)
