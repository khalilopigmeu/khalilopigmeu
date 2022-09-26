<?php
$pgtitle = "Controle de acesso";
$page = "Ravec";
$td = ["" . $page => []];
$tdvue = ["" . $page => []];
include $refUrl . "Mongo/template/head.php"
?>
<label>Acessos:</label>
<?php if (strpos($_SERVER['HTTP_HOST'], "rtiempresarial") !== false) { ?>
    <a href="#" onclick="setModal('RootAccess', 'Ravec')">Adicionar Aceso<i class="far fa-plus-square"></i></a><br>
<?php } ?>
<select class="form-control" v-model="Acessos" v-on:change="updateAcesso" placeholder="Acessos..." required="required">
    <option selected>Selecione o usuário</option>
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<a href="#" onclick="setModal('Login', 'Ravec')">Adicionar Login <i class="far fa-plus-square"></i></a><br>
<div v-for="(item,index) in opcoes" class="my-3 py-3" v-if="item.nome!='acesso root' && item.nivel>0">
    <label>{{item.nome}}: </label>
    <input type="checkbox" v-on:click="check(1,index,$event)"  :checked='item.nivel>=1'><span class="ml-1 pr-3 lead" >Visualizar</span>
    <input type="checkbox" v-on:click="check(2,index,$event)" v-if='item.nivel>=1' :checked='item.nivel>=2'><span class="ml-1 pr-3 lead" >Cadastrar</span>
    <input type="checkbox" v-on:click="check(3,index,$event)" v-if='item.nivel>=2' :checked='item.nivel>=3'><span class="ml-1 pr-3 lead" >Alterar</span>
    <input type="checkbox" v-on:click="check(4,index,$event)" v-if='item.nivel>=3' :checked='item.nivel>=4'><span class="ml-1 pr-3 lead" >Excluir</span>
    <input type="checkbox" v-on:click="check(5,index,$event)" v-if='item.nivel>=4' :checked='item.nivel>=5'><span class="ml-1 pr-3 lead" >Relatório</span>
</div>
<button class="btn btn-dark" v-on:click="updateRAVEC">Salvar</button>
<?php include $refUrl . "Mongo/template/foot.php" ?>