<?php
$pgtitle = "Promoção recorrente";
$page = "Promocao";
$td = ["" . $page => ["Id", "Modalidade", "Mensal", "Trimestral", "Semestral", "Anual", "Máximo", "Mínimo", "PromocaoItem"]];
$tdvue = ["" . $page => ["td.modalidadeServico", "td.mensal", "td.trimestre", "td.semestre", "td.anual", "td.max", "td.min", "td.PromocaoItem"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Modalidade:</label>
<input class="form-control" v-model="modalidadeServico" placeholder="Modalidade..."><br>
<br>
<label>Mensal:</label>
<input class="form-control" type="number" v-model="mensal" placeholder="Mensal..."><br>
<br>
<label>Trimestral:</label>
<input class="form-control" type="number" v-model="trimestre" placeholder="Nome..."><br>
<br>
<label>Semestral:</label>
<input class="form-control" type="number" v-model="semestre" placeholder="Nome..."><br>
<br>
<label>Anual:</label>
<input class="form-control" type="number" v-model="anual" placeholder="Nome..."><br>
<br>
<label>Máximo:</label>
<input class="form-control" type="number" v-model="max" placeholder="Nome..."><br>
<br>
<label>Mínimo:</label>
<input class="form-control" type="number" v-model="min" placeholder="Nome..."><br>
<br>
<label>Item:</label>
<select class="form-control" v-model="PromocaoItem" placeholder="Nome..."><br>
    <option v-if="PromocaoItemsrc!=null" v-for="el in app.sys.sorter(PromocaoItemsrc,'DESC','id')" v-bind:value="el._id['$oid']">
    {{item(el)}}
    </option>
</select>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>