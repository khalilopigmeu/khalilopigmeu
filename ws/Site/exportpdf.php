<!--<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>-->
<section id="capture" v-if="printpdf==true">
    <h2 class="spanCli m-2 p-2">Conheça nossos produtos:</h2>
    <div class="row">
        <div v-for="itens in app.empresasanunciando.catalogoProdutos(TipoCatalogo)" class="col-12 m-1 p-1 border rounded border-dark produto html2pdf__page-break">
            <div class="product__item row">
                <div class="col-4" v-if="itens.QtdMin==1">
                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia).replace('https://cdn.pongongo.com.br','')+')'">
                    </div>
                </div>
                <div class="col-4" v-else>
                    <!--<div class="product__item__pic set-bg"  v-bind:style="'filter: grayscale(100%); background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">-->
                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia).replace('https://cdn.pongongo.com.br','')+')'">
                    </div>
                </div>
                <div class="product__item__text col-7">
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
    </div>
</section>
<canvas id="captured"></canvas>
