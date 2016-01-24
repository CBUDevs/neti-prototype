angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, $timeout, $interval, $sce, $stateParams, Item) {
    $scope.title = "National Emerging Threats Initiative";
    $scope.showSearch = false;
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
            $scope.title = "National Emerging Threats Initiative";
        }
    }
    $scope.debug = function() {
        console.log('click');
    }
})

.controller('detailsCtrl', function($scope, $sce, $stateParams, Item) {
    $scope.item = Item.get($stateParams.itemUid);
    $scope.setContent = function(index) {
        $scope.content = $sce.trustAsHtml($scope.item.content[index]);
    }
});
 