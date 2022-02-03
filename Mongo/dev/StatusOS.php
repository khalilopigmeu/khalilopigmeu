<!-- 
VueApp name = StatusOS 
titulo = Status de OS
app = StatusOS
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblStatusOS
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.Nome",
    "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Campo:</label>
<input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>
