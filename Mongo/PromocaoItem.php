<?php
$pgtitle = "Itens em Promoção";
$page = "PromocaoItem";
$td = ["" . $page => ["Id", "Icone", "Lote Ativo", "Lote 1", "Lote 2", "Lote 3", "Lote 4", "Lote 5", "Produto", "Consulta", "Procedimento", "Projeto"]];
$tdvue = ["" . $page => ["td.icon", "td.LoteAtivo", "td.lote1", "td.lote2", "td.lote3", "td.lote4", "td.lote5", 
    "app.sys.foreignKeyReplace(Produtosrc,'NomeProduto',td.Produto)",
    "app.sys.foreignKeyReplace(Consultasrc,'Nome',td.Consulta)",
    "app.sys.foreignKeyReplace(Procedimentosrc,'Nome',td.Procedimento)",
    "app.sys.foreignKeyReplace(Projetosrc,'Nome',td.Projeto)"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Ícone:</label>
<input class="form-control" type="url" v-model="icon" placeholder="ícone..."><br>
<br>
<label>Produto:</label>
<select class="form-control" v-model="Produto" placeholder="Nome..."><br>
    <option v-if="Produtosrc!=null" v-for="el in app.sys.sorter(Produtosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeProduto}}</option>
</select>
<br>
<label>Consulta:</label>
<select class="form-control" v-model="Consulta" placeholder="Nome..."><br>
    <option v-if="Consultasrc!=null" v-for="el in app.sys.sorter(Consultasrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<label>Procedimento:</label>
<select class="form-control" v-model="Procedimento" placeholder="Nome..."><br>
    <option v-if="Procedimentosrc!=null" v-for="el in app.sys.sorter(Procedimentosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<label>Projeto:</label>
<select class="form-control" v-model="Projeto" placeholder="Nome..."><br>
    <option v-if="Projetosrc!=null" v-for="el in app.sys.sorter(Projetosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<label>Lote Ativo:</label>
<select class="form-control" v-model="LoteAtivo">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
<br>
<label>Lote 1:</label>
<input class="form-control" type="number" v-model="lote1" placeholder="lote 1..."><br>
<br>
<label>Lote 2:</label>
<input class="form-control" type="number" v-model="lote2" placeholder="lote 2..."><br>
<br>
<label>Lote 3:</label>
<input class="form-control" type="number" v-model="lote3" placeholder="lote 3..."><br>
<br>
<label>Lote 4:</label>
<input class="form-control" pattern="[0-9]+([,\.][0-9]+)?" type="number" v-model="lote4" placeholder="Lote 4..."><br>
<br>
<label>Lote 5:</label>
<input class="form-control" type="number" v-model="lote5" placeholder="lote 5..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>