
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php
        switch ($route){
            case '':
                echo '<title>Минимагазин</title>';
                break;
            case 'cart':
                echo '<title>Корзина</title>';
                break;
            default:
                echo '<title>404</title>';
        }
    ?>
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="/sources/images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/sources/images/favicon.ico" type="image/x-icon">
</head>
<body>
   <?php
       if($route ==''){
           echo '<header id="header"></header>';
       }
    ?>