<?php
$conn = mysqli_connect("localhost", "root", "", "pressing");
$info = json_decode(file_get_contents("php://input"));
if (count($info) > 0) {
    $id    = $info->id;
    $query = "UPDATE commande SET STATUS = 'CONFIRMED' WHERE ID_COMMANDE = '$id'";
    if (mysqli_query($conn, $query)) {
    echo 'La Commande est bien confirmée ...';
        
} else {
    echo 'Erreur';
    }
}else echo 'On a rien recu comme infos!Merci!';
?>