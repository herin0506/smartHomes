/**
 * Created by Administrator on 6/5/2016.
 */
angular.module('watchHomeCtrl',[])
    .controller('watchHomeController', function ($scope, $http) {
       /* $http({
            method: 'GET',
            url: 'http://10.10.242.198/NyxServer/API/GetImage'
        }).then(function successCallback(response) {
            $scope.img=response; console.log('res:',response);
        }, function errorCallback(response) {
            console.log('err',response);
        });*/
        $scope.imgSource = 'http://10.10.242.198/NyxServer/API/GetImage';
    })
