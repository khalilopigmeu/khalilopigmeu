<?php
$pgtitle = "Smails";
$page = "Smails";
$td = ["" . $page => ["Id", "SMTP", "E-Mail", "Senha", "Porta", "API Sendblue", "Qtd. Envio", "Partnerkey Sendiblue"]];
$tdvue = ["" . $page => ["td.SMTP", "td.Email", "td.Senha", "td.Porta", "td.ApiSendblue", "td.Qtdenvio", "td.PartnerKey"]];
include $refUrl . "Mongo/template/head.php"
?>
<label>SMTP:</label>
<input class="form-control" v-model="SMTP" placeholder="SMTP..."><br>
<label>Email:</label>
<input class="form-control" v-model="Email" placeholder="Senha..."><br>
<label>Senha:</label>
<input class="form-control" v-model="Senha" placeholder="Senha..."><br>
<label>Porta:</label>
<input class="form-control" v-model="Porta" placeholder="Porta..."><br>
<label>API:</label>
<input class="form-control" v-model="API" placeholder="API..."><br>
<label>Qtd:</label>
<input class="form-control" v-model="Qtd" placeholder="Qtd..."><br>
<label>Partnerkey:</label>
<input class="form-control" v-model="Partner" placeholder="Partner..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>