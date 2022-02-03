<!-- 
VueApp name = CategoriaEventos 
titulo = Categoria de Eventos
app = CategoriaEventos
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model="Campo" placeholder="Campo..." ><br>
nometabela = tblCategoriaEventos
-->
<?php
$pgtitle = "Categorias de eventos";
$page = "CategoriaEventos";
$td = ["" . $page => ["Id",
        "Nome",
        "Cor",
        "Acessos"]];
$tdvue = ["" . $page => ["td.NomeCategoria",
        "td.Cor",
        "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Nome:</label>
<input class="form-control" v-model="NomeCategoria" placeholder="Nome..." ><br>
<label>Cor:</label>
<input class="form-control" type="color" v-bind:value="Cor" v-model="Cor" placeholder="Cor..." ><br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<a href="#" onclick="setModal('Login', 'CategoriaEventos')">Adicionar Acesso <i class="far fa-plus-square"></i></a><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>