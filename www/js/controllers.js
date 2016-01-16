angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, Items) {
  
  // This is the array that menu.html uses. A seperate one is used for details.html.
  // If we could get both pages to talk to only one array, that would be ideal.
  $scope.items = [
    { id: 0, name: "Fentenyl" },
    { id: 1, name: "Marijuana" },
    { id: 2, name: "Cocaine" },
    { id: 3, name: "Heroine" },
  ]
})

.controller('detailsCtrl', function($scope, $stateParams, Items) {
    $scope.item = Items.get($stateParams.itemId);
});
 