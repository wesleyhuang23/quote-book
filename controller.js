angular.module('quoteBook').controller('mainCtrl', function($scope, service){

  $scope.getQuotes = function(){
    $scope.quotes = service.getData();
  };
  $scope.getQuotes();


    $scope.removeQuote = function(quote){
      service.removeData(quote);
    };

    $scope.removeQuote();

    $scope.addQuote = function(newQuoteText, newQuoteAuthor){
      var newQuote = {};
      newQuote.text = newQuoteText;
      newQuote.author = newQuoteAuthor;
      service.addData(newQuote);
    };

});
