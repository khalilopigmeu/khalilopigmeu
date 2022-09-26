<?php
$pgtitle = "Projetos";
$page = "Projetos";
$td = ["" . $page => ["Id", "Nome", "Descrição"]];
$tdvue = ["" . $page => ["Data", "Nome", "Caminho", "Processos", "Materiais", "Preco", "Descricao", "HorasImplementacao", "Horas", "Custo"]];

include $refUrl . "Mongo/template/head.php"
?>
<fieldset class="border justify-content-center w-75 mx-auto text-center">
    <div v-for="(item,index) in Count">
        <label>Nome:</label>
        <input type="text" v-model="Referencia[index]" class="form-control">    
        <br>
    </div>
    <br>
    <hr>
    <button class="button btn m-1" v-on:click="adicionar">Adicionar Referência</button>
    <button class="button btn btn-danger m-1" v-on:click="remover">Remover Referência</button>
    <button class="button btn btn-warning m-1" v-on:click="calcularGeral">Calcular</button>
    <br>
    <hr>
</fieldset>
<?php include $refUrl . "Mongo/template/foot.php" ?>