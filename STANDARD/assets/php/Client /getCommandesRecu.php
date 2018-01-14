<?php
 
//  $query  ="SELECT COMMANDE.ID_COMMANDE , COMMANDE.NBR_ARTICLES , COMMANDE.DD_COMMANDE , COMMANDE.DF_COMMANDE, PANIER.QUANITE , PANIER.MONTANT 
// FROM PANIER , COMMANDE , CLIENT
//  WHERE PANIER.ID_COMMANDE = COMMANDE.ID_COMMANDE
//   AND PANIER.ID_CLIENT = CLIENT.ID_CLIENT 
//   AND CLIENT.Password = 'client1' 
//   AND CLIENT.TELEPHONE_CLIENT = '622529293' 
//   AND COMMANDE.STATUS != '%livre%'"

$conn = mysqli_connect("localhost", "root", "", "Pressing");
$info = json_decode(file_get_contents("php://input"));
$output = array();
$IdUser   = mysqli_real_escape_string($conn, $info->IdUser);


// $output = array();
// $query  = "SELECT * FROM `COMMANDE`";
$query  ="SELECT DISTINCT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE , COMMANDE.DF_COMMANDE , SUM(PANIER.QUANITE) as QUANTITE , SUM(PANIER.MONTANT)as MONTANT 
FROM COMMANDE , PANIER 
WHERE COMMANDE.ID_COMMANDE = PANIER.ID_COMMANDE 
AND COMMANDE.STATUS NOT IN ('EN ATTENTE','CONFIRME') 
AND COMMANDE.ID_CLIENT = '$IdUser'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
// echo json_encode($output);
}

echo json_encode($output);
?> 

