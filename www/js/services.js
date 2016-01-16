angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

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
  }, {
    id: 2,
    name: 'Cocaine',
  }, {
    id: 3,
    name: 'Heroine',
  }];

  return {
    all: function() {
      return chats;
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
