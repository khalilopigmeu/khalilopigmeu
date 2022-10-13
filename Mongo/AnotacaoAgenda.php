<?php
$pgtitle = "Anotações";
$page = "AnotacaoAgenda";
$td = ["" . $page => ["Id", "Categoria", "Título", "Anotação", "Data"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(Categoriasrc,'NomeCategoria',td.IdCategoriasEventos)",
        "td.Titulo", "td.Anotacao", "td.Data"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Categoria:</label>
<select class="form-control" v-model="IdCategoriaEvento">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(CategoriaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select>
<span class="btn" onclick="setModal('CategoriaEventos', 'AnotacaoAgenda')">Adicionar Categoria <i class="far fa-plus-square"></i></span><br>
<br>
<label>Título:</label>
<input class="form-control" v-model="Titulo" placeholder="Título..." ><br>
<label>Anotação:</label>
<textarea class="form-control" v-model="Anotacao" placeholder="Anotação..." ></textarea><br>
<label>Data:</label>
<input class="form-control data " type="date" v-model="Data" placeholder="Data..." ><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>