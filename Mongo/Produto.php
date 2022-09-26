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
        "Especificação", "Resumo", "Preço",
        "Dimensão", "Qtd. Mínima", "Qtd. Estoque",
        "Data de Validade", "Código de Barras",
        "Palavras-chave", "Data de fabricação",
        "Unidade de venda", "Plano de contas", "Tipo",
        "Uso", "Unidade de compra"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(FamiliaSrc,'TipoFamilia',td.IdFamilia)",
        "app.sys.foreignKeyReplace(ClasseSrc,'TipoClasse',td.IdClasse)",
        "app.sys.foreignKeyReplace(CategoriaSrc,'TipoCategoria',td.IdCategoriaProduto)",
        "app.sys.foreignKeyReplace(SubCategoriaSrc,'TipoSubCategoria',td.IdSubCategoriaProduto)",
        "app.sys.foreignKeyReplace(FornecedorSrc,'Nome',td.IdFornecedor)",
        "app.sys.foreignKeyReplace(AlbumSrc,'NomeAlbum',td.IdAlbum)",
        "td.CodProduto",
        "td.NomeProduto",
        "td.Carateristicas",
        "td.EspecificacaoProduto",
        "td.ResumoProduto",
        "td.Preco",
        "td.DimensaoProduto",
        "td.QtdMin",
        "td.QtdEstoque",
        "td.DataValidade",
        "td.CodBarras",
        "td.KeyWord",
        "td.DataCriacao",
        "td.UnidVend",
        "td.Contas",
        "td.Tipo",
        "td.Uso",
        "td.UnidComp"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Família:</label>
<select class="form-control" v-on:change="onselect('familia')" v-model="IdFamilia">
    <option>Selecione a família</option>
    <option v-for="el in app.sys.sorter(FamiliaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoFamilia}}</option>
</select>
<a href="#" onclick="setModal('FamiliaProdutos', 'Produto')">Adicionar Família <i class="far fa-plus-square"></i></a><br>
<label>Classe:</label>
<select class="form-control" v-on:change="onselect('classe')" v-model="IdClasse">
    <option>Selecione a classe</option>
    <option v-for="el in app.sys.sorter(app.sys.searchinArray(ClasseSrc,familiaselect,'IdFamilia'),'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoClasse}}</option>
</select>
<a href="#" onclick="setModal('ClasseProdutos', 'Produto')">Adicionar Classe <i class="far fa-plus-square"></i></a><br>
<label>Categoria:</label>
<select class="form-control" v-on:change="onselect('categoria')" v-model="IdCategoriaProduto">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(app.sys.searchinArray(CategoriaSrc,classeselect,'IdClasse'),'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoCategoria}}</option>
</select>
<a href="#" onclick="setModal('CategoriaProdutos', 'Produto')">Adicionar Cliente <i class="far fa-plus-square"></i></a><br>
<label>Sub-categoria:</label>
<select class="form-control" v-model="IdSubCategoriaProduto">
    <option>Selecione a família</option>
    <option v-for="el in app.sys.sorter(app.sys.searchinArray(SubCategoriaSrc,categoriaselect,'IdCategoria'),'DESC','id')" v-bind:value="el._id['$oid']">{{el.TipoSubCategoria}}</option>
</select>
<a href="#" onclick="setModal('SubcategoriaProdutos', 'Produto')">Adicionar Subcategoria <i class="far fa-plus-square"></i></a><br>
<label>Fornecedor:</label>
<select class="form-control" v-model="IdFornecedor">
    <option v-for="el in app.sys.sorter(FornecedorSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Fornecedor', 'Produto')">Adicionar Fornecedor <i class="far fa-plus-square"></i></a><br>
<label>Album:</label>
<select class="form-control" v-model="IdAlbum">
    <option>Selecione o album</option>
    <option v-for="el in app.sys.sorter(AlbumSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeAlbum}}</option>
</select>
<a href="#" onclick="setModal('Album', 'Produto')">Adicionar Album <i class="far fa-plus-square"></i></a><br>
<label>Código de produto:</label>
<input class="form-control" v-model="CodProduto" placeholder=""><br>
<label>Nome:</label>
<input class="form-control" v-model="NomeProduto" placeholder="" required="required"><br>
<label>Características:</label>
<textarea class="form-control" name="caracteristica" placeholder=""></textarea><br>
<label>Especificação:</label>
<textarea class="form-control" name="especificacao"  placeholder=""></textarea><br>
<label>Resumo:</label>
<textarea class="form-control" name="resumo" placeholder=""></textarea><br>
<label>Preço:</label>
<input class="form-control" v-model="Preco" placeholder=""><br>
<label>Dimensão:</label>
<input class="form-control" v-model="DimensaoProduto" placeholder="Altura-Largura-Profundidade"><br>
<label>Qtd. Mínima:</label>
<input class="form-control" v-model="QtdMin" placeholder=""><br>
<label>Qtd. Estoque:</label>
<input class="form-control" v-model="QtdEstoque" placeholder=""><br>
<label>Validade:</label>
<input class="form-control data" v-model="DataValidade" placeholder=""><br>
<label>Código de Barras:</label>
<input class="form-control" v-model="CodBarras" placeholder=""><br>
<label>Palavras-chave:</label>
<textarea class="form-control" v-model="KeyWord" placeholder="separar por vírgula"></textarea><br>
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
<?php include $refUrl . "Mongo/template/foot.php" ?>