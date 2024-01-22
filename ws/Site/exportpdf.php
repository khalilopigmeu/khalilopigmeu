<div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="CatalogoDeProdutos">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Conheça nossos produtos:</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body h-100">
                <div class="swiper swipe my-auto" v-if="printpdf==true">
                    <div class="swiper-wrapper">
                        <div v-for="itens in app.empresasanunciando.catalogoProdutos(TipoCatalogo)" class="swiper-slide border rounded border-dark produto">
                            <div class="product__item row h-100">
                                <div class="col-lg-4 col-md-12 col-sm-12 my-auto" v-if="itens.QtdMin==1">
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia).replace('https://cdn.pongongo.com.br','')+')'">
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 my-auto" v-else>
                                    <!--<div class="product__item__pic set-bg"  v-bind:style="'filter: grayscale(100%); background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">-->
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia).replace('https://cdn.pongongo.com.br','')+')'">
                                    </div>
                                </div>
                                <div class="product__item__text  col-lg-7 col-md-12 col-sm-12">
                                    <h6>{{itens.NomeProduto}}</h6>
                                    <h5 v-if="itens.QtdMin==1" v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
                                    <div v-html="itens.EspecificacaoProduto"></div>
                                    <div v-html="itens.Caracteristicas"></div>
                                    <div v-if="itens.QtdMin==1" class="badge badge-success">
                                        Disponível em estoque!
                                    </div>
                                    <div v-else class="badge badge-warning">
                                        Apenas por encomenda! <br> tempo de espera de 7 a 10 dias úteis;<br>
                                        Preço em exibição tem como base a última compra<br> o preço final poderá sofrer acréscimo ou decréscimo.
                                    </div>
                                </div>
                            </div>
                        </div>
                       <!-- <div class="swiper-pagination"></div>-->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
