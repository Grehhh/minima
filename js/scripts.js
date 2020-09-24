$(document).ready(function(){

	$('.fa-bars').on('click', function(){

		if ( $('nav').hasClass('abierto') === true ) {	// el método hasClass() retorna true si el selector tiene esa clase

			$('nav').removeClass('abierto');

		} else {

			$('nav').addClass('abierto');
		}
	});

	/*

	// altrnativa simple
	$('.fa-bars').on('click', function(){

		$('nav').toggleClass('abierto');
	});

	*/

});


$(window).on('load', ocultarNoria);

function ocultarNoria() {

	$('.ferris-wheel').css({
		opacity:0,
		top: '40%'
	});

	setTimeout(ocultarOverlay, 500);				//creo que no deberia estar aqui dentro
};

// --------------------BARRAS-----------------------------

function ocultarOverlay(){

	$('.overlay').fadeOut(1500);
};


$(window).on("scroll", function(){

	  var scrollRealizado = $(this).scrollTop();

	  var altoPantalla = $(window).innerHeight () / 2;

	  var profundidad = $("#barras").offset().top - altoPantalla; 

	  if(scrollRealizado >= profundidad) {

	  	$("#barras").addClass("activas");
	    
	  }
 });

// ---------------------CAROUSEL------------------

$(document).ready(function(){
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
	})


});


