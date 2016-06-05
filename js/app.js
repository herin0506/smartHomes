/**
 * Created by Administrator on 6/5/2016.
 */
angular.module('homeApp',['appRoutes','userDetailsCtrl','watchHomeCtrl','authenticationSvc'])
    .controller('authenticationCtrl', function ($scope, authenticationService) {
        $scope.auth = function() {
            var r = authenticationService.login($scope.uid, $scope.pass);
            $scope.result = r; console.log("ctrl",r);
            if(r)
            alert('login');
        }

    })