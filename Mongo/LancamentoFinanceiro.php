<!-- 
VueApp name = LancamentoFinanceiro 
titulo = Lancamento Financeiro
app = LancamentoFinanceiro
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblLancamentoFinanceiro
-->
<?php
$pgtitle = "Lançamento Financeiro";
$page = "LancamentoFinanceiro";
$td = ["" . $page => ["Id", "Modalidade", "Documento", "Pago", "Valor", "Forma", "Observação", "Status"]];
$tdvue = ["" . $page => ["td.Modalidade", "td.Documento", "td.Pago", "td.Valor", "td.FormaPagamento", "td.Observacao", "td.Status"]];

include $refUrl . "Mongo/template/head.php"
?>
<label for="modo">Modalidade:</label>
<select class="form-control" v-model="Modalidade" placeholder="Entrada / Saída">
    <option>Selecione a modalidade</option>
    <option value="1">Entrada</option>
    <option value="2">Saída</option>
</select>
<fieldset class="border rounded m-1 p-1" v-if="Modalidade==1">
    <legend>Importar dados:</legend>
    <input type="radio" v-model="importar" value="ficha"><label>Ficha de Atendimento</label><br>
    <div v-if="importar=='ficha'">
        <label for="modo">Ficha Atendimento - À pagar:</label>
        <select class="form-control" multiple="" v-model="FichaAtendimento" v-on:change="calcPreco()">
            <option v-for="item in app.sys.sorter(FichaAtendimentoSrc,'DESC','id')" v-if="item.Status=='false'" v-bind:value="item._id['$oid']">
                {{app.sys.foreignKeyReplace(app.Cliente.src,'Nome',item.IdCliente)}} - 
                {{app.sys.foreignKeyReplace(app.Consulta.src,'Nome',item.Consulta)}} - 
                {{app.sys.foreignKeyReplace(app.Procedimento.src,'Nome',item.Procedimento)}} - 
                {{item.DataAtendimento}} - {{item.Valor}}</option>
        </select>
        <label for="modo">Ficha Atendimento - Pagas:</label>
        <select class="form-control" multiple="" v-model="FichaAtendimento" v-on:change="calcPreco()">
            <option v-for="item in app.sys.sorter(FichaAtendimentoSrc,'DESC','id')" v-if="item.Status=='true'" v-bind:value="item._id['$oid']">
                {{app.sys.foreignKeyReplace(app.Cliente.src,'Nome',item.IdCliente)}} - 
                {{app.sys.foreignKeyReplace(app.Consulta.src,'Nome',item.Consulta)}} - 
                {{app.sys.foreignKeyReplace(app.Procedimento.src,'Nome',item.Procedimento)}} - 
                {{item.DataAtendimento}} - {{item.Valor}}</option>
        </select>
    </div>
    <input type="radio" v-model="importar" value="pedido"><label>Pedido de Venda</label><br>
    <div v-if="importar=='pedido'">
        <label for="modo">Pedido de Venda:</label>
        <select class="form-control" multiple v-model="PedidoVenda" v-on:change="calcPreco()">
            <option v-for="item in app.sys.sorter(PedidodeVendaSrc,'DESC','id')" v-if="item.Status=='false'" v-bind:value="item._id['$oid']">{{item.Nfatura}} - {{item.DataPedido}} - R${{item.ValorTotal}}</option>
        </select>
    </div>
</fieldset>
<br>
<label for="Documento">N° Documento:</label>
<input class="form-control" v-model="Documento" placeholder="9999..."><br>
<label for="Pago">Pago:</label>
<input class="form-control" type="checkbox" v-model="Pago" placeholder=""><br>
<label for="Valor">Valor:</label>
<input class="form-control valor" v-model="Valor" placeholder="R$"><br>
<label for="FormaPagamento">Forma Pgto:</label>
<select class="form-control" v-model="FormaPagamento" placeholder="Cartão/Plataforma">
    <option>Selecione a forma de pagamento</option>
    <option v-for="el in app.sys.sorter(FormaPagamentoSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeForma}}</option>
</select>
<br>
<label for="Observacao">Observação:</label>
<textarea class="form-control" v-model="Observacao"></textarea><br>
<label for="Status">Status:</label>
<input class="form-control" type="checkbox" v-model="Status" placeholder=""><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>