<?php
$pgtitle = "Lista de Compra";
$page = "ListaCompra";
$td = ["" . $page => ["Id", "Vendedor", "Nome da Lista", "Data", "Cliente", "Lista", "Solicitado"]];
$tdvue = ["" . $page => ["td.IdLogin", "td.NomeLista", "td.DataLista", "td.Cliente", "td.Produtos", "td.Solicitacao"]];

include $refUrl . "Mongo/template/head.php"
?>
<label>Nome da lista:</label>
<input class="form-control" type="text" v-model="NomeLista"><br>
<hr>
<label>Pesquisa:</label><input class="form-control" type="text" v-model="pesqCliente"><br>
<label>Cliente:</label>
<select class="form-control" v-model="Cliente" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(app.sys.searchall(Clientesrc,pesqCliente),'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<a href="#" onclick="setModal('Cliente', 'Eventos')">Adicionar Cliente <i class="far fa-plus-square"></i></a><br>
<br>
<hr>
<div class="row">
    <table class="table table-striped table-bordered" id="tbl<?php echo $page; ?>">
        <thead class="thead-dark text-white text-center">
            <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>Remover</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(td,i) in listaProdutos" class="text-center justify-content-center">
                <td>{{app.sys.searchByID(produtos,td.produto)[0].NomeProduto}}</td>
                <td>R$ {{parseFloat(app.sys.searchByID(produtos,td.produto)[0].Preco.replace(",",".")).toFixed(2)}}</td>
                <td><input class="form-control" v-on:change="updateLista(i)" minlength="0" v-model="lineRow[i]" type="number" v-bind:value="td.qtd"></td>
                <td>R$ {{Total(app.sys.searchByID(produtos,td.produto)[0].Preco,td.qtd)}}</td>
                <td><button class="btn btn-dark" v-on:click="removerItem(i)"><i class="far fa-times-circle"></i> remover item</button></td>
            </tr>
        </tbody>
        <tfoot class="thead-dark text-white text-center">
            <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>Remover</th>
            </tr>
        </tfoot>
    </table>
    <nav class="navbar bg-m navbar-light res col-md-12 col-lg-3 col-xl-3 col-12" id="navbarProdutos">
        <div class="container-fluid justify-content-center w-100">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsivePro" aria-controls="navbarResponsivePro" aria-expanded="false" aria-label="Toggle navigation">
                <span class="res navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarResponsivePro">
                <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Famílias <i class="fas fa-angle-double-right"></i></h3>
                <ul v-for="itens in autoList(familiaprodutos,'familia')" class="navbar-nav justify-content-center text-center flex-column">
                    <li class="nav-item">
                        <span class="nav-link"><input type="checkbox" v-model="familiaselect" v-bind:value="itens._id['$oid']"> {{itens.TipoFamilia}} <i class="fas fa-angle-double-right"></i></span></li>
                    </li>
                </ul>
                <hr class="border bg-light">
                <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Classes <i class="fas fa-angle-double-right"></i></h3>
                <ul v-for="itens in app.sys.searchinArray(autoList(classeprodutos,'classe'),familiaselect,'IdFamilia')" class="navbar-nav justify-content-center text-center flex-column">
                    <li class="nav-item">
                        <span class="nav-link"><input type="checkbox"  v-model="classeselect"  v-bind:value="itens._id['$oid']"> {{itens.TipoClasse}} <i class="fas fa-angle-double-right"></i></span></li>
                    </li>
                </ul>
                <hr class="border bg-light">
                <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Categorias <i class="fas fa-angle-double-right"></i></h3>
                <ul v-for="itens in app.sys.searchinArray(autoList(categoriaprodutos,'categoria'),classeselect,'IdClasse')" class="navbar-nav justify-content-center text-center flex-column">
                    <li class="nav-item">
                        <span class="nav-link"><input type="checkbox" v-model="categoriaselect"  v-bind:value="itens._id['$oid']" > {{itens.TipoCategoria}} <i class="fas fa-angle-double-right"></i></span></li>
                    </li>
                </ul>
                <hr class="border bg-light">
                <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Subcategorias <i class="fas fa-angle-double-right"></i></h3>
                <ul v-for="itens in app.sys.searchinArray(autoList(subcategoriaprodutos,'subcategoria'),categoriaselect,'IdCategoria')" class="navbar-nav justify-content-center text-center flex-column">
                    <li class="nav-item">
                        <span class="nav-link"><input type="checkbox" v-model="subcategoriaselect"  v-bind:value="itens._id['$oid']" > {{itens.TipoSubCategoria}} <i class="fas fa-angle-double-right"></i></span></li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="col-md-12 mx-auto col-lg-8 col-xl-8 col-12 text-center justify-content-center">
        <div class="row text-center justify-content-center">
            <input type="text" v-model="produtoselect" v-on:change="app.sys.setPage(0)" class="form-control col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" placeholder="Pesquise" aria-label="Pesquise" aria-describedby="basic-addon1">
            <label class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">Itens por página:</label>
            <input type="text" class="form-control col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
                   v-on:change="changeItensCount()" v-model="itensporpagina">
        </div>
        <div class="row text-center justify-content-center m-2 p-2">
            <div v-for="itens in app.sys.paginate(app.sys.searchall(produtos,produtoselect))" class="border border-dark rounded mb-3 col-11">
                <div class="row">
                    <div class="col-6 text-center justify-content-center">
                        <div id="carouselProdutos" class="carousel slide h-100 d-flex align-content-center flex-wrap " data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-75 img-thumbnail mx-auto" src="../../img/logobien.png" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-75 img-thumbnail mx-auto" src="../../img/logobien.png" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-75 img-thumbnail mx-auto" src="../../img/logobien.png" alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselProdutos" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselProdutos" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class='p-2'>
                            <h4 class='display'> {{itens.NomeProduto}}</h4>
                            <p v-html='itens.ResumoProduto'></p>
                            <span>Preço: R${{parseFloat(itens.Preco.replace(",",".")).toFixed(2)}}</span><br>
                            <button class='mx-auto btn btn-dark' v-on:click="lista(itens._id['$oid'])"><i class="fas fa-plus"></i> adicionar</button><br>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination text-center justify-content-center">
                <li class="page-item">
                    <span class="page-link" @click="app.sys.setPage(0)"><i class="fas fa-angle-double-left"></i></span>
                </li>
                <li class="page-item mr-1">
                    <span class="page-link" v-if="(app.sys.currentPage-1)>-1" @click="app.sys.setPage(app.sys.currentPage-1)"><i class="fas fa-chevron-left"></i></span>
                </li>
                <li class="page-item" v-for="pageNumber in app.sys.totalPages" v-if="Math.abs(pageNumber - app.sys.currentPage) < 3 || pageNumber == app.sys.totalPages || pageNumber == 0">
                    <span class="page-link"  @click="app.sys.setPage(pageNumber-1)"  :class="{current: app.sys.currentPage === pageNumber, last: (pageNumber == app.sys.totalPages - 1 && Math.abs(pageNumber - app.sys.currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - app.sys.currentPage) > 3)}">{{ pageNumber }}</span>
                </li>

                <li class="page-item ml-1">
                    <span class="page-link" v-if="(app.sys.currentPage+1)<app.sys.totalPages"  @click="app.sys.setPage(app.sys.currentPage+1)"><i class="fas fa-chevron-right"></i></span>
                </li>
                <li class="page-item">
                    <span class="page-link" @click="app.sys.setPage(app.sys.totalPages-1)"><i class="fas fa-angle-double-right"></i></span>
                </li>
            </ul>
        </nav>
    </div>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>