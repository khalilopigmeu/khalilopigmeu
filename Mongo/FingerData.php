<?php
$pgtitle = "Impressão digital";
$page = "FingerData";
$td = ["" . $page => ["Id", "Funcionário", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"]];
$tdvue = ["" . $page => ["td.IdFuncionario", "td.D1", "td.D2", "td.D3", "td.D4", "td.D5", "td.E1", "td.E2", "td.E3", "td.E4", "td.E5"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Funcionário:</label>
<select class="form-control"  v-model="IdFuncionario">
    <option>Selecione o(a) funcionário(a)</option>
    <option v-for="el in app.sys.sorter(FuncionarioSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Funcionario', 'FingerData')">Adicionar Funcionário <i class="far fa-plus-square"></i></a><br>
<br>
<label>D1:</label>
<input class="form-control" v-model="D1" placeholder="Campo..."><br>
<br>
<label>D2:</label>
<input class="form-control" v-model="D2" placeholder="Campo..."><br>
<br>
<label>D3:</label>
<input class="form-control" v-model="D3" placeholder="Campo..."><br>
<br>
<label>D4:</label>
<input class="form-control" v-model="D4" placeholder="Campo..."><br>
<br>
<label>D5:</label>
<input class="form-control" v-model="D5" placeholder="Campo..."><br>
<br>
<label>E1:</label>
<input class="form-control" v-model="E1" placeholder="Campo..."><br>
<br>
<label>E2:</label>
<input class="form-control" v-model="E2" placeholder="Campo..."><br>
<br>
<label>E3:</label>
<input class="form-control" v-model="E3" placeholder="Campo..."><br>
<br>
<label>E4:</label>
<input class="form-control" v-model="E4" placeholder="Campo..."><br>
<br>
<label>E5:</label>
<input class="form-control" v-model="E5" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>