// Slider function

var slideUp = {
    distance: '2%',
    origin: 'right',
    delay: 800,
};

ScrollReveal().reveal('.slide', slideUp);

// Smooth Scroll

$(document).ready(function(){
    // Smooth scrolling to all "a"
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            // jQuery's animate() method to add smooth page scroll
            // The optional number is 800 - miliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        } // End the if
    });
});

// Button function

// et the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Modal function
