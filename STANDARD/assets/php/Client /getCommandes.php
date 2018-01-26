<?php
 
//  $query  ="SELECT COMMANDE.ID_COMMANDE , COMMANDE.NBR_ARTICLES , COMMANDE.DD_COMMANDE , COMMANDE.DF_COMMANDE, PANIER.QUANITE , PANIER.MONTANT 
// FROM PANIER , COMMANDE , CLIENT
//  WHERE PANIER.ID_COMMANDE = COMMANDE.ID_COMMANDE
//   AND PANIER.ID_CLIENT = CLIENT.ID_CLIENT 
//   AND CLIENT.Password = 'client1' 
//   AND CLIENT.TELEPHONE_CLIENT = '622529293' 
//   AND COMMANDE.STATUS != '%livre%'" 
//  $query  ="SELECT COMMANDE.ID_COMMANDE , COMMANDE.NBR_ARTICLES , COMMANDE.DD_COMMANDE , COMMANDE.DF_COMMANDE, PANIER.QUANITE , PANIER.MONTANT 
// FROM PANIER , COMMANDE , CLIENT
//  WHERE PANIER.ID_COMMANDE = COMMANDE.ID_COMMANDE
//   AND PANIER.ID_CLIENT = CLIENT.ID_CLIENT 
//   AND CLIENT.Password = 'client1' 
//   AND CLIENT.TELEPHONE_CLIENT = '622529293' 
//   AND COMMANDE.STATUS != '%livre%'"
<<<<<<< HEAD

//$conn = mysqli_connect("localhost", "root", "", "Pressing");
// $info = json_decode(file_get_contents("php://input"));
// $output = array();

// $IdUser   = mysqli_real_escape_string($conn, $info->IdUser);


// $output = array();
// $query  = "SELECT * FROM `COMMANDE`";
// $query  ="";
// $result = mysqli_query($conn, $query);
// if (mysqli_num_rows($result) > 0) {
// while ($row = mysqli_fetch_array($result)) {
// $output[] = $row;
// }
// echo json_encode($output);
// }

// echo json_encode($output);


 



header('Access-Control-Allow-Origin: *');
// header('Content-Type:application/json');




$response= [];
if(count($_POST)>0) {
	$conn = mysqli_connect("phpmyadmin.ctjo7qihl13z.us-east-2.rds.amazonaws.com","phpMyAdmin","phpMyAdmin","pressing");
	$result = mysqli_query($conn,"SELECT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE , COMMANDE.STATUS ,COMMANDE.NBR_ARTICLES , COMMANDE.DF_COMMANDE,LOCALISATION.Adresse_Complete_Collect FROM COMMANDE , LOCALISATION WHERE COMMANDE.ID_LOCALISATION = LOCALISATION.ID_LOCALISATION AND COMMANDE.STATUS IN ('EN ATTENTE','CONFIRME','TO COLLECT') AND COMMANDE.ID_CLIENT = ".$_POST["Iduser"]."  ");
    if(mysqli_num_rows($result)>0){
    while($row = $result->fetch_assoc()){
         // $response['status']= "loggedin";   
        $response[] = $row;
        // $response['status']=$row['STATUS'];	

        //  $_SESSION['']= $row['TELEPHONE_CLIENT'];
    //      echo "connected";
    // echo $row['ID_CLIENT'];
   
    }
    
    }
    }
    
echo json_encode($response);






// $conn = mysqli_connect("localhost", "root", "", "Pressing");
// $info = json_decode(file_get_contents("php://input"));
// $output = array();
// $IdUser   = mysqli_real_escape_string($conn, $info->IdUser);


// // $output = array();
// // $query  = "SELECT * FROM `COMMANDE`";
// $query  ="SELECT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE , COMMANDE.STATUS  FROM COMMANDE 
// WHERE COMMANDE.ID_CLIENT = '$IdUser'
// AND  COMMANDE.STATUS like '%EN ATTENTE%'";
// $result = mysqli_query($conn, $query);
// if (mysqli_num_rows($result) > 0) {
// while ($row = mysqli_fetch_array($result)) {
// $output[] = $row;
// }
// // echo json_encode($output);
// }

// echo json_encode($output);
?> 





=======
 // SELECT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE , COMMANDE.STATUS ,COMMANDE.NBR_ARTICLES , COMMANDE.DF_COMMANDE,LOCALISATION.Adresse_Complete_Collect
//FROM COMMANDE , LOCALISATION
//WHERE COMMANDE.ID_CLIENT = ".$_POST["Iduser"]."
//AND COMMANDE.ID_LOCALISATION = LOCALISATION.ID_LOCALISATION
// AND COMMANDE.STATUS IN ('EN ATTENTE','CONFIRME','TO COLLECT')

 




<?php 
header('Access-Control-Allow-Origin: *');
// header('Content-Type:application/json');

echo $_POST["Iduser"];


$response= [];
if(count($_POST)>0) {
$conn = mysqli_connect("phpmyadmin.ctjo7qihl13z.us-east-2.rds.amazonaws.com","phpMyAdmin","phpMyAdmin","pressing");
$result = mysqli_query($conn,"SELECT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE , COMMANDE.STATUS ,COMMANDE.NBR_ARTICLES , COMMANDE.DF_COMMANDE,LOCALISATION.Adresse_Complete_Collect FROM COMMANDE , LOCALISATION WHERE COMMANDE.ID_CLIENT = ".$_POST["Iduser"]." AND COMMANDE.ID_LOCALISATION = LOCALISATION.ID_LOCALISATION AND COMMANDE.STATUS IN ('EN ATTENTE','CONFIRME','TO COLLECT') ");
    if(mysqli_num_rows($result)>0){
    while($row = $result->fetch_assoc()){
         // $response['status']= "loggedin";   
        $response[] = $row;
        // $response['status']=$row['STATUS'];	

        //  $_SESSION['']= $row['TELEPHONE_CLIENT'];
    //      echo "connected";
    // echo $row['ID_CLIENT'];
   
    }
    
    }
    }
    
echo json_encode($response);
?>




>>>>>>> 947fb33ff5b2ca626f7f937e3d8a520c1123b0b7
