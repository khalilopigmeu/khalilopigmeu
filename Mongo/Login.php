<?php
$pgtitle = "Login";
$page = "Login";
$td = ["" . $page => ["Id",
        "Id do Funcionário",
        "Id de Cliente",
        "Id Vendedor",
        "Id Revenda",
        "Id de Configuração",
        "Email",
        "Login",
        "Senha",
        "Validade",
        "Data de Cadastro",
        "Pergunta de segurança",
        "Lembrete de senha",
        "Id Facebook", "Id Google"]];
$tdvue = ["" . $page => ["app.sys.foreignKeyReplace(Funcionariosrc,'Nome',td.IdFunc)",
        "app.sys.foreignKeyReplace(Clientesrc,'Nome',td.IdCliente)",
        "app.sys.foreignKeyReplace(Vendedorsrc,'Nome',td.IdVendedor)",
        "app.sys.foreignKeyReplace(Revendasrc,'Nome',td.IdRevenda)",
        "app.sys.foreignKeyReplace(Configuracaosrc,'Nome',td.IdConfig)",
        "td.Email",
        "td.Login",
        "td.Senha",
        "td.Validade",
        "td.DataCadastro",
        "td.Ask",
        "td.Memorize",
        "td.UserIdFB",
        "td.UserIdGG",
        ]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Funcionário:</label>
<select class="form-control" v-model="IdFunc" placeholder="Campo...">
    <option  v-if="Funcionariosrc!=null" v-for="el in app.sys.sorter(Funcionariosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" onclick="zeroModal();setModal('Funcionarios', 'Login')">Adicionar Funcionário(a) <i class="far fa-plus-square"></i></span><br>
<br>
<label>Cliente:</label>
<select class="form-control" v-model="IdCliente" placeholder="Campo..." >
    <option  v-if="Vendedorsrc!=null" v-for="el in app.sys.sorter(Vendedorsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" onclick="zeroModal();setModal('Cliente', 'Login')">Adicionar Cliente <i class="far fa-plus-square"></i></span><br>
<br>
<label>Vendedor:</label>
<select class="form-control" v-model="IdVendedor" placeholder="Campo..." >
    <option v-if="Vendedorsrc!=null" v-for="el in app.sys.sorter(Vendedorsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" onclick="zeroModal();setModal('Vendedor', 'Login')">Adicionar Vendedor(a) <i class="far fa-plus-square"></i></span><br>
<br>
<label>Revenda:</label>
<select class="form-control" v-model="IdRevenda" placeholder="Campo..." >
    <option v-if="Revendasrc!=null" v-for="el in app.sys.sorter(Revendasrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" onclick="zeroModal();setModal('Revenda', 'Login')">Adicionar Revenda <i class="far fa-plus-square"></i></span><br>
<br>
<label>Configuração:</label>
<select class="form-control" v-model="IdConfig" placeholder="Campo..." >
    <option>Selecione a Configuração</option>
    <option v-if="Configuracaosrc!=null" v-for="el in app.sys.sorter(Configuracaosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<span class="btn" onclick="zeroModal();setModal('Configuracao', 'Login')">Adicionar Configuração <i class="far fa-plus-square"></i></span><br>
<br>
<label>Email:</label>
<input class="form-control" v-model="Email" placeholder="Campo..." required="required"><br>
<br>
<label>Login:</label>
<input class="form-control" v-model="Login" placeholder="Campo..." required="required"><br>
<br>
<label>Senha:</label>
<input class="form-control" type="password" v-model="Senha" placeholder="Campo..." required="required"><br>
<br>
<label>Data Cadastro:</label>
<input class="form-control" v-model="DataCadastro" placeholder="Campo..."><br>
<br>
<label>Validade:</label>
<input class="form-control" v-model="Validade" placeholder="Campo..."><br>
<br>
<label>Pergunta de segurança:</label>
<input class="form-control" v-model="Ask" placeholder="Campo..."><br>
<br>
<label>Lembrete de Senha:</label>
<input class="form-control" v-model="Memorize" placeholder="Campo..."><br>
<br>
<label>Id Facebook:</label>
<input class="form-control" v-on:focus="conectarFB()" v-model="UserIdFB" placeholder="Campo..."><br>
<br>
<label>Id Google:</label>
<input class="form-control" v-on:focus="conectarGG()" v-model="UserIdGG" placeholder="Campo..."><br>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>