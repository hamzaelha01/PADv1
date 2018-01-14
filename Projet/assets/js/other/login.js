'use strict';
// Login Controller 
app.controller('LoginController', function($scope, $rootScope, AUTH_EVENTS, AuthService) {

        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function(credentials) {
            AuthService.login(credentials).then(function() {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            }, function() {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };

    })
    // Checking Authentication Service ( Factory ?)
    .factory('AuthService', function($http, Session) {

        return {
            login: function(credentials) {
                return $http
                    .post('/login', credentials)
                    .then(function(res) {
                        Session.create(res.id, res.userid, res.role);
                    });
            }
        };

    })
    // Session Service 
    .service('Session', function() {
        this.create = function(sessionId, userId, userRole) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;
        };

        this.destroy = function() {
            this.id = null;
            this.userId = null;
            this.userRole = null;
        };

        return this;
    })
    //Application Controller 
    .controller('ApplicationController', function($scope, USER_ROLES, AuthService) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;
    })
    // Users roles 
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        editor: 'editor',
        guest: 'guest'
    })