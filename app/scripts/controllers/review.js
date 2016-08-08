'use strict';

/**
 * @ngdoc function
 * @name restaurantReviewApp.controller:ReviewctrlCtrl
 * @description
 * # ReviewctrlCtrl
 * Controller of the restaurantReviewApp
 */
angular.module('restaurantReviewApp')
  .controller('ReviewCtrl', ["restaurantsInfo", function (restaurant) {
  	var vm = this;

  	 restaurant.getReviews().then(function(data) {
  		vm.reviews = data;
  	});

  }]);
