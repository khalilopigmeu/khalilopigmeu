<?php
$pgtitle = "Meio de Pagamento";
$page = "MeioPagamento";
$td = ["" . $page => ["Id", "Nome", "Ambiente", "Email", "Token Sandbox", "AppId Sandbox", "Senha Sandbox", "Token Produção", "AppId Produção", "Senha Produção"]];
$tdvue = ["" . $page => ["td.Nome", "td.Ambiente", "td.Email", "td.TokenSandbox", "td.AppIdSandbox", "td.SenhaSandbox",
        "td.TokenProducao", "td.AppIdProducao", "td.SenhaProducao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<select class="form-control" v-model="Nome" >
    <option value="pagseguro">PagSeguro</option>
</select>
    <br>
<br>
<label>Ambiente:</label>
<input class="form-control" type="radio" value="sandbox" v-model="Ambiente">Teste<br>
<input class="form-control" type="radio" value="producao" v-model="Ambiente">Produção<br>
<br>
<label>Email:</label>
<input class="form-control" v-model="Email" placeholder="Email..."><br>
<br>
<label>Token Sandbox:</label>
<input class="form-control" v-model="TokenSandbox" placeholder="Token Sandbox..."><br>
<br>
<label>AppId Sandbox:</label>
<input class="form-control" v-model="AppIdSandbox" placeholder="AppId Sandbox..."><br>
<br>
<label>Senha Sandbox:</label>
<input class="form-control" v-model="SenhaSandbox" placeholder="Senha Sandbox..."><br>
<br>
<label>Token Produção:</label>
<input class="form-control" v-model="TokenProducao" placeholder="Token Produção..."><br>
<br>
<label>AppId Produção:</label>
<input class="form-control" v-model="AppIdProducao" placeholder="AppId Produção..."><br>
<br>
<label>Senha Produção:</label>
<input class="form-control" v-model="SenhaProducao" placeholder="Senha Produção..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>