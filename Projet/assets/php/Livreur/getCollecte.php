<?php
$conn   = mysqli_connect("localhost", "root", "", "Pressing");
$output = array();
// $query  = "SELECT * FROM users";
$query  ="SELECT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE, COMMANDE.NBR_ARTICLES , 
CLIENT.NOM_CLIENT, CLIENT.PRENOM_CLIENT , CLIENT.ID_CLIENT , CLIENT.TELEPHONE_CLIENT ,
 CLIENT.Email , LOCALISATION.Adresse_Complete 
from COMMANDE , CLIENT , PANIER , LOCALISATION 
where COMMANDE.ID_COMMANDE = PANIER.ID_COMMANDE 
and CLIENT.ID_CLIENT = PANIER.ID_CLIENT 
and LOCALISATION.ID_LOCALISATION = COMMANDE.ID_LOCALISATION 
and COMMANDE.STATUS like '%TOCOLLECT%' 
AND COMMANDE.LIVREUR_COLLECTE like '%Hamid%'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
echo json_encode($output);
}
?> 