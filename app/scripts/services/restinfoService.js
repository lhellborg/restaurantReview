'use strict';

/**
 * @ngdoc service
 * @name restaurantReviewApp.restaurantsInfo
 * @description
 * # restaurantsInfo
 * Service in the restaurantReviewApp.
 */
angular.module('restaurantReviewApp')
    .service('restaurantsInfo', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.getRestaurant = function() {
            return $.get("/data/NYRestaurants.json");
        };
    });