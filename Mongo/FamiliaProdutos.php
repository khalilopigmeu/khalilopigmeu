<?php
$pgtitle = "Família de produtos";
$page = "FamiliaProdutos";
$td = ["" . $page => ["Id", "Nome"]];
$tdvue = ["" . $page => ["td.TipoFamilia"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="TipoFamilia" placeholder="Nome..." required="required"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>