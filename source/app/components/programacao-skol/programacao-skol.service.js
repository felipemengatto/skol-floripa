(function() {
    'use strict';

    angular
        .module('AppSkol')
        .factory('ProgramacaoSkolFactory', ProgramacaoSkolFactory);

    ProgramacaoSkolFactory.$inject = ['$http'];

    /**
    * Função de gerenciamento do Service
    * @param {object} Dependenciais Injetadas
    */
    function ProgramacaoSkolFactory($http) {
        var service = {
            findAll: findAll
        };
        return service;

        /**
        * Funções do Service
        * @return {object} findAll
        */

        function findAll() {

            return $http.get('mocks/programacao.json')
                .then(findComplete)
                .catch(findFailed);

            function findComplete(response) {
                return response;
            }

            function findFailed(error) {
                console.log('Error Get Data API' + error.data);
            }

        }

    }
})();