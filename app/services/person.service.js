(function(){
    'use strict';

    angular
        .module('SchoolApp')
        .service('PersonService', PersonService)

    /** @ngInject */
    function PersonService($window){
        var service = this;
        
        /** Variables */
        service.people = [];

        /** Fonctions */
        function save() {
            localStorage.setItem('people', angular.toJson(service.people));
        }
        service.load = () => {
            var people = angular.fromJson(localStorage.getItem('people'));
            service.people = (people) ? people : [];
        }
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
            save();
        }
        service.remove = (index) => {
            service.people.splice(index, 1);
            save();
        }
        service.edit = (index, person) => {
            service.people[index] = person;
            save();
        }
    }

}());