<!-- 
VueApp name = Funcionarios 
titulo = Funcionários
app = Funcionarios
ASC/DESC = DESC
campo = id
coluna tbl = "fields",
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblFuncionarios
-->
<?php
$pgtitle = "Funcionários";
$page = "Funcionarios";
$td = ["" . $page => ["Id",
    "Nome",
    "CPF",
    "RG",
    "Data Nasc.",
    "Departamento",
    "Cargo",
    "Plano de Saúde",
    "Plano Odontológico",
    "Salário",
    "Comissão",
    "Conta Salário",
    "Data de Admissão",
    "CEP",
    "UF",
    "Cidade",
    "Bairro",
    "Rua",
    "Número",
    "Complemento",
    "Telefone",
    "Celular"]];
$tdvue = ["" . $page => ["td.Nome",
    "td.Cpf",
    "td.Rg",
    "td.DataNasc",
    "td.IdDepartamento",
    "td.IdCargo",
    "td.IdPlanoSaude",
    "td.IdPlanoOdonto",
    "td.Salario",
    "td.Comissao",
    "td.ContaSalario",
    "td.DataAdmis",
    "td.CEP",
    "td.UF",
    "td.Cidade",
    "td.Bairro",
    "td.Rua",
    "td.Num",
    "td.Complemento",
    "td.Telefone",
    "td.Celular"]];

include $refUrl . "Mongo/template/head.php"
?>

<label for="Cpf">CPF:</label>
<input type="text" class="cpf form-control" placeholder="xxx.xxx.xxx-xx" v-model="Cpf" name="Cpf" required="required"><br>
<label for="Rg">Rg:</label>
<input type="text" class="rg form-control" placeholder="xx.xxx.xxx-x" v-model="Rg" name="Rg"><br>
<label for="Nome">Nome:</label>
<input type="text" v-model="Nome" name="Nome"  class="form-control" required="required"><br>
<label for="DataNasc">Data de Nascimento:</label>
<input type="date" v-model="DataNasc" name="DataNasc" class=" form-control"><br>
<!--<label>Departamento:</label>
<select class="form-control" v-model="IdDepartamento" name="IdDepartamento">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(Departamentosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select><br>
<label>Cargo:</label>
<select class="form-control" v-model="IdCargo" name="IdCargo">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(Cargosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select><br>
<label>Plano de Saúde:</label>
<select class="form-control" v-model="IdPlanoSaude" name="IdPlanoSaude">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(PlanoSaudesrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select><br>
<label>Plano odontológico:</label>
<select class="form-control" v-model="IdPlanoOdonto" name="IdPlanoOdonto">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(PlanoOdontosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select><br>-->
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
<label for="Salario">Salário:</label>
<input type="text" v-model="Salario" name="Salario" class=" valor form-control" placeholder="R$"><br>
<label for="Comissao">Comissão:</label>
<input type="number" v-model="Comissao" min="00" max="100" name="Comissao" class="form-control" placeholder="%"><br>
<label for="ContaSalario">Conta Salário:</label>
<input type="text" v-model="ContaSalario" name="ContaSalario" class="form-control"><br>
<label for="DataAdmin">Data de Admissão:</label>
<input type="date" v-model="DataAdmis" name="DataAdmis" class="form-control"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>