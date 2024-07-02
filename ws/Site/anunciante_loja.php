<?php $pageName = "AnuncianteLoja"; ?>
<section v-if="app.sys.page==='listacompra'">
    <div class="row table-responsive">
        <table class="table table-striped table-bordered">
            <thead class="thead-dark text-white text-center">
                <tr>
                    <th>Produto</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Especificacao</th>
                    <th>Resumo</th>
                    <th>Características</th>
                    <th>Dimensao</th>
                    <th>Peso</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(td,i) in ListaProdutos" class="text-center justify-content-center">
                    <td>
                        <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(td.IdAlbum)[0].UrlMidia)+')'">
                        </div>
                    </td>
                    <td>{{td.NomeProduto}}</td>
                    <td><h5 v-html="HasPromo(td._id['$oid'],td.Preco)"></h5></td>
                    <td v-html="td.EspecificacaoProduto"></td>
                    <td v-html="td.ResumoProduto"></td>
                    <td v-html="td.Caracteristicas"></td>
                    <td v-html="td.DimensaoProduto"></td>
                    <td v-html="td.Peso"></td>
                </tr>
            </tbody>
            <tfoot class="thead-dark text-white text-center">
                <tr>
                    <th>Produto</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Especificacao</th>
                    <th>Resumo</th>
                    <th>Características</th>
                    <th>Dimensao</th>
                    <th>Peso</th>
                </tr>
            </tfoot>
        </table>
    </div>
    <hr>
