var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

  $http.get('mock.json')
             .then(function(res){
                $scope.wirelessNameList = res.data;                
              });
    $scope.update = function () {
    $http.get('mock.json')
             .then(function(res){
                $scope.wirelessNameList = res.data;                
              });
              
            };
           
    $scope.sort1 = "favorite";
    $scope.sort2 = "strength";

    $scope.class1 = false;
         $scope.class2 = true;
    $scope.addClass = function(){
         $scope.class1 = !$scope.class1;
         $scope.class2 = !$scope.class2;
      };

      $scope.select = function(){
      $scope.select= true;}
});
