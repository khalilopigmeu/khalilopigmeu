<!-- 
VueApp name = FingerData 
titulo = Impressão Digital
app = FingerData
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblFingerData
-->
<?php
$pgtitle = "Album";
$page = "Album";
$td = ["" . $page =>["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page =>["td.Nome", "td.Descricao"]];

include $refUrl . "Mongo/template/head.php"
?>
                                            "_id['$oid']",
                                            "D1",
                                            "D2",
                                            "D3",
                                            "D4",
                                            "D5",
                                            "E1",
                                            "E2",
                                            "E3",
                                            "E4",
                                            "E5",
                                            "IdFuncionario",
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
                    <div id="tab-formFingerData" class="tab-pane container-fluid" role="tabpanel" aria-labelledby="form-tabFingerData">
                        <form @submit="checkForm">
                            <fieldset class="border rounded container-fluid border-dark py-2">
                                <label>Campo:</label>
                                <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
                                <br>
                                <?php include $refUrl . "Mongo/template/foot.php" ?>