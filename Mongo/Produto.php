<!-- 
VueApp name = Produto 
titulo = Produto
app = Produto
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="" v-bind:value="Campo"><br>
nometabela = tblProduto
-->
<?php
$pgtitle = "Produtos";
$page = "Produto";
$td = ["" . $page => ["Id", "Famíalia", "Classe",
        "Categoria", "Sub-categoria", "Fornecedor",
        "Álbum", "Código", "Nome", "Características",
        "Especificação", "Resumo", "Preço", "Peso",
        "Dimensão", "Qtd. Mínima", "Qtd. Estoque",
        "Data de Validade", "Código de Barras",
        "Palavras-chave", "Data de fabricação",
        "Unidade de venda", "Plano de contas", "Tipo",
        "Uso", "Unidade de compra", "Custo", "Valor de Mercado", "Cotacao"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(FamiliaSrc,'TipoFamilia',td.IdFamilia)",
        "app.sys.foreignKeyReplace(ClasseSrc,'TipoClasse',td.IdClasse)",
        "app.sys.foreignKeyReplace(CategoriaSrc,'TipoCategoria',td.IdCategoriaProduto)",
        "app.sys.foreignKeyReplace(SubCategoriaSrc,'TipoSubCategoria',td.IdSubCategoriaProduto)",
        "app.sys.foreignKeyReplace(FornecedorSrc,'Nome',td.IdFornecedor)",
        "app.sys.foreignKeyReplace(AlbumSrc,'NomeAlbum',td.IdAlbum)",
        "td.CodProduto", "td.NomeProduto", "td.Caracteristicas",
        "td.EspecificacaoProduto", "td.ResumoProduto", "td.Preco", "td.Peso",
        "td.DimensaoProduto", "td.QtdMin", "td.QtdEstoque", "td.DataValidade",
        "td.CodBarras", "td.KeyWord", "td.DataCriacao", "td.UnidVend", "td.Contas", "td.Tipo",
        "td.Uso", "td.UnidComp", "td.Custo", "td.ValorMercado", "td.Cotacao"]];

include $refUrl . "Mongo/template/head.php"
?>
<nav>
    <div class="nav nav-tabs" id="nav-config" role="tablist">
        <a class="nav-item nav-link active" id="tnav-fili" data-toggle="tab" href="#nav-fili" role="tab" aria-controls="nav-fili" aria-selected="true" data-model="1">Filiação</a>
        <a class="nav-item nav-link" id="tnav-cus" data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" data-model="1">Informações</a>
        <a class="nav-item nav-link" id="tnav-cot" data-toggle="tab" href="#nav-cot" role="tab" aria-controls="nav-cot" data-model="1">Cotação</a>
        <a class="nav-item nav-link" id="tnav-val" data-toggle="tab" href="#nav-val" role="tab" aria-controls="nav-val" data-model="1">Valores</a>
        <a class="nav-item nav-link" id="tnav-tec" data-toggle="tab" href="#nav-tec" role="tab" aria-controls="nav-tec" data-model="1">Dados técnicos</a>
    </div>
