<!-- 
VueApp name = Cargo 
titulo = Cargo
app = Cargo
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblCargo
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.IdDepartamento",
    "td.Nome",
    "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>                              <label>Campo:</label>
<input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>