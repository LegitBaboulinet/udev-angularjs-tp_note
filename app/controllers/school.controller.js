(function(){
    'use strict';

    angular
        .module('SchoolApp')
        .controller('SchoolController', SchoolController)

    /** @ngInject */
    function SchoolController(PersonService, PromotionService){
        var vm = this;
        
        /** Variables */
        vm.currentPerson = {};
        vm.promotions = [];
        vm.people = [];
        vm.edit = false;
        vm.editIndex = null;

        /** Fonctions */
        vm.$onInit = () => {
            vm.promotions = PromotionService.get();
            vm.people = PersonService.get();
        }
        vm.isValid = () => {
            if (vm.currentPerson.lastName && vm.currentPerson.firstName && vm.currentPerson.role) {
                if (vm.currentPerson.role !== "Elève" || (vm.currentPerson.role === "Elève" && vm.currentPerson.promotion !== "")) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        vm.addPerson = () => {
            if (vm.isValid()) {
                PersonService.add(vm.currentPerson.lastName, vm.currentPerson.firstName, vm.currentPerson.role, vm.currentPerson.promotion);
                vm.people = PersonService.get();
                vm.currentPerson = {};
            }
        }
        vm.editPerson = () => {
            PersonService.edit(vm.editIndex, vm.currentPerson);
            vm.people = PersonService.get();
            vm.cancelEdit();
        }
        vm.startEditPerson = (index) => {
            vm.edit = true;
            vm.editIndex = index;
            vm.currentPerson = angular.copy(vm.people[index]);
        }
        vm.cancelEdit = () => {
            vm.edit = false;
            vm.currentPerson = {};
        }
        vm.removePerson = (index) => {
            PersonService.remove(index);
            vm.people = PersonService.get();
        }
    }

}());