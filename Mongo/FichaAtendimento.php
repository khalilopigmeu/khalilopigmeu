<!-- 
VueApp name = FichaAtendimento 
titulo = Ficha de Atendimento
app = FichaAtendimento
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblFichaAtendimento
-->
<?php
$pgtitle = "Ficha de Atendimento";
$page = "FichaAtendimento";
$td = ["" . $page => ["Id", "Cliente", "Consultas", "Procedimentos", "Observação", "DataAtendimento", "Valor", "Anamnese", "Status"]];
$tdvue = ["" . $page => ["td.Cliente", "td.Consulta", "td.Procedimento", "td.Observacao",
        "td.DataAtendimento", "td.Valor", "td.LinkAnamnese", "td.Status"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Pesquisa de cliente:</label><input class="form-control" type="text" v-model="pesqCliente"><br>
<label>Cliente:</label>
<select class="form-control" v-model="IdCliente" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(app.sys.searchall(Clientesrc,pesqCliente),'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Cliente', 'Eventos')">Adicionar Cliente <i class="far fa-plus-square"></i></a><br>
<br>
<label>Consulta:</label>
<select class="form-control" v-model="Consulta" multiple v-on:change="calcPreco()" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(Consultasrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Consulta', 'Eventos')">Adicionar Consulta <i class="far fa-plus-square"></i></a><br>
<br>
<label>Procedimento:</label>
<select class="form-control" v-model="Procedimento" multiple v-on:change="calcPreco()" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(Procedimentosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Procedimento', 'Eventos')">Adicionar Procedimento <i class="far fa-plus-square"></i></a><br>
<label for="data">Valor:</label>
<input class="form-control disabled" disabled="" type="text" v-model="Valor" placeholder="R$"><br>
<label for="data">Data de atendimento:</label>
<input class="form-control" type="date" v-model="DataAtendimento" placeholder="Inicio..."><br>
<label for="observacaoatendimento">Observação:</label>
<textarea class="form-control" v-model="Observacao" name="observacaoatendimento" placeholder="Observação..."></textarea><br>
<label for="link">Link anamnese:</label>
<input class="form-control" type="url" v-model="LinkAnamnese" placeholder="Inicio..."><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>