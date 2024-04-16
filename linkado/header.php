<!doctype html>
<?php
$refUrl = "";
$cdn = "";
$stepMenu = 0;
if (strpos($_SERVER['HTTP_HOST'] . "/" . $_SERVER['REQUEST_URI'], "linkado") !== false) {
    $cdn = "https://cdn.pongongo.com.br/";
} else {
    $cdn = "../";
}
?>
<html lang="pt-br">
    <head>
        <style id="cssroot">
            :root{

            }
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.css" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" crossorigin="anonymous">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/swiper@11.0.5/swiper-bundle.min.css" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="<?php echo $cdn; ?>js/seloq.js"></script>
        <script src="<?php echo $cdn; ?>js/fns.js"></script>
        <script src="<?php echo $cdn; ?>js/ws.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
        <script  type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/aes.js"></script>  
        <script  type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/pbkdf2.js"></script>  
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
        <script src="js/start.js"></script>
        <link href="css/linkado.css" rel="stylesheet">
    </head>
    <body>
        <div id="wrapper">