</nav>
<div class="tab-content justify-content-center container-fluid mt-3" id="nav-tabContent">
    <div class="tab-pane show active" id="nav-fili" role="tabpanel" aria-labelledby="nav-evt-tab">
        <label>Família:</label>
        <select class="form-control" v-on:change="onselect('familia')" v-model="IdFamilia">
            <option>Selecione a família</option>
            <option v-for="el in app.sys.sorter(FamiliaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoFamilia}}</option>
        </select>
        <span class="btn" onclick="setModal('FamiliaProdutos', 'Produto')">Adicionar Família <i class="far fa-plus-square"></i></span><br>
        <label>Classe:</label>
        <select class="form-control" v-on:change="onselect('classe')" v-model="IdClasse">
            <option>Selecione a classe</option>
            <option v-for="el in app.sys.sorter(app.sys.searchinArray(ClasseSrc,familiaselect,'IdFamilia'),'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoClasse}}</option>
        </select>
        <span class="btn" onclick="setModal('ClasseProdutos', 'Produto')">Adicionar Classe <i class="far fa-plus-square"></i></span><br>
        <label>Categoria:</label>
        <select class="form-control" v-on:change="onselect('categoria')" v-model="IdCategoriaProduto">
            <option>Selecione a categoria</option>
            <option v-for="el in app.sys.sorter(app.sys.searchinArray(CategoriaSrc,classeselect,'IdClasse'),'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoCategoria}}</option>
        </select>
        <span class="btn" onclick="setModal('CategoriaProdutos', 'Produto')">Adicionar Cliente <i class="far fa-plus-square"></i></span><br>
        <label>Sub-categoria:</label>
        <select class="form-control" v-model="IdSubCategoriaProduto">
            <option>Selecione a família</option>
            <option v-for="el in app.sys.sorter(app.sys.searchinArray(SubCategoriaSrc,categoriaselect,'IdCategoria'),'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoSubCategoria}}</option>
        </select>
        <span class="btn" onclick="setModal('SubcategoriaProdutos', 'Produto')">Adicionar Subcategoria <i class="far fa-plus-square"></i></span><br>
    </div>
    <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-evt-tab">
        <label>Pesquisar albuns:</label><input class="form-control" type="text" v-model="pesqAlbum"><br>
        <label>Álbum:</label>
        <select class="form-control" v-model="IdAlbum" placeholder="">
            <option>Selecione um</option>
            <option v-for="el in app.sys.sorter(app.sys.searchall(AlbumSrc,pesqAlbum),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeAlbum}}</option>
        </select>
        <span class="btn" onclick="setModal('Album', 'Produto')">Adicionar Album <i class="far fa-plus-square"></i></span><br><br>
        <div class="row">
            <div class="col-4">
                <div v-if="!nulo(IdAlbum)">
                    <img v-if="app.sys.searchall(app.Midia.src,IdAlbum).length>0 && app.sys.searchall(app.Midia.src,IdAlbum)[0].Tipo==1" v-bind:src="app.sys.searchall(app.Midia.src,IdAlbum)[0].UrlMidia" class="img-fluid img-thumbnail">
                    <audio v-if="app.sys.searchall(app.Midia.src,IdAlbum).length>0 && app.sys.searchall(app.Midia.src,IdAlbum)[0].Tipo==2" controls><source v-bind:src="app.sys.searchall(app.Midia.src,IdAlbum)[0].UrlMidia"></audio>
                    <video v-if="app.sys.searchall(app.Midia.src,IdAlbum).length>0 && app.sys.searchall(app.Midia.src,IdAlbum)[0].Tipo==3" controls><source v-bind:src="app.sys.searchall(app.Midia.src,IdAlbum)[0].UrlMidia"></video>
                    <a href v-if="app.sys.searchall(app.Midia.src,IdAlbum).length>0 && app.sys.searchall(app.Midia.src,IdAlbum)[0].Tipo==4" v-bind:src="app.sys.searchall(app.Midia.src,IdAlbum)[0].UrlMidia" target="_blank">Mídia</a>
                    <a href v-if="app.sys.searchall(app.Midia.src,IdAlbum).length>0 && app.sys.searchall(app.Midia.src,IdAlbum)[0].Tipo==5" v-bind:src="app.sys.searchall(app.Midia.src,IdAlbum)[0].UrlMidia" target="_blank">Mídia</a>
                </div>
            </div>
            <div class="col-8">
                <label>Código de produto:</label>
                <input class="form-control" v-model="CodProduto" placeholder=""><br>
                <label>Nome:</label>
                <input class="form-control" v-model="NomeProduto" placeholder=""><br>
                <label>Características:</label>
                <textarea class="form-control" name="caracteristica" placeholder=""></textarea><br>
                <label>Especificação:</label>
                <textarea class="form-control" name="especificacao"  placeholder=""></textarea><br>
                <label>Resumo:</label>
                <textarea class="form-control" name="resumo" placeholder=""></textarea><br>
                <label>Peso:</label>
                <input class="form-control" v-model="Peso" placeholder=""><br>
                <label>Dimensão:</label>
                <input class="form-control" v-model="DimensaoProduto" placeholder="Altura-Largura-Profundidade"><br>
                <label>Qtd. Mínima:</label>
                <input class="form-control" v-model="QtdMin" placeholder=""><br>
                <label>Qtd. Estoque:</label>
                <input class="form-control" v-model="QtdEstoque" placeholder=""><br>
                <label>Código de Barras:</label>
                <input class="form-control" v-model="CodBarras" placeholder=""><br>
                <label>Palavras-chave:</label>
                <textarea class="form-control" v-model="KeyWord" placeholder="separar por vírgula"></textarea><br>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="nav-cot" role="tabpanel" aria-labelledby="nav-evt-tab">
        <label>Fornecedor:</label>
        <select class="form-control" v-model="IdFornecedor" v-on:change="cotacao" multiple>
            <option v-for="el in app.sys.sorter(FornecedorSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
        </select>
        <span class="btn" onclick="setModal('Fornecedor', 'Produto')">Adicionar Fornecedor <i class="far fa-plus-square"></i></span><br><br>
        <div v-if="!nulo(IdFornecedor)">
            <div v-for="item in IdFornecedor">
                <label>Fornecedor {{app.sys.foreignKeyReplace(FornecedorSrc,'Nome',item)}}:</label>
                <input v-bind:id="'cot'+item" type="text" class="cotacao form-control">
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="nav-val" role="tabpanel" aria-labelledby="nav-evt-tab">
        <label>Encargos:</label>
        <input class="form-control" v-model="Encargos" disabled="true" placeholder=""><br>
        <label>Custo:</label>
        <input class="form-control" v-on:keypress="calcCusto" v-on:change="calcCusto" v-on:blur="calcCusto" v-model="Custo" placeholder=""><br>
        <label>Custo composto:</label>
        <input class="form-control" v-model="CustoComposto" disabled="true" placeholder=""><br>
        <label>Valor de Mercado:</label>
        <input class="form-control" v-model="ValorMercado" placeholder=""><br>
        <label>Preço:</label>
        <input class="form-control" v-model="Preco" placeholder=""><br>
    </div>
    <div class="tab-pane fade" id="nav-tec" role="tabpanel" aria-labelledby="nav-evt-tab">
        <label>Validade:</label>
        <input class="form-control data" v-model="DataValidade" placeholder=""><br>
        <label>Data de fabricação:</label>
        <input class="form-control data" v-model="DataCriacao" placeholder=""><br>
        <label>Unidade de compra:</label>
        <input class="form-control" v-model="UnidComp" placeholder=""><br>
        <label>Unidade de venda:</label>
        <input class="form-control" v-model="UnidVend" placeholder=""><br>
        <label>Plano de contas:</label>
        <input class="form-control" v-model="Contas" placeholder=""><br>
        <label>Tipo:</label>
        <select class="form-control"  v-model="Tipo">
            <option value="0">Selecione uma opção</option>
            <option value="1">Matéria prima</option>
            <option value="2">Produto incabado</option>
            <option value="3">Produto recondicionado</option>
            <option value="4">Produto final</option>
        </select><br>
        <label>Uso:</label>
        <select class="form-control" v-model="Uso">
            <option value="0">Selecione uma opção</option>
            <option value="1">Consumo</option>
            <option value="2">Venda</option>
        </select><br>
    </div>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>