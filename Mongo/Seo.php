<!-- 
VueApp name = Seo 
titulo = Seo
app = Seo
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblSeo
-->
<?php
$pgtitle = "Seo";
$page = "Seo";
$td = ["" . $page => ["Id", "Url", "Nome", "Título", "Descrição", "Palavras-chave", "Facebook", "PageId", "Imagem"]];
$tdvue = ["" . $page => ["td.URLPage", "td.NomeSite",
        "td.TituloSite", "td.DescriSite",
        "td.Keyword", "td.UrlFB",
        "td.PageId", "td.UrlImage",
        ]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Url:</label>
<input class="form-control" v-model="URLPage" placeholder="Url..."><br>
<br>
<label>Nome:</label>
<input class="form-control" v-model="NomeSite" placeholder="Nome..."><br>
<br>
<label>Título:</label>
<input class="form-control" v-model="TituloSite" placeholder="Título..."><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" v-model="DescriSite" placeholder="Descrição..."></textarea><br>
<br>
<label>Palavras-chave:</label>
<textarea class="form-control" v-model="Keyword" placeholder="Palavras chave..."></textarea><br>
<br>
<label>Facebook:</label>
<input class="form-control" v-model="UrlFB" placeholder="Facebook..."><br>
<br>
<label>id. Página:</label>
<input class="form-control" v-model="PageId" placeholder="Id. Página..."><br>
<br>
<label>Imagem:</label>
<input class="form-control" v-model="UrlImage" placeholder="Imagem..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>