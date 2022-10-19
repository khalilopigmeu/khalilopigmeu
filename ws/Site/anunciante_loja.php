<?php $pageName = "AnuncianteLoja"; ?>
<section v-if="(spy==='loja' || spy==='all') &&(Anunciante(pgid).Tipo==='2' || Anunciante(pgid).Tipo==='3')">
    <h2 class="spanCli m-2 p-2" v-if="produtos!==null && produtos.length>0">Conheça nossos produtos:</h2>
    <div class="row"  v-if="produtos!==null && produtos.length>0">
        <nav class="navbar bg-m navbar-light res col-12" id="navbarProdutos">
            <div class="container-fluid justify-content-center w-100">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsivePro" aria-controls="navbarResponsivePro" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="res navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarResponsivePro">
                    <h4 class="text-white m-1 p-1"> Famílias </h4>
                    <ul v-for="itens in autoList(familiaprodutos,'familia')" class="navbar-nav justify-content-center text-center flex-column">
                        <li class="nav-item">
                            <span class="nav-link">
                                <input type="checkbox" v-model="familiaselect" v-bind:value="itens._id['$oid']">
                                {{itens.TipoFamilia}} <i class="fas fa-angle-double-right"></i>
                            </span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <h4 class="text-white m-1 p-1"> Classes </h4>
                    <ul v-for="itens in app.sys.searchinArray(autoList(classeprodutos,'classe'),familiaselect,'IdFamilia')" class="navbar-nav justify-content-center text-center flex-column">
                        <li class="nav-item">
                            <span class="nav-link"><input type="checkbox"  v-model="classeselect"  v-bind:value="itens._id['$oid']"> {{itens.TipoClasse}} <i class="fas fa-angle-double-right"></i></span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <h4 class="text-white m-1 p-1"> Categorias </h4>
                    <ul v-for="itens in app.sys.searchinArray(autoList(categoriaprodutos,'categoria'),classeselect,'IdClasse')" class="navbar-nav justify-content-center text-center flex-column">
                        <li class="nav-item">
                            <span class="nav-link"><input type="checkbox" v-model="categoriaselect"  v-bind:value="itens._id['$oid']" > {{itens.TipoCategoria}} <i class="fas fa-angle-double-right"></i></span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <h4 class="text-white m-1 p-1"> Subcategorias </h4>
                    <ul v-for="itens in app.sys.searchinArray(autoList(subcategoriaprodutos,'subcategoria'),categoriaselect,'IdCategoria')" class="navbar-nav justify-content-center text-center flex-column">
                        <li class="nav-item">
                            <span class="nav-link"><input type="checkbox" v-model="subcategoriaselect"  v-bind:value="itens._id['$oid']" > {{itens.TipoSubCategoria}} <i class="fas fa-angle-double-right"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br>
        <div class="mx-auto col-12 text-center justify-content-center">
            <div class="row text-center justify-content-center">
                <fieldset class="col-10 mx-auto border rounded m-1 container-fluid border-dark">
                    <label>Itens por página:</label>
                    <select type="text" class="form-control" v-on:change="changeItensCount('<?php echo $pageName; ?>')" v-model="itensporpagina">
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="24">24</option>
                    </select>
                    <div class="row text-center m-1">
                        <div class="col-3"><input v-on:click="orderProdutos('AZ')" name='order' type="radio"><span> A-Z</span></div>
                        <div class="col-3"><input v-on:click="orderProdutos('ZA')" name='order' type="radio"><span> Z-A</span></div>
                        <div class="col-3"><input v-on:click="orderProdutos('UP')" name='order' type="radio"><span> Maior Preço</span></div>
                        <div class="col-3"><input v-on:click="orderProdutos('DW')" name='order' type="radio"><span> Menor Preço</span></div>
                    </div>
                    <br>
                </fieldset>
                <br>
                <input type="text" v-model="produtopesq" v-on:change="app.sys.setPage(0,'<?php echo $pageName; ?>')" class="form-control col-10 p-1 m-1" placeholder="Pesquise" aria-label="Pesquise" aria-describedby="basic-addon1">
            </div>
            <div class="row justify-content-center text-center">
                <div v-for="itens in PaginasLoja" class="col-lg-3 col-md-10 col-sm-4 m-1 p-1 border rounded border-dark produto">
                    <div class="product__item" data-toggle="modal" data-target="#AboutProduto" v-on:click="buscaProduto(itens._id['$oid'])">
                        <div class="product__item__pic set-bg" v-bind:data-setbg="Midias(itens.IdAlbum)[0].UrlMidia">
                        </div>
                        <div class="product__item__text">
                            <h6>{{itens.NomeProduto}}</h6>
                            <h5 v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
                            <div v-html="itens.ResumoProduto"></div>
                        </div>
                    </div>
                </div>
            </div>
            <?php include $refUrl . "Mongo/template/pagination.php" ?>
        </div>
    </div>
</section>
<section>
    <div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="AboutProduto">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Produto</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <section v-if="!nulo(selectProduto)" class="product-details spad">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="product__details__pic">
                                        <div class="product__details__pic__item">
                                            <img class="product__details__pic__item--large"
                                                 v-bind:src="Midias(selectProduto.IdAlbum)[0].UrlMidia" alt="">
                                        </div>
                                        <div class="product__details__pic__slider row">
                                            <img class="col-3" v-for="file in Midias(selectProduto.IdAlbum)" 
                                                 v-bind:data-imgbigurl="file.UrlMidia"
                                                 v-bind:src="file.UrlMidia">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="product__details__text">
                                        <h3>{{selectProduto.NomeProduto}}</h3>
                                        <div class="product__details__price" v-html="HasPromo(selectProduto._id['$oid'],selectProduto.Preco)"></div>
                                        <p>{{selectProduto.ResumoProduto}}</p>
                                        <div class="product__details__quantity">
                                            <div class="quantity">
                                                <div class="pro-qty">
                                                    <input type="text" value="1">
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>Dimensão: <div v-html="selectProduto.DimensaoProduto"></div></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="product__details__tab">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active m-1 p-1" data-toggle="tab" href="#tabs-1" role="tab"
                                                   aria-selected="true">Descrição</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link m-1 p-1" data-toggle="tab" href="#tabs-2" role="tab"
                                                   aria-selected="false">Especificação</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Informações</h6>
                                                    <div v-html="selectProduto.Caracteristicas"></div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Especificação</h6>
                                                    <div v-html="selectProduto.EspecificacaoProduto"></div></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr>
                    <section class="related-product">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="section-title related__product__title">
                                        <h2>Produtos Relacionados</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center text-center" v-if="!nulo(selectProduto)">
                                <div v-for="itens in app.sys.search(produtos,selectProduto.IdSubCategoriaProduto,'IdSubCategoriaProduto')"  class="col-lg-3 col-md-10 col-sm-4 m-1 p-1 border rounded border-dark produto">
                                    <div class="product__item" v-on:click="buscaProduto(itens._id['$oid'])">
                                        <div class="product__item__pic set-bg" v-bind:data-setbg="Midias(selectProduto.IdAlbum)[0].UrlMidia">
                                        </div>
                                        <div v-on:click="buscaProduto(itens._id['$oid'])" >
                                            <h6>{{itens.NomeProduto}}</h6>
                                            <h5 v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</section>