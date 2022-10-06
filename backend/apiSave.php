<?php

    // On autorise react à accéder au php avec les paramètres CORS

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // On récupère les données avec
    $getData = file_get_contents('php://input');
    $data = json_decode($getData, true);
    $calculate= (STRING) $data['calculate'];
    $result = (STRING) $data['result'];
    //include 'Bdd.php';

    $bdd = new PDO("mysql:host=localhost;dbname=calculator;charset=utf8",'root','');
    $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    /*$dBConnect = new Bdd;
    $dBConnect->connect();*/
    
    $sql = $bdd->prepare("INSERT INTO calculator (calculate, result) values (:claculate, :result)");

    $sql->execute(array(
        'calculate' => $claculate,
        'result' => $result
    ));
?>