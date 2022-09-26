<?php
$pgtitle = "Comissão";
$page = "Comissao";
$td = ["" . $page => ["Id", "Nome", "Referencia", "Percentual"]];
$tdvue = ["" . $page => ["td.Nome", "td.Referencia", "td.Percentual"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..." ><br>
<label>Finanças:</label>
<select class="form-control" multiple="" v-model="Lancamentos" placeholder="Nome..." >
    <option v-for="item in app.sys.sorter(LancamentoFinanceiroSrc,'DESC','id')" v-if="item.Pago==='true' && item.Modalidade==='1' && item.Status === 'false'" v-bind:value="item._id['$oid']">{{item.Documento}} - R${{item.Valor}}</option>
</select>
<br>
<nav>
    <div class="nav nav-tabs" id="nav-tabCenter" role="tablist">
        <a class="bg-light nav-item nav-link active show" id="geral" data-toggle="tab" href="#tab-geral" role="tab" aria-controls="tab-geral" aria-selected="true" data-clipa="1">Geral</a>
        <a class="bg-light nav-item nav-link" id="progressivo" data-toggle="tab" href="#tab-progressivo" role="tab" aria-controls="tab-progressivo" data-clipa="1">Progressivo</a>
    </div>
</nav>
<div class="tab-content justify-content-center container-fluid my-2 py-2 border rounded border-dark" id="nav-tabContentModulos">
    <div id="tab-geral" class="tab-pane container-fluid active show" role="tabpanel" aria-labelledby="tab-geral">
        <div class="row my-2 py-2">
            <fieldset class="border justify-content-center w-75 mx-auto text-center">
                <div v-for="(item,index) in Count">
                    <label>Nome:</label><input type="text" v-model="Referencia[index]" class="form-control">    
                    <label>Percentual:</label><input type="number" v-on:change="limit" v-model="Percentual[index]" step="0.1" max="100" class="form-control">    
                    <label>Cor:</label><input class="form-control" type="color" v-model="Cor[index]" placeholder="Cor..." ><br>
                    <label>Lançar:</label><input class="form-control" type="checkbox" v-model="Lancar[index]" placeholder="Lançar..." ><br>
                    <br>
                </div>
                <br>
                <hr>
                <button class="button btn m-1" v-on:click="adicionar">Adicionar Referência</button>
                <button class="button btn btn-danger m-1" v-on:click="remover">Remover Referência</button>
                <button class="button btn btn-warning m-1" v-on:click="calcularGeral">Calcular</button>
                <button class="button btn m-1" v-on:click="salvarGeral">Gerar comissão</button>
                <br>
                <hr>
            </fieldset>
            <canvas id="piechart" width="400" height="400" style="background: white;"></canvas>
        </div>
    </div>
    <div id="tab-progressivo" class="tab-pane container-fluid active show" role="tabpanel" aria-labelledby="tab-progressivo">
        <div class="row my-2 py-2">
            <fieldset class="border justify-content-center w-75 mx-auto text-center">
                <div v-for="(item,index) in Count">
                    <label>Quantidade:</label><input type="number" v-model="Referencia[index]" step="0.1" class="form-control">    
                    <label>Percentual:</label><input type="number" v-model="Percentual[index]" step="0.1" class="form-control">    
                    <br>
                </div>
                <br>
                <hr>
                <button class="button btn m-1" v-on:click="adicionar">Adicionar Referência</button>
                <button class="button btn btn-danger m-1" v-on:click="remover">Remover Referência</button>
                <button class="button btn btn-warning m-1" v-on:click="calcularProgressivo">Calcular</button>
                <button class="button btn m-1" v-on:click="salvarProgressivo">Gerar comissão</button>
                <br>
                <hr>
                <label>Total:</label><input type="number" v-model="Total" disabled="" class="disabled form-control">    
            </fieldset>
        </div>
    </div>
</div>

<?php include $refUrl . "Mongo/template/foot.php" ?>