<?php
$pgtitle = "Dicas";
$page = "Hints";
$td = ["" . $page => ["Id", "Nome", "Código","Conteúdo"]];
$tdvue = ["" . $page => ["td.Nome", "td.Codigo", "td.Conteudo"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Campo..."><br>
<br>
<label>Código:</label>
<input class="form-control" v-model="Codigo" placeholder="Campo..."><br>
<br>
<label>Conteúdo:</label>
<textarea class="form-control" v-model="Conteudo" placeholder="Campo..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>