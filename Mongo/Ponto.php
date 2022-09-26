<?php
$pgtitle = "Ponto";
$page = "Ponto";
$td = ["" . $page => ["Id", "Funcionário", "Impressão Digital", "Tolerância de Entrada", "Tolerância Saída", "CargaHorariaDia", "Acessos"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(Funcionariosrc,'Nome',td.IdFunc)", "td.IdFP", "td.ToleranciaEntrada", "td.ToleranciaSaida", "td.CargaHorariaDia", "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php"
?>

<label>Funcionário:</label>
<select list="FuncionarioLogin" class="form-control" v-model="IdFunc" placeholder="Campo...">
    <option  v-if="Funcionariosrc!=null" v-for="el in app.sys.sorter(Funcionariosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="zeroModal();setModal('Funcionarios', 'Login')">Adicionar Funcionário(a) <i class="far fa-plus-square"></i></a><br>
<br>
<label>Impressão digital:</label>
<select class="form-control" v-model="IdFP" placeholder="Acessos..." >
    <option  v-for="el in app.sys.sorter(Fingersrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el._id['$oid']}}</option>
</select>
<a href="#" onclick="setModal('Login', 'Ponto')">Adicionar Acesso <i class="far fa-plus-square"></i></a><br>

<label>Tolerância de entrada:</label>
<input class="form-control" type="time" v-model="ToleranciaEntrada" placeholder="Campo..."><br>
<br>
<label>Tolerância de saída:</label>
<input class="form-control" type="time" v-model="ToleranciaSaida" placeholder="Campo..."><br>
<br>
<label>Carga horária:</label>
<input class="form-control" v-model="CargaHorariaDia" placeholder="Campo..."><br>
<br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<a href="#" onclick="setModal('Login', 'Ponto')">Adicionar Acesso <i class="far fa-plus-square"></i></a><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>