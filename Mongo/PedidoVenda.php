<?php
$pgtitle = "Pedido de Venda";
$page = "PedidoVenda";
$td = ["" . $page => ["Id", "Produtos", "Vendedor", "Cliente",
        "Valor Total", "Desconto", "Data do Pedido", "Frete", "Seguro",
        "Anotacao", "Nº Fatura", "Status", "CEP de entrega",
        "Estado de entrega", "Cidade de entrega",
        "Bairro de entrega", "Rua de entrega", "Número de entrega",
        "Complemento de entrega", "Transportadora"]];
$tdvue = ["" . $page => ["td.IdLista", "td.IdLogin",
        "td.IdCliente", "td.DataPedido",
        "td.ValorTotal", "td.Desconto",
        "td.Frete", "td.Seguro",
        "td.Anotacao", "td.Nfatura", "td.Status",
        "td.CEPEntrega", "td.EstadoEntrega",
        "td.CidadeEntrega", "td.BairroEntrega",
        "td.RuaEntrega", "td.NumeroEntrega",
        "td.Complemento", "td.IdTransportadora"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome da Fatura:</label>
<input type="text" class="form-control" v-model="Nfatura"><br>
<label>Pesquisa:</label><input class="form-control" type="text" v-model="pesqCliente"><br>
<label>Cliente:</label>
<select class="form-control" v-model="IdCliente" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(app.sys.searchall(Clientesrc,pesqCliente),'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" onclick="setModal('Cliente', 'PedidoVenda')">Adicionar Cliente <i class="far fa-plus-square"></i></span><br>
<label>Lista de compras:</label>
<select class="form-control" v-model="IdLista" placeholder="Campo..." v-on:change="atualizaPreco()" >
    <option v-for="el in app.sys.sorter(app.sys.search(ListaCompraSrc,IdCliente,'Cliente'),'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeLista}}</option>
</select>
<span class="btn" onclick="setModal('ListaCompra', 'PedidoVenda')">Adicionar Lista <i class="far fa-plus-square"></i></span><br>
<br>
<label>Produtos:</label>
<input disabled="" type="text" class="form-control" v-model="TotalProdutos"><br>
<label>Frete:</label>
<input type="number" step="0.1" class="form-control" v-on:change="atualizaPreco()" v-model="Frete"><br>
<label>Seguro:</label>
<input type="number" step="0.1" class="form-control" v-on:change="atualizaPreco()" v-model="Seguro"><br>
<label>Desconto:</label>
<input type="number" step="0.1" class="form-control" v-on:change="atualizaPreco()" v-model="Desconto"><br>
<label>Total do pedido:</label>
<input type="text" disabled="" class="form-control" v-model="ValorTotal"><br>
<label>Anotação:</label>
<textarea class="form-control" v-model="Anotacao"></textarea><br>
<hr>
<fieldset>
    <legend>Dados do cliente:</legend>
    <input type="radio" v-model="entrega" value="retirada"><label>Retirada</label><br>
    <input type="radio" v-model="entrega" value="cliente"><label>Dados do cliente</label><br>
    <input type="radio" v-model="entrega" value="outro"><label>Outro endereço</label><br>
    <div v-if="entrega=='outro'">
        <label for="CEP">CEP:</label>
        <input type="text" v-on:blur="app.sys.buscaCEP('<?php echo $page; ?>')" v-model="CEP" name="CEP" placeholder="xxxxx-xxx" class="cep form-control"><br>
        <label for="UF">Estado:</label>
        <input type="text" v-model="UF" name="UF" class="estado form-control"><br>
        <label for="Cidade">Cidade:</label>
        <input type="text" v-model="Cidade" name="Cidade" class="cidade form-control"><br>
        <label for="Bairro">Bairro:</label>
        <input type="text" v-model="Bairro" name="Bairro" class="bairro form-control"><br>
        <label for="Rua">Rua:</label>
        <input type="text" v-model="Rua" name="Rua" class="rua form-control"><br>
        <label for="Num">Número:</label>
        <input type="text" v-model="Num" name="Num" class="form-control"><br>
        <label for="Complemento">Complemento:</label>
        <input type="text" v-model="Complemento" name="Complemento" class="form-control" ><br>
    </div>
</fieldset>
<?php include $refUrl . "Mongo/template/foot.php" ?>