<?php
$pgtitle = "Anúncios rápidos";
$page = "AnuncioRapido";
$td = ["" . $page => ["Id", "Titulo", "Mensagem", "Link", "Background"]];
$tdvue = ["" . $page => ["td.Titulo", "td.Mensagem", "td.Link", "td.Background"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Título:</label>
<input class="form-control" v-model="Titulo" placeholder="Título..."><br>
<label>Mensagem:</label>
<textarea class="form-control" v-model="Mensagem" name="mensagemchamada" placeholder="Mensagem..." ></textarea><br>
<label>Link:</label>
<input class="form-control" v-model="Link" placeholder="Link..." ><br>
<label>Imagem:</label>
<input class="form-control" v-model="Background" placeholder="Background..." ><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>