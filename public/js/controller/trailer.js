(function(){
    
    var trailer = angular.module('trailer', []);
    
    var trailerCtrl = function($scope, $http, $routeParams) {
        
            
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
        
        $scope.remove = function(id) {
            $http.delete('/trailers/' + id).success(function(response){
                refresh();
            });
        }
        
        $scope.getId = function(id) {
            console.log(id); 
            $http.get('/trailers/' + id).success(function(response){
                 console.log(response);
            })            
        }
        
        $scope.edit = function(id) {
            $http.get('/trailers/' + id).success(function(response){
                $scope.tr = response;
            })
        }
        
        $scope.update = function() {
            $http.put('/trailers/' + $scope.tr._id, $scope.tr).success(function(){
                refresh();
            })
        }
        
        $http.get('/trailers/' + $routeParams.id).success(function(response){
            $scope.trailer = response;
            $scope.vUrl = response.url;
        })
    }
    
    trailerCtrl.$inject = ['$scope', '$http', '$routeParams'];
    
    trailer.controller('trailerCtrl', trailerCtrl);
    
})();