<!-- 
VueApp name = SubcategoriaProdutos 
titulo = Subcategoria de Produtos
app = SubcategoriaProdutos
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblSubcategoriaProdutos
-->
<?php
$pgtitle = "Sub-categoria de produtos";
$page = "SubcategoriaProdutos";
$td = ["" . $page => ["Id", "Categoria", "Nome"]];
$tdvue = ["" . $page => ["td.IdCategoria",
        "app.sys.foreignKeyReplace(CategoriaSrc,'TipoCategoria',td.TipoSubCategoria)"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Categoria:</label>
<select class="form-control" v-model="IdCategoria">
    <option>Selecione a subcategoria</option>
    <option v-for="el in app.sys.sorter(CategoriaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoCategoria}}</option>
</select>
<label>Nome:</label>
<input class="form-control" v-model="TipoSubCategoria" placeholder="Nome..." required="required"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>
