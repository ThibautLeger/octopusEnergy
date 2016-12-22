$(document).ready(function(){
  $('.more-products').slick({
    centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '30px',
	        slidesToShow: 1
	      }
	    }
	  ]
  });
});
