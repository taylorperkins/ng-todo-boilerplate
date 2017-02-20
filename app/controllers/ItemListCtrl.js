"use strict";
console.log("ItemListCtrl is working");

app.controller("ItemListCtrl", function($scope) {
	let s = $scope;

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

	s.itemDelete = function(itemID) {
		for (let item = 0; item < s.items.length; item++) {
			if (s.items[item].id === itemID) {
				s.items.splice(item, 1);
			}
		}
	};
});