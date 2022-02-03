<!-- 
VueApp name = NF 
titulo = Nota Fiscal
app = NF
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblNF
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.Nome", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
                                            "_id['$oid']",
                                            "TotII",
                                            "TotDesc",
                                            "TotIPI",
                                            "Tipo",
                                            "CodNf",
                                            "TotVbc",
                                            "TotBCST",
                                            "TotST",
                                            "TotProd",
                                            "TotFrete",
                                            "TotPIS",
                                            "TotICMS",
                                            "TotSeg",
                                            "TotCOFINS",
                                            "UrlXML",
                                            "NroNf",
                                            "TotICMSD",
                                            "TotNF",
                                            "TotOutro",
                                            "DataEmiss",
                                            "ChaveNF",
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
                    <div id="tab-formNF" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="form-tabNF">
                        <form @submit="checkForm">
                            <fieldset class="border rounded container-fluid border-dark py-2">
                                <label>Campo:</label>
                                <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
                                <br>
                               <?php include $refUrl . "Mongo/template/foot.php" ?>