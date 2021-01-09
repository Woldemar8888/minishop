
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
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
</head>
<body>
    <header id="header"></header>