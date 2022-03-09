<div id="clientLogin">
    <div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="modalLoginSys">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Entre na plataforma</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <script type="text/javascript">
                        $(function () {
                            if (getAuth() === null) {
                                setAuth("UkdWdGIwVlNVQT09DQotUkdWdGIwVlNVQT09DQotWkdWdGJ6RXlNdz09DQot");
                            }
                        });
                    </script>
                    <div id="frmlogin" class="container-fluid">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tabEvt" role="tablist">
                                <a class="nav-item nav-link active" id="nav-evt-tab" data-toggle="tab" href="#nav-cli" role="tab" aria-controls="nav-cli" aria-selected="true" data-model="1">Cliente</a>
                                <a class="nav-item nav-link " id="nav-med-tab" data-toggle="tab" href="#nav-emp" role="tab" aria-controls="nav-emp" aria-selected="false" data-model="2">Associado</a>
                            </div>
                        </nav>
                        <div class="row justify-content-center mt-4">
                            <form class="frmlogin fmrwss">
                                <div class="tab-content justify-content-center container-fluid mt-3" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-cli" role="tabpanel" aria-labelledby="nav-evt-tab">
                                        <fieldset class="border rounded container-fluid border-dark">
                                            <legend class="border rounded text-center border-dark">Bem Vindo</legend>
                                            <label for="Login">Login:</label>
                                            <input class="form-control" v-model="Login" placeholder="Login..."><br>
                                            <label for="Senha">Senha:</label>
                                            <input class="form-control" type="password" v-model="Senha" placeholder="Senha..."><br>
                                            <div class="text-center justify-content-center my-4">
                                                <button class="btn btn-dark text-white" v-on:click="login">Enviar</button>
                                                <br><br>
                                                <?php if (strpos($_SERVER['HTTP_HOST'], "rtiempresarial") !== false) { ?>
                                                    <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalCliBienestar">Cadastrar</button> 
                                                <?php } ?>
                                                <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalRecuperaSenha" onclick="app.GerenciamentoCliente.getRandomNumber();">Recuperar senha</button>
                                                <br>
                                                <!-- <hr>
                                                 <button class="btn btn-dark entrafb"v-on:click.native>Continuar com Facebook</button>
                                                 <button class="btn btn-dark entragg"v-on:click.native>Continuar com Google</button> -->
                                                <hr>
                                                <button class="btn btn-dark" href="<?php echo $refUrl; ?>ws/Login/painel.php">Demonstração</button>
                                            </div>
                                        </fieldset>

                                    </div>
                                    <div class="tab-pane fade show" id="nav-emp" role="tabpanel" aria-labelledby="nav-evt-tab">
                                        <fieldset class="border rounded container-fluid border-dark">
                                            <legend class="border rounded text-center border-dark">Bem Vindo</legend>
                                            <label for="Empresa">Empresa/Nome:</label>
                                            <input class="form-control" v-model="Empresa" placeholder="Empresa..."><br>
                                            <label for="Login">Login:</label>
                                            <input class="form-control" v-model="Login" placeholder="Login..."><br>
                                            <label for="Senha">Senha:</label>
                                            <input class="form-control" type="password" v-model="Senha" placeholder="Senha..."><br>
                                            <!-- <label for="Cod">Código: {{posicao}} </label>  
                                             <input class="form-control" type="password" v-model="Cod" v-bind:placeholder="'Cód. '+posicao"><br>-->
                                            <div class="text-center justify-content-center my-4">
                                                <button v-on:click.native class="btn btn-dark text-white" v-on:click="login">Enviar</button>
                                                <br><br>
                                                <?php if (strpos($_SERVER['HTTP_HOST'], "rtiempresarial") !== false) { ?>
                                                    <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalCliBienestar">Cadastrar</button> 
                                                <?php } ?>
                                                <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalRecuperaSenha" onclick="app.GerenciamentoCliente.getRandomNumber();">Recuperar senha</button>
                                                <br>
                                                <hr>
                                                <!--<button class="btn btn-dark entrafb"v-on:click.native>Continuar com Facebook</button>
                                                <button class="btn btn-dark entragg"v-on:click.native>Continuar com Google</button>
                                                <hr>
                                                <button class="btn btn-dark" href="<?php //echo $refUrl;   ?>/ws/Login/painel.php">Demonstração</button>-->
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
    <div id="ClienteApp">
        <?php
        include $refUrl . "ws/Login/cadastro.php";
        include $refUrl . "ws/Login/recuperar.php";
        ?>
    </div>
</div>
<script  type="application/javascript" src="<?php echo $refUrl; ?>ws/Login/login.js"></script>
