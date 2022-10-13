<?php
$pgtitle = "Categorias de Planos de sistema";
$page = "CategoriaPlanoSistema";
$td = ["" . $page => ["Id", "Nome", "Acessos"]];
$tdvue = ["" . $page => ["td.NomeCategoria", "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Nome:</label>
<input class="form-control" v-model="NomeCategoria" placeholder="Nome..." ><br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<span class="btn" onclick="setModal('Login', 'CategoriaPlanoSistema')">Adicionar Acesso <i class="far fa-plus-square"></i></span><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>