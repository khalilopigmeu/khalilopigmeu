<?php
$pgtitle = "Chamado";
$page = "Chamado";
$td = ["" . $page => ["Id", "Cliente", "Serviço", "Data", "Ticket", "Nivel", "Status", "Alteração", "Previsão", "Observação", "Soluçao"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(ClienteSrc,'Nome',td.IdCliente)", "td.Servico", "td.DataSolicitacao", "td.Ticket", "td.Nivel", "td.Status", "td.DataAlteracao", "td.Previsao", "td.Observacao", "td.Solucao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Pesquisa de cliente:</label><input class="form-control" type="text" v-model="pesqCliente"><br>
<label>Cliente:</label>
<select class="form-control" v-model="IdCliente" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(app.sys.searchall(ClienteSrc,pesqCliente),'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn"  onclick="setModal('Cliente', 'Chamado')">Adicionar Cliente <i class="far fa-plus-square"></i></span><br>
<br>
<label>Serviço:</label>
<input class="form-control" v-model="Servico" placeholder="Campo..." ><br>
<br>
<label>Data de solicitação:</label>
<input class="form-control data" v-model="DataSolicitacao" type="date" placeholder="DD/MM/YYYY" ><br>
<br>
<label>Data da última alteração:</label>
<input class="form-control data" v-model="DataAlteracao" type="date" placeholder="DD/MM/YYYY" ><br>
<br>
<label>Previsão:</label>
<input class="form-control data" v-model="Previsao" type="date" placeholder="DD/MM/YYYY" ><br>
<br>
<label>Ticket:</label>
<input class="form-control" v-model="Ticket" placeholder="Ticket..." ><br>
<br>
<label>Nível:</label>
<input class="form-control" v-model="Nivel" placeholder="Nivel..." ><br>
<br>
<label>Status:</label>
<input class="form-control" v-model="Status" placeholder="Status..." ><br>
<br>
<label>Observação:</label>
<textarea name="observacaochamado" class="form-control" placeholder="Campo..." ></textarea><br>
<br>
<label>Solução:</label>
<textarea name="solucaochamado" class="form-control" placeholder="Campo..." ></textarea><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>