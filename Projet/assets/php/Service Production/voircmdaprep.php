<?php
$conn   = mysqli_connect("localhost", "root", "", "pressing");
$output = array();
$query  = "SELECT DISTINCT c.ID_COMMANDE,c.DD_COMMANDE,c.NBR_ARTICLES,c.LIVREUR_LIVRAISON FROM commande c WHERE c.STATUS ='COLLECTE'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_array($result)) {
$output[] = $row;
}
echo json_encode($output);
}
?> 