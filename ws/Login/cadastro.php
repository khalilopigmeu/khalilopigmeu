<div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="modalCliBienestar">
    <div class="modal-dialog modal-dialog-centered mw-100 w-75">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Cadastre-se no Bienestar</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body justify-content-center container-fluid">
                <script type="text/javascript">
                    if (getAuth() === null) {
                        setAuth(decrypt(app.sys.bien, "encodedstring"));
                    }
                </script>
                <div class="row justify-content-center">
                    <form action="" method="post">
                        <fieldset class="border rounded container-fluid border-dark my-3 py-3 w-90">
                            <legend class="border rounded text-center border-dark">Dados de cliente</legend>
                            <fieldset>
                                <label>Tipo de cadastro:</label>
                                <select class="form-control" v-model="optCad" name="optCad">
                                    <option selected>Selecione o tipo de cadastro</option>
                                    <option value="usuario">Usuário</option>
                                    <option value="fisica">Anunciante</option>
                                    <option value="juridica">Empresa</option>
                                </select><br>
                            </fieldset>
                            <fieldset  v-if="optCad==='fisica'" class="border rounded container-fluid border-dark">
                                <legend class="border rounded text-center border-dark">Pessoa Física</legend>
                                <label for="Cpf">CPF:</label>
                                <input type="text" class="cpf form-control" v-on:blur="app.sys.consultaCad('cliente',app.clientLogin.Cpf)" placeholder="xxx.xxx.xxx-xx" v-on:focus="mascara" v-model="Cpf" name="Cpf"><br>
                                <label for="Rg">Rg:</label>
                                <input type="text" class="rg form-control" placeholder="xx.xxx.xxx-x" v-model="Rg" name="Rg"><br>
                                <label for="Nome">Nome:</label>
                                <input type="text" v-model="Nome" name="Nome"  class="form-control"><br>
                                <label for="DataNasc">Data de Nascimento:</label>
                                <input type="text" v-model="DataNasc" name="DataNasc" class="data datepicker form-control"><br>
                                <label for="CEP">CEP:</label>
                                <input type="text" v-on:blur="app.sys.buscaCEP('clientLogin')" v-model="CEP" name="CEP" placeholder="xxxxx-xxx" class="cep form-control"><br>
                                <label for="UF">Estado:</label>
                                <input type="text" v-model="UF" name="UF" class="estado form-control"><br>
                                <label for="Cidade">Cidade:</label>
                                <input type="text" v-model="Cidade" name="Cidade" class="cidade form-control"><br>
                                <label for="Bairro">Bairro:</label>
                                <input type="text" v-model="Bairro" name="Bairro" class="bairro form-control"><br>
                                <label for="Rua">Rua:</label>
                                <input type="text" v-model="Rua" name="Rua" class="rua form-control"><br>
                                <label for="Num">Número:</label>
                                <input type="text" v-model="Num" name="Num" class="form-control"><br>
                                <label for="Complemento">Complemento:</label>
                                <input type="text" v-model="Complemento" name="Complemento" class="form-control" ><br>
                            </fieldset>
                            <fieldset v-else-if="optCad==='juridica'" class="border rounded container-fluid border-dark">
                                <legend class="border rounded text-center border-dark">Pessoa Jurídica</legend>
                                <label for="NomeFantasia">Nome Fantasia:</label>
                                <input type="text" v-model="NomeFantasia" name="Nome" class="form-control"><br>
                                <label for="Cnpj">CNPJ:</label>
                                <input type="text" placeholder="xx.xxx.xxx/xxxx-xx" class="cnpj form-control" v-on:blur="app.sys.consultaCad('cliente',app.clientLogin.Cnpj)" v-on:focus="mascara" v-model="Cnpj" name="Cnpj"><br>
                                <label for="RazaoSocial">Razão Social:</label>
                                <textarea v-model="RazaoSocial" name="RazaoSocial" class="form-control"></textarea><br>
                                <label for="IEs">Estado:</label>
                                <select name="IEs" class="IEstate form-control">
                                    <option>Selecione o estado</option>
                                    <option value="xx.xxx.xxx/xxx-xx">AC</option>
                                    <option value="xxxxxxxxx">AL</option>
                                    <option value="xxxxxxxxx">AP</option>
                                    <option value="xx.xxx.xxx-x">AM</option>
                                    <option value="xxx.xxx.xx-x">BA</option>
                                    <option value="xxxxxxxx-x">CE</option>
                                    <option value="xxxxxxxxxxx-xx">DF</option>
                                    <option value="xxx.xxx.xx-x">ES</option>
                                    <option value="xx.xxx.xxx-x">GO</option>
                                    <option value="xxxxxxxxx">MA</option>
                                    <option value="xxxxxxxxx">MT</option>
                                    <option value="xxxxxxxxx">MS</option>
                                    <option value="xxx.xxx.xxx/xxxx">MG</option>
                                    <option value="xx-xxxxxx-x">PA</option>
                                    <option value="xxxxxxxx-x">PB</option>
                                    <option value="xxxxxxxx-xx">PR</option>
                                    <option value="xxxxxxxxx">PI</option>
                                    <option value="xx.xxx.xx-x">RJ</option>
                                    <option value="xx.xxx.xxx-x">RN</option>
                                    <option value="xxx-xxxxxxx">RS</option>
                                    <option value="xxxxxxxx-x">RR</option>
                                    <option value="xxx.xxx.xxx">SC</option>
                                    <option value="xxx.xxx.xxx.xxx">SP</option>
                                    <option value="xxxxxxxxx-x">SE</option>
                                    <option value="xxxxxxxxxxx">TO</option>
                                </select><br>
                                <label for="IE">IE:</label>
                                <input type="text" class="ie form-control" v-model="IE" name="IE"><br>
                                <label for="IM">IM:</label>
                                <input type="text" v-model="IM" name="IM" class="form-control"><br>
                                <label for="CNAE">CNAE:</label>
                                <input type="text" v-model="CNAE" name="CNAE"  class="form-control"><br>
                                <label for="crt">CRT:</label>
                                <input type="text" v-model="CRT" name="CRT"  class="form-control"><br>
                                <label for="CEP">CEP:</label>
                                <input type="text" v-on:blur="app.sys.buscaCEP('clientLogin')" v-model="CEP" name="CEP" placeholder="xxxxx-xxx" class="cep form-control"><br>
                                <label for="UF">Estado:</label>
                                <input type="text" v-model="UF" name="UF" class="estado form-control"><br>
                                <label for="Cidade">Cidade:</label>
                                <input type="text" v-model="Cidade" name="Cidade" class="cidade form-control"><br>
                                <label for="Bairro">Bairro:</label>
                                <input type="text" v-model="Bairro" name="Bairro" class="bairro form-control"><br>
                                <label for="Rua">Rua:</label>
                                <input type="text" v-model="Rua" name="Rua" class="rua form-control"><br>
                                <label for="Num">Número:</label>
                                <input type="text" v-model="Num" name="Num" class="form-control"><br>
                                <label for="Complemento">Complemento:</label>
                                <input type="text" v-model="Complemento" name="Complemento" class="form-control" ><br>
                                <label for="Telefone">Telefone:</label>
                                <input type="text" placeholder="(xx) xxxx-xxxx" class="telefone form-control" v-model="Telefone" name="Telefone"><br>
                                <fieldset  class="border rounded container-fluid border-dark">
                                    <legend class="border rounded text-center border-dark">Responsável</legend>
                                    <label for="Cpf">CPF:</label>
                                    <input type="text" class="cpf form-control" placeholder="xxx.xxx.xxx-xx" v-on:focus="mascara" v-model="Cpf" name="Cpf"><br>
                                    <label for="Rg">Rg:</label>
                                    <input type="text" class="rg form-control" placeholder="xx.xxx.xxx-x" v-model="Rg" name="Rg"><br>
                                    <label for="Nome">Nome:</label>
                                    <input type="text" v-model="Nome" name="Nome"  class="form-control"><br>
                                    <label for="DataNasc">Data de Nascimento:</label>
                                    <input type="text" v-model="DataNasc" name="DataNasc" class="data datepicker form-control"><br>
                                </fieldset>
                            </fieldset>
                            <fieldset  v-else class="border rounded container-fluid border-dark">
                                {{optCad}}
                            </fieldset>
                            <br>
                            <label for="celular">Celular:</label>
                            <input type="text" v-model="Celular" name="Celular" class="celular form-control" placeholder="(xx) xxxxx-xxxx" ><br>
                            <label for="Email">Email:</label>
                            <input type="email" placeholder="email@email.com"  class="form-control" v-on:blur="app.sys.consultaCad('login',app.clientLogin.Email)" v-model="Email" name="Email" required="required"><br>
                            <label for="Login">Login:</label>
                            <input type="text" v-model="Login" name="Login" class="loginc form-control" required="required"><br>
                            <label for="Senha">Senha:</label>
                            <input type="password" class="form-control" v-model="Senha" name="Senha" required="required"><br>
                            <input type="hidden" v-model="id" name="id">
                            <br>
                            <div class='justify-content-center text-center m-1 p-1'>
                                <input type="checkbox" v-model="eula"> <a class='text-white' target="_blank" href="<?php echo $refUrl; ?>eula.php">Termos de Uso</a>
                                <br>
                                <input type="checkbox" v-model="lgpd"> <a class='text-white' target="_blank" href="<?php echo $refUrl; ?>lgpd.php">Política de privacidade</a>
                            </div>
                            <hr>
                            <input v-if='eula==true&&lgpd==true&&app.sys.onsys==true' class="btn btn-dark" type="submit" v-on:click="cadastro" value="Enviar"><br><br>
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