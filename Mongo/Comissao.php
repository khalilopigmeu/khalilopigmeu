<?php
$pgtitle = "Comissão";
$page = "Comissao";
$td = ["" . $page => ["Id", "Nome", "Referencia", "Percentual"]];
$tdvue = ["" . $page => ["td.Nome", "td.Referencia", "td.Percentual"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..." ><br>
<label>Funcionário:</label>
<input list="FuncionarioLogin" class="form-control" v-model="IdFunc" placeholder="Campo...">
<datalist id="FuncionarioLogin">
    <option  v-if="Funcionariossrc!=null" v-for="el in app.sys.sorter(Funcionariossrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</datalist>
<a href="#" onclick="zeroModal();setModal('Funcionarios', 'Comissao')">Adicionar Funcionário(a) <i class="far fa-plus-square"></i></a><br>
<br>
<label>Início:</label>
<input class="data form-control" v-model="Inicio" placeholder="inicio..." ><br>
<label>Fim:</label>
<input class="data form-control" v-model="Fim" placeholder="fim..." ><br>
<label>Eventos:</label>
<select class="form-control" multiple="" v-model="Lancamentos" placeholder="Nome..." >
    <option>Selecione os eventos</option>
    <option v-for="item in app.sys.sorter(LancamentoFinanceiroSrc,'DESC','id')" v-if="item.Pago==='true' && item.Modalidade==='1'" v-bind:value="item._id['$oid']">{{item.Documento}} - R${{item.Valor}}</option>
</select>
<br>
<fieldset class="border justify-content-center w-75 mx-auto text-center">
    <div v-for="(item,index) in Referencia">
        <label>Quantidade:</label><input type="number" v-model="Referencia[index]" step="0.1" class="form-control">    
        <label>Percentual:</label><input type="number" v-model="Percentual[index]" step="0.1" class="form-control">    
        <br>
    </div>
    <br>
    <hr>
    <button class="button btn m-1" v-on:click="adicionar">Adicionar Referência</button>
    <button class="button btn btn-danger m-1" v-on:click="remover">Remover Referência</button>
    <button class="button btn btn-warning m-1" v-on:click="calcular">Calcular</button>
    <button class="button btn m-1" v-on:click="salvar">Gerar comissão</button>
</fieldset>
<label>Total:</label><input type="number" v-model="Total" disabled="" class="disabled form-control">    
<?php include $refUrl . "Mongo/template/foot.php" ?>