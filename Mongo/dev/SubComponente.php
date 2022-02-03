<!-- 
VueApp name = SubComponente 
titulo = Subcomponente
app = SubComponente
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblSubComponente
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.IdComponente",
    "td.IdEtag",
    "td.Nome",
    "td.DataAquisicao",
    "td.Ativo",
    "td.Seguro",
    "td.Valor",
    "td.Fornecedor",
    "td.Manutencao",
    "td.Marca",
    "td.Modelo",
    "td.Especificacao",
    "td.Garantia",
    "td.Observacao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Campo:</label>
<input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>
