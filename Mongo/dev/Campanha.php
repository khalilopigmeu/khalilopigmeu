<!-- 
VueApp name = Campanha 
titulo = Campanha
app = Campanha
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblCampanha
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.NomeCampanha",
    "td.IdMail",
    "td.DataEnvio",
    "td.Validade",
    "td.Enviados",
    "td.Clicados",
    "td.Erros",
    "td.Cancelados"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Campo:</label>
<input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>