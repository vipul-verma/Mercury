(function(){
    
    var menuDirective = angular.module('menuDirective', []);
    
    var menu = function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'directiveTemplate/menu.html'
        }
    }
    
    menuDirective.directive('menu', menu);
    
})();