<?php

//require_once '../vendor/autoload.php';
require_once 'config/database.php';

//$app = new \Slim\App();

// Définir les routes pour les produits
$app->get('/products', 'ProductController:getAllProducts');
$app->get('/products/{id}', 'ProductController:getProductById');

$app->run();
