<?php
$pgtitle = "acesso root";
$page = "RootAccess";
$td = ["" . $page => ["Id"]];
$tdvue = ["" . $page => [""]];

include $refUrl . "Mongo/template/head.php"
?>
<div v-if="app.sys.urlSite.includes('rtiempresarial')">
    <label>Empresa:</label>
    <select class="form-control" v-model="selEmpresa" v-on:change="login()" placeholder="Empresa..." >
        <option v-for="el in app.sys.sorter(EmpresaSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeFantasia}}-{{el.Nome}}</option>
    </select>
    <label>Login:</label>
    <select class="form-control" v-model="selLogin" placeholder="Login..." >
        <option v-for="el in app.sys.sorter(LoginSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
    </select>
    <label>Senha Admin:</label>
    <input type="password" v-model="SenhaAdmin" class="form-control"><br>
    <br>
    <a href='#' v-on:click="solicitaRoot()" class="btn btn-dark">Solicitar</a>
</div>
<div v-if="Rooted==true">
    <label>Acessos:</label>
    <select class="form-control" v-model="Acessos" v-on:change="updateAcesso" placeholder="Acessos..." required="required">
        <option selected>Selecione o usuário</option>
        <option v-if="LoginSrc!=null" v-for="el in app.sys.sorter(LoginSrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
    </select>
    <span class="btn" onclick="setModal('Login', 'RootAccess')">Adicionar Login <i class="far fa-plus-square"></i></span><br>
    <label>Padrão:</label>
    <select class="form-control" v-on:change="padronizar" v-model="padrao">
        <option value="">Selecione uma opção</option>
        <option value="Cliente">Cliente</option>
        <option value="Site">Site</option>
        <option valule="Ecommerce">Loja Virtual</option>
        <option value="Atendimento">Consultorio</option>
        <option value="Empresa">Full</option>
    </select>
    <div v-for="(item,index) in opcoes" class="my-3 py-3">
        <label>{{item.nome}}: </label>
        <input type="checkbox" v-on:click="check(1,index,$event)"  :checked='item.nivel>=1'><span class="ml-1 pr-3 lead" >Visualizar</span>
        <input type="checkbox" v-on:click="check(2,index,$event)" v-if='item.nivel>=1' :checked='item.nivel>=2'><span class="ml-1 pr-3 lead" >Cadastrar</span>
        <input type="checkbox" v-on:click="check(3,index,$event)" v-if='item.nivel>=2' :checked='item.nivel>=3'><span class="ml-1 pr-3 lead" >Alterar</span>
        <input type="checkbox" v-on:click="check(4,index,$event)" v-if='item.nivel>=3' :checked='item.nivel>=4'><span class="ml-1 pr-3 lead" >Excluir</span>
        <input type="checkbox" v-on:click="check(5,index,$event)" v-if='item.nivel>=4' :checked='item.nivel>=5'><span class="ml-1 pr-3 lead" >Relatório</span>
    </div>
    <button class="btn btn-dark" v-on:click="updateRAVEC">Salvar</button>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>