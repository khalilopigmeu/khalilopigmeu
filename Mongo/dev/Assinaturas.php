<!-- 
VueApp name = Assinaturas 
titulo = Assinaturas
app = Assinaturas
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblAssinaturas
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.logo",
    "td.email",
    "td.timcab",
    "td.timrod",
    "td.relrod",
    "td.relcab"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Campo:</label>
<input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>