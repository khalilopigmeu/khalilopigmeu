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
<label>Lista:</label>
<input class="form-control" v-model="Lista" placeholder="Campo..."><br>
<br>
<label>PedidoVenda:</label>
<input class="form-control" v-model="PedidoVenda" placeholder="Campo..."><br>
<br>
<label>OrdemProducao:</label>
<input class="form-control" v-model="OrdemProducao" placeholder="Campo..."><br>
<br>
<label>OrdemServico:</label>
<input class="form-control" v-model="OrdemServico" placeholder="Campo..."><br>
<br>
<label>Validade:</label>
<input class="form-control" v-model="Validade" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>