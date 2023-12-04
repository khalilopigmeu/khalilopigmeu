<?php
$pgtitle = "Categorias de eventos";
$page = "CategoriaEventos";
$td = ["" . $page => ["Id", "Nome", "Cor", "Acessos"]];
$tdvue = ["" . $page => ["td.NomeCategoria",
        "td.Cor",
        "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Nome:</label>
<input class="form-control" v-model="NomeCategoria" placeholder="Nome..." ><br>
<label>Cor:</label>
<input class="form-control" type="color" v-model="Cor" placeholder="Cor..." ><br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option>Selecione</option>
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<span class="btn" data-dismiss="modal" onclick="setModal('Login', 'CategoriaEventos')">Adicionar Acesso <i class="far fa-plus-square"></i></span><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>