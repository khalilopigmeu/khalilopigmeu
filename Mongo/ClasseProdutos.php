<?php
$pgtitle = "Classe de produtos";
$page = "ClasseProdutos";
$td = ["" . $page => ["Id", "Familia", "Nome"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(FamiliaSrc,'TipoFamilia',td.IdFamilia)", "td.TipoClasse"]];

include $refUrl . "Mongo/template/head.php"
?> 
<label>Família:</label>
<select class="form-control"  v-model="IdFamilia">
    <option>Selecione a família</option>
    <option v-for="el in app.sys.sorter(FamiliaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoFamilia}}</option>
</select>
<a href="#" onclick="setModal('FamiliaProdutos', 'ClasseProdutos')">Adicionar Família <i class="far fa-plus-square"></i></a><br>
<br>
<label>Nome:</label>
<input class="form-control" v-model="TipoClasse" placeholder="Nome..."><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>