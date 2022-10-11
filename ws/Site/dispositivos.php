<div id="LoginsOauth" v-if="app.sys.page==='logins'">
</div>
<div id="Dispositivos" v-if="app.sys.page==='dispositivos'">
    <button class="btn btn-dark text-white" v-if="mobile()===false" v-on:click="conectarFB()">Acessar com Facebook</button><br><br>
    <button class="btn btn-dark text-white" v-if="mobile()===false" v-on:click="conectarGG()">Acessar com Google</button><br><br>
    <button class="btn btn-dark text-white"  v-if="mobile()===true" v-on:click="buscar();app.Dispositivos.flag = 'Dispositivo'" >Acessar com Dispositivo</button><br><br>

    <div id="g_id_onload"
         data-client_id="1067522805118-jloabvn8n7vqlnd8qd6gj2ut11ojck1m.apps.googleusercontent.com"
         data-context="signin"
         data-ux_mode="popup"
         data-login_uri="rtiempresarial.com.br/index.php#dispositivos">
    </div>
    <div class="g_id_signin"
         data-type="standard"
         data-shape="rectangular"
         data-theme="outline"
         data-text="$ {button.text}"
         data-size="large"
         data-logo_alignment="left">
    </div>
    <hr>
    <div v-if='busca==true' class='spanCli text-center'>
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
                    <button v-on:click="conectarSistema(item._id['$oid'])" class="btn btn-dark text-white">Conectar Funcionário</button>
                </div>
                <div class="col-lg-4 col-md-4 m-1 p-1">
                    <button v-if="item.IdCliente!=='null'" v-on:click="conectarCliente(item._id['$oid'])" class="btn btn-dark text-white">Conectar Cliente</button>
                </div>
            </div>
            <br>


            <hr>
        </div>
    </div>
</div>
<div id="clientesite"></div>
<div id="funcionariosite"></div>
<script src="<?php echo $cdn; ?>ws/Site/logins.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/dispositivos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/cliente.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/funcionario.js"></script>
