$(function () {
  function HeadroomStickyHeader() {
    var header = document.querySelector(".headroom-sticky-header");
    var headroom = new Headroom(header, {
      tolerance: {
        down: 10,
        up: 20,
      },
      offset: 15,
    });
    headroom.init();
  }
  HeadroomStickyHeader();
  $(window).on("load", function () {
    var preload = $(".preloader");
    if (preload.length > 0) {
      preload.delay(800).fadeOut("slow");
    }
  });
  // wow-js
  new WOW().init();
  // Main Slider
  var slider = new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".main-slider-next",
      prevEl: ".main-slider-prev",
      clickable: true,
    },
    //Pagination
    pagination: {
      el: ".main-slider_pagination",
      clickable: true,
    },
    speed: 500,
    breakpoints: {
      1600: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  // -------------------------------------------------------
  // skewEffect-start
  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew),
        });
      }
    },
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  // skewEffect-end
  // ---------------------------------------------------------
  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }
  // Odometer
  if ($(".odometer").length) {
    $(".odometer").appear();
    $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
      window.odometerOptions = {
        format: "d",
      };
    });
  }

  //Parallax Scene for Icons
  if ($(".parallax-scene-1").length) {
    var scene = $(".parallax-scene-1").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".animation_mode").length) {
    $(".animation_mode").marquee({
      speed: 50,
      gap: 20,
      delayBeforeStart: 0,
      direction: "left",
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
    });
  }
  var pageSection = $(".bg-img, section");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  // Team One Slider
  var slider = new Swiper(".team-one_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".team-one_slider-next",
      prevEl: ".team-one_slider-prev",
      clickable: true,
    },
    //Pagination
    pagination: {
      el: ".team-one_slider-pagination",
      clickable: true,
    },
    speed: 500,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // Portfolio Hover
  $(".portfolio-card-main-wrapper").each(function () {
    const item = $(this).find(".portfolio-card, .icon-card-inner");
    const img = $(this).find(".tabimg");
    item.on("mouseenter", function () {
      const tab_id = $(this).attr("data-tab");
      item.removeClass("active");
      $(this).addClass("active");
      img.removeClass("active");
      $("#" + tab_id).addClass("active");
      if ($(this).hasClass("active")) {
        return false;
      }
    });
  });

// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	
     mixitupGallery ();
  })(jQuery);
});
  // two-item-carousel
  if ($(".two-item-carousel").length) {
    $(".two-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fa-solid fa-chevron-left"></span>',
        '<span class="fa-solid fa-chevron-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  //project Tabs
  if ($(".project-tab").length) {
    $(".project-tab .product-tab-btns .p-tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("actve-tab")) {
        return false;
      } else {
        $(".project-tab .product-tab-btns .p-tab-btn").removeClass(
          "active-btn"
        );
        $(this).addClass("active-btn");
        $(".project-tab .p-tabs-content .p-tab").removeClass("active-tab");
        $(target).addClass("active-tab");
      }
    });
  }

  var Testimonial_nav = new Swiper(".testimonial__nav", {
    loop: true,
    spaceBetween: 23,
    speed: 500,
    slidesPerView: 3,
    centeredSlides: true,
    // direction: "vertical",
    autoplay: {
      enabled: true,
      delay: 6000,
    },

    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 3,
        direction: "horizontal",
      },
      0: {
        slidesPerView: 3,
        direction: "horizontal",
      },
    },
  });
  var swiper2 = new Swiper(".testimonial__active", {
    loop: true,
    navigation: {
      nextEl: ".testimonial__nav_slider-next",
      prevEl: ".testimonial__nav-slider-prev",
      clickable: true,
    },
    spaceBetween: 0,
    //Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //effect: 'fade',
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    slidesPerView: 1,
    thumbs: {
      swiper: Testimonial_nav,
    },
  });

  //Progress Bar
  if ($(".progress-line").length) {
    $(".progress-line").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      { accY: 0 }
    );
  }

  // LightBox Video
  if ($(".lightbox-video").length) {
    $(".lightbox-video").magnificPopup({
      // disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "https://www.youtube.com/embed/%id%",
          },
        },
        srcAction: "iframe_src",
      },
      fixedContentPos: false,
    });
  }
});




// Mixitup gallery
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };

  
$(".full-bg .cluom").on("mouseenter", function () {
  var tab_id = $(this).attr("data-tab");
  $(".full-bg .cluom").removeClass("current");
  $(this).addClass("current");

  $(".glry-img .tab-img ").removeClass("current");
  $("#" + tab_id).addClass("current");

  if ($(this).hasClass("current")) {
    return false;
  }
});

	/*-------------------------------------------------------------------------------
	  Popup Gallery
	-------------------------------------------------------------------------------*/



	$('.js-gallery').each(function(){
		$(this).magnificPopup({
			delegate: 'a:not(.link)',
		    type: 'image',
		    removalDelay: 300,
		    tLoading: 'Loading image #%curr%...',
		    gallery: {
		       enabled: true,
		       navigateByImgClick: true,
		       preload:[0,1]
		    },
		    image: {
		       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		       titleSrc: function(item) {
		          return item.el.attr('title') + '<small></small>';
		       }
		    }

		});
	});

	/*-------------------------------------------------------------------------------
	  Isotope
	-------------------------------------------------------------------------------*/



  $('.isotope').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.single-project',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.single-project'
				}	
			});	
		});
    }); 


    $('.ot-accordions').each( function () {
      var selector = $(this),
          content = selector.find('.acc-content'),
          header  = selector.find('.acc-toggle');

      header.off("click");

      header.each(function(){
          if ($(this).data('default') == 'yes') {
              $(this).next().addClass('active').slideDown(300);
              $(this).parent().addClass('current');
          }
      });

      header.on('click', function(e){
          e.preventDefault();
          var $this = $(this);

          $this.next().toggleClass('active').slideToggle(300);
          $this.parent().toggleClass('current');
          content.not($this.next()).slideUp(300);
          header.not($this).parent().removeClass('current');
      });
  });

 
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

