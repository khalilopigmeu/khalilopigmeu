<?php
$pgtitle = "Cliente";
$page = "usuariosite";
$td = ["" . $page => ["Id", "Nome", "CPF", "Data Nasc.", "Rg", "CEP", "UF", "Cidade", "Bairro", "Logradouro", "Número", "Complemento", "Telefone", "Celular", "CNPJ", "Razão Social", "Nome Fantasia", "CNAE", "CRT", "IE", "IM"]];
$tdvue = ["" . $page => ["td.Nome", "td.Cpf", "td.DataNasc", "td.Rg", "td.CEP", "td.UF", "td.Cidade", "td.Bairro", "td.Rua", "td.Num", "td.Complemento", "td.Telefone", "td.Celular", "td.Cnpj", "td.RazaoSocial", "td.NomeFantasia", "td.CNAE", "td.CRT", "td.IE", "td.IM"]];

include $refUrl . "model/head.php"
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
    <input type="text" class="cpf form-control" placeholder="xxx.xxx.xxx-xx" v-on:focus="mascara" v-model="Cpf" name="Cpf"><br>
    <label for="Rg">Rg:</label>
    <input type="text" class="rg form-control" placeholder="xx.xxx.xxx-x" v-model="Rg" name="Rg"><br>
    <label for="Nome">Nome:</label>
    <input type="text" v-model="Nome" name="Nome"  class="form-control"><br>
    <label for="DataNasc">Data de Nascimento:</label>
    <input type="date" v-model="DataNasc" name="DataNasc" class="form-control"><br>
</fieldset>
<fieldset v-else-if="optCad==='juridica'" class="border rounded container-fluid border-dark">
    <legend class="border rounded text-center border-dark">Pessoa Jurídica</legend>
    <label for="Nome">Nome Fantasia:</label>
    <input type="text" v-model="Nome" name="Nome" class="form-control"><br>
    <label for="Cnpj">CNPJ:</label>
    <input type="text" placeholder="xx.xxx.xxx/xxxx-xx" class="cnpj form-control" v-on:focus="mascara" v-model="Cnpj" name="Cnpj"><br>
    <label for="RazaoSocial">Razão Social:</label>
    <textarea v-model="RazaoSocial" name="RazaoSocial" class="form-control"></textarea><br>
    <label for="IEs">Estado:</label>
    <select name="IEs" class="IEstate form-control">
        <option>Selecione o estado</option>
        <option value="xx.xxx.xxx/xxx-xx">AC</option>
        <option value="xxxxxxxxx">AL</option>
        <option value="xxxxxxxxx">AP</option>
        <option value="xx.xxx.xxx-x">AM</option>
        <option value="xxx.xxx.xx-x">BA</option>
        <option value="xxxxxxxx-x">CE</option>
        <option value="xxxxxxxxxxx-xx">DF</option>
        <option value="xxx.xxx.xx-x">ES</option>
        <option value="xx.xxx.xxx-x">GO</option>
        <option value="xxxxxxxxx">MA</option>
        <option value="xxxxxxxxx">MT</option>
        <option value="xxxxxxxxx">MS</option>
        <option value="xxx.xxx.xxx/xxxx">MG</option>
        <option value="xx-xxxxxx-x">PA</option>
        <option value="xxxxxxxx-x">PB</option>
        <option value="xxxxxxxx-xx">PR</option>
        <option value="xxxxxxxxx">PI</option>
        <option value="xx.xxx.xx-x">RJ</option>
        <option value="xx.xxx.xxx-x">RN</option>
        <option value="xxx-xxxxxxx">RS</option>
        <option value="xxxxxxxx-x">RR</option>
        <option value="xxx.xxx.xxx">SC</option>
        <option value="xxx.xxx.xxx.xxx">SP</option>
        <option value="xxxxxxxxx-x">SE</option>
        <option value="xxxxxxxxxxx">TO</option>
    </select><br>
    <label for="IE">IE:</label>
    <input type="text" class="ie form-control" v-model="IE" name="IE"><br>
    <label for="IM">IM:</label>
    <input type="text" v-model="IM" name="IM" class="form-control"><br>
    <label for="CNAE">CNAE:</label>
    <input type="text" v-model="CNAE" name="CNAE"  class="form-control"><br>
    <label for="crt">CRT:</label>
    <input type="text" v-model="CRT" name="CRT"  class="form-control"><br>
    <fieldset  class="border rounded container-fluid border-dark">
        <legend class="border rounded text-center border-dark">Responsável</legend>
        <label for="Cpf">CPF:</label>
        <input type="text" class="cpf form-control" placeholder="xxx.xxx.xxx-xx" v-on:focus="mascara" v-model="Cpf" name="Cpf"><br>
        <label for="Rg">Rg:</label>
        <input type="text" class="rg form-control" placeholder="xx.xxx.xxx-x" v-model="Rg" name="Rg"><br>
        <label for="Nome">Nome:</label>
        <input type="text" v-model="Nome" name="Nome"  class="form-control"><br>
        <label for="DataNasc">Data de Nascimento:</label>
        <input type="date" v-model="DataNasc" name="DataNasc" class="form-control"><br>
    </fieldset>
</fieldset>
<fieldset  v-else class="border rounded container-fluid border-dark">
    {{optCad}}
</fieldset>
<br>
<label for="CEP">CEP:</label>
<input type="text" v-on:blur="app.sys.buscaCEP('<?php echo $page; ?>')" v-model="CEP" name="CEP" placeholder="xxxxx-xxx" class="cep form-control"><br>
<label for="UF">Estado:</label>
<input type="text" v-model="UF" name="UF" class="estado form-control"><br>
<label for="Cidade">Cidade:</label>
<input type="text" v-model="Cidade" name="Cidade" class="cidade form-control"><br>
<label for="Bairro">Bairro:</label>
<input type="text" v-model="Bairro" name="Bairro" class="bairro form-control"><br>
<label for="Rua">Rua:</label>
<input type="text" v-model="Rua" name="Rua" class="rua form-control"><br>
<label for="Num">Número:</label>
<input type="text" v-model="Num" name="Num" class="form-control"><br>
<label for="Complemento">Complemento:</label>
<input type="text" v-model="Complemento" name="Complemento" class="form-control" ><br>
<label for="Telefone">Telefone:</label>
<input type="text" placeholder="(xx) xxxx-xxxx" class="telefone form-control" v-model="Telefone" name="Telefone"><br>
<label for="celular">Celular:</label>
<input type="text" v-model="Celular" name="Celular" class="celular form-control" placeholder="(xx) xxxxx-xxxx" ><br>
<fieldset>
    <legend>Opções</legend>
    <button>Alterar Dados</button>
    <button>Remover conta</button>
</fieldset>
<?php include $refUrl . "model/foot.php" ?>
