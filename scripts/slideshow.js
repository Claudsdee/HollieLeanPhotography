var slideshow = 0;

carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].style.opacity = 0;
        }
    slideshow++;
    if (slideshow > x.length) {slideshow = 1} 
    x[slideshow-1].style.display = "block"; 
    x[slideshow-1].style.opacity = 0.8;
    setTimeout(carousel, 3000); // Change image every 3 seconds
}



// var current = 0,
//     slides = document.getElementsByClassName("slides");

// setInterval(function() {
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.opacity = 0;

//     }
//     current = (current != slides.length - 1) ? current + 1 : 0;
//     slides[current].style.opacity = 1;

// }, 3000);