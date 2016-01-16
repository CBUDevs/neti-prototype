angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, Item) {
  $scope.items = Item.all();
})

.controller('detailsCtrl', function($scope, $stateParams, Item) {
    $scope.item = Item.get($stateParams.itemId);
});
 