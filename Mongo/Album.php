<!-- 
VueApp name = Album 
titulo = Album
app = Album
ASC/DESC = DESC
campo = id
coluna tbl = <td>{{ td.fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblAlbum
-->
<?php
$pgtitle = "Álbum";
$page = "Album";
$td = ["" . $page => ["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>[ "td.Nome", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..."><br>
<br>
<label>Descricao:</label>
<textarea class="form-control" v-model="Descricao" placeholder="Descrição..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>