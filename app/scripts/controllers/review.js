

/**
 * @ngdoc function
 * @name restaurantReviewApp.controller:ReviewctrlCtrl
 * @description
 * # ReviewctrlCtrl
 * Controller of the restaurantReviewApp
 */
angular.module('restaurantReviewApp')
    .controller('ReviewCtrl', function() {
        'use strict';

        var vm = this;



        // copied from http://stackoverflow.com/questions/6982692/html5-input-type-date-default-value-to-today/13052187#13052187
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0, 10);
        });

        vm.todaysDate = new Date().toDateInputValue();

        // make an array of the rating stars to be able to use ng-repeat with the $index to show number of stars
        vm.getNumber = function(stars) {
            if (stars) {
                stars = parseInt(stars);
            } else {
                stars = 0;
            }
            return new Array(stars);
        };

    });