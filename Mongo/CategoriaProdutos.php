<!-- 
VueApp name = CategoriaProdutos
titulo = Categoria de Produtos
app = CategoriaProdutos
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblCategoriaProdutos
-->
<?php
$pgtitle = "Categoria de produtos";
$page = "CategoriaProdutos";
$td = ["" . $page => ["Id", "Classe", "Nome"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(ClasseSrc,'TipoClasse',td.IdClasse)", "td.TipoCategoria"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Classe:</label>
<select class="form-control"  v-model="IdClasse">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(ClasseSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoClasse}}</option>
</select>
<label>Nome:</label>
<input class="form-control" v-model="TipoCategoria" placeholder="Nome..."><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>