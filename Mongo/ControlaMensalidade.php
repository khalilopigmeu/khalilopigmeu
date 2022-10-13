<?php
$pgtitle = "Controle de Mensalidade";
$page = "ControlaMensalidade";
$td = ["" . $page => ["Id", "Cliente", "Módulos"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(Clientesrc,'Nome',td.IdCliente)",
        "app.sys.foreignKeyReplace(PlanoSistemaSrc,'CodPlano',td.Modulos)", "td.DataPreferencia"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Cliente:</label>
<select class="form-control"  v-model="IdCliente" placeholder="Cliente..." >
    <option v-for="el in app.sys.sorter(Clientesrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn"  onclick="setModal('Cliente', 'ControleMensalidade')">Adicionar Cliente <i class="far fa-plus-square"></i></span><br>
<br>
<label>Dia de preferência:</label>
<input type="number" class='form-control' min='1' max='30'><br>
<div v-for="el in app.sys.sorter(PlanoSistemaSrc,'DESC','id')" class="my-2 py-2">
    <input type="checkbox" v-model="Modulos" v-bind:id="el._id['$oid']" v-bind:value="el._id['$oid']"><span>{{el.CodPlano}} - {{el.Descricao}}</span><br>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>