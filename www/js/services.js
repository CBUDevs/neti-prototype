angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('Item', function($http, $q) {
  var items = null;
    
    items = [{
        content: ["P1", "P2"],
        headerString: ["What is Fentanyl?", "Fentanyl on the Street"],
        name: 'Fentanyl',
        uid: 0,
      }, {
        content: ["Marijuana is a drug", "is wasted marijuana" ],
        headerString: ["What is Marijuana?", "Marijuana on the Street"],
        name: 'Marijuana',   
        uid: 1,
      }, {
        uid: 2,
        name: 'Cocaine',
      }, {
        uid: 3,
        name: 'Heroine',
      }];
    
  var url = "http://eosx.net/DEA/moreTestierTest.php?callback=JSON_CALLBACK";
    
  // Default array that will show if unable to connect to the JSON database.
  var promise = $http.jsonp(url).success(function(data){
      items = angular.fromJson(data);
      console.log(items[0].name);
  }).error(function(data) {
      console.log("Unable to connect to JSON database. Using default values instead.");
  });

    this.getItems = function () {
        return items.promise;    
    }
  return {
    all: function() {
      return items.promise;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemUid) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].uid === parseInt(itemUid)) {
          return items[i].promise;
        }
      }
      return null;
    }
  };
});

