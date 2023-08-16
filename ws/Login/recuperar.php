<div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="modalRecuperaSenha">
    <div class="modal-dialog modal-dialog-centered mw-100 w-75">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Recuperar Senha</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="row justify-content-center my-3 py-3">
                    <form action="" method="post" class="my-3 py-3">
                        <fieldset class="border rounded container-fluid border-dark my-3 py-3 w-90">
                            <legend class="border rounded text-center border-dark">Bem Vindo</legend>
                            <select class="form-control" v-model="Modelo">
                                <option value="Cliente">Cliente</option>
                                <option value="Empresa">Empresa</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Revendedor">Revenda</option>
                            </select>
                            <label for="Email">E-mail:</label>
                            <input class="form-control" name="Email" placeholder="E-mail..."><br>
                            <label for="Login">Login:</label>
                            <input class="form-control" name="Login" placeholder="Login..."><br>
                            <input class="btn btn-dark" v-on:click="recuperar" type="submit" value="Enviar"> 
                            <br>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
