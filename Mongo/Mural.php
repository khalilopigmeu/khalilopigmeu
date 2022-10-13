<?php
$pgtitle = "Mural";
$page = "Mural";
$td = ["" . $page => ["Id", "Link", "Midia", "Texto", "Lugar", "Acesso"]];
$tdvue = ["" . $page => ["td.Link", "app.sys.foreignKeyReplace(MidiaSrc,'NomeMidia',td.IdMidia)",
        "td.Texto", "td.InOut",
        "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Link:</label>
<input class="form-control" v-model="Link" placeholder="Campo..."><br>
<br>
<label>Mídia:</label>
<select class="form-control" v-model="IdMidia" multiple placeholder="Mídia..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(MidiaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" onclick="setModal('Midia', 'Mural')">Adicionar Mídia <i class="far fa-plus-square"></i></span><br>
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
<span class="btn" onclick="setModal('Login', 'Mural')">Adicionar Acesso <i class="far fa-plus-square"></i></span><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>