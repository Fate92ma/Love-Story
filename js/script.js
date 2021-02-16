$(document).ready(function () { // Start Coding Here

    // Smooth Scroll

    $('nav a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Mini menu

    $(".menu").click(function () {
        $("aside").toggleClass("asideMini");
    });

    // Photos

    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom",
        animationDuration: 1000,
        transitionEffect: "rotate",
        transitionDuration: 1000,
        buttons: [
    'slideShow',
    'share',
    'download',
    'zoom',
    'fullScreen',
    'close'
  ],
        thumbs: {
            autoStart: false
        }
    });

    // Groomsmen, Bridesmaids

    $('#mixedSlider').multislider({
        duration: 1000,
        interval: 2000
    });

    $("#mixedSlider2").multislider({
        duration: 1000,
        interval: 2000
    });

}); // End Code