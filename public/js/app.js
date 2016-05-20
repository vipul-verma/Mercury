(function(){
    
    var myApp = angular.module('mercury', ['ngRoute', 'trailer', 'menuDirective', 'activeLink']);
    
    myApp.config(function($routeProvider){
        
        $routeProvider
            .when('/', {
                templateUrl: 'template/home.html'
            })
            .when('/trailers', {
                templateUrl: 'template/trailers.html'
            })
            .otherwise({
                templateUrl: 'template/home.html'
            })
        
    })
    
})();
