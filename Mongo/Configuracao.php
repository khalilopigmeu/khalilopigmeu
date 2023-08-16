<?php
$pgtitle = "Configuração";
$page = "Configuracao";
$td = ["" . $page => ["Id", "Nome", "Site", "LogoURL", "Ghost", "FtpUrl", "FtpLogin", "FtpPorta", "FtpSenha", "SaldoCaixa",
        "googleApiKey", "ChaveGoogle", "clienteOAuth", "Facebook", "appId", "Instagram", "MeioPagamento"]];
$tdvue = ["" . $page => ["td.Nome", "td.Site", "td.LogoURL", "td.Ghost", "td.FtpUrl", "td.FtpLogin", "td.FtpPorta", "td.FtpSenha", "td.SaldoCaixa",
        "td.googleApiKey", "td.ChaveGoogle", "td.clienteOAuth", "td.Facebook", "td.appId", "td.Instagram", "td.MeioPagamento"]];

include $refUrl . "Mongo/template/head.php"
?>

<nav>
    <div class="nav nav-tabs" id="nav-config" role="tablist">
        <a class="nav-item nav-link active" id="tnav-conf" data-toggle="tab" href="#nav-sys" role="tab" aria-controls="nav-web" aria-selected="true" data-model="1">Sistema</a>
        <a class="nav-item nav-link" id="tnav-web" data-toggle="tab" href="#nav-web" role="tab" aria-controls="nav-web" data-model="1">Web</a>
    </div>
</nav>
<div class="row justify-content-center mt-4">
    <div class="tab-content justify-content-center container-fluid mt-3" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-sys" role="tabpanel" aria-labelledby="nav-evt-tab">
            <label>Nome:</label>
            <input class="form-control" v-model="Nome" placeholder="Campo..." ><br>
            <label>Saldo em caixa:</label>
            <input class="form-control" v-model="SaldoCaixa" placeholder="Campo..." ><br>
            <br>
            <label>Backup:</label>
            <input class="form-control" v-model="Ghost" placeholder="Campo..." ><br>
        </div>
        <div class="tab-pane fade" id="nav-web" role="tabpanel" aria-labelledby="nav-evt-tab">
            <label>Logo:</label>
            <input class="form-control" v-model="LogoURL" placeholder="Campo..." ><br>
            <br>
            <label>Site:</label>
            <input class="form-control" v-model="Site" placeholder="Campo..." ><br>
            <br>
            <label>Instagram:</label>
            <input class="form-control" v-model="Instagram" placeholder="Campo..." ><br>
            <br>
            <label>Facebook:</label>
            <input class="form-control" v-model="Facebook" placeholder="Campo..." ><br>
            <br>
            <label>Ftp Url:</label>
            <input class="form-control" v-model="FtpUrl" placeholder="Campo..." ><br>
            <br>
            <label>Ftp Usuário:</label>
            <input class="form-control" v-model="FtpLogin" placeholder="Campo..." ><br>
            <br>
            <label>Ftp Senha:</label>
            <input class="form-control" v-model="FtpSenha" placeholder="Campo..." ><br>
            <br>
            <label>Ftp Porta:</label>
            <input class="form-control" v-model="FtpPorta" placeholder="Campo..." ><br>
            <br>
            <label>AppIdFB:</label>
            <input class="form-control" v-model="appId" placeholder="Campo..." ><br>
            <br>
            <label>OAuth FB:</label>
            <input class="form-control" v-model="clienteOAuth" placeholder="Campo..." ><br>
            <br>
            <label>Google API:</label>
            <input class="form-control" v-model="googleApiKey" placeholder="Campo..." ><br>
            <br>
            <label>API Key:</label>
            <input class="form-control" v-model="ChaveGoogle" placeholder="Campo..." ><br>
            <br>
        </div>
    </div>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>