'use strict';
/**
 * controllers for dynamic table
 * Remove/delete a table row dynamically 
 */

// $('#dit1').change(function() {
//     $('#dit2').val = ($(this).val());
// })

app.controller("dynamicTableCtrl", ['$scope', 'SweetAlert', '$http', '$rootScope', '$aside', '$log', '$window', 'user', function($scope, SweetAlert, $http, $rootScope, $aside, $log, $window, user) {
    // $scope.companies = [{
    //         'name': 'Infosys Technologies',
    //         'employees': 125000,
    //         'headoffice': 'Bangalore'
    //     },
    //     {
    //         'name': 'Cognizant Technologies',
    //         'employees': 100000,
    //         'headoffice': 'Bangalore'
    //     },
    //     {
    //         'name': 'Wipro',
    //         'employees': 115000,
    //         'headoffice': 'Bangalore'
    //     },
    //     {
    //         'name': 'Tata Consultancy Services (TCS)',
    //         'employees': 150000,
    //         'headoffice': 'Bangalore'
    //     },
    // ];


    // $scope.addRow = function() {
    //     $scope.companies.push({ 'name': $scope.name, 'employees': $scope.employees, 'headoffice': $scope.headoffice });
    //     $scope.name = '';
    //     $scope.employees = '';
    //     $scope.headoffice = '';

    // };

    // $scope.demo5 = function(index) {


    //     $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client/getCommandes.php")
    //         .success(function(data) {
    //             $scope.getcmdn = data;
    //             $scope.IDn = data[index].ID_COMMANDE;
    //         });
    // };
    // SweetAlert.swal({

    //     title: "Voulez Vous Vraiment Confirmer La Commande ?",
    //     text: "La commande sera prochainement confirmée!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Oui, Confirmez!",
    //     cancelButtonText: "Non, Annulez!",
    //     closeOnConfirm: false,
    //     closeOnCancel: false
    // }, function(isConfirm) {
    //     if (isConfirm) {
    //         $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/UpdateStatut.php", {
    //                 'id': $scope.IDn
    //             })
    //             .success(function(data) {

    //             });
    //         SweetAlert.swal({
    //             title: "Confirmée!",
    //             text: "Votre Commande a été confirmée.",
    //             type: "success",
    //             confirmButtonColor: "#007AFF"

    //         });
    //     } else {
    //         SweetAlert.swal({
    //             title: "Annulée!",
    //             text: "Pas de Changement 🙂",
    //             type: "error",
    //             confirmButtonColor: "#007AFF"
    //         });
    //     }
    // });
    //selection du dernier ID_DATE

    $scope.selectdate = function() {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/getdate.php")
            .success(function(data) {
                $scope.dates = data;
            })
    }

    // remplissage panier 

    // $scope.rempPanier = function() {

    //     $scope.idcl = user.getClientTemp();

    //     $http({
    //         url: 'http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /InsertPanier.php',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: 'ID_CLIENT=' + $scope.idcl + '&ID_COMMANDE' + $scope.idcmd //en attente
    //     }).success(function(response) {

    //         if (response.status == "loggedin") {
    //             // user.userLoggedIn();
    //             // user.setName(response.PRENOM_CLIENT);
    //             user.saveData(response);


    //             alert(user.getName());
    //             alert(response.name);
    //             // All Data
    //             // alert(response);
    //             alert(user.isUserLoggedIn());
    //             alert("ok");
    //             $window.location.href = '#/app/dashboard';
    //             // if (user.isUserLoggedIn()) {
    //             //     // $window.location.href = '#/login/signin';
    //             //     // $location.path('/signin');
    //             //     $window.location.href = '#/app/BdClients';
    //             // }


    //         }
    //     })
    // }


    //  DEBUT : RESERVATION CLIENT APRES REDIRECTION *SERVICE CLIENT*



    $scope.ResPourClient = function() {

        // ETAPE 1 : CREATION
        var idUser = user.getClientTemp();
        var FirstNameUser = user.profil();
        var LastNameUser = user.nom();
        $scope.IdCmdUser = $scope.nbrd + FirstNameUser[0] + LastNameUser[0];


        // Affichage des infroamtions TEST
        alert(" JOUR COMMANDE " + $scope.dt);
        alert(" ID COMMANDE " + $scope.IdCmdUser);
        alert(" HEURE COMMANDE " + $scope.timecmd);
        alert(" NBR ARTICLES  COMMANDE " + $scope.nbrd);
        // alert(" DATE COMMANDE " + $scope.dateID);
        alert("ID USER " + idUser);
        alert("not null you can do command");

        // CREATION DE LA COMMANDE 


        // ETAPE 2: CREATION DE L 'ID DATE 
        $http.post(
            "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /InsertGetDate.php", {

            }
        ).success(function(response) {
            // scope id data 
            $scope.dateID = response.ID;
            alert($scope.dateID);
            if ($scope.dateID != null) {
                // Ajout de la commande 
                $http.post(
                    "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /InsertCommande.php", {
                        'DD': $scope.dt,
                        'IDCMD': $scope.IdCmdUser,
                        'HT': $scope.timecmd,
                        'nbrd': $scope.nbrd,
                        'IDDATE': $scope.dateID,
                        'IDCLIENT': idUser

                    }
                ).success(function(data) {
                    // alert(data.ID);
                });


            }
        });
    };
    //  FIN : RESERVATION CLIENT APRES REDIRECTION *SERVICE CLIENT*



    // DEBUT : RESERVATION PAR CLIENT *CLIENT*
    $scope.reserver = function() {
        // ETAPE 1 : CREATION DE L'ID COMMANDE 

        var Id_Client = user.getID(); // ID CLIENT

        var prof = user.profil(); // PRENOM
        var nom = user.nom(); // NOM 
        $scope.idcommande = Id_Client + $scope.nbrd + prof[0] + nom[0];
        // alert($scope.IDClient);
        // alert($scope.idcommande);
        // Affichage des infroamtions TEST
        alert(" JOUR COMMANDE " + $scope.dt);
        alert(" ID COMMANDE " + $scope.idcommande);
        alert(" HEURE COMMANDE " + $scope.timecmd);
        alert(" NBR ARTICLES  COMMANDE " + $scope.nbrd);
        // alert(" DATE COMMANDE " + $scope.dateID);
        alert("not null you can do command");
        alert(" ID CLIENT " + Id_Client);

        // ETAPE 2: CREATION DE LA COMMANDE & ID DATE
        $http.post(
            "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /InsertGetDate.php", {

            }
        ).success(function(response) {
            // scope id data 
            $scope.dateID = response.ID;
            alert($scope.dateID);
            if ($scope.dateID != null) {
                // L'AJOUT DE LA COMMANDE
                $http.post(
                    "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /InsertCommande.php", {
                        'DD': $scope.dt,
                        'IDCMD': $scope.idcommande,
                        'HT': $scope.timecmd,
                        'nbrd': $scope.nbrd,
                        'IDDATE': $scope.dateID,
                        'IDCLIENT': Id_Client

                    }
                ).success(function(data) {
                    // alert(data.ID);
                });


            }
        });
        // FIN  : RESERVATION PAR CLIENT *CLIENT*





        // ETAPE 2 : CREATION DE ID_DATE ( ET LE SELECTIONNER )

        // ETAPE 2 : CREATION DE LA COMMANDE 
        // ETAPE 3 : CREATION DU PANIER 
        // alert($scope.dt);
        // alert($scope.nbrd);
        // $http.post(
        //     "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/reserver.php", {
        //         //   'IDCMD': $scope.idcmd,
        //         'datecmd': $scope.dt,
        //         'timecmd': $scope.timecmd,
        //         // 'dates': angular.copy($scope.dates),
        //         'nbrd': $scope.nbrd
        //     }
        // ).success(function(data) {
        //     alert(data);

        //     $scope.idcmd = null;
        //     $scope.date1 = null;
        //     $scope.dates = null;
        //     // $scope.show_data();
        // });
        // $scope.idcl = user.getClientTemp();
        // alert($scope.idcl);
        // alert(user.getClientTemp());


        // Other way 

        // $http({
        //     url: 'http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /InsertPanier.php',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     data: 'ID_COMMANDE' + $scope.idcmd //en attente
        // }).success(function(response) {

        //     if (response.status == "loggedin") {
        //         // user.userLoggedIn();
        //         // user.setName(response.PRENOM_CLIENT);
        //         user.saveData(response);


        //         alert(user.getName());
        //         alert(response.name);
        //         // All Data
        //         // alert(response);
        //         alert(user.isUserLoggedIn());
        //         alert("ok");
        //         $window.location.href = '#/app/dashboard';
        //         // if (user.isUserLoggedIn()) {
        //         //     // $window.location.href = '#/login/signin';
        //         //     // $location.path('/signin');
        //         //     $window.location.href = '#/app/BdClients';
        //         // }


        //     }
        // })

    };
    //insertion 

    $scope.insert = function() {
        if ($scope.nom == null) {
            alert("Enter Your Name");
        } else if ($scope.prenom == null) {
            alert("Enter Your Email ID");
        } else if ($scope.email == null) {
            alert("Enter Your Age");
        } else {
            $http.post(
                "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/js/controllers/insert.php", {
                    'nom': $scope.nom,
                    'prenom': $scope.prenom,
                    'tel': $scope.tel,
                    'email': $scope.email,
                    'mdp': $scope.mdp
                }
            ).success(function(data) {
                alert(data);
                $scope.nom = null;
                $scope.prenom = null;
                $scope.email = null;
                $scope.tel = null;
                // $scope.show_data();
            });
        }
    }

    //selection 

    $scope.show_data = function() {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/js/controllers/display.php")
            .success(function(data) {
                $scope.names = data;
            });
    };
    // Client 
    // Selection Commandes En Cours 
    // Valable aussi pour le SC 
    // $scope.getCommandesEncours = function() {
    //     $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /getCommandes.php")
    //         .success(function(data) {
    //             $scope.names = data;
    //         });
    // };
    $scope.getCommandesEncours = function() {
        var IDUSER = user.getID();
        $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /getCommandes.php", {

            'IdUser': IDUSER
        }).success(function(data) {
            $scope.names = data;
            // alert($scope.historique);
        });


    };

    $scope.getCmdWait = function() {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/getCmdWait.php").success(function(data) {
            $scope.CmdWait = data;
        })
    }

    // Selection Historique Des Commandes 

    $scope.getHistorique = function() {
        var IDUSER = user.getID();
        $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /getHistorique.php", {

            'IdUser': IDUSER
        }).success(function(data) {
            $scope.historique = data;
            // alert($scope.historique);
        });


    };

    $scope.getClient = function() {

        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/getClients.php")
            .success(function(data) {
                $scope.clientsc = data;
            });

    };

    $scope.UpdateDate = function() {

            $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/UpdarteHrCommandes.php", {
                'ID': $scope.id_cmd,
                'DD': $scope.dt,
                'HR': $scope.ht
            }).success(function() {

                $scope.sucessmodif = "modification reussie";

            });
        }
        //commander pour un client
    $scope.Redirect = function(index) {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/getClients.php")
            .success(function(data) {
                $scope.getclc = data;
                $scope.IDC = data[index].ID_CLIENT;
                // $scope.NOM = data[index].NOM_CLIENT;
                // $scope.PRENOM = data[index].PRENOM_CLIENT;
                // alert($scope.IDC);
                user.clientTemp(data[index].ID_CLIENT);
                alert(" USER TEMP " + user.getClientTemp());
                // $location.path('/Client');
                $window.location.href = '#/app/ReserverSC';
                // alert($window.location.names);
            })



        // 
    }


    // script de modification 


    // $scope.UpdateStatut = function() {
    //         $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/UpdarteHrCommandes.php", {
    //             'ID': $scope.id_cmd,
    //             'STATUS': $scope.status
    //         }).success(function() {
    //             $scope.sucestat = "changement de statut reussie"
    //         })
    //     }
    // $scope.ModifHrCmd = function() {
    //     $http.post(""), {
    //         'ID': $scope.id_cmd,
    //         'DD': $scope.dt,
    //         'HR': $scope.ht
    //     }
    // }.success(function(data) {
    //     alert("Modification Ok ");
    // });



    // Directive Aside Change Date



    // $scope.dateChange = function(position, index) {
    //     $aside.open({
    //         templateUrl: 'asideContent.html',
    //         placement: position,
    //         size: 'sm',
    //         backdrop: true,
    //         controller: function($scope, $uibModalInstance) {
    //             //alert(index);
    //             //Get Record of this Index
    //             $http.get(
    //                     "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdalivr.php").success(function(data) {
    //                     $scope.cmds = data;
    //                     $scope.cmdid = data[index].ID_COMMANDE;
    //                     // alert($scope.cmdid);
    //                 })
    //                 // Update Statut of commande
    //             $scope.ok = function(e) {

    //                 //alert( $scope.arra(index));
    //                 $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/confirmeralivr.php", {
    //                         'id': $scope.cmdid
    //                     })
    //                     .success(function(data) {
    //                         alert(data);
    //                         //$scope.show_cmdaprep();
    //                     });
    //                 $uibModalInstance.close();
    //                 e.stopPropagation();
    //             };
    //             $scope.cancel = function(e) {
    //                 $uibModalInstance.dismiss();
    //                 e.stopPropagation();
    //             };
    //         }
    //     });
    // };

    // Sweet Alert Confirmation Commande


    $scope.demo5 = function(index) {
        $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/getCmdWait.php")
            .success(function(data) {
                $scope.getcmdn = data;
                $scope.IDn = data[index].ID_COMMANDE;
                alert($scope.IDn);

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
    };




    // $scope.demo5 = function(index) {


    //     $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client/getCommandes.php")
    //         .success(function(data) {
    //             $scope.getcmdn = data;
    //             $scope.IDn = data[index].ID_COMMANDE;
    //         })

    //     $http.get(
    //         "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/voircmdalivr.php"
    //     ).success(function(data) {
    //         $scope.cmds = data;
    //         $scope.cmdid = data[index].ID_COMMANDE;
    //         // alert($scope.cmdid);
    //     })
    //     SweetAlert.swal({

    //         title: "Voulez Vous Vraiment Confirmer La Commande ?",
    //         text: "La commande sera prochainement confirmée!",
    //         type: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#DD6B55",
    //         confirmButtonText: "Oui, Confirmez!",
    //         cancelButtonText: "Non, Annulez!",
    //         closeOnConfirm: false,
    //         closeOnCancel: false
    //     }, function(isConfirm) {
    //         if (isConfirm) {
    //             $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/UpdateStatut.php", {
    //                     'id': $scope.IDn
    //                 })
    //                 .success(function(data) {

    //                 });
    //             SweetAlert.swal({
    //                 title: "Confirmée!",
    //                 text: "Votre Commande a été confirmée.",
    //                 type: "success",
    //                 confirmButtonColor: "#007AFF"

    //             });
    //         } else {
    //             SweetAlert.swal({
    //                 title: "Annulée!",
    //                 text: "Pas de Changement 🙂",
    //                 type: "error",
    //                 confirmButtonColor: "#007AFF"
    //             });
    //         }
    //     });










    // $scope.addRowAsyncAsNV = function() {
    //     $scope.companies.push({ 'name': $scope.name, 'employees': $scope.employees, 'headoffice': $scope.headoffice });
    //     // Writing it to the server
    //     //		
    //     var data = 'name=' + $scope.name + '&employees=' + $scope.employees + '&headoffice=' + $scope.headoffice;
    //     $http.post('/savecompany', data)
    //         .success(function(data, status, headers, config) {
    //             $scope.message = data;
    //         })
    //         .error(function(data, status, headers, config) {
    //             alert("failure message: " + JSON.stringify({ data: data }));
    //         });
    //     // Making the fields empty
    //     //
    //     $scope.name = '';
    //     $scope.employees = '';
    //     $scope.headoffice = '';
    // };

    // $scope.removeRow = function(name) {
    //     var index = -1;
    //     var comArr = eval($scope.companies);
    //     for (var i = 0; i < comArr.length; i++) {
    //         if (comArr[i].name === name) {
    //             index = i;
    //             break;
    //         }
    //     }
    //     if (index === -1) {
    //         alert("Something gone wrong");
    //     }
    //     $scope.companies.splice(index, 1);
    // };




    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();
    $scope.start = $scope.minDate;
    $scope.end = $scope.maxDate;

    $scope.clear = function() {
        $scope.dt = null;
    };
    $scope.datepickerOptions = {
        showWeeks: false,
        startingDay: 1
    };
    $scope.dateDisabledOptions = {
        dateDisabled: disabled,
        showWeeks: false,
        startingDay: 1
    };
    $scope.startOptions = {
        showWeeks: false,
        startingDay: 1,
        minDate: $scope.minDate,
        maxDate: $scope.maxDate
    };
    $scope.endOptions = {
        showWeeks: false,
        startingDay: 1,
        minDate: $scope.minDate,
        maxDate: $scope.maxDate
    };
    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }


    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    $scope.toggleMin = function() {
        $scope.datepickerOptions.minDate = $scope.datepickerOptions.minDate ? null : new Date();
        $scope.dateDisabledOptions.minDate = $scope.dateDisabledOptions.minDate ? null : new Date();
    };
    $scope.maxDate = new Date(2020, 5, 22);
    $scope.minDate = new Date(1970, 12, 31);

    $scope.open = function() {
        $scope.opened = !$scope.opened;
    };


    $scope.endOpen = function() {
        $scope.endOptions.minDate = $scope.start;
        $scope.startOpened = false;
        $scope.endOpened = !$scope.endOpened;
    };
    $scope.startOpen = function() {
        $scope.startOptions.maxDate = $scope.end;
        $scope.endOpened = false;
        $scope.startOpened = !$scope.startOpened;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.hstep = 1;
    $scope.mstep = 15;

    // Time Picker
    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.update = function() {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        $scope.dt = d;
    };

    $scope.changed = function() {
        $log.log('Time changed to: ' + $scope.dt);
    };

    $scope.clear = function() {
        $scope.dt = null;
    };
    // Modification de date collecte 
    $scope.dtclick = function() {
        $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/UpdarteHrCommandes.php", {
                'ID': $scope.cmdid,
                'DD': $scope.dtt,
                'HT': $scope.hrr,
            })
            .success(function(data) {
                // alert(data[index].DD_COMMANDE);
                //$scope.show_cmdaprep();
            });
        alert($scope.dtt);
        alert($scope.hrr);
        alert($scope.cmdid);

        // $scope.dtime = $scope.dtt;
        // $scope.dhour = $scope.hrr;
    };




    /// 
    $scope.openAside = function(position, index) {
        $aside.open({
            templateUrl: 'asideContent.html',
            placement: position,
            size: 'sm',
            backdrop: true,
            controller: function($scope, $uibModalInstance) {
                // recuperation de l'index du tableau au modal Aside
                $http.get(
                    "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Clients/getCmdWait.php").success(function(data) {
                    $scope.cmds = data;
                    $scope.cmdid = data[index].ID_COMMANDE;
                    // alert($scope.cmdid);
                    alert($scope.cmdid);
                })

                $scope.ok = function(e) {
                    // alert(index);
                    // alert($scope.dtt);
                    // alert($scope.hrr);

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

}]);