<!-- 
VueApp name = Configuracao 
titulo = Configuração
app = Configuracao
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model="Campo" placeholder="Campo..." ><br>
nometabela = tblConfiguracao
-->
<?php
$pgtitle = "Configuração";
$page = "Configuracao";
$td = ["" . $page => ["Id", "Nome", "Backup", "Saldo", "Site", "Instagram", "Facebook", "FTP", "Usuário", "Senha", "Porta",
        "PagSeguro - Email", "PagSeguro - Chave", "PagSeguro - Id", "PagSeguro - Token", "Nº NF", "Modelo", "Finalidade", "Série",
        "Ambiente", "Tipo de Impressão", "Tipo de emissão", "AppId FB", "Google API Key", "Cliente GOOGLE OAUTH", "Chave Google",
        "Aviso sobre Chamado", "Emails deChamado", "Aviso sobre Vencimento", "Emails deVencimento", "Aviso sobre Contabil",
        "Emails deContabil", "Aviso sobre Agenda", "Emails deAgenda", "Aviso sobre Compra", "Emails deCompra", "Aviso sobre Estoque", "Emails deEstoque", "Logo"]];

$tdvue = ["" . $page => ["td.Nome", "td.Ghost", "td.SaldoCaixa", "td.Site", "td.Instagram", "td.Facebook", "td.FtpUrl", "td.FtpLogin", "td.FtpSenha", "td.FtpPorta",
        "td.PagSeguroEmail", "td.PagSeguroKey", "td.PagSeguroId", "td.PagSeguroToken", "td.NNF", "td.Model", "td.FinNFe", "td.Serie", "td.Ambiente", "td.TpImp", "td.TpEmis",
        "td.appId", "td.googleApiKey", "td.clienteOAuth", "td.ChaveGoogle", "td.AvisoChamado", "td.EmailsChamado", "td.AvisoVencimento", "td.EmailsVencimento",
        "td.AvisoContabil", "td.EmailsContabil", "td.AvisoAgenda", "td.EmailsAgenda", "td.AvisoCompra", "td.EmailsCompra", "td.AvisoEstoque", "td.EmailsEstoque", "td.LogoURL"]];

include $refUrl . "Mongo/template/head.php"
?>

<nav>
    <div class="nav nav-tabs" id="nav-config" role="tablist">
        <a class="nav-item nav-link active" id="tnav-conf" data-toggle="tab" href="#nav-sys" role="tab" aria-controls="nav-web" aria-selected="true" data-model="1">Sistema</a>
        <a class="nav-item nav-link" id="tnav-web" data-toggle="tab" href="#nav-web" role="tab" aria-controls="nav-web" data-model="1">Web</a>
        <a class="nav-item nav-link " id="tnav-pagseguro" data-toggle="tab" href="#nav-pagseguro" role="tab" aria-controls="nav-pagseguro" aria-selected="false" data-model="2">Pag Seguro</a>
        <a class="nav-item nav-link " id="tnav-avisos" data-toggle="tab" href="#nav-avisos" role="tab" aria-controls="nav-avisos" aria-selected="false" data-model="3">Avisos</a>
        <a class="nav-item nav-link " id="tnav-nfe" data-toggle="tab" href="#nav-nfe" role="tab" aria-controls="nav-nfe" aria-selected="false" data-model="4">NF-e</a>
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
        <div class="tab-pane fade" id="nav-pagseguro" role="tabpanel" aria-labelledby="nav-evt-tab">
            <label>PagSeguro Email:</label>
            <input class="form-control" v-model="PagSeguroEmail" placeholder="Campo..." ><br>
            <br>
            <label>PagSeguro Id:</label>
            <input class="form-control" v-model="PagSeguroId" placeholder="Campo..." ><br>
            <br>
            <label>PagSeguro Key:</label>
            <input class="form-control" v-model="PagSeguroKey" placeholder="Campo..." ><br>
            <br>
            <label>PagSeguro Token:</label>
            <input class="form-control" v-model="PagSeguroToken" placeholder="Campo..." ><br>
            <br>
        </div>
        <div class="tab-pane fade" id="nav-avisos" role="tabpanel" aria-labelledby="nav-evt-tab">
            <label>Aviso de Chamado:</label>
            <input class="form-control" v-model="AvisoChamado" placeholder="Campo..." ><br>
            <br>
            <label>Email de Chamado:</label>
            <input class="form-control" v-model="EmailsChamado" placeholder="Campo..." ><br>
            <br>
            <label>Aviso de Vencimento:</label>
            <input class="form-control" v-model="AvisoVencimento" placeholder="Campo..." ><br>
            <br>
            <label>Email de Vencimento:</label>
            <input class="form-control" v-model="EmailsVencimento" placeholder="Campo..." ><br>
            <br>
            <label>Aviso de Contabil:</label>
            <input class="form-control" v-model="AvisoContabil" placeholder="Campo..." ><br>
            <br>
            <label>Email de Contabil:</label>
            <input class="form-control" v-model="EmailsContabil" placeholder="Campo..." ><br>
            <br>
            <label>Aviso de Agenda:</label>
            <input class="form-control" v-model="AvisoAgenda" placeholder="Campo..." ><br>
            <br>
            <label>Email de Agenda:</label>
            <input class="form-control" v-model="EmailsAgenda" placeholder="Campo..." ><br>
            <br>
            <label>Aviso de Compra:</label>
            <input class="form-control" v-model="AvisoCompra" placeholder="Campo..." ><br>
            <br>
            <label>Email de Compra:</label>
            <input class="form-control" v-model="EmailsCompra" placeholder="Campo..." ><br>
            <br>
            <label>Aviso de Estoque:</label>
            <input class="form-control" v-model="AvisoEstoque" placeholder="Campo..." ><br>
            <br>
            <label>Email de Estoque:</label>
            <input class="form-control" v-model="EmailsEstoque" placeholder="Campo..." ><br>
            <br>
        </div>
        <div class="tab-pane fade" id="nav-nfe" role="tabpanel" aria-labelledby="nav-evt-tab">
            <label>Ambiente:</label>
            <input class="form-control" v-model="Ambiente" placeholder="Campo..." ><br>
            <br>
            <label>Nº NF:</label>
            <input class="form-control" v-model="NNF" placeholder="Campo..." ><br>
            <br>
            <label>Modelo:</label>
            <input class="form-control" v-model="Model" placeholder="Campo..." ><br>
            <br>
            <label>Finalidade:</label>
            <input class="form-control" v-model="FinNFe" placeholder="Campo..." ><br>
            <br>
            <label>Série:</label>
            <input class="form-control" v-model="Serie" placeholder="Campo..." ><br>
            <br>
            <label>Impressão:</label>
            <input class="form-control" v-model="TpImp" placeholder="Campo..." ><br>            
        </div>
    </div>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>