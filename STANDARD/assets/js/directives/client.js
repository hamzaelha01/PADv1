'use strict'
    app.service('client', function() {   

           class Client {
                constructor(ID_CLIENT,NOM_CLIENT,PRENOM_CLIENT,TELEPHONE_CLIENT,AGE_CLIENT,EMAIL_CLIENT,ID_LOCALISATION,REMARQUES,SEXE_CLIENT,PASSWORD,TYPE_CLIENT,ROLE_CLIENT){
                    this.ID_CLIENT = ID_CLIENT;
                    this.NOM_CLIENT = NOM_CLIENT;
                    this.PRENOM_CLIENT = PRENOM_CLIENT;
                    this.TELEPHONE_CLIENT  = TELEPHONE_CLIENT;
                    this.AGE_CLIENT = AGE_CLIENT;
                    this.EMAIL_CLIENT = EMAIL_CLIENT;
                    this.ID_LOCALISATION = ID_LOCALISATION; 
                    this.REMARQUES = REMARQUES;
                    this.SEXE_CLIENT = SEXE_CLIENT;
                    this.PASSWORD = PASSWORD;
                    this.TYPE_CLIENT = TYPE_CLIENT;
                    this.ROLE_CLIENT = "Client";

                }
            }

            get idClient() {
                return this.ID_CLIENT;
            }
            get nomClient() {
                return this.NOM_CLIENT;
            }
            get prenomClient() {
                return this.PRENOM_CLIENT;

            }
            get telephoneClient(){
           
                return this.TELEPHONE_CLIENT;
            }
     });