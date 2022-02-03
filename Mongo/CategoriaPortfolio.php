<!-- 
VueApp name = CategoriaPortfolio 
titulo = Categoria de Portfólios
app = CategoriaPortfolio
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblCategoriaPortfolio
-->
<?php
$pgtitle = "Categoria de Portfólio";
$page = "CategoriaPortfolio";
$td = ["" . $page => ["Id", "Nome"]];
$tdvue = ["" . $page => ["td.Nome"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>