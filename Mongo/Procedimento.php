<!-- 
VueApp name = Procedimento 
titulo = Procedimento
app = Procedimento
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblProcedimento
-->
<?php
$pgtitle = "Procedimento";
$page = "Procedimento";
$td = ["" . $page => ["Id", "Nome", "Valor", "Descrição"]];
$tdvue = ["" . $page => ["td.Nome", "td.Valor", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label for="Nome">Nome do procedimento:</label>
<input class="form-control" v-model="Nome" placeholder="..." required="required"><br>
<label for="Valor">Valor:</label>
<input class="form-control valor" v-model="Valor" placeholder="R$"><br>
<label for="text">Observação:</label>
<textarea class="form-control" v-model="Descricao" name="procedimentodescricao" placeholder="Observação..."></textarea><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>