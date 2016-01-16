angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

// Used for detials.html but not menu.html.
// Having menu.html use this as well would be ideal.
.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    name: 'Fentanyl',
    header: ["What is Fentanyl?", "Fentanyl on the Street"],
    paragraph: ["P1", "P2"]
  }, {
    id: 1,
    name: 'Marijuana',
    header: ["What is Marijuana?", "Marijuana on the Street"],
    paragraph: ["Marijuana is a drug", "is wasted marijuana" ]
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

