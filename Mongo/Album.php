<?php
$pgtitle = "Álbum";
$page = "Album";
$td = ["" . $page => ["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>[ "td.NomeAlbum", "td.DescricaoAlbum"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="NomeAlbum" placeholder="Nome..."><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" v-model="DescricaoAlbum" placeholder="Descrição..."></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>