<!-- 
VueApp name = RelatorioEnvio 
titulo = Relatório de Envio
app = RelatorioEnvio
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblRelatorioEnvio
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.IdPropaganda",
    "td.IdSmail",
    "td.DataEnvio",
    "td.Duracao",
    "td.Total",
    "td.Sucesso",
    "td.Falha",
    "td.Visualizacao",
    "td.Cancelado"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Campo:</label>
<input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>