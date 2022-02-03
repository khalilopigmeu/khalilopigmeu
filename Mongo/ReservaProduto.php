<!-- 
VueApp name = ReservaProduto 
titulo = Reserva de Produto
app = ReservaProduto
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblReservaProduto
-->
<?php
$pgtitle = "Reserva de Produto";
$page = "ReservaProduto";
$td = ["" . $page => ["Id", "Produtos", "Pedido de Venda", "OP", "OS", "Validade"]];
$tdvue = ["" . $page => ["td.Lista",
        "td.PedidoVenda",
        "td.OrdemProducao",
        "td.OrdemServico",
        "td.Validade"]];
include $refUrl . "Mongo/template/head.php"
?>
<label>Campo:</label>
<input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>