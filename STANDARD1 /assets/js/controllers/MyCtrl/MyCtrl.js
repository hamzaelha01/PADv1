'use strict';
//var app = angular.module("myapp");
app.controller("MyCtrl", function($scope, $http, $aside, SweetAlert) {


    //modifier l'horaire 

    // Show All records 
    $scope.show_cmdaprep = function() {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdaprep.php")
            .success(function(data) {
                $scope.names = data;
            });
    }
    $scope.show_cmdalivr = function() {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdalivr.php")
            .success(function(data) {
                $scope.livrs = data;
            });
    }

    $scope.livrer = function(position, index) {
        $aside.open({
            templateUrl: 'asideContent.html',
            placement: position,
            size: 'sm',
            backdrop: true,
            controller: function($scope, $uibModalInstance) {
                //alert(index);
                //Get Record of this Index
                $http.get(
                        "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdalivr.php").success(function(data) {
                        $scope.cmds = data;
                        $scope.cmdid = data[index].ID_COMMANDE;
                        // alert($scope.cmdid);
                    })
                    // Update Statut of commande
                $scope.ok = function(e) {

                    //alert( $scope.arra(index));
                    $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/confirmeralivr.php", {
                            'id': $scope.cmdid
                        })
                        .success(function(data) {
                            alert(data);
                            //$scope.show_cmdaprep();
                        });
                    $uibModalInstance.close();
                    e.stopPropagation();
                };
                $scope.cancel = function(e) {
                    $uibModalInstance.dismiss();
                    e.stopPropagation();
                };
            }
        });
    };
    // Show Sweet Modal
    $scope.demo5 = function(index) {
        $http.get(
            "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdalivr.php"
        ).success(function(data) {
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
                $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/confirmeralivr.php", {
                        'id': $scope.cmdid
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

    // Show Record binded to this index
    // $scope.showme = function(index){
    //     $http.get(
    //         "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/views/MyUpdate/php/voircmdaprep.php"
    //     ).success(function(data){
    //         //$scope.cmds = data;
    //         $scope.cmdx = data[index];
    //         $scope.update(data[index].ID_COMMANDE);
    //         //alert(data[index].ID_COMMANDE);
    //     })
    //     //alert($scope.cmdx.ID_COMMANDE);
    // }
    // Update Record based to this index
    // $scope.update = function(index){
    //     {
    //         if (confirm("Voulez vous vraiment de confirmer cette commande ?")) {
    //         $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/views/MyUpdate/php/confirmer.php", {
    //         'id': index
    //         })
    //         .success(function(data) {
    //         //alert(data);
    //         $scope.show_cmdaprep();
    //         });
    //         } else {
    //         return false;
    //         }
    //         }
    // } 

    $scope.arra = function(index) {

        $http.get(
            "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdaprep.php"
        ).success(function(data) {
            //$scope.cmds = data;
            $scope.cmdx = data[index];
            $scope.update(data[index].ID_COMMANDE);
            //alert(data[index].ID_COMMANDE);
        })
        var x = data[index].ID_COMMANDE;
        return x;

    }
    $scope.openAside = function(position, index) {
        $aside.open({
            templateUrl: 'asideContent.html',
            placement: position,
            size: 'sm',
            backdrop: true,
            controller: function($scope, $uibModalInstance) {
                alert(index);
                //Get Record of this Index
                $http.get(
                        "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdaprep.php"
                    ).success(function(data) {
                        $scope.cmds = data;
                        $scope.cmdid = data[index].ID_COMMANDE;
                        // alert($scope.cmdid);
                    })
                    // Update Statut of commande
                $scope.ok = function(e) {

                    //alert( $scope.arra(index));
                    $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/confirmer.php", {
                            'id': $scope.cmdid
                        })
                        .success(function(data) {
                            alert(data);
                            //$scope.show_cmdaprep();
                        });
                    $uibModalInstance.close();
                    e.stopPropagation();
                };
                $scope.cancel = function(e) {
                    $uibModalInstance.dismiss();
                    e.stopPropagation();
                };
            }
        });
    };
});
// app.controller('AsideCtrl', ["$scope", "$aside","$http", function ($scope, $aside,$http) {
//     $scope.openAside = function (position) {
//         $aside.open({
//             templateUrl: 'asideContent.html',
//             placement: position,
//             size: 'sm',
//             backdrop: true,
//             controller: function ($scope, $uibModalInstance) {
//                 $scope.ok = function (e) {
//                     $uibModalInstance.close();
//                     e.stopPropagation();
//                 };
//                 $scope.cancel = function (e) {
//                     $uibModalInstance.dismiss();
//                     e.stopPropagation();
//                 };

//                 // function remplir($scope,index) {
//                 //     $http({
//                 //         url: 'request-url',
//                 //         method: "POST",
//                 //         data: { 'message' : message }
//                 //     })
//                 //     .then(function(response) {
//                 //             // success
//                 //     }, 
//                 //     function(response) { // optional
//                 //             // failed
//                 //     });
//                 // }

//             }
//         });
//     };
// }]);