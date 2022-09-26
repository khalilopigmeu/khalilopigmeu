<?php
$pgtitle = "Meio de Pagamento";
$page = "MeioPagamento";
$td = ["" . $page => ["Id", "Chave", "Token em produção", "Token sandbox", "email"]];
$tdvue = ["" . $page => ["td.ChavePagSeguro", "td.TokenPPagSeg", "td.TokenSPagSeg", "td.EmailPagSeguro"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Chave:</label>
<input class="form-control" v-model="Chave" placeholder="Chave..."><br>
<br>
<label>Token em Produção:</label>
<input class="form-control" v-model="TokenPPagSeg" placeholder="Campo..."><br>
<br>
<label>Token em Sandbox:</label>
<input class="form-control" v-model="TokenSPagSeg" placeholder="Campo..."><br>
<br>
<label>E-mail:</label>
<input class="form-control" v-model="EmailPagSeguro" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>