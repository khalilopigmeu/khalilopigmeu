<?php
$pgtitle = "links";
$page = "links";
$td = ["" . $page => ["Id", "Nome", "Descrição", "URL", "Reduzida", "Icone"]];
$tdvue = ["" . $page => ["td.Nome", "td.Descricao", "td.Url", "td.Reduzida", "td.Icon"]];

include "template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..."><br>
<br>
<label>Descrição:</label>
<input class="form-control" v-model="Descricao" placeholder="Descrição..."><br>
<br>
<label>URL:</label>
<input class="form-control" v-model="Url" placeholder="URL..."><br>
<br>
<label>Reduzida:</label>
<input class="form-control disabled" v-model="Reduzida" disabled="true" placeholder="Reduzida..."><br>
<span class="btn" v-on:click="reduzida()">Criar<i class="far fa-plus-square"></i></span><br>
<br>
<br>
<label>Ícone:</label>
<input class="form-control" v-model="Icon" placeholder="Icone..."><br>
<br>
<?php include "template/foot.php" ?>