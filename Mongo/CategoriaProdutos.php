<?php
$pgtitle = "Categoria de produtos";
$page = "CategoriaProdutos";
$td = ["" . $page => ["Id", "Classe", "Nome"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(ClasseSrc,'TipoClasse',td.IdClasse)", "td.TipoCategoria"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Classe:</label>
<select class="form-control"  v-model="IdClasse">
    <option>Selecione a classe</option>
    <option v-for="el in app.sys.sorter(ClasseSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoClasse}}</option>
</select>
<span class="btn" data-dismiss="modal" onclick="setModal('ClasseProdutos', 'CategoriaProdutos')">Adicionar Classe <i class="far fa-plus-square"></i></span><br>
<br>
<label>Nome:</label>
<input class="form-control" v-model="TipoCategoria" placeholder="Nome..."><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>