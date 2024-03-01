<?php
$pgtitle = "Lista de Compra";
$page = "listacomprasite";
$td = ["" . $page => ["Id", "Nome da Lista", "Data", "Cliente", "Lista", "Cód. Pedido"]];
$tdvue = ["" . $page => ["td.NomeLista", "td.DataLista", "app.sys.foreignKeyReplace(app.usuariosite.src,'Nome',td.Cliente)", "td.Produtos", "td.Solicitacao"]];
include $refUrl . "model/head.php"
?>
<span>Nome da lista:</span>
<p>{{NomeLista}}</p>
<span>Cliente:</span>
<p >{{Cliente}}</p>
<hr>
<div class="row">
    <table class="table table-striped table-bordered" id="tbl<?php echo $page; ?>">
        <thead class="thead-dark text-white text-center">
            <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="key,index in listaProdutos" class="text-center justify-content-center" v-if="!nulo(listaProdutos)">
                <td>{{app.sys.searchByID(app.ProdutosSite.src,index)[0].NomeProduto}}</td>
                <td>R$ {{parseFloat(app.sys.searchByID(app.ProdutosSite.src,index)[0].Preco.replace(",",".")).toFixed(2)}}</td>
                <td>{{key}}</td>
                <td>{{total(app.sys.searchByID(app.ProdutosSite.src,index)[0].Preco,key)}}</td>
            </tr>
        </tbody>
        <tfoot class="thead-dark text-white text-center">
            <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Total</th>
            </tr>
        </tfoot>
    </table>
</div>
<fieldset>
    <legend>Opções</legend>
    <button v-on:click="CarroCompra">Comprar produtos</button>
    <button v-if="!nulo(Solicitacao)" v-on:click="DeletaLista">Deletar lista</button>
</fieldset>
<?php include $refUrl . "model/foot.php" ?>