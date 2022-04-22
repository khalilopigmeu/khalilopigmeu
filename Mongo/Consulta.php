<!-- 
VueApp name = Consulta 
titulo = Consulta
app = Consulta
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblConsulta
-->
<?php
$pgtitle = "Consulta";
$page = "Consulta";
$td = ["" . $page => ["Id", "Nome", "Valor", "Descrição"]];
$tdvue = ["" . $page => ["td.Nome", "td.Valor", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label for="Nome">Nome da consulta:</label>
<input class="form-control" v-model="Nome" placeholder="..." required="required"><br>
<label for="Valor">Valor:</label>
<input class="form-control valor" v-model="Valor" placeholder="R$"><br>
<label for="text">Observação:</label>
<textarea class="form-control" v-model="Descricao" name="consultadescricao" placeholder="Observação..."></textarea><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>