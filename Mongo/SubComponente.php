<?php
$pgtitle = "Sub Componente";
$page = "SubComponente";
$td = ["" . $page => ["Id", "Componente", "Tag", "Nome", "Data de Aquisição", "Ativo", "Seguro", "Valor", "Fornecedor", "Manutenção", "Marca", "Modelo", "Especificação", "Garantia", "Observação"]];
$tdvue = ["" . $page => ["td.IdComponente", "td.IdEtag", "td.Nome", "td.DataAquisicao", "td.ativo", "td.Seguro", "td.Valor", "td.Fornecedor", "td.Manutencao", "td.Marca", "td.Modelo", "td.Especificacao", "td.Garantia", "td.Observacao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Tag:</label>
<select class="form-control" v-model="IdEtag" placeholder="">
    <option>Selecione uma tag</option>
    <option v-for="el in app.sys.sorter(EtagSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Codigo}}</option>
</select>
<br>
<label>Componente:</label>
<select class="form-control" v-model="IdComponente" placeholder="">
    <option>Selecione uma Componente</option>
    <option v-for="el in app.sys.sorter(ComponenteSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..." ><br>
<br>
<label>Marca:</label>
<input class="form-control" v-model="Marca" placeholder="Marca..." ><br>
<br>
<label>Modelo:</label>
<input class="form-control" v-model="Modelo" placeholder="Modelo..." ><br>
<br>
<label>Especificação:</label>
<textarea class="form-control" name="especificacaoscomponente" placeholder="Especificação..." ></textarea><br>
<br>
<label>Observação:</label>$
<textarea class="form-control" name="observacaoscomponente" placeholder="Observação..." ></textarea><br>
<br>
<label>Data de aquisição:</label>
<input class="form-control data" type="date" v-model="DataAquisicao" placeholder="Data de aquisição..." ><br>
<br>
<label>Ativo:</label>
<input class="form-control" v-model="ativo" type="checkbox" placeholder="Ativo..." ><br>
<br>
<label>Seguro:</label>
<input class="form-control" v-model="Seguro" type="checkbox" placeholder="Seguro..." ><br>
<br>
<label>Valor:</label>
<input class="form-control valor" v-model="Valor" placeholder="Valor..." ><br>
<br>
<label>Fornecedor:</label>
<select class="form-control" v-model="Fornecedor" placeholder="">
    <option>Selecione um fornecedor</option>
    <option v-for="el in app.sys.sorter(FornecedorSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeFantasia}}</option>
</select>
<br>
<label>Manutenção:</label>
<input class="form-control data" type="date" v-model="Manutencao" placeholder="Manutenção..." ><br>
<br>
<label>Garantia:</label>
<input class="form-control data" type="date" v-model="Garantia" placeholder="Garantia..." ><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>
