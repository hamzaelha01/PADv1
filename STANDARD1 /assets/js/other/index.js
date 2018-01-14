app.config(function($stateProvider, USER_ROLES) {
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/index.html',
        authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
    });
})