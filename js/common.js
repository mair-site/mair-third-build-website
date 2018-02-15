$(document).ready(function() {
    var $header = $('header');
    var $logo = $('.company-name');

    $(window).scroll ( function() {
        if ($(this).scrollTop() > 200 ) {
            $header.addClass("minimised");
        } else {
            $header.removeClass("minimised");
        }
    });

    document.getElementById("open-nav").onclick = function () {
        document.body.classList.toggle("nav-open");
        return false;
    };

});

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 4000});

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    navText: "",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})