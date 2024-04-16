<div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="Login">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Entre na plataforma</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <fieldset class="border rounded container-fluid border-dark">
                    <legend class="border rounded text-center border-dark">Bem Vindo</legend>
                    <label for="Login">Login:</label>
                    <input class="form-control" v-model="Login" placeholder="E-mail/Celular..."><br>
                    <label for="Senha">Senha:</label>
                    <input class="form-control" type="password" v-model="Senha" placeholder="Senha..."><br>
                    <button class="btn btn-dark text-white" v-on:click="login">Enviar</button>
                    <br>
                </fieldset>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="Cadastro">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Junte-se à plataforma</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <fieldset class="border rounded container-fluid border-dark">
                    <legend class="border rounded text-center border-dark">Bem Vindo</legend>
                    <label for="E-mail">E-mail:</label>
                    <input class="form-control" v-model="Email" placeholder="E-mail..."><br>
                    <label for="Celular">Celular:</label>
                    <input class="form-control" v-model="Celular" placeholder="Celular..."><br>
                    <label for="Instagram">Instagram:</label>
                    <input class="form-control" v-model="Instagram" placeholder="Instagram..."><br>
                    <label for="YouTube">YouTube:</label>
                    <input class="form-control" v-model="YouTube" placeholder="YouTube..."><br>
                    <label for="TikTok">TikTok:</label>
                    <input class="form-control" v-model="TikTok" placeholder="TikTok..."><br>
                    <label for="Site">Site:</label>
                    <input class="form-control" v-model="Site" placeholder="Site..."><br>
                    <label for="Linkado">Nome @comercial:</label>
                    <input class="form-control" v-model="Linkado" placeholder="@..."><br>
                    <label for="Senha">Senha:</label>
                    <input class="form-control" type="password" v-model="Senha" placeholder="Senha..."><br>
                    <input type="hidden" v-model="id"><br>
                    <button class="btn btn-dark text-white" v-on:click="cadastrar">Enviar</button>
                    <!--<button class="btn btn-dark text-white" v-on:click="alterar">Alterar</button>
                    <button class="btn btn-dark text-white" v-on:click="excluir">Excluir</button>-->
                    <br>
                </fieldset>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>