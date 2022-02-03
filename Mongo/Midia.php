<!-- 
VueApp name = Midia 
titulo = Mídia
app = Midia
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblMidia
-->
<?php
$pgtitle = "Mídia";
$page = "Midia";
$td = ["" . $page => ["Id", "Álbum", "Categoria", "Produto", "Nome", "Url", "Descricao", "Tipo", "Ativo"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(AlbumSrc,'Nome',td.IdAlbum)",
        "app.sys.foreignKeyReplace(CategoriaSrc,'NomeCategoria',td.Categorias)",
        "app.sys.foreignKeyReplace(ProdutoSrc,'NomeProduto',td.IdProduto)",
        "td.NomeMidia", "td.UrlMidia", "td.DescricaoMidia", "td.Tipo", "td.Ativo"]];

include $refUrl . "Mongo/template/head.php"
?>
<div v-if="evtDataCal=='cad'">
    <label>Upload:</label>
    <input class="form-control" @change="previewFiles" placeholder="Campo..." type="file" multiple=""><br>
</div>
<div v-if="evtDataCal=='alt'||evtDataCal=='exc'">
    <label>Pesquisa:</label><input class="form-control" type="text" v-model="pesqAlbum"><br>
    <label>Álbum:</label>
    <select class="form-control" v-model="IdAlbum" placeholder="">
        <option>Selecione um</option>
        <option v-for="el in app.sys.sorter(app.sys.searchall(AlbumSrc,pesqAlbum),'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
    </select>
    <br>
    <label>Pesquisa:</label><input class="form-control" type="text" v-model="pesqCategoria"><br>
    <label>Categorias:</label>
    <select class="form-control" v-model="Categorias" placeholder="">
        <option>Selecione um</option>
        <option v-for="el in app.sys.sorter(app.sys.searchall(CategoriaSrc,pesqCategoria),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
    </select>
    <br>
    <label>Pesquisa:</label><input class="form-control" type="text" v-model="pesqProduto"><br>
    <label>Produtos:</label>
    <input list="ProdutosMidia" class="form-control" v-model="IdProduto" placeholder="">
    <datalist id="ProdutosMidia">
        <option v-for="el in app.sys.sorter(app.sys.searchall(ProdutoSrc,pesqProduto),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeProduto}}</option>
    </datalist>
    <br>
    <label>Nome:</label>
    <input class="form-control" v-model="NomeMidia" placeholder=""><br>
    <label>Url:</label>
    <input class="form-control" v-model="UrlMidia" placeholder=""><br>
    <label>Descrição:</label>
    <input class="form-control" v-model="DescricaoMidia" placeholder=""><br>
    <label>Tipo:</label>
    <input class="form-control" v-model="Tipo" placeholder=""><br>
    <label>Ativo:</label>
    <input class="form-control" v-model="Ativo" placeholder=""><br>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>