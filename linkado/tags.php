<?php
$pgtitle = "tags";
$page = "tags";
$td = ["" . $page => ["Id", "Hashtag", "Segmento", "Dados"]];
$tdvue = ["" . $page => ["td.IdTag", "td.Segmento", "td.Dados"]];

include "template/head.php"
?>
<label>Hashtag:</label>
<input class="form-control" v-model="IdTags" placeholder="Hashtag..."><br>
<br>
<label>Segmento:</label>
<input class="form-control" v-model="Segmento" placeholder="Segmento..."><br>
<br>
<fieldset id='TagDados' class="border rounded container-fluid border-dark py-2">
    <legend>Informações</legend>
    <label>Data de análise:</label>
    <input class="form-control" type="date" name='data[]' placeholder="Data de análise..."><br>
    <label>Visualizações:</label>
    <input class="form-control" name='visualizacao[]' placeholder="Visualizações..."><br>
    <label>Primeiros 9 Likes:</label>
    <input class="form-control" name='likes[]' placeholder="Separar por ;"><br>
    <label>Primeiros 9 comentários:</label>
    <input class="form-control" name='comentarios[]' placeholder="Separar por ;"><br>
    <label>Primeiras 9 interações:</label>
    <input class="form-control" name='vistas[]' placeholder="Separar por ;"><br>
</fieldset>
<button v-on:click='addDados'>Adicionar Dados</button>
<button v-on:click='removerDados'>Remover Dados</button>
<br>
<?php include "template/foot.php" ?>