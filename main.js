var spaMain=angular.module('spaMain',['ngRoute']);

//configure application
//add routerProvider information

spaMain.config(function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'pages/main.html',
            controller:'mainController'
        })

        .when('/subPage',{
            templateUrl:'pages/second.html',
            controller:'secondController'
        })

});

spaMain.controller('mainController',['$scope',function($scope){

    $scope.pageName='this is main page';
    

}])

spaMain.controller('secondController',['$scope',function($scope){
    $scope.pageName='this is second page';
}])