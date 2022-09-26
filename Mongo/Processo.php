<?php
$pgtitle = "Processos";
$page = "Processo";
$td = ["" . $page => ["Id", "Profissionais", "Nome", "Horas", "Descrição", "Permitir chamado", "Material"]];
$tdvue = ["" . $page => ["td.IdProfissional", "td.NomeProcesso", "td.Horas", "td.Descricao", "td.PermChamado", "td.Material"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Profissional:</label>
<select class="form-control" v-model="PromocaoItem" placeholder="Nome..."><br>
    <option v-if="Profissionalsrc!=null" v-for="el in app.sys.sorter(Profissionalsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeProfissao}}</option>
</select>
<br>
<label>Nome:</label>
<input class="form-control" v-model="NomeProcesso" placeholder="Nome..." ><br>
<label>Horas:</label>
<input class="form-control" v-model="Horas" placeholder="Nome..." ><br>
<label>Descrição:</label>
<textarea class="form-control" v-model="Descricao" placeholder="Nome..." ></textarea><br>
<label>Permissão de Chamado:</label>
<input class="form-control" type="checkbox" v-model="PermChamado" placeholder="Nome..." ><br>
<label>Material:</label>
<select class="form-control" v-model="PromocaoItem" placeholder="Nome..."><br>
    <option v-if="Produtosrc!=null" v-for="el in app.sys.sorter(Produtosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeProduto}}</option>
</select>
<br>
<?php include $refUrl . "Mongo/template/foot.php" ?>