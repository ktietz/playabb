<?php

require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/restaurants', 'getRestaurants');
$app->get('/accommodations', 'getAccommodations');
$app->get('/attractions', 'getAttractions');

$app->run();

function getRestaurants() {
    $json = file_get_contents('http://theplayatimes.com/welcome/api/v1/listings/restaurant/true.json');
    echo $json;
//    echo $_GET['jsonp_callback'] . '(' . $data . ');';
}

function getAttractions() {
    $json = file_get_contents('http://theplayatimes.com/welcome/api/v1/listings/attraction/true.json');

    echo $json;
}

function getAccommodations() {
    $json = file_get_contents('http://theplayatimes.com/welcome/api/v1/listings/accommodation/true.json');

    echo $json;
}




function getDataAsJSON() {
//    return '[{"id":1,"name":"Brochetas","address":"28 NTE between Mamitas beach and 1a. Avse. Aldea Thai. 77710, Playa del carmen, Quintana Roo","phone":"01 984 803 2566","email":"info@brochetas.com.mx","website":"brochetas.com.mx"}]';
//    return '[{"website": "http://www.ohlalabygeorge.com/", "name": "Oh Lala", "telephone": "9841274844", "publish": true, "id": 1, "address": "Calle 14 bis between 10th & 15th Av. | # 147, Playa del Carmen 77710, M\u00e9xico", "type": "restaurant", "email": "", "description": "The cuisine at Oh Lala! is a refreshing change from that of other, more conventional restaurants.  Guests are treated like good old friends in a relaxing atmosphere coupled with personalized service and good food.\r\n \r\nOpened in January, 2011, by co-owners George and Mikaela, Oh Lala! offers personalized experiences for its guests, ranging from a laidback sampling of hors d\u2019oeuvres and wines, to a leisurely look at the full menu.\r\n \r\nWith a total of 9 tables divided between the indoor and outdoors seating, and an open kitchen, Chef George, Mikaela, and their staff, make sure that every visit to Oh Lala, International Cuisine by George, Is a unique and a delicious one."}, {"website": "https://www.facebook.com/pages/Kaxapa-Factory/205355416164999", "name": "Kaxapa Factory", "telephone": "9841471645", "publish": true, "id": 2, "address": "Av Constituyentes, betwen 10 and 15 avenues, Playa del Carmen 77710, M\u00e9xico", "type": "restaurant", "email": "", "description": "Authentic Venezuelan food with vegetarian variations in every specialty dish.\r\n\r\n"}, {"website": "", "name": "La Portena", "telephone": "", "publish": true, "id": 3, "address": "Calle 38 between 5 th ave & 10 th ave, Playa del Carmen, M\u00e9xico", "type": "restaurant", "email": "", "description": "Argentinian cuisine.\r\n\r\n"}, {"website": "https://www.facebook.com/LosTabernacos", "name": "Los Tabernacos Bistro Lounge", "telephone": "984-803-1674", "publish": true, "id": 4, "address": "1st Avenue North between 10 y 12, Playa del Carmen, M\u00e9xico", "type": "restaurant", "email": "", "description": "Sporting Events"}, {"website": "", "name": "Pavo Real by the Sea", "telephone": "984 135 5559", "publish": true, "id": 5, "address": "Carretera 307, km 51, Playa Maroma, Playa del Carmen 77710, M\u00e9xico", "type": "restaurant", "email": "", "description": "Caribbean, French,  Seafood cuisine "}, {"website": "", "name": "El Tapas", "telephone": "+(52)19841877421", "publish": true, "id": 6, "address": "Calle 10 entre Avenida 15 y 20 | Plaza Municipal, Playa del Carmen 77710, M\u00e9xico", "type": "restaurant", "email": "", "description": ""}, {"website": "http://coffeestopplaya.mex.tl/", "name": "Coffee Stop", "telephone": "984 803 4365", "publish": true, "id": 7, "address": "Calle 10 North | Between Av. 10 and Av. 15, Playa del Carmen CP 77710, M\u00e9xico", "type": "restaurant", "email": "", "description": "Coffee shop located in the heart of Playa del Carmen."}, {"website": "http://www.ahcacao.com/en/", "name": "Ah Cacao Chocolate Cafe", "telephone": "+52 984 803 5748", "publish": true, "id": 8, "address": "5th Ave & Constituyentes | or 5th Ave & Calle 30, Playa del Carmen 77710, M\u00e9xico", "type": "restaurant", "email": "", "description": "Ah Cacao was founded in Playa del Carmen, Mexico in 2003 to offer you natural well-being with products derived from fine flavor cacao (chocolate), coffee and vanilla, all direct from the plantations."}, {"website": "http://lacasadelchocolate.jimdo.com/", "name": "La Casa del Chocolate", "telephone": "9841-565899", "publish": true, "id": 9, "address": "4 Norte bis, Centro | Entre 5ta Av. y C.10, Playa del Carmen, M\u00e9xico", "type": "restaurant", "email": "lacasadelchocolat@hotmail.com", "description": "First class chocolate"}, {"website": "http://www.clubdelacerveza.mx/", "name": "Club de la Cerveza", "telephone": "984 1470635", "publish": true, "id": 10, "address": "5ta Avenida Norte Manzna 4 Lote 5 Local 7c, Entre 34 y 38 Norte | edificio Mimosa, Playa del Carmen 77710, M\u00e9xico", "type": "restaurant", "email": "", "description": "Mexican cuisine "}]';

    $json = file_get_contents('http://theplayatimes.com/welcome/api/v1/listings/restaurant/true.json');
    return $json;
}


?>