/**
 * Created by Administrator on 6/5/2016.
 */
angular.module('userDetailsCtrl',[])
    .controller('userDetailsController', function ($scope, $http) {
        $scope.user={
            'name':'Abhi',
            'time':Date.now()
        }
    });
