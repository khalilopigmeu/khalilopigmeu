<?php
include"../../header.php";
?>
<script src="<?php echo $cdn; ?>js/calendar.js"></script>
<div class="container-fluid" id="UserApp">
    <div class="progress" v-if="progress<99">
        <div class="text-center progress-bar progress-bar-striped progress-bar-animated" role="progressbar" v-bind:aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" v-bind:style="'width: '+progress+'%'">{{progress}}%</div>
    </div>
    <div class="row text-center justify-content-center my-2 py-2">
        <div class=" col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 res">
            <h4 class=" py-2 my-2 border border-dark rounded" data-toggle="collapse" href="#colcategoria" aria-expanded="false" aria-controls="colcategoria">Categorias <i class="fas fa-ellipsis-v"></i></h4>
            <div class="collapse py-2 my-2 border border-dark rounded" id="colcategoria">
                <button class="btn btn-dark mb-2 addCat " data-toggle="modal" data-target="#CategoriaEventos">Adicionar Categoria</button>
                <ul v-if="CategoriaSrc!=null" class="list-group ">
                    <li class="list-group-item" v-for="(el,index) in app.sys.sorter(CategoriaSrc,'DESC','id')">{{el.NomeCategoria}} <span v-bind:style="{'background-color':el.Cor}" class="my-1 py-1"><input type="checkbox" v-bind:value="el._id.$oid" v-on:change="updateFC" v-model="grpslc"></span></li>
                </ul>
            </div>
        </div>
        <form class=" col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 res">
            <h4 class=" py-2 my-2 border border-dark rounded" data-toggle="collapse" href="#coldata" aria-expanded="false" aria-controls="coldata">Data <i class="fas fa-ellipsis-v"></i></h4>
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
        <div class=" col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 res">
            <h4 class=" py-2 my-2 border border-dark rounded" data-toggle="collapse" href="#colanotacao" aria-expanded="false" aria-controls="colanotacao">Anotação <i class="fas fa-ellipsis-v"></i></h4>
            <div class="collapse py-2 my-2 border border-dark rounded" id="colanotacao">
                <button class="btn btn-dark mb-2" data-toggle="modal" data-target="#AnotacaoAgenda">Adicionar Anotação</button>
                <h5>{{diaevento}}</h5>
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
            <a class="bg-light nav-item nav-link" id="tabela" v-on:click="grafico()" data-toggle="tab" href="#tab-tabela" role="tab" aria-controls="tab-tabela" data-clipa="3">Tabela</a>
        </div>
    </nav>
    <div class="tab-content justify-content-center container-fluid my-2 py-2 border rounded border-dark" id="nav-tabContentModulos">
        <div id="tab-calendario" class="tab-pane container-fluid active show" role="tabpanel" aria-labelledby="tab-calendario">
            <div class="row my-2 py-2">
                <div class="tab-content col-12" id="calendarTabContent"></div>
            </div>
        </div>
        <div id="tab-grafico" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="tab-grafico">
            <button class="btn btn-dark" v-on:click="grafico">Atualizar</button><br><hr><br>
            <canvas id="Grafico" width="400" height="400" style="background: white;"></canvas>
        </div>
        <div id="tab-tabela" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="tab-tabela">
            <div class="row">
                <div class="table-responsive container-fluid table-hover">
                    <style>
                        .greentext{
                            background-color: #008000;
                            color: #fff;
                        }
                        .redtext{
                            background-color: #008000;
                            color: #fff;
                        }
                    </style>
                    <table class="table table-striped table-bordered" id="RelatorioFinanceiro">
                        <thead class="thead-dark text-white text-center">
                            <tr>
                                <th>Data</th>
                                <th>Nome</th>
                                <th>Entrada</th>
                                <th>Saída</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="td in tabela">
                                <td>{{formatadata(td.data)}}</td>
                                <td>{{td.nome}}</td>
                                <td>R$ {{parseFloat(td.entrada).toFixed(2)}}</td>
                                <td>R$ {{parseFloat(td.saida).toFixed(2)}}</td>
                                <td>R$ {{parseFloat(td.total).toFixed(2)}}</td>
                            </tr>
                        </tbody>
                        <tfoot class="thead-dark text-white text-center">
                            <tr>
                                <th>Data</th>
                                <th>Nome</th>
                                <th>Entrada</th>
                                <th>Saída</th>
                                <th>Total</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="user.js"></script>
<?php
include $refUrl . "Mongo/CategoriaEventos.php";
include $refUrl . "Mongo/Consulta.php";
include $refUrl . "Mongo/Procedimento.php";
include $refUrl . "Mongo/Eventos.php";
include $refUrl . "Mongo/Cliente.php";

include $refUrl . "Mongo/Curriculum.php";
include $refUrl . "Mongo/FamiliaProdutos.php";
include $refUrl . "Mongo/ClasseProdutos.php";
include $refUrl . "Mongo/CategoriaProdutos.php";
include $refUrl . "Mongo/SubcategoriaProdutos.php";
include $refUrl . "Mongo/Produto.php";
include $refUrl . "Mongo/Album.php";
include $refUrl . "Mongo/Midia.php";
include $refUrl . "Mongo/Login.php";
include $refUrl . "Mongo/FichaAtendimento.php";
include $refUrl . "Mongo/PedidoVenda.php";

include $refUrl . "Mongo/Chamado.php";

include $refUrl . "Mongo/FormasPagamento.php";
include $refUrl . "Mongo/OS.php";
include $refUrl . "Mongo/PromocaoItem.php";
include $refUrl . "Mongo/Promocao.php";

?>
<script>
$(function () {
    CKEDITOR.replace('observacaoagenda', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('observacaoatendimento', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('conteudo', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('procedimentodescricao', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('consultadescricao', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('caracteristica', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('especificacao', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('resumo', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('resumotexto', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('conteudotexto', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('chamadatexto', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('conteudoanuncio', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('descricaoanuncio', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('mensagemchamada', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('jobtxt', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('casetxt', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('sobrecurriculo', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('solucaochamado', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('observacaochamado', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    /*CKEDITOR.replace('observacaomanutencao', {
     customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
     });*/
    CKEDITOR.replace('observacaoscomponente', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('especificacaoscomponente', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('observacaocomponente', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });
    CKEDITOR.replace('especificacaocomponente', {
        customConfig: 'https://cdn.pongongo.com.br/js/configEditor.js'
    });

    app.sidebar.fblog = true;
    app.sidebar.empresa = window.localStorage.getItem("Empresa");
    app.sidebar.login = window.localStorage.getItem("Nome");
});
window.onload = function () {
    app.calendar.load();
}
</script>
<?php
include"../../footer.php";
?>
