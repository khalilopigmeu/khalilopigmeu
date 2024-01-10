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
        <nav>
            <div class="nav nav-tabs" id="nav-config" role="tablist">
                <a class="nav-item nav-link active" id="tnav-conf" data-toggle="tab" href="#nav-alb" role="tab" aria-controls="nav-alb" aria-selected="true" data-model="1">Álbum</a>
                <a class="nav-item nav-link" id="tnav-cus" data-toggle="tab" href="#nav-cat" role="tab" aria-controls="nav-cat" data-model="1">Categoria</a>
                <a class="nav-item nav-link" id="tnav-web" data-toggle="tab" href="#nav-prod" role="tab" aria-controls="nav-prod" data-model="1">Produtos</a>
            </div>
        </nav>
        <div class="tab-content justify-content-center container-fluid mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-alb" role="tabpanel" aria-labelledby="nav-evt-tab">
                <label>Pesquisar albuns:</label><input class="form-control" type="text" v-model="pesqAlbum"><br>
                <label>Álbum:</label>
                <select class="form-control" v-model="IdAlbum" placeholder="">
                    <option>Selecione um</option>
                    <option v-for="el in app.sys.sorter(app.sys.searchall(AlbumSrc,pesqAlbum),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeAlbum}}</option>
                </select>
            </div>
            <div class="tab-pane fade" id="nav-cat" role="tabpanel" aria-labelledby="nav-evt-tab">
                <label>Pesquisar categorias:</label><input class="form-control" type="text" v-model="pesqCategoria"><br>
                <label>Categorias:</label>
                <select class="form-control" v-model="Categorias" placeholder="">
                    <option>Selecione um</option>
                    <option v-for="el in app.sys.sorter(app.sys.searchall(CategoriaSrc,pesqCategoria),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
                </select>
            </div>
            <div class="tab-pane fade" id="nav-prod" role="tabpanel" aria-labelledby="nav-evt-tab">
                <label>Pesquisar produtos:</label><input class="form-control" type="text" v-model="pesqProduto"><br>
                <label>Produtos:</label>
                <select class="form-control" v-model="IdProduto" placeholder="">
                    <option v-for="el in app.sys.sorter(app.sys.searchall(ProdutoSrc,pesqProduto),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeProduto}}</option>
                </select>
            </div>
        </div>
    </fieldset>
    <fieldset class="border rounded m-1 p-1">
        <legend>Dados</legend>
        <label>Tipo:</label>
        <select class="form-control" v-model="Tipo" placeholder="">
            <option value="0">Selecione</option>
            <option value="1">Imagem</option>
            <option value="2">Áudio</option>
            <option value="3">Vídeo</option>
            <option value="4">Pdf</option>
            <option value="5">Diversos</option>
        </select><br>
        <div class="row">
            <div class="col-4">
                <img v-if="Tipo==1" v-bind:src="UrlMidia" class="img-fluid img-thumbnail">
                <audio v-if="Tipo==2" controls><source v-bind:src="UrlMidia"></audio>
                <video v-if="Tipo==3" controls><source v-bind:src="UrlMidia"></video>
                <a href v-if="Tipo==4" v-bind:src="UrlMidia" target="_blank">Mídia</a>
                <a href v-if="Tipo==5" v-bind:src="UrlMidia" target="_blank">Mídia</a>
            </div>
            <div class="col-8">
                <label>Nome:</label>
                <input class="form-control" v-model="NomeMidia" placeholder=""><br>
                <label>Url:</label>
                <input class="form-control" v-model="UrlMidia" placeholder=""><br>
                <label>Descrição:</label>
                <input class="form-control" v-model="DescricaoMidia" placeholder=""><br>
                <label>Ativo:</label>
                <select class="form-control" v-model="Ativo" placeholder="">
                    <option value="0">Desastivado</option>
                    <option value="1">Ativado</option>
                </select>
            </div>
        </div>
    </fieldset>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>