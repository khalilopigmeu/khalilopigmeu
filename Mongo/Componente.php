<?php
$pgtitle = "Componente";
$page = "Componente";
$td = ["" . $page => ["Id", "E-tag", "Nome", "Marca", "Modelo", "Especificação", "Observação", "Data de Aquisição", "Ativo", "Seguro", "Valor", "Fornecedor", "Manutenção", "Garantia"]];
$tdvue = ["" . $page => ["td.IdEtag", "td.Nome", "td.Marca", "td.Modelo", "td.Especificacao", "td.Observacao", "td.DataAquisicao", "td.ativo", "td.Seguro", "td.Valor", "td.Fornecedor", "td.Manutencao", "td.Garantia"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Tag:</label>
<select class="form-control" v-model="IdEtag" placeholder="">
    <option>Selecione uma tag</option>
    <option v-for="el in app.sys.sorter(EtagSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Codigo}}</option>
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
<textarea class="form-control" name="especificacaocomponente" placeholder="Especificação..." ></textarea><br>
<br>
<label>Observação:</label>$
<textarea class="form-control" name="observacaocomponente" placeholder="Observação..." ></textarea><br>
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