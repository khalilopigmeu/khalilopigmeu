<!-- 
VueApp name = AnotacaoAgenda 
titulo = Anotações
app = AnotacaoAgenda
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model="Campo" placeholder="Campo..." ><br>
nometabela = tblAnotacaoAgenda
-->
<?php
$pgtitle = "Anotações";
$page = "AnotacaoAgenda";
$td = ["" . $page => ["Id",
        "Categoria",
        "Título",
        "Anotação",
        "Data"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(Categoriasrc,'NomeCategoria',td.IdCategoriasEventos)",
        "td.Titulo",
        "td.Anotacao",
        "td.Data"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Categoria:</label>
<input class="form-control" list="IdCategoria" v-model="IdCategoriaEvento" placeholder="Categoria..." >
<datalist id="IdCategoria">
    <option v-for="el in app.sys.sorter(CategoriaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</datalist>
<a href="#" onclick="setModal('CategoriaEventos', 'AnotacaoAgenda')">Adicionar Categoria <i class="far fa-plus-square"></i></a><br>
<br>
<label>Título:</label>
<input class="form-control" v-model="Titulo" placeholder="Título..." ><br>
<label>Anotação:</label>
<textarea class="form-control" v-model="Anotacao" placeholder="Anotação..." ></textarea><br>
<label>Data:</label>
<input class="form-control data " type="date" v-model="Data" placeholder="Data..." ><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>