<!-- 
VueApp name = FamiliaProdutos 
titulo = Familia de Produtos
app = FamiliaProdutos
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblFamiliaProdutos
-->
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