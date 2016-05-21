(function(){
    
    var myApp = angular.module('mercury', ['ngRoute', 'trailer', 'menuDirective', 'activeLink', 'youtube-embed']);
    
    myApp.config(function($routeProvider){
        
        $routeProvider
            .when('/', {
                templateUrl: 'template/home.html'
            })
            .when('/trailers', {
                templateUrl: 'template/trailers.html'
            })
            .when('/trailers/:id', {
                templateUrl: 'template/trailer.html'
            })
            .otherwise({
                templateUrl: 'template/home.html'
            })
        
    })
    
})();
