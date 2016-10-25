angular.module('quoteBook').controller('mainCtrl', function($scope, service){
  $scope.test = "Hello World!";

  $scope.getQuotes = function(){
    $scope.quotes = service.getData();
  };

  $scope.getQuotes();

});
