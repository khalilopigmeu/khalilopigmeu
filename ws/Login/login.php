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
                        if (getAuth() === null) {
                            setAuth(decrypt(app.sys.bien, "encodedstring"));
                        }
                    </script>
                    <div id="frmlogin" class="container-fluid" v-if="logado===false">
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
                                                <button class="btn btn-dark text-white" v-on:click="loginEmp">Enviar</button>
                                                <br><br>
                                                <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalCliBienestar">Cadastrar</button> 
                                                <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalRecuperaSenha" onclick="app.GerenciamentoCliente.getRandomNumber();">Recuperar senha</button>
                                                <br><br>
                                                <button class="btn btn-dark" href="<?php echo $refUrl; ?>ws/Login/painel.php">Demonstração</button>
                                            </div>
                                        </fieldset>

                                    </div>
                                    <div class="tab-pane fade show" id="nav-emp" role="tabpanel" aria-labelledby="nav-evt-tab">
                                        <fieldset class="border rounded container-fluid border-dark">
                                            <legend class="border rounded text-center border-dark">Bem Vindo</legend>
                                            <label for="Modelo=">Modalidade:</label>
                                            <select class="form-control" v-model="Modelo">
                                                <option value="Cliente">Selecione o tipo de login</option>
                                                <option value="Empresa">Empresa</option>
                                                <option value="Vendedor">Vendedor</option>
                                                <option value="Revendedor">Revenda</option>
                                            </select>
                                            <br>
                                            <label for="Empresa">Empresa/Nome:</label>
                                            <input class="form-control" v-model="Empresa" placeholder="Empresa..."><br>
                                            <label for="Login">Login:</label>
                                            <input class="form-control" v-model="Login" placeholder="Login..."><br>
                                            <label for="Senha">Senha:</label>
                                            <input class="form-control" type="password" v-model="Senha" placeholder="Senha..."><br>
                                            <div class="text-center justify-content-center my-4">
                                                <button v-on:click.native class="btn btn-dark text-white" v-on:click="loginEmp">Enviar</button>
                                                <br><br>
                                                <?php if (strpos($_SERVER['HTTP_HOST'], "rtiempresarial") !== false) { ?>
                                                    <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalCliBienestar">Cadastrar</button> 
                                                <?php } ?>
                                                <button class="btn btn-dark text-white" data-toggle="modal" data-target="#modalRecuperaSenha" onclick="app.GerenciamentoCliente.getRandomNumber();">Recuperar senha</button>
                                                <br><br>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="row justify-content-center mt-2">
                            <fieldset class="border rounded container-fluid border-dark justify-content-center">
                                <legend class="border rounded text-center border-dark">Acesso por dispositivo</legend>
                                <button class="btn btn-dark text-white" v-on:click="conectarFB()">Acessar com Facebook</button><br><br>
                                <button class="btn btn-dark text-white" id="btngoogle" v-on:click="conectarGG()">Acessar com Google</button><br><br>
                                <button class="btn btn-dark text-white" v-on:click="buscarDispositivo();flag = 'Dispositivo'" >Acessar com Dispositivo</button><br><br>
                                <hr>
                                <div v-if='buscaDispositivo==true || (window.localStorage.hasOwnProperty("userinfoGG")==true)&&buscaDispositivo==false' class='spanCli text-center'>
                                    <button class="btn btn-dark text-white" v-on:click="listagem()" >Buscar</button><br><br>
                                    <h4>Escolha uma conta associada ao seu dispositivo</h4>
                                </div>

                                <div v-if="AuthSrc.length>0">
                                    <div  v-for="item in AuthSrc">
                                        <div class="row justify-content-center text-center">
                                            <div class="col-lg-4 col-md-4 m-1 p-1">
                                                <h5><span class='spanCli'>Empresa: </span>{{getEmpresa(item.IdEmpresa)}}</h5>
                                            </div>
                                            <div class="col-lg-4 col-md-4 m-1 p-1">
                                                <h5><span class='spanCli'>Funcionário: </span>{{getFunc(item.IdFunc)}}</h5>
                                            </div>
                                            <div class="col-lg-4 col-md-4 m-1 p-1">
                                                <h5><span class='spanCli'>Cliente: </span>{{getCliente(item.IdCliente)}}</h5>
                                            </div>
                                            <div class="col-lg-4 col-md-4 m-1 p-1">
                                                <h5><span class='spanCli'>E-mail: </span>{{item.Email}}</h5>
                                            </div>
                                            <div class="col-lg-4 col-md-4 m-1 p-1">
                                                <h5><span class='spanCli'>Login: </span>{{item.Login}}</h5>
                                            </div>
                                            <div class="col-lg-4 col-md-4 m-1 p-1">
                                                <button v-on:click="loginDevice(item._id['$oid'],'Empresa')" class="btn btn-dark text-white">Conectar funcionário</button>
                                            </div>
                                            <div class="col-lg-4 col-md-4 m-1 p-1">
                                                <button v-if="item.IdCliente!=='null'" v-on:click="loginDevice(item._id['$oid'],'Cliente')" class="btn btn-dark text-white">Conectar Cliente</button>
                                            </div>
                                        </div>
                                        <br>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <!--<div>
                        <h4>Você já está conectado, Clique aqui para ir para sua central de acesso.</h4><br>
                        <h4>Clique aqui para desconectar.</h4>
                    </div>-->
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
<div id="clientesite"></div>
<div id="funcionariosite"></div>
<script src="<?php echo $cdn; ?>ws/Site/cliente.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/funcionario.js"></script>
<script src="<?php echo $refUrl; ?>ws/Login/login.js"></script>
