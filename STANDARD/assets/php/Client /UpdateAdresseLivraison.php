<?php
$conn = mysqli_connect("localhost", "root", "", "Pressing");
$info = json_decode(file_get_contents("php://input"));
if (count($info) > 0) {
$idLocal    = mysqli_real_escape_string($conn, $info->idLocal);
$AdresseCompleteLivraison = mysqli_real_escape_string($conn, $info->AdresseCompleteLivraison);
//$btn_name = $info->btnName;
// echo $ID;
// echo $DD;
// echo $HT; 
echo "//////";
// $query="UPDATE LOCALISATION SET LOCALISATION.Adresse_Complete_Livraison = '$AdresseCompleteLivraison' WHERE LOCALISATION.ID_LOCALISATION  ='$idLocal'";
$query="UPDATE LOCALISATION , COMMANDE set LOCALISATION.Adresse_Complete_Livraison = '$AdresseCompleteLivraison' WHERE LOCALISATION.ID_LOCALISATION= COMMANDE.ID_LOCALISATION AND COMMANDE.ID_COMMANDE = '$idLocal'";

// //$query = "INSERT INTO users(name, email, age) VALUES ('$name', '$email', '$age')";
// $query  ="UPDATE LOCALISATION SET COMMANDE.DD_COMMANDE = '$combine' WHERE COMMANDE.ID_COMMANDE = '$ID'";
if (mysqli_query($conn, $query)) {
echo "Updated...";
} else {
echo 'Failed';
}
}

// $query  ="UPDATE COMMANDE SET COMMANDE.DD_COMMANDE = '$combine' WHERE COMMANDE.ID_COMMANDE = '$ID'";

?>