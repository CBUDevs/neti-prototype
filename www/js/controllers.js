angular.module('app.controllers', [])
  
.controller('menuCtrl', function($scope, $http, Item) {
   $scope.items = Item.all();
    
    /*$scope.doRequest = function() {
        var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";

        $http.jsonp(url)
            .success(function(data){
                console.log(data.found);
            });
    };*/

    var url = "http://date.jsontest.com?callback=JSON_CALLBACK";

    $http.jsonp(url)
    .success(function(data){
        console.log(data);
    });
})

.controller('detailsCtrl', function($scope, $stateParams, Item) {
    $scope.item = Item.get($stateParams.itemId);
});
 