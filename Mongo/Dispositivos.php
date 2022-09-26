<?php
$pgtitle = "Dispositivos";
$page = "Dispositivos";
$td = ["" . $page => ["Id", "Categoria", "Login", "Nome", "Identificação", "Telefone", "Ativo", "Restrição de dias", "Restrição de horas"]];
$tdvue = ["" . $page => ["td.IdCategoria", "td.IdLogin", "td.Nome", "td.UUID", "td.Telefone", "td.Ativo", "td.RestricaoDia", "td.RestricaoHora"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Categoria:</label>
<input class="form-control" v-model="IdCategoria" placeholder="Nome..." ><br>
<br>
<label>Login:</label>
<input class="form-control" v-model="IdLogin" placeholder="Nome..." ><br>
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
<input class="form-control" v-model="Ativo" placeholder="Nome..." ><br>
<br>
<label>Restrição de dias:</label>
<input class="form-control" v-model="RestricaoDia" placeholder="Nome..." ><br>
<br>
<label>Restrição de horas:</label>
<input class="form-control" v-model="RestricaoHora" placeholder="Nome..." ><br>
<br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>