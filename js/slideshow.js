let slideIndex = 1;
showSlides(slideIndex);

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 5000);
})

function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    if (n < 0){
        showSlides(slideIndex -= 1);
      } 
    else {
        showSlides(slideIndex += 1); 
      }
    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 5000);
      } 
    else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
      }
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

