<?php
$conn = mysqli_connect("localhost", "root", "", "Pressing");
$info = json_decode(file_get_contents("php://input"));
if (count($info) > 0) {
$ID_CLIENT     = mysqli_real_escape_string($conn, $info->ID_CLIENT);
$ID_COMMANDE    = mysqli_real_escape_string($conn, $info->ID_COMMANDE);

//$btn_name = $info->btnName;

//$query = "INSERT INTO users(name, email, age) VALUES ('$name', '$email', '$age')";
$query  ="INSERT INTO `PANIER` (`ID_PANIER`, `ID_COMMANDE`, `ID_PRODUIT`, `ID_CLIENT`, `QUANITE`, `MONTANT`, `COMMENTAIRE`) VALUES (NULL, '$ID_COMMANDE', NULL, '$ID_CLIENT', NULL, NULL, NULL)";
if (mysqli_query($conn, $query)) {
echo "Data Inserted Successfully...";
} else {
echo 'Failed';
}
}

?>