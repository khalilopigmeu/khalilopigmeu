<?php
$pgtitle = "Textos";
$page = "Text";
$td = ["" . $page => ["Id", "Categoria", "Álbum","Título","Resumo","Texto","Anúncio","Data de Publicação","Data de postagem"]];
$tdvue = ["" . $page => [
        "app.sys.foreignKeyReplace(CategoriaTextSrc,'Nome',td.IdCategoriaText)",
        "app.sys.foreignKeyReplace(AlbumSrc,'NomeAlbum',td.IdAlbum)",
        "td.Titulo",
        "td.Resumo",
        "td.Text",
        "td.TPredata",
        "td.DataPublicacao",
        "td.DataPostagemText"]
];

include $refUrl . "Mongo/template/head.php"
?>
<label for="Categoria">Categoria:</label>
<select class="form-control" v-model="IdCategoriaText" name="Categoria" placeholder="Categoria" >
    <option>Selecione uma categoria</option>
    <option v-for="el in app.sys.sorter(CategoriaTextSrc,'DESC','id')" class="categoria" v-bind:value="el._id['$oid']" v-bind:data-color="el.Cor">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('CategoriaText', 'Text')">Adicionar Categoria <i class="far fa-plus-square"></i></a><br>
<br>
<label for="Album">Álbum:</label>
<select class="form-control" v-model="IdAlbum" name="Album" placeholder="Album" >
    <option>Selecione um Álbum</option>
    <option v-for="el in app.sys.sorter(AlbumSrc,'DESC','id')" class="Album" v-bind:value="el._id['$oid']" v-bind:data-color="el.Cor">{{el.NomeAlbum}}</option>
</select>
<a href="#" onclick="setModal('Album', 'Text')">Adicionar Álbum <i class="far fa-plus-square"></i></a><br>
<br>
<label>Título:</label>
<input class="form-control" v-model="Titulo" placeholder="Campo..."><br>
<br>
<label>Resumo:</label>
<textarea class="form-control" v-model="Resumo" name="resumotexto" placeholder="Título..." ></textarea><br>
<br>
<label>Texto:</label>
<textarea class="form-control" v-model="Text" name="conteudotexto" placeholder="Título..." ></textarea><br>
<br>
<label>Data de Publicação:</label>
<input class="form-control" v-model="DataPublicacao" placeholder="Campo..."><br>
<br>
<label>Data de Postagem:</label>
<input class="form-control" v-model="DataPostagemText" placeholder="Campo..."><br>
<br>
<label>Texto Antecipado:</label>
<textarea class="form-control" v-model="TPredata" name="chamadatexto" placeholder="Título..." ></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>