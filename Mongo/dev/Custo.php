<!-- 
VueApp name = Custo 
titulo = Custo
app = Custo
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblCusto
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.Nome", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
                                            "_id['$oid']",
                                            "indice",
                                            "IdProduto",
                                            "IdEmpresa",
                                            "DiferencaMercado",
                                            "Extra",
                                            "COFINS",
                                            "Seguro",
                                            "ValorAtual",
                                            "ValorCompra",
                                            "ValorMercado",
                                            "Lucro",
                                            "Tarifa",
                                            "ICMS",
                                            "PIS",
                                            "Comissao",
                                            "Frete",
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
                    <div id="tab-formCusto" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="form-tabCusto">
                        <form @submit="checkForm">
                            <fieldset class="border rounded container-fluid border-dark py-2">
                                <label>Campo:</label>
                                <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
                                <br>
                                <?php include $refUrl . "Mongo/template/foot.php" ?>