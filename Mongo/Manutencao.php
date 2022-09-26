<?php
$pgtitle = "Manutenção";
$page = "Manutencao";
$td = ["" . $page => ["Id", "Custo", "Data", "Observação"]];
$tdvue = ["" . $page => ["td.Custo", "td.Data", "td.Observacao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Custo:</label>
<input class="form-control valor" v-model="Custo" placeholder="Campo..."><br>
<br>
<label>Data:</label>
<input class="form-control data" type="date" v-model="Data" placeholder="Campo..."><br>
<br>
<label>Observação:</label>
<textarea class="form-control" v-model="Observacao" placeholder="Campo..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>