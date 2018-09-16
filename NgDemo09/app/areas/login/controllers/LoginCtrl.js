(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$location'];

    function LoginCtrl($scope, $location) {
        $scope.user = {
            username: '',
            password: ''
        }

        $scope.doLogin = function () {
            var authurl = 'http://localhost:63936/api/account/register';

            var data = "grant_type=password&username=" + $scope.user.username + "&password=" + $scope.user.password;

            $http.post(authurl, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
           .success(function (result) {
               console.log(result);
               $scope.token = result.access_token;
           });
        }
    }
})();