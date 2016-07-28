'use strict',

/**
 * @ngdoc function
 * @name restaurantReviewApp.controller:RestaurantinfoCtrl
 * @description
 * # RestaurantinfoCtrl
 * Controller of the restaurantReviewApp
 */
angular.module('restaurantReviewApp')
  .controller('RestaurantinfoCtrl', function () {
  	this.items = [
  		{
		name: "Lavette",
		img:  "yeoman.png",
		adress: "some adress",
		cuisineType: "French",
		openHours: "10-22"
  		},
  		{
		name: "Faye",
		img:  "yeoman.png",
		adress: "another adress",
		cuisineType: "Italian",
		openHours: "9-21"
  		},
  		{
		name: "Amand",
		img:  "yeoman.png",
		adress: "close adress",
		cuisineType: "Chinese",
		openHours: "11-24"
  		}
  	];

  });
