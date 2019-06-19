//ALERT - VISES NÅR DU PRØVER AT KØBE PÅ LYNSPILLET
function OBS() {
  alert("Dette er kun en prototype, og du kan derfor ikke gennemføre dit køb");
}

//BURGERMENU

function onLoad() {
  function toggleMenu() {
    document.querySelector(".burger").classList.toggle("change");
    document.querySelector(".mobil_nav").classList.toggle("show");
  }
  document.querySelector(".burger").addEventListener("click", toggleMenu);
  document.querySelector("ul").addEventListener("click", toggleMenu);
}
//Vil først starte når DOM-indholdet er loaded
document.addEventListener("DOMContentLoaded", function(event) {
  onLoad();
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
