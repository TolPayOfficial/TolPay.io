/* Scrool Page */
$(document).ready(function() {
    $(".nav-link").click(function() {
        var addressValue = $(this).attr("link");
        var goTo = $(addressValue).offset().top;
        $([document.documentElement, document.body]).animate({
            scrollTop: goTo - 120
        }, 1);
    });

});