app.controller("ClientCtrl", ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {


    $scope.demo5 = function(index) {
        // $http.get(
        //     "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdalivr.php"
        // ).success(function(data) {
        //     $scope.cmds = data;
        //     $scope.cmdid = data[index].ID_COMMANDE;
        //     // alert($scope.cmdid);
        // })

        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client/getCommandes.php")
            .success(function(data) {
                $scope.getcmdn = data;
                $scope.IDn = data[index].ID_COMMANDE;
            });
    };
    SweetAlert.swal({

        title: "Voulez Vous Vraiment Confirmer La Commande ?",
        text: "La commande sera prochainement confirmée!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Oui, Confirmez!",
        cancelButtonText: "Non, Annulez!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function(isConfirm) {
        if (isConfirm) {
            $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/UpdateStatut.php", {
                    'id': $scope.IDn
                })
                .success(function(data) {
                    //$scope.reload();
                    //$scope.show_cmdaprep();
                });
            SweetAlert.swal({
                title: "Confirmée!",
                text: "Votre Commande a été confirmée.",
                type: "success",
                confirmButtonColor: "#007AFF"

            });
        } else {
            SweetAlert.swal({
                title: "Annulée!",
                text: "Pas de Changement 🙂",
                type: "error",
                confirmButtonColor: "#007AFF"
            });
        }
    });


    $scope.Lock = function() {
        $location.path('/lock');
    }
}]);