// Preloader //

jQuery(document).ready(function($) {  


$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Closes the sidebar menu when any link inside the sidebar is clicked
$("#sidebar-wrapper .sidebar-nav li a").click(function(e) {
    $("#sidebar-wrapper").removeClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

// wow

new WOW().init();

// Set Header Background

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 150) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$(document).ready(function(){
    // Partner slider
        $('#select-slider').owlCarousel({
            loop:false,
            margin:10,
            dots: true,
            autoplay: false,
            nav: true,  // Enable navigation
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'], // Add custom icons
            responsive:{
                0:{
                    items:1,
                    dots: true,
                },
                769:{
                    items:3,
                    dots: false,
                },
                1440:{
                    items:3
                }
            }
        }) 
    // Partner slider
        $('#partner-slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            nav: true,  // Enable navigation
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'], // Add custom icons
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1440:{
                    items:4
                }
            }
        }) // end of #partner-slider
        // Event slider
        $('#event-slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            nav: true,  // Enable navigation
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], // Add custom icons
            responsive:{
                0:{
                    items:1
                },
                1200:{
                    items:1
                },
                1440:{
                    items:1
                }
            }
        }) // end of #event-slider
        $(".custom-carousel").owlCarousel({
          autoplay: true,
          autoWidth: true,
          loop: true
        });
        $(document).ready(function () {
          $(".custom-carousel .item").click(function () {
            $(".custom-carousel .item").not($(this)).removeClass("active");
            $(this).toggleClass("active");
          });
        });

});

// Team overlay

// $(document).ready(function(){
//   $(".img-overlay").hover(function(){
//     $(".overlay").toggleClass("overlay_hover");
//   });

// });
