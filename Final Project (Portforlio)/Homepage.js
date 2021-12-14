// slideshow
var slideIndex = 0;
showSlides();

// function currentSlide(n) {
//   slideIndex = n;
//   showSlides();
// }

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}
// end JavaScript for slideshow

//Sidebar
var open = false;
function openNav() {
  if (!open){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector("header").style.marginLeft = "250px";
    open = true;
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector("header").style.marginLeft = "0";
    open = false;
  }
}

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }