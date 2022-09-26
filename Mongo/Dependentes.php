<?php
$pgtitle = "Dependentes";
$page = "Dependentes";
$td = ["" . $page => ["Id", "Funcionário", "CPF", "RG", "Nome", "Data Nasc.", "Plano Odonto", "Plano Saúde", "CEP", "Estado", "Cidade", "Bairro", "Rua", "Número", "Complemento", "Telefone"]];
$tdvue = ["" . $page => ["td.IdFuncionario", "td.CPF", "td.RG", "td.Nome", "td.DataNasc", "td.IdPlanoOdonto", "td.IdPlanoSaude", "td.CEP", "td.Estado", "td.Cidade", "td.Bairro", "td.Rua", "td.Numero", "td.Complemento", "td.Telefone"]];

include $refUrl . "Mongo/template/head.php"
?>

<label>Funcionário:</label>
<select class="form-control" v-model="IdFuncionario" placeholder="Campo...">
    <option  v-if="Funcionariosrc!=null" v-for="el in app.sys.sorter(Funcionariosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="zeroModal();setModal('Funcionarios', 'Dependentes')">Adicionar Funcionário(a) <i class="far fa-plus-square"></i></a><br>
<br>
<label for="Cpf">CPF:</label>
<input type="text" class="cpf form-control" placeholder="xxx.xxx.xxx-xx" v-model="CPF" name="Cpf" required="required"><br>
<label for="Rg">Rg:</label>
<input type="text" class="rg form-control" placeholder="xx.xxx.xxx-x" v-model="RG" name="Rg"><br>
<label for="Nome">Nome:</label>
<input type="text" v-model="Nome" name="Nome"  class="form-control" required="required"><br>
<label for="DataNasc">Data de Nascimento:</label>
<input type="date" v-model="DataNasc" name="DataNasc" class=" form-control"><br>
<label>Plano de Saúde:</label>
<select class="form-control" v-model="IdPlanoSaude" name="IdPlanoSaude">
    <option>Selecione a cato plano de saúde</option>
    <option v-for="el in app.sys.sorter(PlanoSaudesrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select><br>
<a href="#" onclick="setModal('PlanoSaude', 'Dependentes')">Adicionar Plano de Saúde <i class="far fa-plus-square"></i></a><br>
<br>
<label>Plano odontológico:</label>
<select class="form-control" v-model="IdPlanoOdonto" name="IdPlanoOdonto">
    <option>Selecione a categoria</option>
    <option v-for="el in app.sys.sorter(PlanoOdontosrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.NomeCategoria}}</option>
</select><br>
<a href="#" onclick="setModal('PlanoOdonto', 'Dependentes')">Adicionar Plano Odontológico <i class="far fa-plus-square"></i></a><br>
<br>
<label for="CEP">CEP:</label>
<input type="text" v-on:blur="app.sys.buscaCEP('<?php echo $page; ?>')" v-model="CEP" name="CEP" placeholder="xxxxx-xxx" class="cep form-control"><br>
<label for="Estado">Estado:</label>
<input type="text" v-model="Estado" name="Estado" class="estado form-control"><br>
<label for="Cidade">Cidade:</label>
<input type="text" v-model="Cidade" name="Cidade" class="cidade form-control"><br>
<label for="Bairro">Bairro:</label>
<input type="text" v-model="Bairro" name="Bairro" class="bairro form-control"><br>
<label for="Rua">Rua:</label>
<input type="text" v-model="Rua" name="Rua" class="rua form-control"><br>
<label for="Numero">Número:</label>
<input type="text" v-model="Numero" name="Numero" class="form-control"><br>
<label for="Complemento">Complemento:</label>
<input type="text" v-model="Complemento" name="Complemento" class="form-control" ><br>
<label for="Telefone">Telefone:</label>
<input type="text" placeholder="(xx) xxxx-xxxx" class="celular form-control" v-model="Telefone" name="Telefone"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>