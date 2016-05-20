(function(){
    
    var trailer = angular.module('trailer', []);
    
    var trailerCtrl = function($scope, $http) {
        
        var refresh = function(){
            $http.get('/trailers').success(function(response){
                $scope.trailers = response;
                $scope.tr = "";
            });
            
        }
        
        refresh();       
        
        $scope.addTrailer = function(){
            console.log($scope.tr);
            $http.post('/trailers', $scope.tr).success(function(response){
                $scope.trailers = response;
                refresh();
            });
        }
        
        $scope.getId = function(id) {
            console.log(id);            
        }
    }
    
    trailerCtrl.$inject = ['$scope', '$http'];
    
    trailer.controller('trailerCtrl', trailerCtrl);
    
})();