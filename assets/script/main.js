// Mobile menu show and hide the menu bar and x also toggle the main menu
$('#mobileMenu').click(function() {
    $('#mobileMenu .fa-bars').toggle(); 
    $('#mobileMenu .fa-xmark').toggle();
    $('.header__navigation').fadeToggle(100);
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


// Slick carousel
$('#slider').slick({
    dots: true, // add dots
    arrows: false, // remove arrows
    slidesToShow: 1, //Show 2 slides 
    slidesToScroll: 1,// slide only two in a row
});

// Scroll up to top
$("#scrollToTopBtn").on("click", function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});


$(window).on("scroll", function(){
    // Show or hide the scroll-up button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#scrollToTopBtn").css("display", "block");
    } else {
        $("#scrollToTopBtn").css("display", "none");
    }
});


    

$(window).on("scroll", function(){
    const windowWidth = $(window).width(); // Get window width
    const breakpoint = 768; // Define your desired breakpoint here
    //If window width is less then 768 breadkpoint then show main menu otherwise hide it
    if (windowWidth < breakpoint && (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70)) {
        $('#header').addClass("on_mobile");
    } else {
        $('#header').removeClass("on_mobile"); 
    } 
});