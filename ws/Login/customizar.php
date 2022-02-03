<div id="Customizar">
    <div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="modalCustomizar">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Customize a plataforma</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <fieldset class="border rounded container-fluid border-dark">
                        <label>Cor escura:</label><input class='form-control' type="color" v-model="dark"><br>
                        <label>Cor média:</label><input class='form-control' type="color" v-model="medium"><br>
                        <label>Cor clara:</label><input class='form-control' type="color" v-model="light"><br>
                        <label>Tamanho da fonte - Sistema:</label><input class='form-control' type="number" v-model="fssistema"><br>
                        <hr>
                        <label>Fundo formulário:</label><input class='form-control' type="color" v-model="fundoform"><br>
                        <label>Tamanho da fonte - Formulário:</label><input class='form-control' type="number" v-model="fsform"><br>
                        <hr>
                        <label>Cabeçalho da tabela:</label><input class='form-control' type="color" v-model="cabecalhotabela"><br>
                        <label>Tamanho da fonte - Cabeçalho:</label><input class='form-control' type="number" v-model="fscabecalho"><br>
                        <label>Rodapé da tabela:</label><input class='form-control' type="color" v-model="rodapetabela"><br>
                        <label>Tamanho da fonte - Rodapé:</label><input class='form-control' type="number" v-model="fsrodape"><br>
                        <hr>
                        <label>Tamanho da fonte - Tabela:</label><input class='form-control' type="number" v-model="fstabela"><br>
                        <label>Linhas intercaladas da tabela:</label><input class='form-control' type="color" v-model="linhaeven"><br>
                        <label>Linhas intercaladas da tabela:</label><input class='form-control' type="color" v-model="linhaodd"><br>
                        <input type="button" value='atualizar' v-on:click="changeColorSystem()">
                    </fieldset>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script  type="application/javascript" src="<?php echo $refUrl; ?>js/customize.js"></script>