'use strict'

app.service('personnel', function() {

    var IdPersonnel;
    var NomPersonnel;
    var RolePersonnel;
    var PrenomPersonnel;
    var loggedin = false;

    this.setIdPersonnel = function(userID) {
        IdPersonnel = userID;
    };
    this.getIdPersonnel = function() {
        return IdPersonnel;
    };
    this.getIdPersonnel = function() {
        return IdPersonnel;
    }

    this.getNomPersonnel = function() {
        return NomPersonnel;
    }

    this.getRolePersonnel = function() {
        return RolePersonnel;
    }

    this.isPersonnelLoggedIn = function() {
        if (!!localStorage.getItem('login')) {
            loggedin = true;
            var data = JSON.parse(localStorage.getItem('login'));
            IdPersonnel = data.IdPersonnel;
            NomPersonnel = data.NomPersonnel;
            RolePersonnel = data.RolePersonnel;
            PrenomPersonnel = data.PrenomPersonnel;
        }
        return loggedin;
    };
    this.PersonnelLoggedIN = function() {
        loggedin = true;
    };
    this.saveDataPersonnel = function(go) {
        IdPersonnel = go.id; // ID PERSONNEL
        NomPersonnel = go.nom; // NOM PERSONNEL
        RolePersonnel = go.role; // ROLE PERSONNEL
        loggedin = true; // connecté
        PrenomPersonnel = go.name; // PRENOM PERSONNEL
        // SESSION  
        localStorage.setItem('login', JSON.stringify({
            IdPersonnel: IdPersonnel,
            PrenomPersonnel: PrenomPersonnel,
            RolePersonnel: RolePersonnel,
            NomPersonnel: NomPersonnel
        }));
    };

});