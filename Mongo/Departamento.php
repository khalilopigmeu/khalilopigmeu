<?php
$pgtitle = "Departamento";
$page = "Departamento";
$td = ["" . $page => ["Id", "Nome","Sigla", "Descrição"]];
$tdvue = ["" . $page => ["td.Nome","td.Sigla", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..."><br>
<br>
<label>Sigla:</label>
<input class="form-control" v-model="Sigla" placeholder="Sigla..."><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" v-model="Descricao" placeholder="Descricao..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>