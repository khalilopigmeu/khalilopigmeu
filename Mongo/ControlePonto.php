<!-- 
VueApp name = ControlePonto 
titulo = Controle de Ponto
app = ControlePonto
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblControlePonto
-->
<?php
$pgtitle = "Controle de Ponto";
$page = "ControlePonto";
$td = ["" . $page => ["Id", "Ponto", "Entrada", "Almoço", "Retorno", "Saída", "Extra", "Data", "Justificativa"]];
$tdvue = ["" . $page => ["td.IdPonto", "td.HEntra", "td.HAlmoco", "td.HRetorno", "td.HSaida", "td.HExtra", "td.Data", "td.Justificativa"]];

include $refUrl . "Mongo/template/head.php"
?>
<select class="form-control" v-model="IdPonto" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(PontoSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{app.sys.searchByID(app.Funcionarios.src,el.IdIdFunc,"Nome")}}</option>
</select>
<a href="#" onclick="setModal('Ponto', 'ControlePonto')">Adicionar Ponto <i class="far fa-plus-square"></i></a><br>
<br>
<br>
<label>Entrada:</label>
<input class="form-control" type="time" v-model="HEntra" placeholder="HH:MM..."><br>
<br>
<label>Almoço:</label>
<input class="form-control" type="time" v-model="HAlmoco" placeholder="HH:MM..."><br>
<br>
<label>Retorno:</label>
<input class="form-control" type="time" v-model="HRetorno" placeholder="HH:MM..."><br>
<br>
<label>Saída:</label>
<input class="form-control" type="time" v-model="HSaida" placeholder="HH:MM..."><br>
<br>
<label>Extra:</label>
<input class="form-control" type="time" v-model="HExtra" placeholder="HH:MM..."><br>
<br>
<label>Data:</label>
<input class="form-control" type="date" v-model="Data" placeholder="DD/MM/YYYY..."><br>
<br>
<label>Justificativa:</label>
<input class="form-control" type="text" v-model="Justificativa" placeholder="Justificativa..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>