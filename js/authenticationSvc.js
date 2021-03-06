/**
 * Created by Administrator on 6/5/2016.
 */
angular.module('authenticationSvc',[])
    .factory("authenticationService", function($http, $q, $window) {
    var userInfo;

    function login(userName, password) { 
        /*var deferred = $q.defer();

        $http.post("/api/login", {
            userName: userName,
            password: password
        }).then(function(result) {
            userInfo = {
                accessToken: result.data.access_token,
                userName: result.data.userName
            };
            $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
            deferred.resolve(userInfo);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;*/

        $http({
            method: 'POST',
            url: 'auth.json',//'http://10.10.242.198/NyxServer/API/GetImage',
            data: { userName: userName, password: password }
        }).then(function successCallback(response) { console.log("req", response.data.auth);
            return true;//response; console.log('res:',response);
        }, function errorCallback(response) { console.log("err", response);
            return false;//console.log('err',response);
        });
    }

    return {
        login: login
    };
});