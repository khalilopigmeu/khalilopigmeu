<?php
include"../../header.php";
?>
<script src="<?php echo $cdn; ?>js/calendar.js"></script>
<div class="container-fluid" id="CalendarApp">
    <div class="row text-center justify-content-center my-2 py-2">
        <div class="col-7 res">
            <h3 class=" py-2 my-2 border border-dark rounded" data-toggle="collapse" href="#colcategoria" aria-expanded="false" aria-controls="colcategoria">Categorias <i class="fas fa-ellipsis-v"></i></h3>
            <div class="collapse py-2 my-2 border border-dark rounded" id="colcategoria">
                <button class="btn btn-dark mb-2 addCat " data-toggle="modal" data-target="#CategoriaEventos">Adicionar Categoria</button>
                <ul v-if="CategoriaSrc!=null" class="list-group ">
                    <li class="list-group-item" v-for="(el,index) in app.sys.sorter(CategoriaSrc,'DESC','id')">{{el.NomeCategoria}} <span v-bind:style="{'background-color':el.Cor}" class="my-1 py-1"><input type="checkbox" v-bind:value="el._id.$oid" v-on:change="updateFC" v-model="grpslc"></span></li>
                </ul>
            </div>
        </div>
        <form class="col-7 res">
            <h3 class=" py-2 my-2 border border-dark rounded" data-toggle="collapse" href="#coldata" aria-expanded="false" aria-controls="coldata">Data <i class="fas fa-ellipsis-v"></i></h3>
            <div class="collapse py-2 my-2 border border-dark rounded" id="coldata">
                <div class="form-row align-items-center">
                    <div class="col-3 "><span >Inicio/Fim:</span></div>
                    <div class="col-3"><input type="date" v-model="iniciopesq" name="iniciopesq" class="datepicker form-control"></div>
                    <div class="col-3"><input type="date" v-model="fimpesq" name="fimpesq" class="datepicker form-control"></div>
                    <div class="col-2"><button class="btn btn-dark" v-on:click="betdate">Ir</button></div>
                </div>
                <br>
                <hr>
                <br>
                <div class="form-row align-items-center">
                    <div class="col-3 "><span >Ir Para Data:</span></div>
                    <div class="col-7"><input type="date" v-model="irpara" name="irpara" class="datepicker form-control"></div>
                    <div class="col-2 "><button class="btn btn-dark" v-on:click="gotodate">Ir</button></div>
                </div>
            </div>
        </form>
        <div class="col-7 res">
            <h3 class=" py-2 my-2 border border-dark rounded" data-toggle="collapse" href="#colanotacao" aria-expanded="false" aria-controls="colanotacao">Anotação <i class="fas fa-ellipsis-v"></i></h3>
            <div class="collapse py-2 my-2 border border-dark rounded" id="colanotacao">
                <button class="btn btn-dark mb-2" data-toggle="modal" data-target="#AnotacaoAgenda">Adicionar Anotação</button>
                <h3>{{diaevento}}</h3>
                <ul v-if="AnotacaoSrc!=null" class="list-group ">
                    <li class="list-group-item btn " v-for="(el,index) in app.sys.sorter(AnotacaoSrc,'DESC','id')">{{el.Titulo}}</li>
                </ul>
            </div>
        </div>
    </div>
    <nav>
        <div class="nav nav-tabs" id="nav-tabCenter" role="tablist">
            <a class="bg-light nav-item nav-link active show" id="calendario" data-toggle="tab" href="#tab-calendario" role="tab" aria-controls="tab-calendario" aria-selected="true" data-clipa="1">Calendário</a>
            <a class="bg-light nav-item nav-link" id="grafico" v-on:click="grafico()" data-toggle="tab" href="#tab-grafico" role="tab" aria-controls="tab-grafico" data-clipa="2">Gráfico</a>
        </div>
    </nav>
    <div class="tab-content justify-content-center container-fluid my-2 py-2 border rounded border-dark" id="nav-tabContentModulos">
        <div id="tab-calendario" class="tab-pane container-fluid active show" role="tabpanel" aria-labelledby="tab-calendario">
            <div class="row my-2 py-2">
                <div class="tab-content col-12" id="calendarTabContent"></div>
            </div>
        </div>
        <div id="tab-grafico" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="tab-grafico">
            <button class="btn btn-dark" v-on:click="grafico">Atualizar</button><br>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    </div>
</div>
<script src="agenda.js"></script>
<?php
include $refUrl . "Mongo/RootAccess.php";
include $refUrl . "Mongo/Ravec.php";
include $refUrl . "Mongo/CategoriaEventos.php";
include $refUrl . "Mongo/AnotacaoAgenda.php";
include $refUrl . "Mongo/Consulta.php";
include $refUrl . "Mongo/Procedimento.php";
include $refUrl . "Mongo/Eventos.php";
include $refUrl . "Mongo/Empresa.php";
include $refUrl . "Mongo/Cliente.php";
include $refUrl . "Mongo/Funcionarios.php";
include $refUrl . "Mongo/Fornecedor.php";
include $refUrl . "Mongo/Vendedor.php";
include $refUrl . "Mongo/Revenda.php";
include $refUrl . "Mongo/Transportadora.php";
include $refUrl . "Mongo/Configuracao.php";
include $refUrl . "Mongo/FamiliaProdutos.php";
include $refUrl . "Mongo/ClasseProdutos.php";
include $refUrl . "Mongo/CategoriaProdutos.php";
include $refUrl . "Mongo/SubcategoriaProdutos.php";
include $refUrl . "Mongo/Produto.php";
include $refUrl . "Mongo/Album.php";
include $refUrl . "Mongo/Midia.php";
include $refUrl . "Mongo/CategoriaAnuncio.php";
include $refUrl . "Mongo/Anuncio.php";
include $refUrl . "Mongo/ChamadoAnuncio.php";
include $refUrl . "Mongo/CategoriaText.php";
include $refUrl . "Mongo/Text.php";
include $refUrl . "Mongo/Page.php";
include $refUrl . "Mongo/Seo.php";
include $refUrl . "Mongo/Voucher.php";
include $refUrl . "Mongo/CategoriaPortfolio.php";
include $refUrl . "Mongo/Portfolio.php";
include $refUrl . "Mongo/Mural.php";
include $refUrl . "Mongo/Login.php";
include $refUrl . "Mongo/CategoriaPlanoSistema.php";
include $refUrl . "Mongo/PlanoSistema.php";
include $refUrl . "Mongo/ControlaMensalidade.php";
?>
    <script>
$(function () {
    
    CKEDITOR.replace('observacaoagenda', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('conteudo', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('procedimentodescricao', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('consultadescricao', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('caracteristica', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('especificacao', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('resumo', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('resumotexto', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('conteudotexto', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('chamadatexto', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('conteudoanuncio', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('descricaoanuncio', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('titulochamada', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('mensagemchamada', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('jobtxt', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    CKEDITOR.replace('casetxt', {
        customConfig: '<?php echo $refUrl; ?>js/configEditor.js'
    });
    app.Ravec.ravecUpdate();
});
</script>
<?php
include"../../footer.php";
?>