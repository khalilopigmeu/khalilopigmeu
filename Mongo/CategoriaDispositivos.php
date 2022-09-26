<?php
$pgtitle = "Categorias de Dispositivos";
$page = "CategoriaDispositivos";
$td = ["" . $page => ["Id", "Nome"]];
$tdvue = ["" . $page => ["td.NomeCategoria"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Nome:</label>
<input class="form-control" v-model="NomeCategoria" placeholder="Nome..." ><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>