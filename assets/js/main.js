//Pop up modal


//Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function() {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});
