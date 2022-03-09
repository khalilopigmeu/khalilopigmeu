<?php
$pgtitle = "Anúncio";
$page = "Anuncio";
$td = ["" . $page => ["Id", "Categorias", "Tipo", "Conteudo", "Descrição", "Ativo", "Palavras-chave"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(CategoriaAnuncioSrc,'Nome',td.IdCategoriaAnuncio)",
        "td.Tipo",
        "td.Conteudo",
        "td.Descricao",
        "td.Ativo",
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
    <option value="1">Página</option>  
    <option value="2">Loja</option>  
    <option value="3">Personalizado</option> 
    <option value="4">Redirecionamento para Site</option>  
    <option value="5">Redirecionamento para Whatsapp</option>  
    <option value="6">Redirecionamento para Facebook</option>  
    <option value="7">Redirecionamento para Instagram</option>  
    <option value="8">Redirecionamento para Youtube</option>  
    <option value="9">Redirecionamento para TikTok</option>  
    <option value="10">Redirecionamento para Kawai</option>  
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
<label>Ativo:</label>
<input type="checkbox" class="form-control" v-model="Ativo" placeholder="Descrição..." ></textarea><br>
<br>
<label>Palavras Chave:</label>
<textarea class="form-control" v-model="Keywords" placeholder="Campo..."></textarea><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>