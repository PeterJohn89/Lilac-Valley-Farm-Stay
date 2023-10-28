// Mobile menu
$('.mobile_menu').click(function() {
    $('.mobile_menu .fa-bars').toggle(); // Toggle to hide and show the mobile hamburger icon
    $('.mobile_menu .fa-xmark').toggle();// Toggle to hide and show the x
    // iff the menu is displayed none the change main menu to display none
    if ($('#menu').css('display') === 'none') { 
        $('.main_menu').css('display', 'none'); // Hide main menu on mobile menu click
    }
});

// When the window is resized, check if it's beyond a certain breakpoint, and if so, show the main menu.
$(window).resize(function() {
    var windowWidth = $(window).width(); // Get window width
    var breakpoint = 768; // Define your desired breakpoint here
    //If window width is less then 768 breadkpoint then show main menu otherwise hide it
    if (windowWidth > breakpoint) {
        $('.main_menu').css('display', 'block');
    } else {
        $('.main_menu').css('display', 'none');
    }
});

// Slick carousel
$('#carousel').slick({
    dots: true, // add dots
    arrows: false, // remove arrows
    slidesToShow: 2, //Show 2 slides 
    slidesToScroll: 2,// slide only two in a row
    // Responsive setting change on 768
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// Slick full width slider
$('#full_width_slider').slick({
    dots: true, // Add dots for navigation
    arrows: false, // Hide arrow navigation
    infinite: true, // Allow infinite scrolling
    speed: 300, // Set slide transition speed
    slidesToShow: 1, // Display one slide at a time
    adaptiveHeight: true, // Adjust slide height based on content
    autoplay: true, // Enable automatic slide autoplay
    autoplaySpeed: 5000, // Set autoplay speed in milliseconds
});

// Scroll up to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the scroll-up button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Display the scroll-up button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the scroll-up button
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
