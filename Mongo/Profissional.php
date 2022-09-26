<?php
$pgtitle = "Profissional";
$page = "Profissional";
$td = ["" . $page => ["Id", "Profissão", "Descrição", "Valor hora"]];
$tdvue = ["" . $page => ["td.NomeProfissao", "td.Descricao", "td.ValHou",]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Profissão:</label>
<input class="form-control" v-model="NomeProfissao" placeholder="Campo..."><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" v-model="Descricao" placeholder="Campo..."></textarea><br>
<br>
<label>Valor Hora:</label>
<input class="form-control" v-model="ValHou" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>