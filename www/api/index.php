<?php

require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/restaurants', 'getRestaurants');
//$app->get('/wines/:id',	'getWine');
//$app->get('/wines/search/:query', 'findByName');
//$app->post('/wines', 'addWine');
//$app->put('/wines/:id', 'updateWine');
//$app->delete('/wines/:id',	'deleteWine');

//$app->run();
$app->run();

function getRestaurants() {
    $data = getDataAsJSON();
    echo $data;
//    echo $_GET['jsonp_callback'] . '(' . $data . ');';
// prints: jsonp123({"id":1,"name":"Brochetas","address":"28 NTE between Mamita's beach and 1a. Ave. Aldea Thai. 77710, Playa del carmen, Quintana Roo","phone":"01 984 803 2566","email":"info@brochetas.com.mx","website":"http://www.brochetas.com.mx"});


}

function getWines() {
    $sql = "select * FROM wine ORDER BY name";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        // echo '{"wine": ' . json_encode($wines) . '}';
        echo json_encode($wines);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function getDataAsJSON() {
    return '[{"id":1,"name":"Brochetas","address":"28 NTE between Mamitas beach and 1a. Avse. Aldea Thai. 77710, Playa del carmen, Quintana Roo","phone":"01 984 803 2566","email":"info@brochetas.com.mx","website":"brochetas.com.mx"}]';
}

function getConnection() {
    $dbhost="localhost";
    $dbuser="root";
    $dbpass="root";
    $dbname="cellar";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}


?>