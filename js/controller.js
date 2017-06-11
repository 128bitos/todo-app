
/******************************************************************
* Author: Khalid Mahmood
* Assignment: WE4.0 Mobile Web Applications, 
* Date : 2016/07/06
******************************************************************/

//Module declared
var alphaApp = angular.module("todoApp", []);


//create and register our controller with this module
alphaApp.controller("mainController", function($scope) {



//setup Array(todoList) in scope 
var todoList = [ ];
$scope.todoList = todoList; 




//Add new item in To Do List
$scope.addNewItem = function () 
	{
		$scope.todoList.push(
			{'item': $scope.todoList.item, 'done':false  //item add into todoList and also assigned "done" value false 

			}
						);

		//to clear the add item form field and avoid list item duplication, todoList Value remove from the scope 
		$scope.todoList.item = ''
	}


//Delete item(s)
$scope.deleteItem = function(){
		$scope.todoList = $scope.todoList.filter(function(item)
		{

			return !item.done 

		})




	}

});
