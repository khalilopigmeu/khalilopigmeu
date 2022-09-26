<?php
$pgtitle = "Currículo";
$page = "Curriculum";
$td = ["" . $page => ["Id", "Funcionário", "Cliente", "Foto", "Sobre"]];
$tdvue = ["" . $page => ["td.IdFuncionario", "td.IdCliente", "Foto", "Sobre"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Funcionário:</label>
<select class="form-control"  v-model="IdFuncionario">
    <option>Selecione o(a) funcionário(a)</option>
    <option v-for="el in app.sys.sorter(Funcionariosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Funcionario', 'Curriculum')">Adicionar Funcionário <i class="far fa-plus-square"></i></a><br>
<br>
<label>Cliente:</label>
<select class="form-control"  v-model="IdCliente">
    <option>Selecione o cliente</option>
    <option v-for="el in app.sys.sorter(Clientesrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Cliente', 'Curriculum')">Adicionar Cliente <i class="far fa-plus-square"></i></a><br>
<br>
<label>Foto:</label>
<input class="form-control" v-model="Foto" placeholder="Foto..." ><br>
<label>Sobre:</label>
<textarea class="form-control" name="sobrecurriculo" placeholder=""></textarea><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>