"use strict";
console.log("TodoCtrl is working");


app.controller("TodoCtrl", function($scope, $location) {
	let s = $scope;

	s.welcome = "hello";
	s.showListView = true;
	
	s.newItem = () => $location.url("/items/new"); 
	s.allItems = () => $location.url("/items/list");
});
