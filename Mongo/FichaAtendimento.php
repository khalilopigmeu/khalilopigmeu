<?php
$pgtitle = "Ficha de Atendimento";
$page = "FichaAtendimento";
$td = ["" . $page => ["Id", "Cliente", "Consultas", "Procedimentos", "Observação", "Data de Atendimento", "Horário de Atendimento", "Valor", "Anamnese", "Status", "Registro"]];
$tdvue = ["" . $page => [
        "app.sys.foreignKeyReplace(Clientesrc,'Nome',td.IdCliente)",
        "app.sys.foreignKeyReplace(Consultasrc,'Nome',td.Consulta)",
        "app.sys.foreignKeyReplace(Procedimentosrc,'Nome',td.Procedimento)",
        "td.Observacao", "td.DataAtendimento", "td.HoraAtendimento", "td.Valor", "td.LinkAnamnese", "td.Status", "td.Registrado"]];

include $refUrl . "Mongo/template/head.php"
?>
<fieldset class="m-1 p-1 border rounded container-fluid border-dark">
    <legend>Selecione o cliente</legend>
    <label>Pesquisa de cliente:</label><input class="form-control" type="text" v-model="pesqCliente"><br>
    <label>Cliente:</label>
    <select class="form-control" v-model="IdCliente" placeholder="Campo..." >
        <option v-for="el in app.sys.sorter(app.sys.searchall(Clientesrc,pesqCliente),'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
    </select>
    <span class="btn" onclick="setModal('Cliente', 'FichaAtendimento')">Adicionar Cliente <i class="far fa-plus-square"></i></span><br>
    <br>
</fieldset>
<fieldset class="m-1 p-1 border rounded container-fluid border-dark" style="overflow-x:auto">
    <table class="table table-striped table-bordered" id="tbl<?php echo $page; ?>">
        <thead class="thead-dark text-white text-center">
            <tr>
                <?php
                if (count($td[$page]) > 0) {
                    for ($i = 0; $i <= count($td[$page]) - 1; $i++) {
                        echo "<th>" . $td[$page][$i] . "</th>";
                    }
                }
                ?>
            </tr>
        </thead>
        <tbody>
            <tr v-for="td in app.sys.sorter(app.sys.searchall(src,IdCliente),'DESC','_id.$oid')">
                <td>{{ app.sys.hasId(td._id) }}</td>
                <?php
                if (count($tdvue[$page]) > 0) {
                    for ($i = 0; $i <= count($tdvue[$page]) - 1; $i++) {
                        echo "<td>{{ " . $tdvue[$page][$i] . " }}</td>";
                    }
                }
                ?>
            </tr>
        </tbody>
        <tfoot class="thead-dark text-white text-center">
            <tr>
                <?php
                for ($i = 0; $i <= count($td[$page]) - 1; $i++) {
                    echo "<th>" . $td[$page][$i] . "</th>";
                }
                ?>
            </tr>
        </tfoot>
    </table>  
</fieldset>
<label>Consulta:</label>
<select class="form-control" v-model="Consulta" multiple v-on:click="calcPreco()" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(Consultasrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" data-dismiss="modal" onclick="setModal('Consulta', 'FichaAtendimento')">Adicionar Consulta <i class="far fa-plus-square"></i></span><br>
<br>
<label>Procedimento:</label>
<select class="form-control" v-model="Procedimento" multiple v-on:click="calcPreco()" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(Procedimentosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" data-dismiss="modal" onclick="setModal('Procedimento', 'FichaAtendimento')">Adicionar Procedimento <i class="far fa-plus-square"></i></span><br>
<label for="data">Ativar Promoção:</label>
<input type="checkbox" v-on:change="calcPreco()" v-model="Promocao" placeholder="R$"><br>
<label for="data">Valor:</label>
<input class="form-control disabled" disabled="" type="text" v-model="Valor" placeholder="R$"><br>

<fieldset class="m-1 p-1 border rounded container-fluid border-dark">
    <legend>Data</legend>
    <label>Evento:</label>
    <select class="form-control" v-on:change='atualizadatas()' v-model="Evento" placeholder="Campo..." >
        <option v-for="el in app.sys.sorter(eventos,'DESC','id')" v-bind:value="el._id['$oid']">{{el.title}} - {{formatadata(el.start)}} - {{formatahora(el.start)}}</option>
    </select>
    <span class="btn" data-dismiss="modal" onclick="setModal('Eventos', 'FichaAtendimento')">Adicionar Evento <i class="far fa-plus-square"></i></span><br>
    <br>
    <hr>
    <label for="data">Data:</label>
    <input class="form-control" type="date" v-model="DataAtendimento"><br>
    <label for="data">Hora:</label>
    <input class="form-control" type="time" v-model="HoraAtendimento"><br>
</fieldset>
<label for="observacaoatendimento">Observação:</label>
<textarea class="form-control" v-model="Observacao" name="observacaoatendimento" placeholder="Observação..."></textarea><br>
<label for="link">Link anamnese:</label>
<input class="form-control" type="url" v-model="LinkAnamnese" placeholder="Inicio..."><br>
<label for="Status">Status:</label>
<input class="form-control" type="checkbox" v-model="Status"><br>
<label v-if="evtDataCal!='cad'" for="Registrado">Registrar:</label>
<input v-if="evtDataCal!='cad'" class="form-control" type="checkbox" v-model="Registrado"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>