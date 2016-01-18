angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, $timeout, $interval, Item) {
    $timeout(callAtTimeout, 300);
    function callAtTimeout(){
        $scope.items = Item.all();
    }
    $interval(update, 250);
    function update(){
        $scope.items = Item.all();
    }
})

.controller('detailsCtrl', function($scope, $stateParams, Item) {
    $scope.item = Item.get($stateParams.itemUid);
    console.log($scope.item);
});
 