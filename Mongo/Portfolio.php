<!-- 
VueApp name = Portfolio 
titulo = Portfólio
app = Portfolio
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..."><br>
nometabela = tblPortfolio
-->
<?php
$pgtitle = "Portfolio";
$page = "Portfolio";
$td = ["" . $page => ["Id", "Album", "Categoria", "Nome", "Url", "Trabalho", "Case", "Logo"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(AlbumSrc,'NomeAlbum',td.IdAlbum)",
        "app.sys.foreignKeyReplace(CategoriaPortfolioSrc,'Nome',td.IdCategoriaPortfolio)",
        "td.Nome", "td.UrlSite",
        "td.Job", "td.CaseEmpresa",
        "td.UrlLogo",
        ]];

include $refUrl . "Mongo/template/head.php"
?>
<label for="Categoria">Categoria:</label>
<select class="form-control" v-model="IdCategoriaPortfolio" name="Categoria" placeholder="Categoria" >
    <option>Selecione uma categoria</option>
    <option v-for="el in app.sys.sorter(CategoriaPortfolioSrc,'DESC','id')" class="categoria" v-bind:value="el._id['$oid']" v-bind:data-color="el.Cor">{{el.Nome}}</option>
</select>
<span class="btn" onclick="setModal('CategoriaPortfolio', 'Portfolio')">Adicionar Categoria <i class="far fa-plus-square"></i></span><br>
<br>
<label for="Album">Álbum:</label>
<select class="form-control" v-model="IdAlbum" name="Album" placeholder="Album" >
    <option>Selecione um Álbum</option>
    <option v-for="el in app.sys.sorter(AlbumSrc,'DESC','id')" class="Album" v-bind:value="el._id['$oid']" v-bind:data-color="el.Cor">{{el.NomeAlbum}}</option>
</select>
<span class="btn" onclick="setModal('Album', 'Portfolio')">Adicionar Álbum <i class="far fa-plus-square"></i></span><br>
<br>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Campo..."><br>
<br>
<label>Url:</label>
<input class="form-control" v-model="UrlSite" placeholder="Campo..."><br>
<br>
<label>Logo:</label>
<input class="form-control" v-model="UrlLogo" placeholder="Campo..."><br>
<br>
<label>Serviço:</label>
<textarea class="form-control" v-model="Job" name="jobtxt" placeholder="Campo..."></textarea><br>
<br>
<label>Case:</label>
<textarea class="form-control" v-model="CaseEmpresa" name="casetxt" placeholder="Campo..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>