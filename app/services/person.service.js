(function(){
    'use strict';

    angular
        .module('SchoolApp')
        .service('PersonService', PersonService)

    /** @ngInject */
    function PersonService(){
        var service = this;
        
        /** Variables */
        service.people = [];

        /** Fonctions */
        service.get = () => {
            return service.people;
        }
        service.add = (lastName, firstName, role, promotion) => {
            var person = {
                lastName: lastName,
                firstName: firstName,
                role: role,
                promotion: promotion
            }
            service.people.push(person);
        }
        service.remove = (index) => {
            service.people.splice(index, 1);
        }
        service.edit = (index, person) => {
            service.people[index] = person;
        }
    }

}());