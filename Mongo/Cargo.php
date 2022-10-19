<?php
$pgtitle = "Cargo";
$page = "Cargo";
$td = ["" . $page => ["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(DepartamentoSrc,'Nome',td.IdDepartamento)", "td.Nome", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>            
<label>Departamento:</label>
<select class="form-control"  v-model="IdDepartamento">
    <option>Selecione o departamento</option>
    <option v-for="el in app.sys.sorter(DepartamentoSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome+ " - "+el.Sigla}}</option>
</select>
<span class="btn" data-dismiss="modal" onclick="setModal('Departamento', 'Cargo')">Adicionar departamento <i class="far fa-plus-square"></i></span><br>
<br>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Campo..."><br>
<label>Descrição:</label>
<textarea class="form-control" v-model="Descricao" placeholder="Campo..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>