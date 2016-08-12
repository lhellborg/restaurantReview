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
  	vm.showNewReview = false;

  	vm.hideComment = function() {
  		vm.showComment = false;
  		vm.showNewReview = true;
  	};

  }]);
