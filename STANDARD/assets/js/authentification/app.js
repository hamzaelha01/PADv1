app.run(function($rootScope, AUTH_EVENTS, AuthService) {

    $rootScope.$on('$stateChangeStart', function(event, nextState) {
        if (!AuthService.isAuthorized(nextState.authorizedRoles)) {
            event.preventDefault();

            if (AuthService.isAuthenticated()) {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            } else {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        }
    });

})