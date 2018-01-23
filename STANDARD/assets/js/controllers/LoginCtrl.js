'use strict'

app.controller('LoginCtrl', ["$scope", "$window", "$http", "user", function($scope, $window, $http, user) {

    $scope.login = function() {

        var number = $scope.number;
        var pass = $scope.pass;
        // var URL = "http://http://18.219.9.220:8080";
        // alert(number);
        // alert(pass);
        $http({
            url: 'http://18.219.9.220/STANDARD/assets/php/Login/login.php',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'number=' + number + '&pass=' + pass
        }).success(function(response) {
            // alert(response.status);
            // alert(response.ID_CLIENT);

            if (response.status == "loggedin") {
                                        user.saveData(response);

                // user.userLoggedIn();
                
                // user.setName(response.PRENOM_CLIENT);
                // if (user.isUserLoggedIn()) {
                //     // $window.location.href = '#/login/signin';
                //     // $location.path('/signin');
                //     $window.location.href = '#/app/BdClients';
                // }

                alert(user.getName());
                alert(user.getIdLocalTempclient());

                alert(user.isUserLoggedIn());
                // alert("ok");
                // alert(user.getRole());
                // $scope.uR = user.getRole();
                // if($scope.uR ==="Client")
                // {
                //     $window.location.href = '#/app/Client';
                // }
                // else
                // {
                    $window.location.href = '#/app/dashboard';
                // }
                



            }
        })
    }

    // Locked Screen 


    $scope.LockedScreen = function() {

        var number = user.getName();
        var pass = $scope.passwd;

        // alert(number);
        // alert(pass);
        $http({
            url: 'assets/php/Login/login.php',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'number=' + number + '&pass=' + pass
        }).success(function(response) {
            // alert(response.status);
            // alert(response.ID_CLIENT);

            if (response.status == "loggedin") {
                                        user.saveData(response);

                // user.userLoggedIn();
                
                // user.setName(response.PRENOM_CLIENT);
                // if (user.isUserLoggedIn()) {
                //     // $window.location.href = '#/login/signin';
                //     // $location.path('/signin');
                //     $window.location.href = '#/app/BdClients';
                // }

                alert(user.getName());
                alert(user.getIdLocalTempclient());

                alert(user.isUserLoggedIn());
                alert("ok");
                $window.location.href = '#/app/dashboard';



            }
        })
    }
     // Localistion 
    $scope.getadresse = function() {

        if (!!navigator.geolocation) {

            var map;

            var mapOptions = {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById('google_canvas'), mapOptions);

            navigator.geolocation.getCurrentPosition(function(position) {

                var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var infowindow = new google.maps.InfoWindow({
                    map: map,
                    position: geolocate,
                    content: '<h1>Location pinned from HTML5 Geolocation!</h1>' +
                        '<h2>Latitude: ' + position.coords.latitude + '</h2>' +
                        '<h2>Longitude: ' + position.coords.longitude + '</h2>'
                });

                map.setCenter(geolocate);

                // document.getElementsByName('alt')[0].value=position.coords.latitude;
                // document.getElementsByName('lgt')[0].value=position.coords.longitude;
                var lat = parseFloat(position.coords.latitude);
                var lng = parseFloat(position.coords.longitude);
                var latlng = new google.maps.LatLng(lat, lng);
                var geocoder = geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': latlng }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            // alert("Location: " + results[1].formatted_address);
                            //document.getElementById('fadrs').innerHTML=results[1].formatted_address;
                            $scope.mylat = parseFloat(position.coords.latitude);
                            $scope.mylng = parseFloat(position.coords.longitude);
                            $scope.myadress = results[1].formatted_address;
                            // user.setLocalisation(results[1].formatted_address);

                        }
                    }
                });

            });

        } else {
            document.getElementById('google_canvas').innerHTML = 'No Geolocation Support.';
        }

    }


    // $scope.createAccount = function(){

    //     var nom; 
    //     var prenom; 
    //     var adresse; 
    //     var email;
    //     var password; 
        

    // }


}]);
