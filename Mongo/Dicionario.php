<?php
$pgtitle = "Dicionário";
$page = "Dicionario";
$td = ["" . $page => ["Id", "Português", "Inglês", "Espanhol", "Francês", "Alemão", "Italiano", "Japonês", "Árabe", "Chinês"]];
$tdvue = ["" . $page => ["td.PT", "td.EN", "td.ES", "td.FR", "td.DE", "td.IT", "td.JP", "td.AR", "td.CH"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Português:</label>
<input class="form-control" v-model="PT" placeholder="Campo..."><br>
<br>
<label>Inglês:</label>
<input class="form-control" v-model="EN" placeholder="Campo..."><br>
<br>
<label>Espanhol:</label>
<input class="form-control" v-model="ES" placeholder="Campo..."><br>
<br>
<label>Francês:</label>
<input class="form-control" v-model="FR" placeholder="Campo..."><br>
<br>
<label>Alemão:</label>
<input class="form-control" v-model="DE" placeholder="Campo..."><br>
<br>
<label>Italiano:</label>
<input class="form-control" v-model="IT" placeholder="Campo..."><br>
<br>
<label>Japonês:</label>
<input class="form-control" v-model="JP" placeholder="Campo..."><br>
<br>
<label>Árabe:</label>
<input class="form-control" v-model="AR" placeholder="Campo..."><br>
<br>
<label>Chinês:</label>
<input class="form-control" v-model="CH" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>