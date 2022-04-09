<!-- 
VueApp name = ControlaMensalidade 
titulo = Controle de Mensalidade
app = ControlaMensalidade
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblControlaMensalidade
-->
<?php
$pgtitle = "Controle de Mensalidade";
$page = "ControlaMensalidade";
$td = ["" . $page => ["Id", "Cliente", "Módulos"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(Clientesrc,'Nome',td.IdCliente)",
    "app.sys.foreignKeyReplace(PlanoSistemaSrc,'CodPlano',td.Modulos)","td.DataPreferencia"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Cliente:</label>
<input class="form-control" list="clientelist" v-model="IdCliente" placeholder="Cliente..." >
<datalist id="clientelist">
    <option v-for="el in app.sys.sorter(Clientesrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</datalist>
<a href="#" onclick="setModal('Cliente', 'ControleMensalidade')">Adicionar Cliente <i class="far fa-plus-square"></i></a><br>
<br>
<label>Dia de preferência:</label>
<input type="number" class='form-control' min='1' max='30'><br>
<div v-for="el in app.sys.sorter(PlanoSistemaSrc,'DESC','id')" class="my-2 py-2">
    <input type="checkbox" v-model="Modulos" v-bind:id="el._id['$oid']" v-bind:value="el._id['$oid']"><span>{{el.CodPlano}} - {{el.Descricao}}</span><br>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>