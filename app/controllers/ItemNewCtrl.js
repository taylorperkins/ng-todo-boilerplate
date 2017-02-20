"use strict";
console.log("ItemNewCtrl is working");


app.controller("ItemNewCtrl", function($scope){
	let s = $scope;

	s.newTask = {};
	s.addNewItem = function() {
		console.log("add new item");
		s.newTask.isCompleted = false;
		s.newTask.id = s.items.length;

		s.items.push(s.newTask);
		s.newTask = {};
	};
});