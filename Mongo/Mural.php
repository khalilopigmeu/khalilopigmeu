<!-- 
VueApp name = Mural 
titulo = Mural
app = Mural
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..."><br>
nometabela = tblMural
-->
<?php
$pgtitle = "Mural";
$page = "Mural";
$td = ["" . $page => ["Id", "Link", "Midia", "Texto", "Lugar", "Acesso"]];
$tdvue = ["" . $page => ["td.Link", "app.sys.foreignKeyReplace(Midiasrc,'NomeMidia',td.IdMidia)",
        "td.Texto", "td.InOut",
        "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Link:</label>
<input class="form-control" v-model="Link" placeholder="Campo..."><br>
<br>
<label>Midia:</label>
<input class="form-control" v-model="IdMidia" placeholder="Campo..."><br>
<br>
<label>Texto:</label>
<input class="form-control" v-model="Texto" placeholder="Campo..."><br>
<br>
<label>Modelo:</label>
<input class="form-control" v-model="InOut" placeholder="Campo..."><br>
<br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<a href="#" onclick="setModal('Login', 'Mural')">Adicionar Acesso <i class="far fa-plus-square"></i></a><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>