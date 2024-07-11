<?php
$pgtitle = "Anúncio";
$page = "Anuncio";
$td = ["" . $page => ["Id", "Categorias", "Tipo", "Conteudo", "Descrição", "Ativo", "Palavras-chave"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(CategoriaAnuncioSrc,'Nome',td.IdCategoriaAnuncio)",
        "td.Tipo", "td.Conteudo", "td.Descricao", "td.Ativo", "td.Keywords"]];

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
    <option value="2">Blog</option>  
    <option value="3">Loja</option>  
    <option value="4">Personalizado</option> 
    <option value="5">Redirecionamento para Site</option>  
    <option value="9">Redirecionamento para Whatsapp</option>  
    <option value="7">Redirecionamento para Facebook</option>  
    <option value="8">Redirecionamento para Instagram</option>  
    <option value="9">Redirecionamento para Youtube</option>  
    <option value="10">Redirecionamento para TikTok</option>  
    <option value="11">Redirecionamento para Kawai</option>  
</select>
<br>
<label>Módulos:</label>
<select class="form-control" multiple>
    <option value="1">Catálogo</option>  
    <option value="2">Blog</option>  
    <option value="3">Agenda</option>  
    <option value="4">Catálogo + Blog</option>  
    <option value="5">Catálogo + Agenda</option>  
    <option value="6">Blog + Agenda</option>  
    <option value="7">Todos</option>  
</select>
<br>
<label>Conteudo:</label>
<textarea class="form-control" name="conteudoanuncio" v-model="Conteudo" placeholder="Conteúdo..." ></textarea><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" name="descricaoanuncio" v-model="Descricao" placeholder="Descrição..." ></textarea><br>
<br>
<label>Palavras Chave:</label>
<textarea class="form-control" v-model="Keywords" placeholder="Campo..."></textarea><br>
<br>
<label>Ativo:</label>
<input type="checkbox" class="form-control" v-model="Ativo">
<br>
<label>CPF/CNPJ:</label>
<input type="checkbox" class="form-control" v-model="cpfcnpj">
<br>
<label>Responsável:</label>
<input type="checkbox" class="form-control" v-model="responsavel">
<br>
<label>Endereço:</label>
<input type="checkbox" class="form-control" v-model="endereco">
<br>
<label>Telefone:</label>
<input type="checkbox" class="form-control" v-model="telefone">
<br>
<label>Site:</label>
<input type="checkbox" class="form-control" v-model="site">
<br>
<label>Whatsapp:</label>
<input type="checkbox" class="form-control" v-model="whatsapp">
<br>
<label>Facebook:</label>
<input type="checkbox" class="form-control" v-model="facebook">
<br>
<label>Instagram:</label>
<input type="checkbox" class="form-control" v-model="instagram">
<br>

<?php include $refUrl . "Mongo/template/foot.php" ?>