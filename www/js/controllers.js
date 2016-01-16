angular.module('app.controllers', [])
  
.controller('DEACtrl', function($scope, Items) {
  
  $scope.items = [
    { id: 0, name: "Fentenyl" },
    { id: 1, name: "Marijuana" },
    { id: 2, name: "Cocaine" },
    { id: 3, name: "Heroine" },
  ]
})

.controller('fentanylCtrl', function($scope, $stateParams, Items) {
    $scope.item = Items.get($stateParams.itemId);
});
 