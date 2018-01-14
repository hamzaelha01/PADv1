'use strict'
app.service('user', function() {
    var username;
    var loggedin = false;
    var id;
    var profil;
    var nom;
    var temp;
    var role;
    var ctrl = false;


    // this.setName = function(name) {
    //     username = name;
    // };
    this.getName = function() {
        return username;
    };
    this.profil = function() {
        return profil;
    };
    this.getRole = function() {
        return role;
    }
    this.nom = function() {
        return nom;
    };
    // this.isUserLoggedIn = function() {
    //     return loggedin;
    // };
    // pour le remplissage de Localstorage pour la session 
    this.isUserLoggedIn = function() {
        if (!!localStorage.getItem('login')) {
            loggedin = true;
            var data = JSON.parse(localStorage.getItem('login'));
            username = data.username;
            profil = data.profil;
            id = data.id;
            role = data.role;
        }
        return loggedin;
    };
    this.userLoggedIn = function() {
        loggedin = true;
    };

    this.setID = function(userID) {
        id = userID;
    };
    this.getID = function() {
        return id;
    };
    // login 
    this.saveData = function(go) {
        username = go.username; // Num Telephone 
        profil = go.name; // Prenom Client 
        id = go.id; // ID CLIENT 
        loggedin = true; // connecté
        nom = go.nom // Pour le NOM
        role = go.role; // Role 
        // SESSION  
        localStorage.setItem('login', JSON.stringify({
            username: id,
            profil: profil,
            id: id,
            nom: nom,
            role: role
        }));
    };
    // logout
    this.dataClear = function() {
        localStorage.removeItem('login');
        loggedin = false;
        username = "";
        id = "";
        profil = "";
        nom = "";
    }


    // commander pour un client 
    this.clientTemp = function(client) {
        temp = client;
    }
    this.getClientTemp = function() {
        return temp;
    }


});