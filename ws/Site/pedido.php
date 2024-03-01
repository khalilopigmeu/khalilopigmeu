<?php

$pgtitle = "Pedido de Venda";
$page = "pedidovendasite";
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

include $refUrl . "model/head.php"
?>
<span>Nome da Fatura:</span>
<p>{{Nfatura}}</p><br>
<span>Cliente:</span>
<p>{{Cliente}}</p><br>
<span>Data do  Pedido:</span>
<p>{{DataPedido}}</p><br>
<span>Frete:</span>
<p>{{Frete}}</p><br>
<span>Seguro:</span>
<p>{{Seguro}}</p><br>
<span>Desconto:</span>
<p>{{Desconto}}</p><br>
<span>Total do pedido:</span>
<p>{{ValorTotal}}</p><br>
<span>Anotação:</span>
<p>{{Anotacao}}</p><br>
<span>Status:</span>
<p>{{Status}}</p><br>
<span for="CEP">CEP:</span>
<p>{{CEP}}</p><br>
<span for="UF">Estado:</span>
<p>{{UF}}</p><br>
<span for="Cidade">Cidade:</span>
<p>{{Cidade}}</p><br>
<span for="Bairro">Bairro:</span>
<p>{{Bairro}}</p><br>
<span for="Rua">Rua:</span>
<p>{{Rua}}</p><br>
<span for="Num">Número:</span>
<p>{{Numero}}</p><br>
<span for="Complemento">Complemento:</span>
<p>{{Complemento}}</p><br>
<fieldset>
    <legend>Opções</legend>
    <button>Consultar Status</button>
    <button>Cancelar Pedido</button>
    <button>Remover Pedido</button>
</fieldset>
<?php include $refUrl . "model/foot.php" ?>
