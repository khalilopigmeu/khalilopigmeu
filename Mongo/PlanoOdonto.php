<?php
$pgtitle = "Plano Odontológico";
$page = "PlanoOdonto";
$td = ["" . $page => ["Id", "CNPJ", "Tipo", "Nome", "Descrição", "Valor"]];
$tdvue = ["" . $page => ["td.CNPJ", "td.Tipo", "td.Nome", "td.Descricao", "td.Valor"]];

include $refUrl . "Mongo/template/head.php"
?>
<label for="Cnpj">CNPJ:</label>
<input type="text" placeholder="xx.xxx.xxx/xxxx-xx" class="cnpj form-control" v-on:focus="app.sys.mascara" v-model="CNPJ" name="Cnpj"><br>
<label>Tipo:</label>
<input class="form-control" v-model="Tipo" placeholder="Tipo..."><br>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..."><br>
<label>Valor:</label>
<input class="form-control" v-model="Valor" placeholder="Valor..."><br>
<label>Descrição:</label>
<textarea class="form-control" v-model="Descricao" placeholder="Descrição..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>