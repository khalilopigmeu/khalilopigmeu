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
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(AlbumSrc,'NomeAlbum',td.IdAlbum)",
        "app.sys.foreignKeyReplace(CategoriaSrc,'NomeCategoria',td.Categorias)",
        "app.sys.foreignKeyReplace(ProdutoSrc,'NomeProduto',td.IdProduto)",
        "td.NomeMidia", "td.UrlMidia", "td.DescricaoMidia", "td.Tipo", "td.Ativo"]];

include $refUrl . "Mongo/template/head.php"
?>
<fieldset v-if="evtDataCal=='cad'" class="border rounded m-1 p-1">
    <legend>Opção</legend>
    <input type="radio" v-model="importar" value="Arquivo"><label>Arquivo</label><br>
    <input type="radio" v-model="importar" value="Url"><label>Url</label><br>
</fieldset>
<div v-if="importar=='Arquivo'">
    <label>Upload:</label>
    <input class="form-control" @change="previewFiles" placeholder="Campo..." type="file" multiple=""><br>
</div>
<div v-if="importar=='Url' || evtDataCal=='alt' || evtDataCal=='exc'">
    <fieldset class="border rounded m-1 p-1">
        <legend>Filiação</legend>
        <label>Pesquisa:</label><input class="form-control" type="text" v-model="pesqAlbum"><br>
        <label>Álbum:</label>
        <select class="form-control" v-model="IdAlbum" placeholder="">
            <option>Selecione um</option>
            <option v-for="el in app.sys.sorter(app.sys.searchall(AlbumSrc,pesqAlbum),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeAlbum}}</option>
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
        <select class="form-control" v-model="IdProduto" placeholder="">
            <option v-for="el in app.sys.sorter(app.sys.searchall(ProdutoSrc,pesqProduto),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeProduto}}</option>
        </select>
        <br>
    </fieldset>
    <fieldset class="border rounded m-1 p-1">
        <legend>Dados</legend>
        <label>Nome:</label>
        <input class="form-control" v-model="NomeMidia" placeholder=""><br>
        <label>Url:</label>
        <input class="form-control" v-model="UrlMidia" placeholder=""><br>
        <label>Descrição:</label>
        <input class="form-control" v-model="DescricaoMidia" placeholder=""><br>
        <label>Tipo:</label>
        <select class="form-control" v-model="Tipo" placeholder="">
            <option value="0">Selecione</option>
            <option value="1">Imagem</option>
            <option value="2">Áudio</option>
            <option value="3">Vídeo</option>
            <option value="4">Pdf</option>
            <option value="5">Diversos</option>
        </select><br>
        <label>Ativo:</label>
        <select class="form-control" v-model="Ativo" placeholder="">
            <option value="0">Desastivado</option>
            <option value="1">Ativado</option>
        </select>
    </fieldset>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>