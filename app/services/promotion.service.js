(function(){
    'use strict';

    angular
        .module('SchoolApp')
        .service('PromotionService', PromotionService)

    /** @ngInject */
    function PromotionService(){
        var service = this;
        
        /** Variables */
        service.promotions = [
            'B1',
            'B2',
            'B3',
            'L4',
            'L5',
            'U\'DEV'
        ];

        /** Fonctions */
        service.get = () => {
            return service.promotions;
        }
    }

}());