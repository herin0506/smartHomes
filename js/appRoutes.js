/**
 * Created by Administrator on 6/5/2016.
 */
angular.module('appRoutes', ['ngRoute'])
    .config(function ($routeProvider, $localeProvider) {
        $routeProvider
            .when('/home',{
                templateUrl:'partial/home.html',
                controller:'userDetailsController'
            })
            .when('/watchHome', {
                templateUrl:'partial/watchHome.html',
                controller:'watchHomeController'
            })
    });