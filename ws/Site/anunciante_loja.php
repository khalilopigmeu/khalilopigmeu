<?php $pageName = "AnuncianteLoja"; ?>
<section v-if="(spy==='loja' || spy==='all') &&(Anunciante(pgid).Tipo==='2' || Anunciante(pgid).Tipo==='3')">
    <h2 class="spanCli m-2 p-2" v-if="produtos!==null && produtos.length>0">Conheça nossos produtos:</h2>
    <div class="row"  v-if="produtos!==null && produtos.length>0">
        <div class="mx-auto col-12 text-center justify-content-center">
            <div class="row text-center justify-content-center">
                <fieldset class="col-10 mx-auto border rounded p-1 m-1 container-fluid border-dark anunciobox">
                    <div  v-if="urlSite.includes('rti')"  class="row justify-content-center mb-1 text-center">
                        <div class="col-4">
                            <label>Itens por página:</label>
                            <select type="text" class="form-control" v-on:change="changeItensCount('<?php echo $pageName; ?>')" v-model="itensporpagina">
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="16">16</option>
                                <option value="24">24</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label>Formato:</label>
                            <span class='btn' v-on:click="app.empresasanunciando.formato='lista'"><i class="fas fa-list"></i> - Lista</span>
                            <span class='btn' v-on:click="app.empresasanunciando.formato='coluna'"><i class="fas fa-columns"></i>- Colunas</span>
                        </div>
                        <div class="col-6 row text-center">
                            <div class="col-3"><input v-on:click="orderProdutos('RN')" v-model="order" name='order' value="RN" type="radio"><span> Aleatório</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('DS')" v-model="order" name='order' value="DS" type="radio"><span> Disponíveis</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('EN')" v-model="order" name='order' value="EN" type="radio"><span> Encomendas</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('AZ')" v-model="order" name='order' value="AZ" type="radio"><span> A-Z</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('ZA')" v-model="order" name='order' value="ZA" type="radio"><span> Z-A</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('UP')" v-model="order" name='order' value="UP" type="radio"><span> Maior Preço</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('DW')" name='order' name="order" value="DW" type="radio"><span> Menor Preço</span></div>
                        </div>
                    </div>
                    <br>
                    <input class="form-control mx-auto col-7 mt-1" type="text" v-model="produtopesq" v-on:keypress="pesquisaprodutos()"  v-on:change="pesquisaprodutos()" class="form-control col-10 p-1 m-1" placeholder="Pesquise" aria-label="Pesquise" aria-describedby="basic-addon1">
                    <br>
                    <nav  v-if="urlSite.includes('rti')"  class="navbar bg-m navbar-light res col-12" id="navbarProdutos">
                        <div class="container-fluid justify-content-center w-75 p-1">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsivePro" aria-controls="navbarResponsivePro" aria-expanded="false" aria-label="Toggle navigation">
                                Categorias
                            </button>
                            <div class="collapse navbar-collapse justify-content-center" id="navbarResponsivePro">
                                <h4 class="spanCli m-1 p-1"> Categorias </h4>
                                <ul v-if="!nulo(familiaprodutos)" v-for="itens in autoList(familiaprodutos,'familia')" class="navbar-nav justify-content-center text-center flex-column">
                                    <li class="nav-item">
                                        <span class="nav-link">
                                            <input type="checkbox" v-model="familiaselect" v-bind:value="itens._id['$oid']">
                                            {{itens.TipoFamilia}} <i class="fas fa-angle-double-right"></i>
                                        </span>
                                    </li>
                                </ul>
                                <hr class="border bg-light">
                                <h4 class="spanCli m-1 p-1"> Subcategorias </h4>
                                <ul v-if="!nulo(classeprodutos)" v-for="itens in app.sys.searchinArray(autoList(classeprodutos,'classe'),familiaselect,'IdFamilia')" class="navbar-nav justify-content-center text-center flex-column">
                                    <li class="nav-item">
                                        <span class="nav-link"><input type="checkbox"  v-model="classeselect"  v-bind:value="itens._id['$oid']"> {{itens.TipoClasse}} <i class="fas fa-angle-double-right"></i></span>
                                    </li>
                                </ul>
                                <hr class="border bg-light">
                                <h4 class="spanCli m-1 p-1"> Variedades </h4>
                                <ul v-if="!nulo(categoriaprodutos)" v-for="itens in app.sys.searchinArray(autoList(categoriaprodutos,'categoria'),classeselect,'IdClasse')" class="navbar-nav justify-content-center text-center flex-column">
                                    <li class="nav-item">
                                        <span class="nav-link"><input type="checkbox" v-model="categoriaselect"  v-bind:value="itens._id['$oid']" > {{itens.TipoCategoria}} <i class="fas fa-angle-double-right"></i></span>
                                    </li>
                                </ul>
                                <hr class="border bg-light">
                                <h4 class="spanCli m-1 p-1"> Opções </h4>
                                <ul v-if="!nulo(subcategoriaprodutos)" v-for="itens in app.sys.searchinArray(autoList(subcategoriaprodutos,'subcategoria'),categoriaselect,'IdCategoria')" class="navbar-nav justify-content-center text-center flex-column">
                                    <li class="nav-item">
                                        <span class="nav-link"><input type="checkbox" v-model="subcategoriaselect"  v-bind:value="itens._id['$oid']" > {{itens.TipoSubCategoria}} <i class="fas fa-angle-double-right"></i></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </fieldset>
            </div>
            <div v-if="formato=='lista'" class="row justify-content-center text-center">
                <div v-for="itens in PaginasLoja" class="col-12 m-1 p-1 border rounded border-dark produto">
                    <div class="product__item row" data-toggle="modal" data-target="#AboutProduto" v-on:click="buscaProduto(itens._id['$oid'])">
                        <div class="col-4" v-if="itens.QtdMin==1">
                            <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                            </div>
                        </div>
                        <div class="col-4" v-else>
                            <!--<div class="product__item__pic set-bg"  v-bind:style="'filter: grayscale(100%); background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">-->
                            <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                            </div>
                        </div>
                        <div class="product__item__text col-7">
                            <h6>{{itens.NomeProduto}}</h6>
                            <h5 v-if="itens.QtdMin==1" v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
                            <div v-html="itens.EspecificacaoProduto"></div>
                            <div v-if="itens.QtdMin==1" class="badge badge-success">
                                Disponível em estoque!
                            </div>
                            <div v-else class="badge badge-warning">
                                Apenas por encomenda! <br> tempo de espera de 7 a 10 dias úteis;<br>
                                Preço em exibição tem como base a última compra<br> o preço final poderá sofrer acréscimo ou decréscimo.
                            </div>
                            <p class="mt-2 seemore">Clique para ver mais</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  v-if="formato=='coluna'"  class="row justify-content-center text-center">
                <div v-for="itens in PaginasLoja" class="col-lg-3 col-md-5 col-sm-10 m-1 p-1 border rounded border-dark produto">
                    <div class="product__item" data-toggle="modal" data-target="#AboutProduto" v-on:click="buscaProduto(itens._id['$oid'])">
                        <div v-if="itens.QtdMin==1">
                            <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                            </div>
                        </div>
                        <div v-else>
                            <!--<div class="product__item__pic set-bg"  v-bind:style="'filter: grayscale(100%); background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">-->
                            <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                            </div>
                        </div>
                        <hr>
                        <div class="product__item__text">
                            <h6>{{itens.NomeProduto}}</h6>
                            <h5 v-if="itens.QtdMin==1" v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
                            <div v-html="itens.EspecificacaoProduto"></div>
                            <div v-if="itens.QtdMin==1" class="badge badge-success">
                                Disponível em estoque!
                            </div>
                            <div v-else class="badge badge-warning">
                                Apenas por encomenda! <br> tempo de espera de 7 a 10 dias úteis;<br>
                                Preço em exibição tem como base a última compra<br> o preço final poderá sofrer acréscimo ou decréscimo.
                            </div>
                            <p class="mt-2 seemore">Clique para ver mais</p>
                        </div>
                    </div>
                </div>
            </div>
            <?php include $refUrl . "Mongo/template/pagination.php" ?>
        </div>
    </div>
    <div class="rounded aboutvendor anunciobox">
        <div class="row justify-content-center text-center text-capitalize">
            <div v-if="typeof EmpresaSelecionada(pgid).NomeFantasia !== 'undefined'" class="col-md-12 col-lg-12 col-xl-12 col-12 row justify-content-center text-center">
                <div class="col-6" v-if="EmpresaSelecionada(pgid).NomeFantasia!='null'"><span class='spanCli m-1 p-1'>Empresa:</span> {{EmpresaSelecionada(pgid).NomeFantasia}}</div>
                <div class="col-6" v-if="EmpresaSelecionada(pgid).Cnpj!='null'"><span class='spanCli m-1 p-1'>CNPJ:</span> {{EmpresaSelecionada(pgid).Cnpj}}</div>
            </div>
            <div v-else>
                <div class="col-12 row">
                    <div v-if="EmpresaSelecionada(pgid).Nome!='null'"><span class='spanCli m-1 p-1'>Responsável:</span> {{EmpresaSelecionada(pgid).Nome}}</div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="row justify-content-center text-center text-capitalize">
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Celular!='null'"><span class='spanCli m-1 p-1'><i class="fab fa-whatsapp"></i> whatsapp:</span> <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(EmpresaSelecionada(pgid).Celular)">{{EmpresaSelecionada(pgid).Celular}}</a></div>
            <div class="col-6" v-if="getFB(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fab fa-facebook-f"></i> Facebook:</span> <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+getFB(EmpresaSelecionada(pgid)._id['$oid'])">@{{getFB(EmpresaSelecionada(pgid)._id['$oid'])}}</a></div>
            <div class="col-6" v-if="getInsta(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fab fa-instagram"></i> Instagram:</span> <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+getInsta(EmpresaSelecionada(pgid)._id['$oid'])">@{{getInsta(EmpresaSelecionada(pgid)._id['$oid'])}}</a></div>
            <div class="col-6" v-if="getSite(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fas fa-globe"></i> Site:</span> <a class='listA' target="_blank" v-bind:href="getSite(EmpresaSelecionada(pgid)._id['$oid'])">
                    <span v-if="EmpresaSelecionada(pgid).NomeFantasia">
                        {{EmpresaSelecionada(pgid).NomeFantasia}}
                    </span>
                    <span class="spanCli" v-else>
                        {{EmpresaSelecionada(pgid).Nome}}    
                    </span>
                </a></div>
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
                                        <div class="product__details__price" v-if="selectProduto.QtdMin==1" v-html="HasPromo(selectProduto._id['$oid'],selectProduto.Preco)"></div>
                                        <div class="product__details__quantity">
                                            <div class="quantity" v-bind:data-id="selectProduto._id['$oid']">
                                                <div class="pro-qty" v-bind:data-id="selectProduto._id['$oid']">
                                                    <span v-on:click="dec(selectProduto._id['$oid'])" class="dec qtybtn">-</span>
                                                    <input type="text" v-model="qtdProd[selectProduto._id['$oid']]"  v-bind:id="selectProduto._id['$oid']">
                                                    <span v-on:click="inc(selectProduto._id['$oid'])" class="inc qtybtn">+</span>
                                                </div>
                                            </div>
                                            <button v-if="urlSite.includes('rti')" v-on:click="carroCompra" data-dismiss="modal">Adicionar ao carrinho</button>
                                            <button v-on:click="window.open('https://wa.me/55'+cleanwap(EmpresaSelecionada(pgid).Celular)+'?text='+encodeURI('Produto:'+selectProduto.NomeProduto+' Qtd.:'+qtdProd[selectProduto._id['$oid']]),'_blank')" data-dismiss="modal">Comprar</button>
                                            <br><br>
                                            <div v-if="selectProduto.QtdMin==1" class="badge badge-success">
                                                Disponível em estoque!
                                            </div>
                                            <div v-else class="badge badge-warning">
                                                Apenas por encomenda! <br> tempo de espera de 7 a 10 dias úteis;<br>
                                                Preço em exibição tem como base a última compra<br> o preço final poderá sofrer acréscimo ou decréscimo.
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="product__details__tab">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active m-1 p-1" data-toggle="tab" href="#tabs-1" role="tab"
                                                   aria-selected="true">Resumo</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link m-1 p-1" data-toggle="tab" href="#tabs-2" role="tab"
                                                   aria-selected="false">Especificação</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link m-1 p-1" data-toggle="tab" href="#tabs-3" role="tab"
                                                   aria-selected="false">Dimensao</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Resumo</h6>
                                                    <div v-html="selectProduto.ResumoProduto"></div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Informações</h6>
                                                    <div v-html="selectProduto.EspecificacaoProduto"></div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Dimensões</h6>
                                                    <div v-html="selectProduto.DimensaoProduto"></div></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr>
                    <section class="related-product mt-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="related__product__title">
                                        <h2>Produtos Relacionados</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center text-center" v-if="!nulo(selectProduto)">
                                <div v-for="(itens,index) in app.sys.search(produtos,selectProduto.IdSubCategoriaProduto,'IdSubCategoriaProduto')" v-if="index<9" class="col-lg-3 col-md-5 col-sm-10 m-1 p-1 border rounded border-dark produto">
                                    <div class="product__item" v-on:click="buscaProduto(itens._id['$oid'])">
                                        <div class="product__item__pic set-bg" v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                        </div>
                                        <div v-on:click="buscaProduto(itens._id['$oid'])" >
                                            <h6>{{itens.NomeProduto}}</h6>
                                            <h5 v-if="itens.QtdMin==1" v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
                                            <div v-if="itens.QtdMin==1">
                                                <span class="badge badge-success" >Disponível em estoque!</span>
                                            </div>
                                            <div v-else>
                                                <span class="badge badge-warning" >Apenas por encomenda!</span>
                                            </div>
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
