'use strict'

app.controller('LoginCtrl', ["$scope", "$window", "$http", "user", "personnel", function($scope, $window, $http, user, personnel) {


    var ctrl = false;
    // ctrl.toggle = false;



    $scope.login = function() {

            var number = $scope.number;
            var pass = $scope.pass;

            // alert(number);
            // alert(pass);
            $http({
                url: 'http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Login/login.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: 'number=' + number + '&pass=' + pass
            }).success(function(response) {
                // alert(response.status);
                // alert(response.ID_CLIENT);

                if (response.status == "loggedin") {
                    // user.userLoggedIn();
                    // user.setName(response.PRENOM_CLIENT);
                    // if (response.role == "Client") {
                    user.saveData(response);
                    // alert(response.role);

                    // alert(user.getName());
                    // alert(response.name);
                    // All Data
                    // alert(response);
                    alert(user.getRole());
                    alert(user.isUserLoggedIn());
                    alert("ok");
                    $window.location.href = '#/app/dashboard';
                    // }
                    // else {
                    //     // personnel.saveDataPersonnel(response);
                    //     // // alert(response.role);

                    //     // // alert(user.getName());
                    //     // // alert(response.name);
                    //     // // All Data
                    //     // // alert(response);
                    //     // alert(personnel.getRolePersonnel());
                    //     // alert(personnel.isPersonnelLoggedIn());
                    //     // alert("ok");
                    //     $window.location.href = '#/app/dashboard';
                    // }
                    // user.saveData(response);
                    // // alert(response.role);

                    // // alert(user.getName());
                    // // alert(response.name);
                    // // All Data
                    // // alert(response);
                    // alert(user.getRole());
                    // alert(user.isUserLoggedIn());
                    // alert("ok");
                    // $window.location.href = '#/app/dashboard';
                    // if (user.isUserLoggedIn()) {
                    //     // $window.location.href = '#/login/signin';
                    //     // $location.path('/signin');
                    //     $window.location.href = '#/app/BdClients';
                    // }


                }
            })
        }
        // $scope.hasRole = function(Ro) {
        //     if (user.getRole() === Ro) {
        //         list = true;
        //     } else list = false;


}]);