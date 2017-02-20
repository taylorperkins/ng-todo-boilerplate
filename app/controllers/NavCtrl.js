"use strict";
console.log("NavCtrl is working");

app.controller("NavCtrl", function($scope) {
		let s = $scope;
    s.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});