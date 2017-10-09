(function() {
    'use strict';

    angular
        .module('AppSkol')
        .config(Config);

    /* Injeção de depencias */
    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: './app/components/programacao-skol/programacao-skol.html',
                controller: 'ProgramacaoSkolController',
                controllerAs: 'progSkolCtrl'
            }).

            otherwise({redirectTo: '/'});
    }

})();