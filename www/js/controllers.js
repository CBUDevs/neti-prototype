angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, $timeout, $interval, $sce, $stateParams, Item) {
    $scope.title = "NETI";
    $scope.showSearch = false;
    $scope.showItem = {};
    $scope.q = {}
    $scope.q.name='';
    
    $timeout(callAtTimeout, 300);
    function callAtTimeout(){
        $scope.items = Item.all();
    }
    $interval(update, 1000);
    function update(){
        $scope.items = Item.all();
    }
    
     $scope.item = Item.get($stateParams.itemUid);
    $scope.setItem = function(index) {
        $scope.item =  Item.get(index);
    }
    
    $scope.setContent = function(index) {
        $scope.content = $sce.trustAsHtml($scope.item.content[index]);
    }
    
    $scope.setTitle = function(title, num) {
        if (num) {
            $scope.title = title;
        } else {
            $scope.title = "NETI";
        }
    }
    $scope.show = function(index) {
        $scope.showItem[index] = !$scope.showItem[index];
    }
    $scope.debug = function(bool) {
        console.log(bool);
    }
});
 