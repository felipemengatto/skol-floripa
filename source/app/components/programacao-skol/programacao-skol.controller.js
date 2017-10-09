(function() {
    'use strict';

    angular
        .module('AppSkol')
        .controller('ProgramacaoSkolController', ProgramacaoSkol);

    /* Injeção de depencias */
    ProgramacaoSkol.$inject = ['ProgramacaoSkolFactory'];

    /**
    * Função de gerenciamento do Controller
    * @param {object} Dependenciais Injetadas
    */
    function ProgramacaoSkol(ProgramacaoSkolFactory) {
        var self = this;

        /**
        *VARS
        */
        self.findProgramacao   = findProgramacao;
        self.selectItem        = selectItem;
        self.programacaoList   = [];
        self.showList          = [];

        /**
        *Init Controller Activate Fuctions
        */
        self.findProgramacao();

        /**
        * Funções do Controller
        */

        function findProgramacao() {
            
            ProgramacaoSkolFactory.findAll().then(
                function(response){
                    self.programacaoList = response.data.dias;
                    self.showList = self.programacaoList[0];
                }
            );

        }

        function selectItem(itemSelected) {
            self.showList = itemSelected;
        }

    }
})();