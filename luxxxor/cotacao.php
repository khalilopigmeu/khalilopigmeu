<!doctype html>
<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Credentials:true");
header("Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS, HEAD");
?>
<html lang="pt-br">
    <head>
        <style id="cssroot">
            :root{

            }
        </style>
        <link rel="stylesheet" href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src='https://cdn.datatables.net/2.1.8/js/dataTables.min.js'></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.css" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" crossorigin="anonymous">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div id="wrapper">
            <div class="row">
                <div class="nav flex-column nav-pills" id="nav-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link nav-link active" data-toggle="pill" id="list-tab" data-toggle="tab" href="#acessorios" role="tab" aria-selected="true">Acessórios</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#atacados" role="tab">Atacado</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#brinquedos" role="tab">Brinquedos</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#cosmeticos" role="tab">Cosméticos</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#maisvendidos" role="tab">Mais Vendidos</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#masturbadores" role="tab">Masturbadores</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#proteseseplugs" role="tab">Próteses e plugs</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#saldao" role="tab">Saldão</a>
                    <a class="nav-link nav-link" data-toggle="pill" id="form-tab" data-toggle="tab" href="#vibradores" role="tab">Vibradores</a>
                </div>
                <div class="tab-content justify-content-center container text-center" id="nav-tabContent">
                    <div id="acessorios" class="tab-pane container-fluid  fade show active" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblacessorios"></table>
                            </div>
                        </div>
                    </div>
                    <div id="atacados" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblatacados"></table>
                            </div>
                        </div>
                    </div>
                    <div id="brinquedos" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblbrinquedos"></table>
                            </div>
                        </div>
                    </div>
                    <div id="cosmeticos" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblcosmeticos"></table>
                            </div>
                        </div>
                    </div>
                    <div id="maisvendidos" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblmaisvendidos"></table>
                            </div>
                        </div>
                    </div>
                    <div id="masturbadores" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblmasturbadores"></table>
                            </div>
                        </div>
                    </div>
                    <div id="proteseseplugs" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblproteseseplugs"></table>
                            </div>
                        </div>
                    </div>
                    <div id="saldao" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblsaldao"></table>
                            </div>
                        </div>
                    </div>
                    <div id="vibradores" class="tab-pane container-fluid" role="tabpanel">
                        <div class="row justify-content-center my-2 py-2">
                            <div class="table-responsive container-fluid table-hover">
                                <table class="table table-striped table-bordered cell-border hover order-column row-border stripe" id="tblvibradores"></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script>
        function tabela(url, nome) {
            $.getJSON(url, function (data) {
                $('#' + nome).DataTable({
                    data: data,
                    columns: [
                        {data: 'url',
                            render: function (id) {
                                return id ?
                                        id.split("skuId=")[1] :
                                        null;
                            }},
                        {data: 'imagem',
                            render: function (file_id) {
                                return file_id ?
                                        '<img src="' + file_id + '" width="180" height="180"/>' :
                                        null;
                            }},
                        {data: 'titulo'},
                        {data: 'url',
                            render: function (link) {
                                return link ?
                                        '<a class="link" target="_blank" href="https://www.sexshopatacadao.com.br' + link + '">link no site</a>' :
                                        null;
                            }},
                        {data: 'url',
                            render: function (lista) {
                                return lista ?
                                        '<button  data-sku=' + lista.split("skuId=")[1] + '>adicionar a lista</button>' :
                                        null;
                            }},
                        {data: 'fornecedor',
                            render: function (preco) {
                                return preco ?
                                        '<span class="fornecedor">R$ ' + preco + '</span>' :
                                        null;
                            }},
                        {data: 'cliente',
                            render: function (preco) {
                                return preco ?
                                        '<span class="cliente">R$ ' + preco + '</span>' :
                                        null;
                            }}
                    ]
                });
            });
        }
        $(function () {
            var itens = [];
            itens.push({url: "/luxxxor/json/acessorioseroticos.json", nome: "tblacessorios"});
            itens.push({url: "/luxxxor/json/atacados.json", nome: "tblatacados"});
            itens.push({url: "/luxxxor/json/brinquedoseroticos.json", nome: "tblbrinquedos"});
            itens.push({url: "/luxxxor/json/cosmeticos.json", nome: "tblcosmeticos"});
            itens.push({url: "/luxxxor/json/maisvendidos.json", nome: "tblmaisvendidos"});
            itens.push({url: "/luxxxor/json/masturbadores.json", nome: "tblmasturbadores"});
            itens.push({url: "/luxxxor/json/proteseeplug.json", nome: "tblproteseseplugs"});
            itens.push({url: "/luxxxor/json/saldao.json", nome: "tblsaldao"});
            itens.push({url: "/luxxxor/json/vibradores.json", nome: "tblvibradores"});

            for (var i = 0; i <= itens.length - 1; i++) {
                tabela(itens[i].url, itens[i].nome);
            }

        });
    </script>
</html>
