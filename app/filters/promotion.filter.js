(function(){
    'use strict';

    angular
        .module('SchoolApp')
        .filter('promotion', PromotionFilter)

    function PromotionFilter(){
        return (input) => {
            input = (!input) ? '' : input;
            return (input.trim() === '') ? 'Non renseigné' : input;
        }
    }

}());