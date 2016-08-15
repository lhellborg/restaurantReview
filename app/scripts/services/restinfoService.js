

/**
 * @ngdoc service
 * @name restaurantReviewApp.restaurantsInfo
 * @description
 * # restaurantsInfo
 * Service in the restaurantReviewApp.
 */
angular.module('restaurantReviewApp')
    .service('restaurantsInfo', function() {
    	'use strict';

        // AngularJS will instantiate a singleton by calling "new" on this function
        this.getRestaurant = function() {
            return $.get("/data/NYRestaurants.json");
        };
    });