</section>
<section v-if="((spy==='loja' || spy==='all') &&(Anunciante(pgid).Tipo==='2' || Anunciante(pgid).Tipo==='3'))&&!nulo(produtos)">
    <h2 class="spanCli m-2 p-2">Conheça nossos produtos:</h2>
    <div class="row"  v-if="">
        <div class="col-12 text-center justify-content-center">
            <div class="row text-center justify-content-center">
                <fieldset class="col-10 mx-auto border rounded p-1 m-1 container-fluid border-dark anunciobox">
                    <div class="row justify-content-center text-center">
                        <div class="col-3 justify-content-center text-center">
                            <select class="form-control" v-on:change="orderProdutos()" v-model="order">
                                <option value="RN">Aleatório</option>
                                <option value="DS">Disponíveis</option>
                                <option value="EN">Encomendas</option>
                                <option value="AZ">A-Z</option>
                                <option value="ZA">Z-A</option>
                                <option value="UP">Maior Preço</option>
                                <option value="DW">Menor Preço</option>
                            </select>
                        </div>
                        <input class="form-control col-8" type="text" v-model="produtopesq" v-on:keypress="pesquisaprodutos"  v-on:change="pesquisaprodutos" v-on:blur="pesquisaprodutos" class="form-control col-10 p-1 m-1" placeholder="Pesquise" aria-label="Pesquise" aria-describedby="basic-addon1">
                        <div class="col-8 mx-auto row mt-3 text-center justify-content-center">
                            <span class='btn m-1 p-1' v-on:click="app.empresasanunciando.formato='lista'"><i class="fas fa-list"></i> Lista</span>
                            <span class='btn m-1 p-1' v-on:click="app.empresasanunciando.formato='coluna'"><i class="fas fa-columns"></i> Colunas</span>
                        </div>
                        <div class="col-8 mx-auto row  text-center justify-content-center">    
                            <span class='btn m-1 p-1' v-on:click="app.empresasanunciando.filtrarCatalogo(null)"><i class="fas fa-book"></i> Todos os produtos</span>
                            <span class='btn m-1 p-1' v-on:click="app.empresasanunciando.filtrarCatalogo(1)"><i class="fas fa-book"></i> Estoque</span>
                            <span class='btn m-1 p-1' v-on:click="app.empresasanunciando.filtrarCatalogo(0)"><i class="fas fa-book"></i> Encomenda</span>
                        </div>
                        <br>
                        <div class="col-8 mx-auto row  text-center justify-content-center">
                            <span class='btn m-1 p-1' v-on:click="app.empresasanunciando.ImprimirCatalogo()"><i class="fas fa-book"></i> Apresentação</span>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5 text-left justify-content-start">
                    <span class="spanCli m-1 p-1"> Categorias </span>
                    <ul v-if="!nulo(familiaprodutos)"  class="list-group text-left">
                        <li v-for="itens,index in autoList(familiaprodutos,'familia')" v-on:mouseover="popin('chkfamilia',index)" v-on:touchstart="popin('chkfamilia',index)"
                            v-on:mouseleave="popout('chkfamilia',index)" v-on:touchend="popout('chkfamilia',index)" class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoFamilia">
                            <span>
                                <input type="checkbox" class="chkfamilia" v-on:change="pesquisaFamilia" v-model="familiaselect" v-bind:value="itens._id['$oid']">
                                {{itens.TipoFamilia}}
                            </span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <span class="spanCli m-1 p-1"> Subcategorias </span>
                    <ul v-if="!nulo(classeprodutos)" class="list-group text-left">
                        <li  v-for="itens,index in app.sys.searchinArray(autoList(classeprodutos,'classe'),familiaselect,'IdFamilia')"  v-on:mouseover="popin('chkclasse',index)" v-on:touchstart="popin('chkclasse',index)"
                             v-on:mouseleave="popout('chkclasse',index)" v-on:touchend="popout('chkclasse',index)"  class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoClasse">
                            <span>
                                <input class="chkclasse" type="checkbox" v-on:change="pesquisaClasse" v-model="classeselect"  v-bind:value="itens._id['$oid']"> 
                                {{itens.TipoClasse}}
                            </span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <span class="spanCli m-1 p-1"> Variedades </span>
                    <ul v-if="!nulo(categoriaprodutos)" class="list-group text-left">
                        <li  v-for="itens,index in app.sys.searchinArray(autoList(categoriaprodutos,'categoria'),classeselect,'IdClasse')" v-on:mouseover="popin('chkcategoria',index)" v-on:touchstart="popin('chkcategoria',index)"
                             v-on:mouseleave="popout('chkcategoria',index)" v-on:touchend="popout('chkcategoria',index)"  class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoCategoria">
                            <span>
                                <input class="chkcategoria" type="checkbox" v-on:change="pesquisaCategoria" v-model="categoriaselect"  v-bind:value="itens._id['$oid']" > 
                                {{itens.TipoCategoria}}
                            </span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <span class="spanCli m-1 p-1"> Opções </span>
                    <ul v-if="!nulo(subcategoriaprodutos)" class="list-group text-left">
                        <li  v-for="itens,index in app.sys.searchinArray(autoList(subcategoriaprodutos,'subcategoria'),categoriaselect,'IdCategoria')"  v-on:mouseover="popin('chksubcategoria',index)" v-on:touchstart="popin('chksubcategoria',index)"
                             v-on:mouseleave="popout('chksubcategoria',index)" v-on:touchend="popout('chksubcategoria',index)" class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoSubCategoria">
                            <span>
                                <input class="chksubcategoria" type="checkbox" v-on:change="pesquisaSubCategoria" v-model="subcategoriaselect"  v-bind:value="itens._id['$oid']" > 
                                {{itens.TipoSubCategoria}}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-7">
                    <div v-if="formato=='lista'" class="row justify-content-center text-center">
                        <div v-for="itens in PaginasLoja" class="col-11 p-1 m-1 border rounded border-dark produto">
                            <div class="product__item row h-100">
                                <div class="col-lg-4 col-md-12 col-sm-12 my-auto" v-if="itens.QtdMin==1">
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                    </div>
                                </div>
                                <div class="col-4 col-md-12 col-sm-12  my-auto" v-else>
                                    <!--<div class="product__item__pic set-bg"  v-bind:style="'filter: grayscale(100%); background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">-->
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                    </div>
                                </div>
                                <div class="product__item__text col-lg-7 col-md-12 col-sm-12"  data-toggle="modal" data-target="#AboutProduto" v-on:click="buscaProduto(itens._id['$oid'])">
                                    <h6>{{itens.NomeProduto}}</h6>
                                    <h5 v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
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
                    <div v-if="formato=='coluna'"  class="row justify-content-center text-center">
                        <div v-for="itens in PaginasLoja" class="col-lg-3 col-md-5 col-sm-11 p-1 m-1 border rounded border-dark produto">
                            <div class="product__item" data-toggle="modal" data-target="#AboutProduto" v-on:click="buscaProduto(itens._id['$oid'])">
                                <div v-if="itens.QtdMin==1">
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                    </div>
                                </div>
                                <hr>
                                <div class="product__item__text">
                                    <h6>{{itens.NomeProduto}}</h6>
                                    <h5 v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
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
                            <br>
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
                                        <div class="product__details__price" v-html="HasPromo(selectProduto._id['$oid'],selectProduto.Preco)"></div>
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
                                <div v-for="(itens,index) in app.sys.search(produtos,selectProduto.IdSubCategoriaProduto,'IdSubCategoriaProduto')" v-if="index<9" class="col-lg-4 col-md-7 col-sm-10 m-1 p-1 border rounded border-dark produto">
                                    <div class="product__item" v-on:click="buscaProduto(itens._id['$oid'])">
                                        <div class="product__item__pic set-bg" v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                        </div>
                                        <div v-on:click="buscaProduto(itens._id['$oid'])" >
                                            <h6>{{itens.NomeProduto}}</h6>
                                            <h5 v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
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
