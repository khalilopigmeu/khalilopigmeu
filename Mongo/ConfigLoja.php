<?php
$pgtitle = "Configurar Loja";
$page = "ConfigLoja";
$td = ["" . $page => ["Id", "Ferramenta Pix", "Ferramenta Boleto", "Ferramente Crédito", "Ativo", "Ambiente"]];
$tdvue = ["" . $page => ["td.IdPagamentoPix", "td.IdPagamentoBoleto", "td.IdPagamentoCredito", "td.Ativo", "td.Ambiente"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Ativo:</label>
<input v-model="Ativo" type="checkbox" ><br>
<br>
<label>Ambiente:</label>
<input v-model="Ambiente" type="radio" value="sandbox"> - Sandbox<br>
<input v-model="Ambiente" type="radio" value="producao"> - Produção<br>
<br>
<label>Ferramenta Pix:</label>
<select class="form-control" v-model="IdPagamentoPix">
    <option value="null">Selecione</option>
    <option v-for="el in app.sys.sorter(MeioPagamentosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<label>Ferramenta Boleto:</label>
<select class="form-control" v-model="IdPagamentoBoleto">
    <option value="null">Selecione</option>
    <option v-for="el in app.sys.sorter(MeioPagamentosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<label>Ferramenta Credito:</label>
<select class="form-control" v-model="IdPagamentoCredito">
    <option value="null">Selecione</option>
    <option v-for="el in app.sys.sorter(MeioPagamentosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>