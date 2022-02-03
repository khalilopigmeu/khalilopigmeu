<div id="empresasanunciando" v-if="app.sys.page==='anunciante'" class="border rounded glory m-3 p-3 shadow-lg borda-x text-center justify-content-center">
    <div v-if="pgid==null" class="row text-center justify-content-center">
        <h2 class="spanCli m-2 p-2 mb-3 col-12">Conheça nossos clientes:</h2>
        <div class="col-md-12 col-lg-3 col-xl-3 col-12 border m-1 p-1" v-for="itens in app.sys.paginate(anunciosSrc)">
            <img class="logoanunciante img-fluid rounded" 
                 v-bind:alt="Empresa(itens.IdEmpresa).NomeFantasia" v-bind:title="Empresa(itens.IdEmpresa).NomeFantasia"
                 v-bind:src="getLogo(Empresa(itens.IdEmpresa)._id['$oid'])">
            <br>
            <h3 class="spanCli" v-if="Empresa(itens.IdEmpresa).NomeFantasia">
                {{Empresa(itens.IdEmpresa).NomeFantasia}}
            </h3>
            <h3 class="spanCli" v-else>
                {{Empresa(itens.IdEmpresa).Nome}}    
            </h3>
            <div v-if="Empresa(itens.IdEmpresa).Celular!='null'" >
                <span class='spanCli'><i class="fab fa-whatsapp"></i> whatsapp:</span>
                <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(Empresa(itens.IdEmpresa).Celular)">{{Empresa(itens.IdEmpresa).Celular}}</a>
                <br>
            </div>
            <div v-if="getFB(Empresa(itens.IdEmpresa)._id['$oid'])!=null">
                <span v-if class='spanCli'><i class="fab fa-facebook-f"></i> Facebook:</span>
                <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+getFB(Empresa(itens.IdEmpresa)._id['$oid'])">@{{getFB(Empresa(itens.IdEmpresa)._id['$oid'])}}</a>
                <br>
            </div>
            <div v-if="getInsta(Empresa(itens.IdEmpresa)._id['$oid'])!=null">
                <span class='spanCli'><i class="fab fa-instagram"></i> Instagram:</span>
                <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+getInsta(Empresa(itens.IdEmpresa)._id['$oid'])">@{{getInsta(Empresa(itens.IdEmpresa)._id['$oid'])}}</a>
                <br>
            </div>
            <div v-if="getSite(Empresa(itens.IdEmpresa)._id['$oid'])!=null">
                <span class='spanCli'><i class="fas fa-globe"></i> Site:</span>
                <a class='listA' target="_blank" v-bind:href="getSite(Empresa(itens.IdEmpresa)._id['$oid'])">{{getSite(Empresa(itens.IdEmpresa)._id['$oid'])}}</a>
                <br>
            </div>
            <br>
            <a v-if="app.sys.page=='loja'" class="btn btn-dark py-2 my-2" v-bind:href="'#loja?pgid='+Empresa(itens.IdEmpresa)._id['$oid']">
                Clique para saber mais <i class="fas fa-angle-double-right"></i>
            </a>
            <a v-if="app.sys.page==='anunciante'" class="btn btn-dark py-2 my-2" v-bind:href="'#anunciante?pgid='+Empresa(itens.IdEmpresa)._id['$oid']">
                Clique para saber mais <i class="fas fa-angle-double-right"></i>
            </a>
        </div>
        <nav class="col-12" aria-label="Page navigation">
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
    <div v-else>
        <div v-for="itens in src">
            <div v-if="Empresa(itens.IdEmpresa)._id['$oid']===pgid">
                <h2 class="spanCli m-2 p-2">Associado:</h2>
                <div class="row justify-content-center text-center text-capitalize">
                    <div class="col-md-12 col-lg-12 col-xl-12 col-12 m-3 p-3 mb-4">
                        <img v-if="logo" v-bind:src="logo" class="img-thumbnail rounded mx-auto d-block">
                    </div>
                    <div v-if="Empresa(itens.IdEmpresa).NomeFantasia" class="col-md-12 col-lg-12 col-xl-12 col-12 row">
                        <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).NomeFantasia!='null'"><span class='spanCli m-2 p-2'>Empresa:</span> {{Empresa(itens.IdEmpresa).NomeFantasia}}</div>
                        <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Cnpj!='null'"><span class='spanCli m-2 p-2'>CNPJ:</span> {{Empresa(itens.IdEmpresa).Cnpj}}</div>
                        <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Nome!='null'"><span class='spanCli m-2 p-2'>Responsável:</span> {{Empresa(itens.IdEmpresa).Nome}}</div>
                    </div>
                    <div v-else>
                        <div class="col-md-12 col-lg-12 col-xl-12 col-12 row">
                            <div v-if="Empresa(itens.IdEmpresa).Nome!='null'"><span class='spanCli m-2 p-2'>Responsável:</span> {{Empresa(itens.IdEmpresa).Nome}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <br>
            <div class="row justify-content-center text-center text-capitalize">
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).CEP!='null'"><span class='spanCli m-2 p-2'>Cep:</span> {{Empresa(itens.IdEmpresa).CEP}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).UF!='null'"><span class='spanCli m-2 p-2'>Estado:</span> {{Empresa(itens.IdEmpresa).UF}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Cidade!='null'"><span class='spanCli m-2 p-2'>Cidade:</span> {{Empresa(itens.IdEmpresa).Cidade}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Bairro!='null'"><span class='spanCli m-2 p-2'>Bairro:</span> {{Empresa(itens.IdEmpresa).Bairro}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Rua!='null'"><span class='spanCli m-2 p-2'>Rua:</span> {{Empresa(itens.IdEmpresa).Rua}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Num!='null'"><span class='spanCli m-2 p-2'>Número:</span> {{Empresa(itens.IdEmpresa).Num}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Complemento!='null'"><span class='spanCli m-2 p-2'>Complemento:</span> {{Empresa(itens.IdEmpresa).Complemento}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Telefone!='null'"><span class='spanCli m-2 p-2'>Telefone:</span> {{Empresa(itens.IdEmpresa).Telefone}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(itens.IdEmpresa).Celular!='null'"><span class='spanCli m-2 p-2'><i class="fab fa-whatsapp"></i> whatsapp:</span> <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(Empresa(itens.IdEmpresa).Celular)">{{Empresa(itens.IdEmpresa).Celular}}</a></div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="fb!='null'"><span class='spanCli m-2 p-2'><i class="fab fa-facebook-f"></i> Facebook:</span> <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+fb">{{fb}}</a></div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="insta!='null'"><span class='spanCli m-2 p-2'><i class="fab fa-instagram"></i> Instagram:</span> <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+insta">{{insta}}</a></div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="site!='null'"><span class='spanCli m-2 p-2'><i class="fas fa-globe"></i> Site:</span> <a class='listA' target="_blank" v-bind:href="site">{{site}}</a></div>
            </div>
            <br>
            <hr>
            <br>
            <iframe class="col-md-11 col-lg-7 col-xl-7 col-11 mx-auto d-block"
                    width="450"
                    height="250"
                    frameborder="0" style="border:0"
                    v-bind:src="'https://www.google.com/maps/embed/v1/place?key='+app.sys.gapi+'&q='+Empresa(itens.IdEmpresa).Rua+','+Empresa(itens.IdEmpresa).Num" allowfullscreen>
            </iframe>
            <br>
            <hr>
            <h2 class="spanCli m-2 p-2">Conheça nosso conteúdo:</h2>
            <div class="row">
                <nav class="navbar bg-m navbar-light res col-md-12 col-lg-3 col-xl-3 col-12" id="navbarCliente">
                    <div class="container-fluid justify-content-center w-100">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsiveCli" aria-controls="navbarResponsiveCli" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="res navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarResponsiveCli">
                            <ul v-for="itens in paginas" class="navbar-nav justify-content-center text-center flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" v-bind:href="app.sys.pgUrl(Empresa(itens.IdEmpresa).UrlPage)">{{Empresa(itens.IdEmpresa).Titulo}} <i class="fas fa-angle-double-right"></i></a></li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="col-md-12 col-lg-7 col-xl-7 col-12">
                    <div v-for="itens in paginas">
                        <h2 class="spanCli m-2 p-2" v-if="Empresa(itens.IdEmpresa).UrlPage===getParameterByName('pg')">{{Empresa(itens.IdEmpresa).Titulo}}</h2>
                        <div v-if="Empresa(itens.IdEmpresa).UrlPage===getParameterByName('pg')" v-html="Empresa(itens.IdEmpresa).ContentPage"></div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <h2 class="spanCli m-2 p-2">Conheça nossos produtos:</h2>
            <div class="row">
                <nav class="navbar bg-m navbar-light res col-md-12 col-lg-3 col-xl-3 col-12" id="navbarProdutos">
                    <div class="container-fluid justify-content-center w-100">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsivePro" aria-controls="navbarResponsivePro" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="res navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarResponsivePro">
                            <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Famílias <i class="fas fa-angle-double-right"></i></h3>
                            <ul v-for="itens in autoList(familiaprodutos,'familia')" class="navbar-nav justify-content-center text-center flex-column">
                                <li class="nav-item">
                                    <span class="nav-link"><input type="checkbox" v-model="familiaselect" v-bind:value="Empresa(itens.IdEmpresa)._id['$oid']"> {{Empresa(itens.IdEmpresa).TipoFamilia}} <i class="fas fa-angle-double-right"></i></span></li>
                                </li>
                            </ul>
                            <hr class="border bg-light">
                            <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Classes <i class="fas fa-angle-double-right"></i></h3>
                            <ul v-for="itens in app.sys.searchinArray(autoList(classeprodutos,'classe'),familiaselect,'IdFamilia')" class="navbar-nav justify-content-center text-center flex-column">
                                <li class="nav-item">
                                    <span class="nav-link"><input type="checkbox"  v-model="classeselect"  v-bind:value="Empresa(itens.IdEmpresa)._id['$oid']"> {{Empresa(itens.IdEmpresa).TipoClasse}} <i class="fas fa-angle-double-right"></i></span></li>
                                </li>
                            </ul>
                            <hr class="border bg-light">
                            <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Categorias <i class="fas fa-angle-double-right"></i></h3>
                            <ul v-for="itens in app.sys.searchinArray(autoList(categoriaprodutos,'categoria'),classeselect,'IdClasse')" class="navbar-nav justify-content-center text-center flex-column">
                                <li class="nav-item">
                                    <span class="nav-link"><input type="checkbox" v-model="categoriaselect"  v-bind:value="Empresa(itens.IdEmpresa)._id['$oid']" > {{Empresa(itens.IdEmpresa).TipoCategoria}} <i class="fas fa-angle-double-right"></i></span></li>
                                </li>
                            </ul>
                            <hr class="border bg-light">
                            <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Subcategorias <i class="fas fa-angle-double-right"></i></h3>
                            <ul v-for="itens in app.sys.searchinArray(autoList(subcategoriaprodutos,'subcategoria'),categoriaselect,'IdCategoria')" class="navbar-nav justify-content-center text-center flex-column">
                                <li class="nav-item">
                                    <span class="nav-link"><input type="checkbox" v-model="subcategoriaselect"  v-bind:value="Empresa(itens.IdEmpresa)._id['$oid']" > {{Empresa(itens.IdEmpresa).TipoSubCategoria}} <i class="fas fa-angle-double-right"></i></span></li>
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
                        <div v-for="itens in app.sys.paginate(app.sys.searchall(produtos,produtoselect))" class="border border-dark rounded my-auto mx-auto col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            {{Empresa(itens.IdEmpresa).NomeProduto}}
                            {{Empresa(itens.IdEmpresa).ResumoProduto}}
                            {{Empresa(itens.IdEmpresa).Preco}}
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
        </div>
    </div>
</div>
<div id="anunciante" v-if="app.sys.page==='config'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="configuracaosite" v-if="app.sys.page==='config'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="FamiliaProdutosSite" v-if="app.sys.page==='familiaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="ClasseProdutosSite" v-if="app.sys.page==='classeprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="CategoriaProdutosSite" v-if="app.sys.page==='categoriaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="SubcategoriaProdutosSite" v-if="app.sys.page==='subcategoriaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="ListaProdutosSite" v-if="app.sys.page==='listaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="ProdutosSite" v-if="app.sys.page==='produtos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<script src="<?php echo $cdn; ?>ws/Site/pagina.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/anunciante.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/empresas.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/configuracao.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/familiaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/classeprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/categoriaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/subcategoriaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/listaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/produtos.js"></script>
