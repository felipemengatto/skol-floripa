$(document).ready(function() {

	//SCROLL LOW COM JQUERY PARA ANCORAS DO MENU
	$('a[href^=#]').click(function(event){
	    event.preventDefault();
	    var target = $(this).attr('href');
	    if (target == '#')
	      $('html, body').animate({scrollTop : 0}, 600);
	    else
	      $('html, body').animate({
	        scrollTop: $(target).offset().top - 100
	    }, 600);
	});

	// ADICIONA EFEITO DE TREMER QUANDO OUVER HOVER NOS ITENS DE RECOMENDAÇOES

	$('.m-recomendacoes-box-item').hover(
		function(){
			$(this).children('.m-recomendacoes-box-item-img').addClass('style-efeito-tremer');
		},
		function(){
			$(this).children('.m-recomendacoes-box-item-img').removeClass('style-efeito-tremer');
		}
	);


});