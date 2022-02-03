<!-- 
VueApp name = Page 
titulo = Página
app = Page
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblPage
-->
<?php
$pgtitle = "Páginas";
$page = "Page";
$td = ["" . $page => ["Id", "Título", "Url", "Conteúdo", "Acessos"]];
$tdvue = ["" . $page => ["td.Titulo", "td.UrlPage", "td.ContentPage", "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Url:</label>
<input class="form-control" v-model="UrlPage" placeholder="Url..." type="url" required="required"><br>
<br>
<label>Título:</label>
<input class="form-control" v-model="Titulo" placeholder="Título..." type="text" required="required"><br>
<br>
<label>Descricao:</label>
<textarea class="form-control" name="conteudo" v-model="ContentPage"  placeholder="Conteúdo..."></textarea><br>
<br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<a href="#" onclick="setModal('Login', 'Page')">Adicionar Acesso <i class="far fa-plus-square"></i></a><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>