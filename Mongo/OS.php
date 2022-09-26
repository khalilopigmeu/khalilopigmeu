<?php
$pgtitle = "Ordem de serviço";
$page = "OS";
$td = ["" . $page => ["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page => ["td.Cliente", "td.Tecnico", "td.Atendente", "td.Cod", "td.Nivel", "td.Observacao", "td.DescriServico", "td.DataSolicitacao", "td.Previsao", "td.Valor", "td.Disponibilidade"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Cliente:</label>
<select class="form-control" v-model="Cliente" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(Clientesrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Cliente', 'OS')">Adicionar Cliente <i class="far fa-plus-square"></i></a><br>
<label>Atendente:</label>
<select list="FuncionarioLogin" class="form-control" v-model="Atendente" placeholder="Campo...">
    <option  v-if="Funcionariosrc!=null" v-for="el in app.sys.sorter(Funcionariosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="zeroModal();setModal('Funcionarios', 'OS')">Adicionar Funcionário(a) <i class="far fa-plus-square"></i></a><br>
<br>
<label>Técnico:</label>
<select list="FuncionarioLogin" class="form-control" v-model="Tecnico" placeholder="Campo...">
    <option  v-if="Funcionariosrc!=null" v-for="el in app.sys.sorter(Funcionariosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="zeroModal();setModal('Funcionarios', 'OS')">Adicionar Funcionário(a) <i class="far fa-plus-square"></i></a><br>
<br>

<label>Código:</label>
<input class="form-control" v-model="Cod" placeholder="Código..."><br>
<br>
<label>Nível:</label>
<input class="form-control" v-model="Nivel" placeholder="Nivel..."><br>
<br>
<label>Observação:</label>
<input class="form-control" v-model="Observacao" placeholder="Observação..."><br>
<br>
<label>Descrição de serviço:</label>
<input class="form-control" v-model="DescriServico" placeholder="Descrição de serviço..."><br>
<br>
<label>Solicitação:</label>
<input class="form-control" v-model="DataSolicitacao" placeholder="Solicitação..."    ><br>
<br>
<label>Previsão:</label>
<input class="form-control" v-model="Previsao" placeholder="Previsão..."><br>
<br>
<label>Valor:</label>
<input class="form-control" v-model="Valor" placeholder="Valor..."><br>
<br>
<label>Disponibilidade:</label>
<input class="form-control" v-model="Disponibilidade" placeholder="Disponibilidade..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>