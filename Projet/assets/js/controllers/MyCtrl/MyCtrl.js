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

    $scope.products = $scope.allproducts;
    $scope.cart = [];
    $scope.total = 0;
    // PANIER === All Product Listing
    $scope.myallproducts = function(size){
        // alert($scope.total);
        $aside.open({
            templateUrl: 'asideContent1.html',
            placement: 'right',
            // size: size,
            backdrop: true,
            controller: function ($scope, $uibModalInstance) {
                // $scope.MyselectedProducts = cartService.getProducts();
                // $scope.cart = $cookies.getObject('cart');
                if(!angular.isUndefined($cookies.get('total'))){
                        $scope.total = parseFloat($cookies.get('total'));
                  }
                  //Sepetimiz daha önceden tanımlıysa onu çekelim
                  if (!angular.isUndefined($cookies.get('cart'))) {
                           $scope.cart =  $cookies.getObject('cart');
                  }
                  $scope.removeItemCart = function(product){
                        if(product.count > 1){
                            product.count -= 1;
                            var expireDate = new Date();
                            expireDate.setDate(expireDate.getDate() + 1);
                            $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
                            $scope.cart = $cookies.getObject('cart');
                        }
                        else if(product.count === 1){
                            var index = $scope.cart.indexOf(product);
                            $scope.cart.splice(index, 1);
                            expireDate = new Date();
                            expireDate.setDate(expireDate.getDate() + 1);
                            $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
                            $scope.cart = $cookies.getObject('cart');
                            
                        }
                        
                        $scope.total -= parseFloat(product.PRIX);
                        $cookies.put('total', $scope.total,  {'expires': expireDate});
                        
                  }
                // $rootScope.mycartsDB = cartService.getProducts();
                $scope.ok = function (e) {
                    for (var i=0; i<$scope.cart.length; i++) {
                        $scope.formData = {
                            'produiti': $scope.cart[i],
                            'quantitei': $scope.cart[i].count,
                            'totali': $scope.cart[i].PRIX * $scope.cart[i].count
                          };
                          $http.post('http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/views/MyUpdate/php/ajouterpanier.php', {
                              cart:$scope.formData}).success(function(data){
                                
                                alert(data);

                
                            }).error(function(data){alert(data);})

                        
                      }

                    $uibModalInstance.close();
                    e.stopPropagation();

                };
                $scope.cancel = function (e) {
                    $uibModalInstance.dismiss();
                    e.stopPropagation();
                };
            }
        });

                
        
    };

    // COMMANDES A COLLECTER :  All products 
    $scope.show_cmdacollecter = function(myvar){
        
        // $scope.myvar = "collecte";
        
        // alert(myvar);
        $http.post("http://localhost/cliptwo/AngularJs-Admin/STANDARD/assets/views/MyUpdate/php/allproducts.php", {
            'query': myvar
            }).success(function(data){
                
                $scope.allproducts = data;
                // alert($scope.cmdacollects[1].NOM_CLIENT);
                // alert(data);

            }).error(function(data){alert(data);})
    };

    // Add Product To Cart
    $scope.addToCart = function(product){
        
	  /*
		if ($cookieStore.get('cart') !== null) {
		 		$scope.cart =  $cookieStore.get('cart');
		}
		*/
		
		
		
		if ($scope.cart.length === 0){
            product.count = 1;
            $scope.cart.push(product);
        } else {
            var repeat = false;
            for(var i = 0; i< $scope.cart.length; i++){
                if($scope.cart[i].ID_PRODUIT === product.ID_PRODUIT){
                    repeat = true;
                    $scope.cart[i].count +=1;
                }
            }
            if (!repeat) {
                product.count = 1;
                 $scope.cart.push(product);	
            }
        }
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
        $scope.cart = $cookies.getObject('cart');
    
        $scope.total +=  parseFloat(product.PRIX);
        $cookies.put('total', $scope.total,  {'expires': expireDate});
    };



});
