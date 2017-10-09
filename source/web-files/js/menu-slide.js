'use strict';

/*
	JS SIMPLES PARA MOSTRAR E ESCONDER MENU MOBILE
	DEPENDENCIAS: FONT-AWESOME
	
	SUMARIO DAS VARIAVEIS:
	1 - QUERY SELECTOR DO BTN DO MENU MOBILE
	2 - NOME DA CLASS QUE O BTN IRÁ TER QUANDO ABERTO ( CLASSE PERTENCENTE AO FONT-AWESOME )
	3 - NOME DA CLASS QUE O BTN IRÁ TER QUANDO FECHADO ( CLASSE PERTENCENTE AO FONT-AWESOME )
	4 - QUERY SELECTOR DO MENU
	5 - NOME DA CLASS QUE MOSTRA O MESMO QUANDO ADICIONADO A ALGUM ELEMENTO DISPLAY: NONE (acima citado).
	6 - VARIAVEL DE LOGICA PARA CONTROLAR ABERTO/FECHADO DO MENU.

*/
var btnMenuMobile		 = document.querySelector('.m-menu-mobile-icon .fa');
var iconMenuAberto		 = 'fa-times';
var iconMenuFechado		 = 'fa-bars';
var menu 		  		 = document.querySelector('.m-menu');
var mostrarElementoClass = 'style-is-block';
var open 		  		 = false;


btnMenuMobile.onclick = function(){
	fecharMenu();
}


function fecharMenu() {

	if (!open) {
		menu.classList.toggle(mostrarElementoClass);
		btnMenuMobile.classList.remove(iconMenuFechado);
		btnMenuMobile.classList.add(iconMenuAberto);
	}else{
		menu.classList.toggle(mostrarElementoClass);
		btnMenuMobile.classList.add(iconMenuFechado);
		btnMenuMobile.classList.remove(iconMenuAberto);
	}

	open = !open;

}