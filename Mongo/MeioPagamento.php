<?php
$pgtitle = "Meio de Pagamento";
$page = "MeioPagamento";
$td = ["" . $page => ["Id", "Nome", "API", "Chave", "Token", "SandBox", "Email"]];
$tdvue = ["" . $page => ["td.Nome", "td.API", "td.Chave", "td.Token", "td.SandBox", "td.Email"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Chave..."><br>
<br>
<label>API:</label>
<input class="form-control" v-model="API" placeholder="Campo..."><br>
<br>
<label>Chave:</label>
<input class="form-control" v-model="Chave" placeholder="Campo..."><br>
<br>
<label>Token:</label>
<input class="form-control" v-model="Token" placeholder="Campo..."><br>
<br>
<label>SandBox:</label>
<input class="form-control" v-model="SandBox" placeholder="Campo..."><br>
<br>
<label>E-mail:</label>
<input class="form-control" v-model="Email" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>