<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Crypto -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
<script  type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/aes.js"></script>  
<script  type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/pbkdf2.js"></script>  
<?php
$cdn = "https://cdn.pongongo.com.br/";
if (strpos($_SERVER['REQUEST_URI'], 'ws/') || strpos($_SERVER['REQUEST_URI'], 'sys/')) {
    $refUrl = "../../";
} else if (strpos($_SERVER['REQUEST_URI'], 'dev/') || strpos($_SERVER['REQUEST_URI'], 'model/') || strpos($_SERVER['REQUEST_URI'], 'Mongo/')) {
    $refUrl = "../";
    $cdn = "https://rtiempresarial.com.br/";
}
?>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
<script src="<?php echo $cdn; ?>js/fns.js"></script>
<script src="<?php echo $cdn; ?>js/mask.js"></script>
<script src="<?php echo $cdn; ?>js/ws.js"></script>
<script src="<?php echo $cdn; ?>js/sistema.js"></script>

<script>
    app.sys.refid = "6560a8e12dda985864d91316";
    app.sys.reflog = "6560a8e12dda985864d9131a";
</script>

<script src="<?php echo $cdn; ?>ws/Site/logins.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/album.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/categoriatexto.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/midias.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/configuracao.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/pagina.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/texto.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/curriculo.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/funcionario.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/cliente.js"></script>
<?php
$rfidSEO = '6560a8e12dda985864d91316';
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$urlSEO = 'site';
include 'seo.php';
?>