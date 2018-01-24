<?php
header('Access-Control-Allow-Origin: *');
$conn = mysqli_connect("phpmyadmin.ctjo7qihl13z.us-east-2.rds.amazonaws.com","phpMyAdmin","phpMyAdmin","pressing");
$output = array();
$query  = "SELECT DISTINCT c.ID_COMMANDE,c.DD_COMMANDE,c.NBR_ARTICLES,c.LIVREUR_LIVRAISON FROM commande c WHERE c.STATUS ='EN PREPARATION'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
echo json_encode($output);
}
?> 