angular.
  module('userData').
  factory('UserDataService', function(){
    var list = [];

    return {
      addItem: addItem,
      getList: getList
    };

    function addItem(item) {
      list.push(item);
    }

    function getList() {
      return list;
    }
});
