<?php
$pgtitle = "Dispositivos";
$page = "Dispositivos";
$td = ["" . $page => ["Id", "Categoria", "Login", "Nome", "Identificação", "Telefone", "Ativo", "Restrição de dias", "Restrição de horas"]];
$tdvue = ["" . $page => ["td.IdCategoria", "td.IdLogin", "td.Nome", "td.UUID", "td.Telefone", "td.Ativo", "td.RestricaoDia", "td.RestricaoHora"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Categoria:</label>
<select class="form-control" v-model="IdCategoria" placeholder="Nome..." >
    <option>selectione a categoria</option>
    <option v-for="item in CategoriaDispositivosSrc" v-bind:value="item._id['$oid']">{{item.CategoriaDispositivosSrc}}</option>
</select>
<br>
<label>Login:</label>
<select class="form-control" v-model="IdLogin" placeholder="Nome..." >
    <option>selectione o login</option>
    <option v-for="item in LoginSrc"  v-bind:value="item._id['$oid']">{{item.Login}}</option>
</select>
<br>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..." ><br>
<br>
<label>Identificação:</label>
<input class="form-control" v-model="UUID" placeholder="Nome..." ><br>
<br>
<label>Telefone:</label>
<input class="form-control" v-model="Telefone" placeholder="Nome..." ><br>
<br>
<label>Ativo:</label>
<input type="checkbox" v-model="Ativo" placeholder="Nome..." ><br>
<br>
<label>Restrição de dias:</label>
<input class="form-control" v-model="RestricaoDia" placeholder="Nome..." ><br>
<br>
<label>Restrição de horas:</label>
<input class="form-control" v-model="RestricaoHora" placeholder="Nome..." ><br>
<br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>