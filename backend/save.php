<?php
    header('Access-Controll-Allow-Origin: *');
    header('Access-Controll-Allow-Headers: *');

    include 'Bdd.php';

    $dBConnect = new Bdd;
    $dBConnect->connect();
    
    $sql = $conn->prepare("INSERT INTO calculator9000 (calculate) values (?)");

    $sql->execute(array());
?>