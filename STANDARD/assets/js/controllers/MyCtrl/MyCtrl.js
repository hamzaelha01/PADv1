'use strict';
//var app = angular.module("myapp");
app.controller("MyCtrl", function($scope, $http, $window, $aside, SweetAlert, $cookies, user) {


    //modifier l'horaire 
    var IdUser = user.getID();
    var IDCMD;

    // var cpt;
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
    $scope.fini = function(index) {
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
    $scope.preparation = function(position, index) {
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
                        // $scope.qte = data[index].QTE;
                        // Qauntité des produit panier par rapport a une commande 
                        user.setQteCmd(data[index].QTE);
                        // alert($scope.cmdid);
                        user.setTempRecu(data[index].ID_COMMANDE);
                    })
                    // Update Statut of commande
                $scope.ok = function(e) {
                    // $rootScope.cpt=0;
                    //alert( $scope.arra(index));
                    user.setRecuProdCpt(0);
                    $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/confirmer.php", {
                            'id': $scope.cmdid
                        })
                        .success(function(data) {
                            alert(data);
                            alert(user.getTempRecu());
                            alert(user.getID());
                            alert(IdUser);

                            //$scope.show_cmdaprep();
                            // $scope.IDCMD = user.getTempRecu();
                            // alert($scope.IDCMD);

                            $window.location.href = '#/app/RecuProd';
                            // Preparation du reçu 
                            // user.setTempRecu(data[index].ID_COMMANDE);
                            // alert(" USER TEMP " + user.getID());
                            // alert("CMD TEMP " + user.getTempRecu());
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



    // PANIER : 

    // ETAPE 1 : AFFICHER TOUS LES PRODUITS 

    $scope.show_cmdacollecter = function(myvar) {

        // $scope.myvar = "collecte";

        // alert(myvar);
        $http.get(
            "http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Livreur/getAllProducts.php"
        ).success(function(data) {

            $scope.allproducts = data;
            // alert($scope.cmdacollects[1].NOM_CLIENT);
            // alert(data);

        }).error(function(data) { alert(data); })
    };

    // ETAPE 2 : INSERTION DES PRODUITS DANS LA CARTE 

    $scope.addToCart = function(product) {

        /*
		if ($cookieStore.get('cart') !== null) {
		 		$scope.cart =  $cookieStore.get('cart');
		}
		*/



        if ($scope.cart.length === 0) {
            product.count = 1;
            $scope.cart.push(product);
        } else {
            var repeat = false;
            for (var i = 0; i < $scope.cart.length; i++) {
                if ($scope.cart[i].ID_PRODUIT === product.ID_PRODUIT) {
                    repeat = true;
                    $scope.cart[i].count += 1;
                }
            }
            if (!repeat) {
                product.count = 1;
                $scope.cart.push(product);
            }
        }
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.putObject('cart', $scope.cart, { 'expires': expireDate });
        $scope.cart = $cookies.getObject('cart');

        $scope.total += parseFloat(product.PRIX);
        $cookies.put('total', $scope.total, { 'expires': expireDate });
    };

    // ETAPE 3 : INSERTION 


    $scope.products = $scope.allproducts;
    $scope.cart = [];
    $scope.total = 0;
    // PANIER === All Product Listing
    $scope.myallproducts = function(size) {
        // alert($scope.total);
        $aside.open({
            templateUrl: 'asideContent1.html',
            placement: 'right',
            // size: size,
            backdrop: true,
            controller: function($scope, $uibModalInstance) {
                // $scope.MyselectedProducts = cartService.getProducts();
                // $scope.cart = $cookies.getObject('cart');
                if (!angular.isUndefined($cookies.get('total'))) {
                    $scope.total = parseFloat($cookies.get('total'));
                }
                //Sepetimiz daha önceden tanımlıysa onu çekelim
                if (!angular.isUndefined($cookies.get('cart'))) {
                    $scope.cart = $cookies.getObject('cart');
                }
                $scope.removeItemCart = function(product) {
                        if (product.count > 1) {
                            product.count -= 1;
                            var expireDate = new Date();
                            expireDate.setDate(expireDate.getDate() + 1);
                            $cookies.putObject('cart', $scope.cart, { 'expires': expireDate });
                            $scope.cart = $cookies.getObject('cart');
                        } else if (product.count === 1) {
                            var index = $scope.cart.indexOf(product);
                            $scope.cart.splice(index, 1);
                            expireDate = new Date();
                            expireDate.setDate(expireDate.getDate() + 1);
                            $cookies.putObject('cart', $scope.cart, { 'expires': expireDate });
                            $scope.cart = $cookies.getObject('cart');

                        }

                        $scope.total -= parseFloat(product.PRIX);
                        $cookies.put('total', $scope.total, { 'expires': expireDate });

                    }
                    // $rootScope.mycartsDB = cartService.getProducts();
                $scope.ok = function(e) {
                    for (var i = 0; i < $scope.cart.length; i++) {
                        $scope.formData = {
                            'produiti': $scope.cart[i],
                            'quantitei': $scope.cart[i].count,
                            'totali': $scope.cart[i].PRIX * $scope.cart[i].count,
                            // 'idClient':user.getClientTempCmd(),
                            'idCmd': user.getCmdTemp()
                        };
                        $http.post('http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Livreur/ajouterpanier.php', {
                            cart: $scope.formData
                        }).success(function(data) {

                            alert(data);


                        }).error(function(data) { alert(data); })


                    }

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



    //  Impression Items : 
    $scope.MyAllBasketsX = function() {
        alert(IdUser);
        alert(user.getTempRecu());
        $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /MyAllBasketsX.php", {

            'IdUser': IdUser,
            'IDCMD': user.getTempRecu()
        }).success(function(data) {
            $scope.MyAllBasketsX = data;
            $scope.MyTotal = $scope.MyAllBasketsX[0].MyTotal;
            $scope.Myname = $scope.MyAllBasketsX[0].Myname;
            $scope.MyNbArticles = $scope.MyAllBasketsX[0].NbProduits;
            // alert($scope.MyAllBasketsX[0].MyTotal);
        });
    };

    // $scope.MyAllBasketsX = function(){

    //     $http.get("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /MyAllBasketsX.php")
    //     .success(function(data) {
    //     $scope.MyAllBasketsX = data;
    //     $scope.MyTotal = $scope.MyAllBasketsX[0].MyTotal;
    //     $scope.Myname = $scope.MyAllBasketsX[0].Myname;
    //     $scope.MyNbArticles = $scope.MyAllBasketsX[0].NbProduits;
    //     // alert($scope.MyAllBasketsX[0].MyTotal);

    //     });
    // };
    $scope.MyAllBasketsY = function() {

        $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Client /MyAllBasketsX.php", {
            'IdUser': IdUser,
            'IDCMD': user.getTempRecu()
        }).success(function(data) {
            $scope.MyAllBasketsX = data;
            $scope.MyTotal = $scope.MyAllBasketsX[0].MyTotal;
            $scope.Myname = $scope.MyAllBasketsX[0].Myname;
            $scope.MyNbArticles = $scope.MyAllBasketsX[0].NbProduits;
            // alert($scope.MyAllBasketsX[0].MyTotal);

        });
    };
    $scope.imprimer = function(position, p) {
        // $rootScope.cpt=+1;
        // alert($rootScope.cpt);

        // $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/php/Service Production/getSumQte.php", {
        //     'IDCMD': user.getTempRecu()
        // }).success(function(data) {
        //     $scope.qte = data.Quantite;
        //     alert(data);
        //     alert(data.Quantite);
        // });
        // Qte a ne pas depasser 
        alert(user.getQteCmd());
        $scope.cptq = user.getQteCmd();
        $scope.cpta = user.getRecuProdCpt();
        $scope.cpta++;
        user.setRecuProdCpt($scope.cpta);
        // Compteur
        alert($scope.cpta);
        alert($scope.cptq);
        if($scope.cpta>=$scope.cptq)
        {
            user.setRecuProdCpt(0);
        }
        // IMPRIMABLE
        $aside.open({
            templateUrl: 'invoice.html',
            // placement: position,
            // size: 'lg',
            backdrop: true,
            scope: $scope,
            controller: function($scope, $uibModalInstance) {
                $scope.MyProductInfo = p;
                // alert(p);
                $scope.ok = function(e) {
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

    function pdfToHTML() {
        var pdf = new jsPDF('p', 'pt', 'letter');
        source = $('#contentPdf')[0];
        specialElementHandlers = {
            '#bypassme': function(element, renderer) {
                return true
            }
        }
        margins = {
            top: 50,
            left: 60,
            width: 545
        };
        pdf.fromHTML(
                source // HTML string or DOM elem ref.
                , margins.left // x coord
                , margins.top // y coord
                , {
                    'width': margins.width // max width of content on PDF
                        ,
                    'elementHandlers': specialElementHandlers
                },
                function(dispose) {
                    // dispose: object with X, Y of the last line add to the PDF
                    //          this allow the insertion of new lines after html
                    pdf.save('MonRecu.pdf');
                }
            )
            // alert("It s me !!");
    }


    function pdfToHTML1() {
        var pdf = new jsPDF('p', 'pt', 'letter');
        source = $('#allInvoices')[0];
        specialElementHandlers = {
            '#bypassme': function(element, renderer) {
                return true
            }
        }
        margins = {
            top: 50,
            left: 60,
            width: 545
        };
        pdf.fromHTML(
                source // HTML string or DOM elem ref.
                , margins.left // x coord
                , margins.top // y coord
                , {
                    'width': margins.width // max width of content on PDF
                        ,
                    'elementHandlers': specialElementHandlers
                },
                function(dispose) {
                    // dispose: object with X, Y of the last line add to the PDF
                    //          this allow the insertion of new lines after html
                    pdf.save('MonRecu.pdf');
                }
            )
            // alert("It s me !!");
    }








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