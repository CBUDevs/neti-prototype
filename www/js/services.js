angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('Item', function($http) {
  // Might use a resource here that returns a JSON array
      
    
  /*var items = [];
  $http.get("http://eosx.net/DEA/moreTestierTest.php").success(function(response) {
      //console.log(response);
      angular.forEach(response.data.children, function(child) {
          console.log(child.data);
          //items.push(child.data);
      });
  });*/
  // Some fake testing data
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

