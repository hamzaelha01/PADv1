


<?php 
header('Access-Control-Allow-Origin: *');
// header('Content-Type:application/json');




$response= [];
if(count($_POST)>0) {
$conn = mysqli_connect("phpmyadmin.ctjo7qihl13z.us-east-2.rds.amazonaws.com","phpMyAdmin","phpMyAdmin","pressing");	$result = mysqli_query($conn,"SELECT COMMANDE.ID_COMMANDE , COMMANDE.DD_COMMANDE , COMMANDE.STATUS ,COMMANDE.NBR_ARTICLES , COMMANDE.DF_COMMANDE,LOCALISATION.Adresse_Complete_Collect FROM COMMANDE , LOCALISATION WHERE COMMANDE.ID_LOCALISATION = LOCALISATION.ID_LOCALISATION AND COMMANDE.STATUS IN ('EN ATTENTE','CONFIRME','TO COLLECT') AND COMMANDE.ID_CLIENT = '1'");
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



