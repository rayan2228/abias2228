// about-us parallax effect
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene-2');
var parallaxInstance = new Parallax(scene);
// portfolio slider
$(".portfolio-slider").slick({
    arrows: false,
    asNavFor: '.portfolio-small-slider',
})
$(".portfolio-small-slider").slick({
    arrows: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.portfolio-slider',
    prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    }
  ]
})
// workflow chart
// mouseenter
$(".item2").mouseenter(function () {
    $(".work-complete").addClass("work-complete-width-1")
    $(".circle6").css("opacity", "1")
    $(".item2>.number>h4").css("opacity", "0.2")
    $(".item2>.icon>span").css("opacity", "1")
})
$(".item3").mouseenter(function () {
    $(".work-complete").addClass("work-complete-width-2")
    $(".circle6").css("opacity", "1")
    $(".circle7").css("opacity", "1")
    $(".item2>.number>h4").css("opacity", "0.2")
    $(".item3>.number>h4").css("opacity", "0.2")
    $(".item2>.icon>span").css("opacity", "1")
    $(".item3>.icon>span").css("opacity", "1")
})
$(".item4").mouseenter(function () {
    $(".work-complete").addClass("work-complete-width-3")
    $(".circle6").css("opacity", "1")
    $(".circle7").css("opacity", "1")
    $(".circle8").css("opacity", "1")
    $(".item2>.number>h4").css("opacity", "0.2")
    $(".item3>.number>h4").css("opacity", "0.2")
    $(".item4>.number>h4").css("opacity", "0.2")
    $(".item2>.icon>span").css("opacity", "1")
    $(".item3>.icon>span").css("opacity", "1")
    $(".item4>.icon>span").css("opacity", "1")
})
// mouseleave
$(".item2").mouseleave(function () {
    $(".work-complete").removeClass("work-complete-width-1")
    $(".circle6").css("opacity", "0")
    $(".item2>.number>h4").css("opacity", "1")
    $(".item2>.icon>span").css("opacity", "0")
})
$(".item3").mouseleave(function () {
    $(".work-complete").removeClass("work-complete-width-2")
    $(".circle6").css("opacity", "0")
    $(".circle7").css("opacity", "0")
    $(".item2>.number>h4").css("opacity", "1")
    $(".item3>.number>h4").css("opacity", "1")
    $(".item2>.icon>span").css("opacity", "0")
    $(".item3>.icon>span").css("opacity", "0")
})
$(".item4").mouseleave(function () {
    $(".work-complete").removeClass("work-complete-width-3")
    $(".circle6").css("opacity", "0")
    $(".circle7").css("opacity", "0")
    $(".circle8").css("opacity", "0")
    $(".item2>.number>h4").css("opacity", "1")
    $(".item3>.number>h4").css("opacity", "1")
    $(".item4>.number>h4").css("opacity", "1")
    $(".item2>.icon>span").css("opacity", "0")
    $(".item3>.icon>span").css("opacity", "0")
    $(".item4>.icon>span").css("opacity", "0")
})

// testimonial-slider
$(".testimonial-slider").slick({
    arrows:false,
    fade:true,
    asNavFor: '.client-slider',
})
$(".client-slider").slick({
    arrows:true,
    slidesToShow:5,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.testimonial-slider',
    prevArrow:'<a href+"#" class="prev"><i class="fas fa-long-arrow-alt-left"></i> see previous </a>',
    nextArrow:'<a href+"#" class="next"> see next <i class="fas fa-long-arrow-alt-right"></i> </a>',
    focusOnSelect:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
        }
      }
    ]
})

// preloader
setTimeout(() => {
  $(".preloader").slideUp()
}, 1500);