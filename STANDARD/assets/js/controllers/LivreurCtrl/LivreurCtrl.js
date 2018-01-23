'use strict'

app.controller('LivreurCtrl', ["$scope", "$http", "SweetAlert","user","$window","$cookies", function($scope, $http, SweetAlert,user,$window,$cookies) {

    // Get Selected Option from Select
    $scope.changed = function(item) {

        $scope.liv = item.NOM_PERSONNEL;

    }

    // Le Nom du livreur Pour le filtrage du livraion transmis 

      var  nomLivreur = user.getName();



    // $scope.getIndexL = function(index) {

    //     $http.get(
    //         "assets/php/Service Livraison/getIndexL.php").success(function(data) {
    //         $scope.cmdl = data;
    //         $scope.cmdidl = data[index].ID_COMMANDE;

    //         // ID COMMANDE PAR INDEX 
    //         alert($scope.cmdidl);

    //         alert($scope.liv);
    //     })

    // }

    $scope.getCommandesConfirme = function(index) {

        $http.get(
            "assets/php/Service Livraison/getIndexL.php").success(function(data) {
            $scope.cmdcf = data;

        })

    }

    $scope.getCommandesConfirmeSP = function(index) {

        $http.get(
            "assets/php/Service Livraison/getIndexLSP.php").success(function(data) {
            $scope.cmdcfSP = data;

        })

    }

    $scope.getNomLivreur = function() {

        $http.get("assets/php/Service Livraison/getNomLivreur.php")
            .success(function(data) {
                $scope.livreurs = data;

            });
        // $scope.liv = $scope.livreurs[0];

    };

    // $scope.postLivreurCollecte = function(index) {

    //     $http.get(
    //         "assets/php/Service Livraison/getIndexL.php").success(function(data) {
    //         $scope.cmdl = data;
    //         $scope.cmdidl = data[index].ID_COMMANDE;

    //         // ID COMMANDE PAR INDEX 
    //         alert($scope.cmdidl);

    //         alert($scope.liv);
    //     })



    //     // $scope.getIndexL(index);
    //     // alert($scope.cmdidl);
    //     $http.post("assets/php/Service Livraison/postLivreurCollecte.php", {
    //             'ID': $scope.cmdidl,
    //             'LIVREUR_COLLECTE': $scope.liv,

    //         })
    //         .success(function(data) {
    //             // alert(data[index].DD_COMMANDE);
    //             //$scope.show_cmdaprep();
    //         });


    // }

    // DEBUT : CONFIRMATION DU CHOIX DU LIVREUR DE COLLECTE 

    $scope.postLivreurCollecte = function(index) {
        $http.get(
            "assets/php/Service Livraison/getIndexL.php").success(function(data) {
            $scope.cmds = data;
            $scope.cmdid = data[index].ID_COMMANDE;
            // alert($scope.cmdid);
        })
        SweetAlert.swal({

            title: "La commande sera affectée à "+$scope.liv,
            text: "Voulez-vous confirmer la commande ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Oui",
            cancelButtonText: "Non!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
                $http.post("assets/php/Service Livraison/postLivreurCollecte.php", {
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
                    text: "",
                    type: "error",
                    confirmButtonColor: "#007AFF"
                });
            }
        });
    };
    // FIN : CONFIRMATION DU CHOIX DU LIVREUR DE COLLECTE 


    // DEBUT : CONFIRMATION DU CHOIX DU LVREUR DE LIVRAISON 

    $scope.postLivreurLivraison = function(index) {
        $http.get(
            "assets/php/Service Livraison/getIndexLSP.php").success(function(data) {
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
                $http.post("assets/php/Service Livraison/postLivreurLivraison.php", {
                        'id': $scope.cmdid,
                        'LIVREUR_LIVRAISON': $scope.liv,

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

    // FIN : CONFIRMATION DU CHOIX DU LIVREUR DE LIVRAISON 


    // toCollecte For Livreur 

    // $scope.toCollecte = function(index) {
    //     $http.get(
    //             "assets/php/Livreur/getCollecte.php")
    //         .success(function(data) {
    //             $scope.toC = data;
    //             // $scope.toCmd = data[index].ID_COMMANDE;
    //             // $scope.toClt = data[index].ID_CLIENT;

    //             // alert($scope.toCmd);
    //             // alert($scope.toClt);
    //         })
    // }

    $scope.toCollecte = function(index) {
        // alert(nomLivreur);
        $http.post(
                "assets/php/Livreur/getCollecte.php",{
                'NOM_LIVREUR' : nomLivreur
        }).success(function(data) {
                $scope.toC = data;
                // $scope.toCmd = data[index].ID_COMMANDE;
                // $scope.toClt = data[index].ID_CLIENT;

                // alert($scope.toCmd);
                // alert($scope.toClt);
            })
    }

    //toDeliver For Livreur 

    $scope.toDeliver = function(index) {
        $http.post(
                "assets/php/Livreur/getDeliver.php",{
                'NOM_LIVREUR' : nomLivreur
        }).success(function(data) {
                $scope.toD = data;
                // $scope.toCmd = data[index].ID_COMMANDE;
                // $scope.toClt = data[index].ID_CLIENT;

                // alert($scope.toCmd);
                // alert($scope.toClt);
            })
    }

     // DEBUT : REDIRECTION VERS LE PANIER 
       $scope.RedirectL = function(index) {

                        $scope.cart=[];
                        $cookies.putObject('cart', $scope.cart);

        $http.post(
                "assets/php/Livreur/getCollecte.php",{
                'NOM_LIVREUR' : nomLivreur
        }).success(function(data) {
                $scope.toC = data;
                alert(data[index].ID_COMMANDE);
                // user.ClientTempCmd(data[index].ID_CLIENT);

                // $scope.toCmd = data[index].COMMANDE.ID_COMMANDE;
                user.cmdTemp(data[index].ID_COMMANDE);
                alert("COMMANDE TEMP "+ user.getCmdTemp() );
                // alert("CLIENT TEMP" + user.getClientTempCmd());
                $window.location.href ="#/app/Panier";
                // $scope.toClt = data[index].ID_CLIENT;

                // alert($scope.toCmd);
                // alert($scope.toClt);
            })


        // 
    } 
    // FIN : REDIRECTION VERS LE PANIEr 


    $scope.ConfirmationD = function(index) {
        // $http.post(
        //         "assets/php/Livreur/getDeliver.php",{
        //         'NOM_LIVREUR' : nomLivreur
        // }).success(function(data) {
        //         $scope.getD = data;

        //         $scope.IDD = data[index].ID_COMMANDE;
        //         alert(data);
        //         alert(data[index].ID_COMMANDE);

        //     })

          $http.post(
                "assets/php/Livreur/getDeliver.php",{
                'NOM_LIVREUR' : nomLivreur
        }).success(function(data) {
                $scope.getD = data;
                // alert(data);
                
                $scope.IDD = data[index].ID_COMMANDE;
                alert(data);
                alert(data[index].ID_COMMANDE);

                // $scope.toCmd = data[index].ID_COMMANDE;
                // $scope.toClt = data[index].ID_CLIENT;

                // alert($scope.toCmd);
                // alert($scope.toClt);
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
                $http.post("assets/php/Livreur/UpdateFinal.php", {
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