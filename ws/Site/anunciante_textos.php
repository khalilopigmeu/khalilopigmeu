<section v-if="((spy==='blog' || spy==='all') && (Anunciante(pgid).Tipo==='2' || Anunciante(pgid).Tipo==='4')) && (categoriatextosite.length>0 && textosite.length>0)">
    <h2 class="spanCli m-2 p-2">Conheça nosso editorial:</h2>
    <div class="container-fluid">
        <div class="row text-center justify-content-center p-1 bg-white rounded border">
            <div v-if="!nulo(categoriatextosite)" class="col-sm-12 col-lg-3">
                <h6 class="titles">Categorias:</h6>
                <div class="accordion" id="accordionTextos">
                    <div v-for="(itens,i) in categoriatextosite" class="card">
                        <div class="card-header" v-bind:id="'head'+i">
                            <span class=" titles text-left headText text-break" data-toggle="collapse" v-bind:data-target="'#tcollapse'+i" aria-expanded="false" v-bind:aria-controls="'tcollapse'+i">
                                {{itens.Nome}} 
                            </span>
                        </div>
                        <div v-bind:id="'tcollapse'+i" class="collapse" v-bind:aria-labelledby="'head'+i" data-parent="#accordionTextos">
                            <div class="card-body">
                                <div v-if="!nulo(textosite)">
                                    <ul class="list-group list-group-flush" v-if="!nulo(itens)" id="liststyle">
                                        <li class="list-group-item titles" v-for="text in app.sys.sorter(app.sys.search(textosite,itens._id['$oid'],'IdCategoriaText'),'ASC','DataPublicacao')">
                                            <span class="unselectedText" v-bind:data-id="text._id['$oid']" v-on:click="selectext(text._id['$oid'])">{{text.Titulo}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-9 text-left">
                <article v-if="!nulo(selectedtext)">
                    <h5 class="titles" v-html="title()"></h5>
                    <div v-html="texto()"></div>
                    <br>
                    <button class="btn mx-auto" v-if="lermais===false" v-on:click="vermais(selectedtext)">Saber mais</button>
                    <br>
                    <hr>
                    <br>
                    <button class='btn button' v-on:click='shareText(selectedtext)' >Compartilhar <i class="fas fa-share"></i></button>
                    <div class="fb-share-button" v-bind:data-href="TextUrl(selectedtext,false)" data-layout="button" data-size="small">
                        <a target="_blank" v-bind:href="'https://www.facebook.com/sharer/sharer.php?u='+TextUrl(selectedtext,true)" class="fb-xfbml-parse-ignore">Compartilhar</a>
                    </div>
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
