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
$query  ="SELECT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE , COMMANDE.STATUS ,COMMANDE.NBR_ARTICLES , COMMANDE.DF_COMMANDE
FROM COMMANDE 
WHERE COMMANDE.ID_CLIENT = 1 
AND COMMANDE.STATUS NOT LIKE '%LIVRE%'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
// echo json_encode($output);
}

echo json_encode($output);
?> 

