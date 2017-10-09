(function() {
	'use strict';

	angular
	.module('AppSkol')
	.directive('showSkol', ShowSkolDirective);

	ShowSkolDirective.$inject = ['$timeout'];

	/* @ngInject */
	function ShowSkolDirective($timeout) {

		var directive = {
			link: link,
			restrict: 'A',
			scope: {
				showList: '='
			},
			templateUrl: './app/directives/shows-skol/shows-skol.directive.html'
		};

		return directive;

		function link(scope, element, attrs) {

            //vars                   // fadein     // fadeout
            var config          = {'delay': 100, 'duration': 1200 };
            var elemSkolShow    = element.find('.m-programacao-box-imagem');
            var elemSlider      = element.find('.m-programacao-box-imagem-item');
            var elemImgSrc      = element.find('img');
            var elemDesc        = element.find('.m-programacao-box-show-itens');
            
            //watchs
            scope.$watch('showList', function(newValue, oldValue) {
            	if (newValue){
            		alterarImagemDesc(newValue.imagem, newValue);
            	}
            }, true);

            // ALTERA IMAGEM/DESC E FAZ EEITOS DE IN E OUT
            function alterarImagemDesc(imageAttr, listDesc) {

                //DEFINE SRC DE IMAGEM
                var attrImgLink = imageAttr;

                //ADICIONA CLASSE DE FADEOUT
                var timeFadeout = $timeout(
                				function(){

									//ADD CLASS IMG
									elemSlider.addClass('m-programacao-box-imagem-slide-hide');

									//ADD CLASS DESC
									elemDesc.addClass('fadeout');

									//ADD SPINNER
									elemSkolShow.addClass('spinner-loading');

									//CANCELA TIMOUT
									$timeout.cancel(timeFadeout);

								}, config.delay);

                //REMOVE CLASSE DE FADEOUT
                var timeFadein = $timeout(
                				function(){

									//MUDA URL DA IMAGEM
									elemImgSrc.attr('src', attrImgLink);
									scope.descList  = listDesc;

									//VERIFICA QUANDO A IMAGEM FOI CARREGADA E REMOVE CLASSE PARA FAZER O FADEIN
									elemImgSrc.bind('load', function() {

                                                //REMOCOES DE CLASSE IMG
                                                elemImgSrc.removeClass('is-hidden-slider');
                                                elemSlider.removeClass('m-programacao-box-imagem-slide-hide');

                                                //REMOCOES DE CLASSE DESC
                                                elemDesc.removeClass('fadeout');
                                                elemDesc.removeClass('is-hidden-slider');

                                                //REMOCAO CLASS SPINNER
                                                elemSkolShow.removeClass('spinner-loading');

                                                //ADD CLASS DE SHOW PARA IMAGEM
                                                elemSlider.addClass('m-programacao-box-imagem-slide-show');

                                                //CANCELA TIMOUT
                                                $timeout.cancel(timeFadein);

                                            });

								}, config.duration);

            }

        }
    }

})();