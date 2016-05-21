(function(){
    
    var activeLink = angular.module('activeLink', []);
    
    var active = function($location) {
        return {
            restrict: 'A',
            replace: false,
            link: function(scope, elem) {
                var href = [ 
                                '#' + $location.path(), 
                                      $location.path()
                           ]
                angular.forEach(elem.find('a'), function(a){
                   a = angular.element(a);
                   var attr = a.attr('href');
                    
                   
                   if( -1 !== href.indexOf(attr)) {
                       //console.log(href.indexOf(attr));
                       a.parent().addClass('active')
                   } else {
                       a.parent().removeClass('active')
                   }                       
                });
            }
        }
    }
    
    active.$inject = ['$location'];
    
    activeLink.directive('active', active);
    
})();