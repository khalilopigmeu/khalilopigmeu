<?php
$pgtitle = "Eventos";
$page = "Eventos";
$td = ["" . $page => ["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(CategoriaSrc,'NomeCategoria',td.groupId)",
        "td.title", "td.allDay", "td.start", "td.end", "td.classNames", "td.overlap", "td.backgroundColor",
        "td.borderColor", "td.textColor", "td.extendedProps", "td.daysOfWeek", "td.startTime",
        "td.endTime", "td.startRecur", "td.endRecur"]];

include $refUrl . "Mongo/template/head.php"
?>
<label for="Categoria">Categoria:</label>
<select class="form-control" v-model="groupId" name="groupId" placeholder="Categoria" >
    <option>Selecione uma categoria</option>
    <option v-for="el in app.sys.sorter(CategoriaSrc,'DESC','id')" class="categoria" v-bind:value="el._id['$oid']" v-bind:data-color="el.Cor">{{el.NomeCategoria}}</option>
</select>
<a href="#" onclick="setModal('CategoriaEventos', 'Eventos')">Adicionar Categoria <i class="far fa-plus-square"></i></a><br>
<br>
<label for="Nome">Nome:</label>
<input class="form-control" name="Nome" v-model="title" placeholder="Nome..."><br>
<label for="observacaoagenda">Observação:</label>
<textarea class="form-control" v-model="observacao" name="observacaoagenda" placeholder="Observação..."></textarea><br>

<label for="Inicio">Início:</label>
<input class="form-control" type="date" v-model="inicio" name="Inicio" placeholder="Inicio..."><br>
<label for="Horai">Hora:</label>
<input class="form-control" name="Horai" type="time" v-model="horai" placeholder="Hora..."><br>
<label for="Fim">Fim:</label>
<input class="form-control" type="date"  v-model="fim" name="Fim" placeholder="Fim..."><br>
<label for="Horaf">Hora:</label>
<input class="form-control" type="time" name="Horaf" v-model="horaf" placeholder="Hora..." ><br>
<fieldset class="border rounded container-fluid border-dark py-2">
    <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="allDay" type="checkbox"name="allDay">
        <label class="form-check-label" for="allDay">Dia Todo:</label><br>
    </div>
</fieldset>
<fieldset v-if="repetir==true" class="border rounded container-fluid border-dark py-2">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" v-model="repetir" name="repetir">
        <label class="form-check-label" for="repetir">Repetir</label>
    </div>
    <br>
    <hr>
    <div v-if="repetir==true">   
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="daysOfWeek" name="ckb" value="0">
            <label class="form-check-label" for="inlineCheckbox1">Domingo</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="daysOfWeek" name="ckb" value="1">
            <label class="form-check-label" for="inlineCheckbox2">Segunda</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="daysOfWeek" name="ckb" value="2">
            <label class="form-check-label" for="inlineCheckbox3">Terça</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="daysOfWeek" name="ckb" value="3">
            <label class="form-check-label" for="inlineCheckbox4">Quarta</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="daysOfWeek" name="ckb" value="4">
            <label class="form-check-label" for="inlineCheckbox5">Quinta</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="daysOfWeek" name="ckb" value="5">
            <label class="form-check-label" for="inlineCheckbox6">Sexta</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="daysOfWeek" name="ckb" value="6">
            <label class="form-check-label" for="inlineCheckbox7">Sábado</label>
        </div>
        <br><br>
        <label for="repeat">Repetir Até:</label>
        <input class="form-control"  type="date"  v-model="repetirate" name="repeat" placeholder="Repetir Até..."><br>
    </div>
</fieldset>
<fieldset class="border rounded m-1 p-1">
    <legend>Importar dados:</legend>
    <input type="radio" v-model="importar" value="atendimento"><label>Atendimento</label><br>
    <div v-if="importar=='atendimento'">
        <label for="modo">Ficha Atendimento:</label>
        <select class="form-control" multiple="" v-model="FichaAtendimento">
            <option v-for="item in app.sys.sorter(FichaAtendimentoSrc,'DESC','id')" v-bind:value="item._id['$oid']" v-if="item.Registrado!='true'">{{app.sys.foreignKeyReplace(app.Cliente.src,'Nome',item.IdCliente)}} - {{item.DataAtendimento}} - {{item.Valor}} - {{item.Observacao}}</option>
        </select>
    </div>
    <input type="radio" v-model="importar" value="financeiro"><label>Lançamento Financeiro</label><br>
    <div v-if="importar=='financeiro'">
        <label for="modo">Lançamento financeiro:</label>
        <select class="form-control" multiple="" v-model="LancamentoFinanceiro">
            <option v-for="item in app.sys.sorter(LancamentoFinanceiroSrc,'DESC','id')" v-bind:value="item._id['$oid']" v-if="item.Status!='true'">{{item.Documento}} - R${{item.Valor}}</option>
        </select>
    </div>
    <input type="radio" v-model="importar" value="pedidovenda"><label>Pedido de Venda</label><br>
    <div v-if="importar=='pedidovenda'">
        <label for="modo">Pedido de Venda:</label>
        <select class="form-control" multiple="" v-model="PedidoDeVenda">
            <option v-for="item in app.sys.sorter(PedidoVendaSrc,'DESC','id')" v-bind:value="item._id['$oid']">{{item.Nfatura}} - {{item.DataPedido}} - R${{item.ValorTotal}}</option>
        </select>
    </div>
</fieldset>
<?php include $refUrl . "Mongo/template/foot.php" ?>
