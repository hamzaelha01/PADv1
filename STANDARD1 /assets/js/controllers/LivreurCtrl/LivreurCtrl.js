'use strict'

app.controller('LivreurCtrl', ["$scope", "$http", "SweetAlert", function($scope, $http, SweetAlert) {

    // Get Selected Option from Select
    $scope.changed = function(item) {

        $scope.liv = item.NOM_PERSONNEL;

    }

    // $scope.getIndexL = function(index) {

    //     $http.get(
    //         "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Livraison/getIndexL.php").success(function(data) {
    //         $scope.cmdl = data;
    //         $scope.cmdidl = data[index].ID_COMMANDE;

    //         // ID COMMANDE PAR INDEX 
    //         alert($scope.cmdidl);

    //         alert($scope.liv);
    //     })

    // }

    $scope.getCommandesConfirme = function(index) {

        $http.get(
            "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Livraison/getIndexL.php").success(function(data) {
            $scope.cmdcf = data;

        })

    }

    $scope.getNomLivreur = function() {

        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Livraison/getNomLivreur.php")
            .success(function(data) {
                $scope.livreurs = data;

            });
        // $scope.liv = $scope.livreurs[0];

    };

    // $scope.postLivreurCollecte = function(index) {

    //     $http.get(
    //         "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Livraison/getIndexL.php").success(function(data) {
    //         $scope.cmdl = data;
    //         $scope.cmdidl = data[index].ID_COMMANDE;

    //         // ID COMMANDE PAR INDEX 
    //         alert($scope.cmdidl);

    //         alert($scope.liv);
    //     })



    //     // $scope.getIndexL(index);
    //     // alert($scope.cmdidl);
    //     $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Livraison/postLivreurCollecte.php", {
    //             'ID': $scope.cmdidl,
    //             'LIVREUR_COLLECTE': $scope.liv,

    //         })
    //         .success(function(data) {
    //             // alert(data[index].DD_COMMANDE);
    //             //$scope.show_cmdaprep();
    //         });


    // }

    $scope.postLivreurCollecte = function(index) {
        $http.get(
            "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Livraison/getIndexL.php").success(function(data) {
            $scope.cmds = data;
            $scope.cmdid = data[index].ID_COMMANDE;
            // alert($scope.cmdid);
        })
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
                $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Livraison/postLivreurCollecte.php", {
                        'id': $scope.cmdid,
                        'LIVREUR_COLLECTE': $scope.liv,

                    })
                    .success(function(data) {
                        // alert(data[index].DD_COMMANDE);
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
    };



    // toCollecte For Livreur 

    $scope.toCollecte = function(index) {
        $http.get(
                "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Livreur/getCollecte.php")
            .success(function(data) {
                $scope.toC = data;
                // $scope.toCmd = data[index].ID_COMMANDE;
                // $scope.toClt = data[index].ID_CLIENT;

                // alert($scope.toCmd);
                // alert($scope.toClt);
            })
    }

    //toDeliver For Livreur 

    $scope.toDeliver = function(index) {
        $http.get(
                "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Livreur/getDeliver.php")
            .success(function(data) {
                $scope.toD = data;
                // $scope.toCmd = data[index].ID_COMMANDE;
                // $scope.toClt = data[index].ID_CLIENT;

                // alert($scope.toCmd);
                // alert($scope.toClt);
            })
    }


    $scope.ConfirmationD = function(index) {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Livreur/getDeliver.php")
            .success(function(data) {
                $scope.getD = data;
                $scope.IDD = data[index].ID_COMMANDE;
                alert($scope.IDD);

            })
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
                $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Livreur/UpdateFinal.php", {
                        'id': $scope.IDD
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
    };


}]);