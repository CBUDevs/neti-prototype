angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('Item', function($http) {
  // Default array that will show if unable to connect to the JSON database.
  var items = [{
        id: 0,
        name: 'Fentanyl',
        header: ["What is Fentanyl?", "Fentanyl on the Street"],
        string: ["P1", "P2"]
      }, {
        id: 1,
        name: 'Marijuana',
        header: ["What is Marijuana?", "Marijuana on the Street"],
        string: ["Marijuana is a drug", "is wasted marijuana" ]
      }, {
        id: 2,
        name: 'Cocaine',
      }, {
        id: 3,
        name: 'Heroine',
  }];
    
  var url = "http://eosx.net/DEA/moreTestierTest.php?callback=JSON_CALLBACK";
    
  $http.jsonp(url).success(function(data){
      console.log(data);
      items = [];
  }).error(function(data) {
      console.log("Unable to connect to JSON database. Using default values instead.");  
  });

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
});

