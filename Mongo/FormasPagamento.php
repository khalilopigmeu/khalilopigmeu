<!-- 
VueApp name = FormasPagamento 
titulo = Formas de Pagamento
app = FormasPagamento
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblFormasPagamento
-->
<?php
$pgtitle = "Formas de Pagamento";
$page = "FormasPagamento";
$td = ["" . $page => ["Id", "Nome", "Descrição", "Taxa"]];
$tdvue = ["" . $page => ["td.NomeForma", "td.Descricao", "td.Taxa"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="NomeForma" placeholder="Campo..."><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" v-model="Descricao" placeholder="Campo..."></textarea>
<br>
<label>Taxa:</label>
<input class="form-control" v-model="Taxa" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>