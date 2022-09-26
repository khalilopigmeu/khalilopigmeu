<?php
$pgtitle = "Fórmula";
$page = "Formula";
$td = ["" . $page => ["Id", "Nome", "Volume", "Especificação", "Observação", "Produtos", "Quantidade", "Custo", "Custo Agregado", "Custo total"]];
$tdvue = ["" . $page => ["td.Nome", "td.Volume", "td.Especificacao", "td.Obs", "td.IdProdutos", "td.Qtd", "td.custo", "td.custoagregado", "td.custototal"]];

include $refUrl . "Mongo/template/head.php"
?>
<fieldset class="border justify-content-center w-75 mx-auto text-center">
    <div v-for="(item,index) in Count">
        <label>Produtos:</label>
        <select v-model="IdProdutos[index]" class="form-control">   
            <option>Selecione o produto</option>
            <option v-for="el in app.sys.sorter(ProdutosSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeProduto}}</option>
        </select>
        <label>Quantidade:</label><input type="number" v-model="Qtd[index]" step="0.1" class="form-control">    
    </div>
    <br>
    <hr>
    <button class="button btn m-1" v-on:click="adicionar">Adicionar Referência</button>
    <button class="button btn btn-danger m-1" v-on:click="remover">Remover Referência</button>
    <button class="button btn btn-warning m-1" v-on:click="calcularGeral">Calcular</button>
    <br>
    <hr>
</fieldset>
<label>Volume:</label>
<input class="form-control" v-model="volume" placeholder="Volume..."><br>
<br>
<label>Especificação:</label>
<input class="form-control" v-model="Especificacao" placeholder="Especificacao..."><br>
<br>
<label>Observação:</label>
<input class="form-control" v-model="Obs" placeholder="Obs..."><br>
<br>
<label>Custo:</label>
<input class="form-control" v-model="custo" placeholder="Custo..."><br>
<br>
<label>Custo Agregado:</label>
<input class="form-control" v-model="custoagregado" placeholder="Custo agregado..."><br>
<br>
<label>Total:</label>
<input class="form-control" v-model="custototal" placeholder="Custo total..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>