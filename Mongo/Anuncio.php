<?php
$pgtitle = "Anúncio";
$page = "Anuncio";
$td = ["" . $page => ["Id", "Nome", "Categorias", "Resumo", "Validade", "Url", "Palavras-chave"]];
$tdvue = ["" . $page => ["td.NomeProduto",
        "app.sys.foreignKeyReplace(CategoriaAnuncioSrc,'Nome',td.IdCategoriaAnuncio)",
        "td.Tipo",
        "td.Conteudo",
        "td.Descricao",
        "td.Keywords"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Categoria:</label>
<select class="form-control" v-model="IdCategoriaAnuncio" multiple placeholder="Acessos..." >
    <option v-if="CategoriaAnuncioSrc!=null" v-for="el in app.sys.sorter(CategoriaAnuncioSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<label>Tipo:</label>
<select class="form-control" v-model="Tipo">
    <option value="0">Selecione o modelo de anúncio</option>  
    <option value="1">Redirecionamento</option>  
    <option value="2">Página</option>  
    <option value="3">Personalizado</option>  
</select>
<label>Módulos:</label>
<select class="form-control" multiple>
    <option value="1">Catálogo</option>  
    <option value="2">Blog</option>  
    <option value="3">Agenda</option>  
</select>
<br>
<br>
<label>Conteudo:</label>
<textarea class="form-control" name="conteudoanuncio" v-model="Conteudo" placeholder="Conteúdo..." ></textarea><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" name="descricaoanuncio" v-model="Descricao" placeholder="Descrição..." ></textarea><br>
<br>
<label>Palavras Chave:</label>
<textarea class="form-control" v-model="Keywords" placeholder="Campo..."></textarea><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>