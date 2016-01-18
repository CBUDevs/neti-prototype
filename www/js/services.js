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
        uid: "0",
      }, {
        contentDisplay: ["Marijuana is a drug", "is wasted marijuana" ],
        header: ["What is Marijuana?", "Marijuana on the Street"],
        name: 'Marijuana',   
        uid: "1",
      }, {
        contentDisplay: ["COCAAIIINE"],
        header: ["COOOOOOIKEIIIN"],
        uid: "2",
        name: 'Cocaine',
      }, {
        uid: "3",
        name: 'Heroine',
      }];
     console.log(items[0]);
  var url = "http://eosx.net/DEA/moreTestierTest.php?callback=JSON_CALLBACK";
    
  // Default array will show if unable to connect to the JSON database.
  var promise = $http.jsonp(url).success(function(data){
      items = angular.fromJson(data);
      for(var i = 0; i < items.length; i++) {
          var contentDisplay = new Array();
          contentDisplay.push(items[i].content);

          var header = new Array();
          header.push(items[i].headerString);
          
          items[i].content = contentDisplay;
          items[i].headerString = header;
      }
      console.log(items);
  }).error(function(data) {
      console.log("Unable to connect to JSON database. Using default values instead.");
      console.log(items);
  });

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemUid) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].uid === itemUid) {
          return items[i];
        }
      }
      return null;
    }
  };
});

