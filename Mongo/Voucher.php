<!-- 
VueApp name = Voucher 
titulo = Voucher
app = Voucher
ASC/DESC = DESC
campo = id
coluna tbl = <td>{{ td.fields }}</td>
input = <input class="form-control" v-model=="Campo" placeholder="Campo..." v-bind:value="Campo"><br>
nometabela = tblVoucher
-->
<?php
$pgtitle = "Voucher";
$page = "Voucher";
$td = ["" . $page =>["Id", "Nome", "Valor", "Validade", "Id. Vendedor", "Taxa", "Juros"]];
$tdvue = ["" . $page =>["td.Nome", "td.Valor", "td.Validade", "app.sys.foreignKeyReplace(Vendedorsrc,'NomeFantasia',td.IdVendedor)", "td.Taxa", "td.Juros"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome:</label>
<input class="form-control" v-model="Nome" placeholder="Nome..." type="text"><br>
<br>
<label>Juros:</label>
<input class="form-control" v-model="Juros" placeholder="Juros..." type="text"><br>
<br>
<label>Taxa:</label>
<input class="form-control" v-model="Taxa" placeholder="Taxa..." type="text"><br>
<br>
<label>Valor:</label>
<input class="form-control" v-model="Valor" placeholder="Valor..." type="text"><br>
<br>
<label>Link:</label>
<input class="form-control" v-model="Link" placeholder="Link..." type="text"><br>
<br>
<label>Validade:</label>
<input class="form-control" v-model="Validade" placeholder="Validade..." type="text"><br>
<br>
<label>Acessos:</label>
<select class="form-control" v-model="Acessos" multiple placeholder="Acessos..." >
    <option v-if="Loginsrc!=null" v-for="el in app.sys.sorter(Loginsrc,'DESC','id')" v-bind:value="el._id['$oid']">{{el.Login}}</option>
</select>
<a href="#" onclick="setModal('Login', 'Page')">Adicionar Acesso <i class="far fa-plus-square"></i></a><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>