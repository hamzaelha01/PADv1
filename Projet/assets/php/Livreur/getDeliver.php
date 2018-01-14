<?php
$conn   = mysqli_connect("localhost", "root", "", "Pressing");
$output = array();
// $query  = "SELECT * FROM users";
$query  =" SELECT COMMANDE.ID_COMMANDE , CLIENT.ID_CLIENT , COMMANDE.DF_COMMANDE ,
 CLIENT.NOM_CLIENT , CLIENT.PRENOM_CLIENT , LOCALISATION.Adresse_Complete , CLIENT.TELEPHONE_CLIENT ,
  PANIER.QUANITE ,  PANIER.MONTANT, PANIER.COMMENTAIRE  
from COMMANDE , CLIENT , PANIER , LOCALISATION 
where COMMANDE.ID_COMMANDE = PANIER.ID_COMMANDE 
and CLIENT.ID_CLIENT = PANIER.ID_CLIENT 
and LOCALISATION.ID_LOCALISATION = COMMANDE.ID_LOCALISATION 
and COMMANDE.STATUS like '%TODELIVER%' 
AND COMMANDE.LIVREUR_LIVRAISON like '%Hamid%' ";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
echo json_encode($output);
}
?> 