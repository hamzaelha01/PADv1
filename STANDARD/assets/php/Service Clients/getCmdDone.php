<?php
$conn   = mysqli_connect("localhost", "root", "", "Pressing");
$output = array();
// $query  = "SELECT * FROM users";
// COMMANDE.ID_COMMANDE , COMMANDE.NBR_ARTICLES , COMMANDE.DD_COMMANDE , COMMANDE.DF_COMMANDE
$query  ="SELECT *
FROM  COMMANDE 
WHERE COMMANDE.STATUS  LIKE '%PRETE%'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
echo json_encode($output);
}
?> 