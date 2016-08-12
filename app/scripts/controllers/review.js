'use strict';

/**
 * @ngdoc function
 * @name restaurantReviewApp.controller:ReviewctrlCtrl
 * @description
 * # ReviewctrlCtrl
 * Controller of the restaurantReviewApp
 */
angular.module('restaurantReviewApp')
    .controller('ReviewCtrl', function() {

        var vm = this;

        // copied from http://stackoverflow.com/questions/6982692/html5-input-type-date-default-value-to-today/13052187#13052187
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0, 10);
        });

        vm.todaysDate = new Date().toDateInputValue();

    });