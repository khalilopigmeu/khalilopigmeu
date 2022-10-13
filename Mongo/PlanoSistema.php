<?php
$pgtitle = "Planos de Sistema";
$page = "PlanoSistema";
$td = ["" . $page => ["Id", "Categoria de Plano", "Código", "Descrição", "Valor"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(CategoriaPlanoSistemaSrc,'NomeCategoria',td.IdCategoriaPlanoSistema)",
        "td.CodPlano", "td.Descricao", "td.Valor", "td.Link"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Categoria:</label>
<select class="form-control" v-model="IdCategoriaPlanoSistema" placeholder="Categoria..." >
    <option v-for="el in app.sys.sorter(CategoriaPlanoSistemaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select>
<span class="btn" onclick="setModal('CategoriaPlanoSistema', 'PlanoSistema')">Adicionar Categoria <i class="far fa-plus-square"></i></span><br>
<br>
<label>Código:</label>
<input class="form-control" v-model="CodPlano" placeholder="Campo..."><br>
<br>
<label>Descrição:</label>
<textarea class="form-control" v-model="Descricao" name="conteudoplano" placeholder="Campo..."></textarea><br>
<br>
<label>Valor:</label>
<input class="form-control valor" v-model="Valor" placeholder="Campo..."><br>
<br>
<label>Link:</label>
<input class="form-control" v-model="Link" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>