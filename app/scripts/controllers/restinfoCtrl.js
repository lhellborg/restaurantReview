
/**
 * @ngdoc function
 * @name restaurantReviewApp.controller:RestaurantinfoCtrl
 * @description
 * # RestaurantinfoCtrl
 * Controller of the restaurantReviewApp
 */
angular.module('restaurantReviewApp')
    .controller('RestaurantinfoCtrl', ["restaurantsInfo", function(restaurantInfoService) {
        'use strict';

        var vm = this;

        vm.uniqueCuisines = {};

        var buildUniqueCuisines = function(restaurantInfo) {
            restaurantInfo.forEach(function(restaurant) {
                vm.uniqueCuisines[restaurant.cuisineType] = restaurant.cuisineType;
            });
        };

        restaurantInfoService.getRestaurant().then(function(data) {
            vm.items = data;

            buildUniqueCuisines(vm.items);

        });

        vm.openReview = false;

        vm.selectedRestaurant = null;

        vm.toggleSelectedRestaurant = function(restaurant, $event) {
            if (vm.selectedRestaurant !== restaurant) {
                vm.selectedRestaurant = restaurant;
                // deferred this because the dom element might not be there yet
                setTimeout(function() {
                    $("#restaurantName").focus();
                }, 1);

            } else {
                vm.selectedRestaurant = null;
            }
            $event.preventDefault();
        };

        vm.showComment = false;
        vm.showNewReview = true;

        vm.hideComment = function(rating, comment) {
            vm.showComment = false;
            vm.showNewReview = true;

        };

        // make an array of the rating stars to be able to use ng-repeat with the $index to show number of stars
        vm.getNumber = function(stars) {
            return new Array(stars);
        }


    }]);