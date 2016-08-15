

/**
 * @ngdoc service
 * @name restaurantReviewApp.restaurantsInfo
 * @description
 * # restaurantsInfo
 * Service in the restaurantReviewApp.
 */
angular.module('restaurantReviewApp')
    .service('restaurantsInfo', ['$http', function($http) {
    	'use strict';

        // AngularJS will instantiate a singleton by calling "new" on this function
        this.getRestaurant = function() {
            return $http.get("/data/NYRestaurants.json");
        };
    }]);