<?php
$conn   = mysqli_connect("localhost", "root", "", "Pressing");
$output = array();
// $query  = "SELECT * FROM users";
$query  ="SELECT COMMANDE.ID_COMMANDE , COMMANDE.NBR_ARTICLES ,COMMANDE.LIVREUR_COLLECTE, COMMANDE.DD_COMMANDE , COMMANDE.DF_COMMANDE, PANIER.QUANITE , PANIER.MONTANT 
FROM PANIER , COMMANDE , CLIENT
 WHERE PANIER.ID_COMMANDE = COMMANDE.ID_COMMANDE
  AND PANIER.ID_CLIENT = CLIENT.ID_CLIENT 
  AND CLIENT.Password = 'client1' 
  AND CLIENT.TELEPHONE_CLIENT = '622529293' 
  AND COMMANDE.STATUS  LIKE '%CONFIRME%'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
echo json_encode($output);
}
?> 