'use strict';

/**
 * @ngdoc function
 * @name restaurantReviewApp.controller:RestaurantinfoCtrl
 * @description
 * # RestaurantinfoCtrl
 * Controller of the restaurantReviewApp
 */
angular.module('restaurantReviewApp')
  .controller('RestaurantinfoCtrl', ["restaurantsInfo", function (restaurant) {
  	var vm = this;

  	restaurant.getRestaurant().then(function(data) {
  		vm.items = data;
  	});

  }]);
