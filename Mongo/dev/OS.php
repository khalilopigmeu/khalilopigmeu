<!-- 
VueApp name = OS 
titulo = Ordem de Serviço
app = OS
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblOS
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.Nome", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
                                            "_id['$oid']",
                                            "statusF",
                                            "IdEtag",
                                            "DescriServico",
                                            "Pecas",
                                            "IdStatusOS",
                                            "DataSolicitacao",
                                            "Previsao",
                                            "ValorSugerido",
                                            "ValorCobrado",
                                            "Observacao",
                                            "Disponibilidade",
                                            "Cod",
                                            "Cliente",
                                            "Atendente",
                                            "IdTipoOS",
                                            "Tecnico",
                                            "Nivel",
                                        </tr>
                                    <td>0</td>
                                    </tr>
                                    </tbody>
                                    <tfoot class="thead-dark headRelatorio text-white text-center">
                                        <tr>
                                            "Id",
                                        </tr>
                                    </tfoot>
                                </table>                 
                            </div>
                        </div>
                    </div>
                    <div id="tab-formOS" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="form-tabOS">
                        <form @submit="checkForm">
                            <fieldset class="border rounded container-fluid border-dark py-2">
                                <label>Campo:</label>
                                <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
                                <br>
                               <?php include $refUrl . "Mongo/template/foot.php" ?>