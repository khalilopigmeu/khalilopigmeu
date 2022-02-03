<!-- 
VueApp name = IPI
titulo = IPI
app = IPI
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblIPI
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.Nome", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
                                            "_id['$oid']",
                                            "vISSQN",
                                            "indISS",
                                            "cServico",
                                            "cMun",
                                            "cListServ",
                                            "cPais",
                                            "cEnq",
                                            "nProcesso",
                                            "indIncentivo",
                                            "vISSRet",
                                            "vDescCond",
                                            "cMunFG",
                                            "vDeducao",
                                            "vAliq",
                                            "vIOF",
                                            "vOutro",
                                            "vDespAdu",
                                            "vBC",
                                            "CST",
                                            "vDescIncond",
                                            "vII",
                                            "Modelo",
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
                    <div id="tab-formIPI" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="form-tabIPI">
                        <form @submit="checkForm">
                            <fieldset class="border rounded container-fluid border-dark py-2">
                                <label>Campo:</label>
                                <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
                                <br>
                               <?php include $refUrl . "Mongo/template/foot.php" ?>