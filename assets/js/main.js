(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


/* 2. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };


/* 3. MainSlider-1 */
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();



/* 4. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
    if(testimonial.length){
    testimonial.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        loop:true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      });
    }


/* 5. Gallery Active */
    var client_list = $('.gallery-active');
    if(client_list.length){
      client_list.owlCarousel({
        slidesToShow: 8,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        nav: false,
        dots: false,
        margin: 0,

        autoplayHoverPause: true,
        responsive : {
          0 : {
            nav: false,
            items: 2,
          },
          768 : {
            nav: false,
            items: 8,
          }
        }
      });
    }

/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });



/* 8. sildeBar scroll */
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="ti-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/* 9. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

/* 11. Datepicker */
    
// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }
      

  //Another popUp     
        var popUp = $('.menorie-icon');
        if(popUp.length){
          popUp.magnificPopup({
            type: 'image',
            gallery:{
              enabled:true
            }
          });
        }
  // 

//Brand Active
  $('.brand-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
  const rose = document.querySelector(".parallax-rose");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animation
        rose.classList.add("bloom");
      } else {
        // Remove class so it can re-animate next time
        rose.classList.remove("bloom");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(rose);
});


document.addEventListener("DOMContentLoaded", () => {
  const sliderArea = document.querySelector(".slider-area");
  const flowerLeft = document.querySelector(".flower-left");
  const flowerRight = document.querySelector(".flower-right");

  function updateScale() {
    if (!sliderArea) return;

    const rect = sliderArea.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // progress = how much the section has come into view
    const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);

    let baseScale, maxScale;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      // Phones
      baseScale = 0.3;
      maxScale = 1.0;
    } else if (screenWidth <= 1024) {
      // Tablets
      baseScale = 0.4;
      maxScale = 1.3;
    } else {
      // Desktop
      baseScale = 0.5;
      maxScale = 1.8;
    }

    // Interpolated scale
    const scale = baseScale + (maxScale - baseScale) * progress;

    // Animate left flower
    const rotationLeft = -15 + 15 * progress;
    flowerLeft.style.transform = `scale(${scale}) rotate(${rotationLeft}deg)`;

    // Animate right flower (always visible)
    const rotationRight = 15 - 15 * progress;
    flowerRight.style.transform = `scale(${scale}) rotate(${rotationRight}deg)`;
  }

  window.addEventListener("scroll", updateScale, { passive: true });
  window.addEventListener("resize", updateScale);
  updateScale();

  // Audio control
   const audio = document.getElementById("bgAudio");
  const btn = document.getElementById("audioBtn");
  const icon = document.getElementById("audioIcon");
  const label = document.getElementById("audioLabel");

  // Autoplay muted (required by browsers)
  audio.muted = true;
  audio.play().catch(() => {});

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.muted = false; 
      audio.play();
      // Change to pause icon + text
      icon.innerHTML = '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>';
      label.textContent = "Pause Audio";
    } else {
      audio.pause();
      // Change back to play icon + text
      icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
      label.textContent = "Play Audio";
    }
  });
});




