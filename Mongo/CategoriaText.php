<?php
$pgtitle = "Categoria De Texto";
$page = "CategoriaText";
$td = ["" . $page => ["Id", "Nome"]];
$tdvue = ["" . $page => ["td.Nome"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..."><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>