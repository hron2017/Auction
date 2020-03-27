//====================  ImageBg ========================//
function ibg(){
  $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  });
}
ibg();
//====================  // ImageBg ========================//


$('.main-slider').slick({
  speed: 500,
  prevArrow: '<button type="button" class="slick-prev slick-btn">1</button>',
  nextArrow: '<button type="button" class="slick-next slick-btn">2</button>',
  arrows: true,
  appendArrows:$('.main-slider__btn')
});  

$('.quotes__slider').slick({
  speed: 1000,
  autoplay: true,
  prevArrow: '<button type="button" class="slick-prev slick-btn">1</button>',
  nextArrow: '<button type="button" class="slick-next slick-btn">2</button>',
  arrows: true,
  appendArrows:$('.quotes-slider__btn')
}); 

$('.quotes-slider__btn .slick-prev').click(function(){
  let degrees = 180,
      angle = $(this).data("angle");
  if (!angle)
  angle = 0;
  angle = +angle + degrees;
  $(this)
    .data("angle", angle)
    .css({ transform: "rotate(" + angle + "deg)"});
});


$('.products-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  appendArrows:$('.products-bottons'),
  responsive: [
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}); 
