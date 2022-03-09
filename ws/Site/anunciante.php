<div id="empresasanunciando" v-if="app.sys.page==='anunciante'" class="border rounded glory m-3 p-3 shadow-lg borda-x text-center justify-content-center">
    <div v-if="pgid==null" class="row text-center justify-content-center">
        <h2 class="spanCli m-2 p-2 mb-3 col-12">Conheça nossos clientes:</h2>
        <div v-if=itens.Ativo==='true' class="col-md-12 col-lg-3 col-xl-3 col-12 border m-1 p-1" v-for="itens in app.sys.paginate(anunciosSrc)">
            <img class="logoanunciante img-fluid rounded" 
                 v-bind:src="getLogo(itens.IdEmpresa)">
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
            <div v-if="getFB(itens.IdEmpresa)!=null">
                <span v-if class='spanCli'><i class="fab fa-facebook-f"></i> Facebook:</span>
                <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+getFB(itens.IdEmpresa)">@{{getFB(itens.IdEmpresa)}}</a>
                <br>
            </div>
            <div v-if="getInsta(itens.IdEmpresa)!=null">
                <span class='spanCli'><i class="fab fa-instagram"></i> Instagram:</span>
                <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+getInsta(itens.IdEmpresa)">@{{getInsta(itens.IdEmpresa)}}</a>
                <br>
            </div>
            <div v-if="getSite(itens.IdEmpresa)!=null">
                <span class='spanCli'><i class="fas fa-globe"></i> Site:</span>
                <a class='listA' target="_blank" v-bind:href="getSite(itens.IdEmpresa)">
                    <span v-if="Empresa(itens.IdEmpresa).NomeFantasia">
                        {{Empresa(itens.IdEmpresa).NomeFantasia}}
                    </span>
                    <span class="spanCli" v-else>
                        {{Empresa(itens.IdEmpresa).Nome}}    
                    </span>
                </a>
                <br>
            </div>
            <br>
            <a v-if="itens.Tipo==='1'" class="btn btn-dark py-2 my-2" v-bind:href="'#anunciante?pgid='+itens.IdEmpresa">
                Clique para ver a página <i class="fas fa-angle-double-right"></i>
            </a>
            <a v-if="itens.Tipo==='2'" class="btn btn-dark py-2 my-2" v-bind:href="'#loja?pgid='+itens.IdEmpresa">
                Clique para ver a loja <i class="fas fa-angle-double-right"></i>
            </a>
            <a v-if="itens.Tipo==='3'" class="btn btn-dark py-2 my-2" v-bind:href="'#anunciante?pgid='+itens.IdEmpresa">
                Clique para ver a página <i class="fas fa-angle-double-right"></i>
            </a>
            <a v-if="itens.Tipo==='4'" target="_blank" class="btn btn-dark py-2 my-2" v-bind:href="getSite(itens.IdEmpresa)">
                Clique para ver o Site <i class="fas fa-angle-double-right"></i>
            </a>
            <a v-if="itens.Tipo==='5'" target="_blank" class="btn btn-dark py-2 my-2" v-bind:href="'https://wa.me/55'+cleanwap(Empresa(itens.IdEmpresa).Celular)">
                Clique para falar no Whatsapp <i class="fas fa-angle-double-right"></i>
            </a>
            <a v-if="itens.Tipo==='6'" target="_blank" class="btn btn-dark py-2 my-2" v-bind:href="'https://facebook.com/'+getFB(itens.IdEmpresa)">
                Clique para ir ao Facebook<i class="fas fa-angle-double-right"></i>
            </a>
            <a v-if="itens.Tipo==='7'" target="_blank" class="btn btn-dark py-2 my-2" v-bind:href="'https://instagram.com/'+getInsta(itens.IdEmpresa)">
                Clique para ir ao Instagram <i class="fas fa-angle-double-right"></i>
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
        <h2 class="spanCli m-2 p-2">Associado:</h2>
        <div class="row justify-content-center text-center text-capitalize">
            <div class="col-md-12 col-lg-12 col-xl-12 col-12 m-3 p-3 mb-4">
                <img v-bind:src="getLogo(Empresa(pgid)._id['$oid'])" class="img-thumbnail rounded mx-auto d-block">
            </div>
            <div v-if="typeof Empresa(pgid).NomeFantasia !== 'undefined'" class="col-md-12 col-lg-12 col-xl-12 col-12 row">
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).NomeFantasia!='null'"><span class='spanCli m-2 p-2'>Empresa:</span> {{Empresa(pgid).NomeFantasia}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Cnpj!='null'"><span class='spanCli m-2 p-2'>CNPJ:</span> {{Empresa(pgid).Cnpj}}</div>
                <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Nome!='null'"><span class='spanCli m-2 p-2'>Responsável:</span> {{Empresa(pgid).Nome}}</div>
            </div>
            <div v-else>
                <div class="col-md-12 col-lg-12 col-xl-12 col-12 row">
                    <div v-if="Empresa(pgid).Nome!='null'"><span class='spanCli m-2 p-2'>Responsável:</span> {{Empresa(pgid).Nome}}</div>
                </div>
            </div>
        </div>
        <br>
        <hr>
        <br>
        <div class="row justify-content-center text-center text-capitalize">
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).CEP!='null'"><span class='spanCli m-2 p-2'>Cep:</span> {{Empresa(pgid).CEP}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).UF!='null'"><span class='spanCli m-2 p-2'>Estado:</span> {{Empresa(pgid).UF}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Cidade!='null'"><span class='spanCli m-2 p-2'>Cidade:</span> {{Empresa(pgid).Cidade}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Bairro!='null'"><span class='spanCli m-2 p-2'>Bairro:</span> {{Empresa(pgid).Bairro}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Rua!='null'"><span class='spanCli m-2 p-2'>Rua:</span> {{Empresa(pgid).Rua}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Num!='null'"><span class='spanCli m-2 p-2'>Número:</span> {{Empresa(pgid).Num}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Complemento!='null'"><span class='spanCli m-2 p-2'>Complemento:</span> {{Empresa(pgid).Complemento}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Telefone!='null'"><span class='spanCli m-2 p-2'>Telefone:</span> {{Empresa(pgid).Telefone}}</div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="Empresa(pgid).Celular!='null'"><span class='spanCli m-2 p-2'><i class="fab fa-whatsapp"></i> whatsapp:</span> <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(Empresa(pgid).Celular)">{{Empresa(pgid).Celular}}</a></div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="getFB(pgid)!=null"><span class='spanCli m-2 p-2'><i class="fab fa-facebook-f"></i> Facebook:</span> <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+getFB(Empresa(pgid)._id['$oid'])">@{{getFB(Empresa(pgid)._id['$oid'])}}</a></div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="getInsta(pgid)!=null"><span class='spanCli m-2 p-2'><i class="fab fa-instagram"></i> Instagram:</span> <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+getInsta(Empresa(pgid)._id['$oid'])">@{{getInsta(Empresa(pgid)._id['$oid'])}}</a></div>
            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="getSite(pgid)!=null"><span class='spanCli m-2 p-2'><i class="fas fa-globe"></i> Site:</span> <a class='listA' target="_blank" v-bind:href="getSite(Empresa(pgid)._id['$oid'])">
                    <span v-if="Empresa(pgid).NomeFantasia">
                        {{Empresa(pgid).NomeFantasia}}
                    </span>
                    <span class="spanCli" v-else>
                        {{Empresa(pgid).Nome}}    
                    </span>
                </a></div>
        </div>
        <br>
        <hr>
        <br>
        <iframe class="col-md-11 col-lg-7 col-xl-7 col-11 mx-auto d-block"
                width="450"
                height="250"
                frameborder="0" style="border:0"
                v-bind:src="'https://www.google.com/maps/embed/v1/place?key='+app.sys.gapi+'&q='+Empresa(pgid).Rua+','+Empresa(pgid).Num" allowfullscreen>
        </iframe>
        <br>
        <hr v-if="paginas!==null">
        <h2 class="spanCli m-2 p-2" v-if="paginas!==null">Conheça nosso conteúdo:</h2>
        <div class="row" v-if="paginas!==null">
            <nav class="navbar bg-m navbar-light res col-md-12 col-lg-3 col-xl-3 col-12" id="navbarCliente">
                <div class="container-fluid justify-content-center w-100">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsiveCli" aria-controls="navbarResponsiveCli" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="res navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarResponsiveCli">
                        <ul v-for="itens in paginas" class="navbar-nav justify-content-center text-center flex-column">
                            <li class="nav-item">
                                <a class="nav-link" v-bind:href="app.sys.pgUrl(itens.UrlPage)">{{itens.Titulo}} <i class="fas fa-angle-double-right"></i></a></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="col-md-12 col-lg-7 col-xl-7 col-12">
                <div v-for="itens in paginas">
                    <h2 class="spanCli m-2 p-2" v-if="itens.UrlPage===getParameterByName('pg')">{{itens.Titulo}}</h2>
                    <div v-if="itens.UrlPage===getParameterByName('pg')" v-html="itens.ContentPage"></div>
                </div>
            </div>
        </div>
        <br>
        <hr v-if="produtos!==null && produtos.length>0">
        <h2 class="spanCli m-2 p-2" v-if="produtos!==null && produtos.length>0">Conheça nossos produtos:</h2>
        <div class="row"  v-if="produtos!==null && produtos.length>0">
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
                    <div v-for="itens in app.sys.paginate(app.sys.searchall(produtos,produtoselect))" class="border border-dark rounded my-auto mx-auto col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        {{itens.NomeProduto}}
                        {{itens.ResumoProduto}}
                        {{itens.Preco}}
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
<script src="<?php echo $cdn; ?>ws/Site/empresas.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/configuracao.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/familiaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/classeprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/categoriaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/subcategoriaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/listaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/produtos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/anunciante.js"></script>
