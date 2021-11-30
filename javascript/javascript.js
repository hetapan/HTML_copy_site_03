// slide////////////////////////////
$(function() {
	$('.slideshow_1').slick({
  autoplay: true,
  arrows: false,
  centerMode: true,
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});

// アーチ//////////////////////////
$(function(){
 $('#arche').arctext({radius: 500});
});

// slideTogglebutton///////////////////////////

var windowWidth = $(window).width();

if( windowWidth	 < 768 ){
	$(function(){
	  $(".answer").hide();
	  $(".question").click(function(){
	    $(this).next(".answer:not(:animated)").slideToggle();
	    $(this).toggleClass("active");
	  });
	});
};
