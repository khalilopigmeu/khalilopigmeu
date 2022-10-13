<?php
$pgtitle = "Anúncios rápidos";
$page = "AnuncioRapido";
$td = ["" . $page => ["Id", "Titulo", "Mensagem", "Link", "Background", "Acessos"]];
$tdvue = ["" . $page => ["td.Titulo", "td.Mensagem", "td.Link", "td.Background", "app.sys.foreignKeyReplace(Loginsrc,'Login',td.Acessos)"]];

include $refUrl . "Mongo/template/head.php";
?>
<label>Título:</label>
<textarea class="form-control" v-model="Titulo" name="titulochamada" placeholder="Título..." ></textarea><br>
<label>Mensagem:</label>
<textarea class="form-control" v-model="Mensagem" name="mensagemchamada" placeholder="Mensagem..." ></textarea><br>
<label>Link:</label>
<input class="form-control" v-model="Link" placeholder="Link..." ><br>
<label>Imagem:</label>
<input class="form-control" v-model="Background" placeholder="Background..." ><br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<span class="btn" onclick="setModal('Login', 'AnuncioRapido')">Adicionar Acesso <i class="far fa-plus-square"></i></span><br>
<br><?php include $refUrl . "Mongo/template/foot.php" ?>