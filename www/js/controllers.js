angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, $timeout, $interval, Item) {
    $timeout(callAtTimeout, 300);
    function callAtTimeout(){
        $scope.items = Item.all();
    }
    $interval(update, 1000);
    function update(){
        $scope.items = Item.all();
    }
})

.controller('detailsCtrl', function($scope, $sce, $stateParams, Item) {
    $scope.item = Item.get($stateParams.itemUid);
    $scope.setContent = function(index) {
        $scope.content = $sce.trustAsHtml($scope.item.content[index]);
    }
});
 