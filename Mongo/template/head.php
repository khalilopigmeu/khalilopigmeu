<?php $pageName = $page; ?>
<div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="<?php echo $page; ?>">
    <div class="modal-dialog modal-dialog-centered mw-100 w-75">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" v-html="ELtitle +' '+ Icon"></h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab<?php echo $page; ?>" role="tablist">
                        <a class="nav-item nav-link" v-if="src!=null" id="list-tab<?php echo $page; ?>" data-toggle="tab" href="#tab-list<?php echo $page; ?>" role="tab" aria-controls="list-tab<?php echo $page; ?>" aria-selected="true" data-clipa="1">Listagem <i class="fas fa-table"></i></a>
                        <a class="nav-item nav-link" id="form-tab<?php echo $page; ?>" data-toggle="tab" href="#tab-form<?php echo $page; ?>" role="tab" aria-controls="form-tab<?php echo $page; ?>" aria-selected="true" data-clipa="2">Formulário <i class="far fa-clipboard"></i></a>
                    </div>
                </nav>
                <div class="tab-content justify-content-center container-fluid my-2 py-2" id="nav-tabContent<?php echo $page; ?>">
                    <div v-if="src!=null" id="tab-list<?php echo $page; ?>" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="list-tab<?php echo $page; ?>">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="col-sm-2 my-3 ml-2 btn btn-dark toForm" v-if="app.sys.ravec(2,'<?php echo $page; ?>')" v-on:click="cad"><i class="far fa-plus-square"></i> Cadastrar</div>
                            <div class="col-sm-2 my-3 ml-2 btn btn-warning toForm" v-if="row!=null && app.sys.ravec(3,'<?php echo $page; ?>')" v-on:click="alt"><i class="far fa-edit"></i> Alterar</div>
                            <div class="col-sm-2 my-3 ml-2 btn btn-danger toForm" v-if="row!=null && app.sys.ravec(4,'<?php echo $page; ?>')" v-on:click="exc"><i class="far fa-trash-alt"></i> Excluir</div>
                            <!--<div class="col-sm-2 my-3 ml-2 btn btn-dark toForm" v-if="row!=null && ravec(5)" v-on:click="rel"><i class="far fa-newspaper"></i> Relatório</div>-->
                        </div>  
                        <div class="row justify-content-center my-2 py-2">
                            <label>Pesquisa: </label><input class="ml-2" type="text" v-model="pesqTbl" v-on:change="Criarpaginas()"><br>
                            <select type="text" class='itensCount'>
                                <option value="5">Selecione a qtd.</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="table-responsive container-fluid table-hover">
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
                                        <tr v-for="td in paginate">
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
                            </div>
                            <br>
                            <?php  include $refUrl . "Mongo/template/pagination.php" ?>
                        </div>
                    </div>
                    <div id="tab-form<?php echo $page; ?>" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="form-tab<?php echo $page; ?>">
                        <form @submit="checkForm">
                            <fieldset class="border rounded container-fluid border-dark py-2">