"use strict";

var app = angular.module("TodoApp", []);

/*
Creating a new controller for the app called app. 
Each controlelr contributes different functionality to your page.
Here we are creating NavCtrl and TodoCtrl
*/
app.controller("NavCtrl", ($scope) => {
		let s = $scope;

    s.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});



app.controller("TodoCtrl", ($scope) => {
	let s = $scope;

	s.welcome = "hello";
	s.showListView = true;
	s.newTask = {};
	s.items = [
	  {
	    id: 0,
	    task: "mow the lawn",
	    isCompleted: false,
	    dueDate: "12/5/17",
	    assignedTo: "Greg",
	    location: "Joe's house",
	    urgency: "low",
	    dependencies: "sunshine, clippers, hat, water, headphones"
	  },
	  {
	    id: 1,
	    task: "grade quizzes",
	    isCompleted: false,
	    dueDate: "12/5/15",
	    assignedTo: "Christina",
	    location: "NSS",
	    urgency: "high",
	    dependencies: "wifi, tissues, vodka"
	  },
	  {
	    id: 2,
	    task: "take a nap",
	    isCompleted: false,
	    dueDate: "5/21/16",
	    assignedTo: "Joe",
	    location: "Porch of lakefront cabin",
	    urgency: "medium",
	    dependencies: "hammock, silence"
	  }
	];

	s.newItem = () => s.showListView = false;
	s.allItems = () => s.showListView = true;

	s.addNewItem = () => {
		console.log("add new item");
		s.newTask.isCompleted = false;
		s.newTask.id = s.items.length;

		s.items.push(s.newTask);
		s.newTask = {};
	};














});

