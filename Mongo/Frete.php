<?php
$pgtitle = "Frete de produtos";
$page = "Frete";
$td = ["" . $page => ["Id", "Cod. Empresa nos Correios", "Senha",
        "Cod. Serviço", "CEP Origem", "Formato", "Comprimento",
        "Altura", "Largura", "Diametro", "Mão Própria", "Valor declarado",
        "Aviso de Recebimento"]];
$tdvue = ["" . $page => ["td.nCdEmpresa", "td.sDsSenha", "td.nCdServico",
        "td.sCepOrigem", "td.nCdFormato", "td.nVlComprimento",
        "td.nVlAltura", "td.nVlLargura", "td.nVlDiametro", "td.sCdMaoPropria",
        "td.nVlValorDeclarado", "td.sCdAvisoRecebimento"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Cod. Empresa:</label>
<input class="form-control" type="text" v-model="nCdEmpresa" placeholder="Empresae..." required="required"><br>
<label>Senha:</label>
<input class="form-control" type="password" v-model="sDsSenha" placeholder="Senha..." required="required"><br>
<label>Cod. Serviço:</label>
<input class="form-control" type="number" v-model="nCdServico" placeholder="Serviço..." required="required"><br>
<label>CEP de origem:</label>
<input class="form-control" type="text" v-model="sCepOrigem" placeholder="CEP..." required="required"><br>
<label>Formato:</label>
<select class="form-control" v-model="nCdFormato">
    <option value="1">Caixa/pacote</option>
    <option value="2">Rolo/Cilindro/Esfera</option>
</select>
<label>Comprimento(cm):</label>
<input class="form-control" type="number" step="0.5"v-model="nVlComprimento" placeholder="Comprimento..." required="required"><br>
<label>Altura(cm):</label>
<input class="form-control" type="number" step="0.5" v-model="nVlAltura" placeholder="Altura..." required="required"><br>
<label>Largura(cm):</label>
<input class="form-control" type="number" step="0.5" v-model="nVlLargura" placeholder="Largura..." required="required"><br>
<label>Diametro(cm):</label>
<input class="form-control" type="number" step="0.5" v-model="nVlDiametro" placeholder="Diâmetro..." required="required"><br>
<label>Mão Própria:</label>
<input class="form-control" value="S" type="checkbox" v-model="sCdMaoPropria" placeholder="Nome..." required="required"><br>
<label>Valor declarado:</label>
<input class="form-control" type="checkbox" v-model="nVlValorDeclarado" placeholder="Nome..." required="required"><br>
<label>Alerta de Recebimento:</label>
<input class="form-control" value="S" type="checkbox" v-model="sCdAvisoRecebimento" placeholder="Nome..." required="required"><br>
<?php include $refUrl . "Mongo/template/foot.php" ?>