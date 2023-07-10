<?php
$pgtitle = "Cliente";
$page = "Cliente";
$td = ["" . $page => ["Id", "Nome", "CPF", "Telefone", "Celular", "CNPJ", "Razão Social", "Nome Fantasia"]];
$tdvue = ["" . $page => ["td.Nome", "td.Cpf", "td.DataNasc", "td.Telefone", "td.Celular", "td.Cnpj", "td.RazaoSocial", "td.NomeFantasia"]];

include $refUrl . "Mongo/template/head.php"
?>
<fieldset>
    <label>Tipo de pessoa:</label>
    <select class="form-control" v-model="optCad" name="optCad">
        <option selected>Selecione o tipo de cadastro</option>
        <option value="fisica">Pessoa Física</option>
        <option value="juridica">Pessoa Jurídica</option>
    </select><br>
</fieldset>
<fieldset  v-if="optCad==='fisica'" class="border rounded container-fluid border-dark">
    <legend class="border rounded text-center border-dark">Pessoa Física</legend>
    <label for="Cpf">CPF:</label>
    <input disabled="true" type="text" class="cpf form-control" placeholder="xxx.xxx.xxx-xx" v-on:focus="mascara" v-model="Cpf" name="Cpf"><br>
    <label for="Nome">Nome:</label>
    <input disabled="true" type="text" v-model="Nome" name="Nome"  class="form-control"><br>
    <label for="DataNasc">Data de Nascimento:</label>
    <input disabled="true" type="date" v-model="DataNasc" name="DataNasc" class="form-control"><br>
</fieldset>
<fieldset v-else-if="optCad==='juridica'" class="border rounded container-fluid border-dark">
    <legend class="border rounded text-center border-dark">Pessoa Jurídica</legend>
    <label for="Nome">Nome Fantasia:</label>
    <input disabled="true" type="text" v-model="Nome" name="Nome" class="form-control"><br>
    <label for="Cnpj">CNPJ:</label>
    <input disabled="true" type="text" placeholder="xx.xxx.xxx/xxxx-xx" class="cnpj form-control" v-on:focus="mascara" v-model="Cnpj" name="Cnpj"><br>
    <label for="RazaoSocial">Razão Social:</label>
    <textarea v-model="RazaoSocial" name="RazaoSocial" class="form-control"></textarea><br>
    <fieldset  class="border rounded container-fluid border-dark">
        <legend class="border rounded text-center border-dark">Responsável</legend>
        <label for="Cpf">CPF:</label>
        <input disabled="true" type="text" class="cpf form-control" placeholder="xxx.xxx.xxx-xx" v-on:focus="mascara" v-model="Cpf" name="Cpf"><br>
        <label for="Nome">Nome:</label>
        <input disabled="true" type="text" v-model="Nome" name="Nome"  class="form-control"><br>
        <label for="DataNasc">Data de Nascimento:</label>
        <input disabled="true" type="date" v-model="DataNasc" name="DataNasc" class="form-control"><br>
    </fieldset>
</fieldset>
<fieldset  v-else class="border rounded container-fluid border-dark">
    {{optCad}}
</fieldset>
<br>
<label for="Telefone">Telefone:</label>
<input disabled="true" type="text" placeholder="(xx) xxxx-xxxx" class="telefone form-control" v-model="Telefone" name="Telefone"><br>
<label for="celular">Celular:</label>
<input disabled="true" type="text" v-model="Celular" name="Celular" class="celular form-control" placeholder="(xx) xxxxx-xxxx" ><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>