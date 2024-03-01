<?php

$pgtitle = "Ficha de Atendimento";
$page = "fichaatendimentosite";
$td = ["" . $page => ["Id", "Cliente", "Consultas", "Procedimentos", "Observação", "Data de Atendimento", "Horário de Atendimento", "Valor", "Anamnese", "Status", "Registro"]];
$tdvue = ["" . $page => [
        "app.sys.foreignKeyReplace(Clientesrc,'Nome',td.IdCliente)",
        "app.sys.foreignKeyReplace(Consultasrc,'Nome',td.Consulta)",
        "app.sys.foreignKeyReplace(Procedimentosrc,'Nome',td.Procedimento)",
        "td.Observacao", "td.DataAtendimento", "td.HoraAtendimento", "td.Valor", "td.LinkAnamnese", "td.Status", "td.Registrado"]];

include $refUrl . "model/head.php"
?>
<span>Cliente:</span>
<p>{{IdCliente}}</p><br>
<span>Consulta:</span> 
<p>{{Consulta]}}</p><br>
<span>Procedimento:</span>
<p>{{Procedimento}}</p><br>
<span>Valor:</span>
<p>{{Valor}}</p><br>
<span>Data:</span>
<p>{{DataAtendimento}}</p><br>
<span>Hora:</span>
<p>{{HoraAtendimento}}</p><br>
<span>Observação:</span>
<p>{{Observacao}}</p><br>
<span>Link anamnese:</span>
<p>{{LinkAnamnese}}</p><br>
<span>Status:</span>
<p>{{Status}}</p><br>
<?php include $refUrl . "model/foot.php" ?>
