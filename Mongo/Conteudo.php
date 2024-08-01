<?php
$pgtitle = "Conteúdo";
$page = "Conteudo";
$td = ["" . $page => ["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page => ["td.NomeAlbum", "td.DescricaoAlbum"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="NomeAlbum" placeholder="Nome..."><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" v-model="DescricaoAlbum" placeholder="Descrição..."></textarea><br>
<br>
<label>Logo com fundo transparente:</label>
<input class="form-control" v-model="NomeAlbum" placeholder="Nome..."><br>
<br>
<label>Fundo:</label>
<input class="form-control" v-model="NomeAlbum" placeholder="Nome..."><br>
<br>
<label>Fonte:</label>
<input class="form-control" v-model="NomeAlbum" placeholder="Nome..."><br>
<br>
<label>Música de fundo:</label>
<input class="form-control" v-model="NomeAlbum" placeholder="Nome..."><br>
<br>
<label>Formato:</label>
Vertical:<input class="form-control" type="radio" v-model="NomeAlbum" placeholder="Nome..."><br>
Horizontal:<input class="form-control" type="radio" v-model="NomeAlbum" placeholder="Nome..."><br>
<br>
<label>Voz:</label>
<select class="form-control" v-model="NomeAlbum" placeholder="Nome...">
    <option>Selecione a voz de narração</option>
    <option value="self">Áudio enviado</option>
    <option></option>
</select><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>