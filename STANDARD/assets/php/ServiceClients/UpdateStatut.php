<?php
// header('Access-Control-Allow-Origin: *');
// $conn = mysqli_connect("phpmyadmin.ctjo7qihl13z.us-east-2.rds.amazonaws.com","phpMyAdmin","phpMyAdmin","pressing");
// $info = json_decode(file_get_contents("php://input"));
// if (count($info) > 0) {
// 	$id    = mysqli_real_escape_string($conn, $info->id);
//    echo "l'id ".$id;
//     $query = "UPDATE COMMANDE SET COMMANDE.STATUS = 'CONFIRME' WHERE COMMANDE.ID_COMMANDE = '$id'";
//     if (mysqli_query($conn, $query)) {
//     echo 'La Commande est bien confirmée ...';
        
// } else {
//     echo 'Erreur';
//     }
// }else echo 'On a rien recu comme infos!Merci!';



header('Access-Control-Allow-Origin: *');

$response = [];

if(count($_POST)>0) {

	$conn = mysqli_connect("phpmyadmin.ctjo7qihl13z.us-east-2.rds.amazonaws.com","phpMyAdmin","phpMyAdmin","pressing");
	
	$resul = "UPDATE COMMANDE SET COMMANDE.STATUS = 'CONFIRME' WHERE COMMANDE.ID_COMMANDE = ".$_POST["id"]."";

	if (mysqli_query($conn, $resul)) {
		$response['status'] =  'La Commande est bien confirmée ...';
	}
	else 
	{
		$response['status'] = 'erreur';
	}
}
echo json_encode($response);

?>