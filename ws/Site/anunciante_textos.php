<section v-if="((spy==='blog' || spy==='all') && (Anunciante(pgid).Tipo==='2' || Anunciante(pgid).Tipo==='4')) && (categoriatextosite.length>0 && textosite.length>0)">
    <h2 class="spanCli m-2 p-2">Conheça nosso editorial:</h2>
    <div class="container-fluid">
        <div class="row text-center justify-content-center p-1 bg-white rounded border">
            <div v-if="!nulo(categoriatextosite)" class="col-4">
                <h3>Temas:</h3>
                <div class="accordion" id="accordionTextos">
                    <div v-for="itens in categoriatextosite" class="card">
                        <div class="card-header" v-bind:id="'head'+i">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" v-bind:data-target="'#tcollapse'+i" aria-expanded="true" v-bind:aria-controls="'tcollapse'+i">
                                    {{itens.Nome}} 
                                </button>
                            </h2>
                        </div>
                        <div v-bind:id="'tcollapse'+i" class="collapse" v-bind:aria-labelledby="'head'+i" data-parent="#accordionTextos">
                            <div class="card-body">
                                <div v-if="!nulo(textosite)">
                                    <ul class="list-group list-group-flush" v-if="!nulo(itens)" id="liststyle">
                                        <li class="list-group-item" v-for="text in app.sys.search(textosite,itens._id['$oid'],'IdCategoriaText')">
                                            <button v-on:click="selectext(text._id['$oid'])">{{text.Titulo}}</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8 text-left">
                <h4>Conteúdo:</h4>
                <article v-if="!nulo(selectedtext)">
                    <div v-html="texto()"></div>
                    <button class="btn mx-auto" v-if="lermais===false" v-on:click="vermais(selectedtext)">Saber mais</button>
                </article>
            </div>
        </div>
    </div>
</section>
<section v-if="((spy==='blog' || spy==='all') &&(Anunciante(pgid).Tipo==='3' || Anunciante(pgid).Tipo==='4'))&&!nulo(produtos)">
    <h2 class="spanCli m-2 p-2">Conheça nossos produtos:</h2>
    <div class="row">
        <div class="col-7 mx-auto text-center justify-content-center">
            <div class="swiper" id="swiperblog">
                <div class="swiper-wrapper">
                    <div v-for="itens in app.empresasanunciando.catalogoProdutos(TipoCatalogo)" class="swiper-slide rounded produto">
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
                    </div>
                </div>
            </div>
            <div id="swiper-button-next"></div>
            <div id="swiper-button-prev"></div>
        </div>
    </div>
    {{swiper()}}
</section>
