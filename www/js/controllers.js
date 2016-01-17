angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, $http, Item) {
   $scope.items = Item.all();
})

.controller('detailsCtrl', function($scope, $stateParams, Item) {
    $scope.item = Item.get($stateParams.itemId);
});
 