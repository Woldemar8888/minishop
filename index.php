<?php 
$route = $_GET['route'];

require_once 'templates/header.php';

switch($route){
    case '':
        require_once 'templates/main.php';
        break;
    case 'cart':
        require_once 'templates/cart.php';
        break;
    default:
        require_once 'templates/404.php';
}

require_once 'templates/footer.php';