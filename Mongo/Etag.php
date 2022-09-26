<?php
$pgtitle = "E-tag";
$page = "Etag";
$td = ["" . $page => ["Id", "Número","Código"]];
$tdvue = ["" . $page => ["td.Numero","td.Codigo"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Número:</label>
<input class="form-control" v-model="Numero" placeholder="Número..." ><br>
<br>
<label>Código:</label>
<input class="form-control" v-model="Codigo" placeholder="Código..." ><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>