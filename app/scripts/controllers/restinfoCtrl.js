'use strict';

/**
 * @ngdoc function
 * @name restaurantReviewApp.controller:RestaurantinfoCtrl
 * @description
 * # RestaurantinfoCtrl
 * Controller of the restaurantReviewApp
 */
angular.module('restaurantReviewApp')
  .controller('RestaurantinfoCtrl', ["restaurantsInfo", function (restaurantInfoService) {
  	var vm = this;

  	restaurantInfoService.getRestaurant().then(function(data) {
  		vm.items = data;
  	});

  	vm.openReview = false;

  	vm.selectedRestaurant = null;

  	vm.toggleSelectedRestaurant = function(restaurant) {
  		if (vm.selectedRestaurant != restaurant) {
  			vm.selectedRestaurant = restaurant;
  		} else {
  			vm.selectedRestaurant = null;
  		}
  	}

  	vm.showComment = false;

  	vm.hideComment = function() {
  		vm.showComment = false;
  	}

  }]);
