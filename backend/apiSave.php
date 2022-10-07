<?php

    // On autorise react à accéder au php avec les paramètres CORS

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

    // On récupère les données avec
    $getData = file_get_contents('php://input');
    $data = json_decode($getData, true);
    $calculate =  $data['calculate'];
    $result =  $data['result'];
    
    $bdd = new PDO("mysql:host=localhost;dbname=calculator;charset=utf8",'root','');
    $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    
    $sql = $bdd->prepare("INSERT INTO calculate (operator, result) values (:calculate, :result)");

    $sql->execute(array(
        'calculate' => $calculate,
        'result' => $result
    ));
?>