<div id="Promocao"  v-if="app.sys.page==='promocao'" >
    <section id="servicosGraficos" class="p-2 rounded">
        <div class="container justify-content-center text-center">
            <h2>Serviços Gráficos</h2>
            <br>
            <div class="row justify-content-center text-center">
                <div v-for="item in servicosGraficos" class='bg-light m-2 p-2 rounded border col-9'>
                    <h5 class="card-title text-muted text-uppercase text-center"><i v-bind:class="item.icon"></i>{{titulo(item.link)}}</h5>
                    <h6 class="card-price text-center">de <del>R$ {{item.valor[Object.keys(item.valor)[max]]}}</del> por R$ {{item.valor[Object.keys(item.valor)[min]]}}</h6>
                    <div v-html='conteudo(item.link)'></div>
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8 col-8 m-2 p-2">
                            <a v-bind:href="'https://wa.me/5511940007917?text='+item.link" target="_blank">
                                <img src="<?php echo $refUrl; ?>img/whatsapp.png" class="socialink rounded img-fluid w-50" alt="" title="">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8 col-8 m-2 p-2">
                            <a v-bind:href="'https://t.me/Bienestarclube'" target="_blank">
                                <img src="<?php echo $refUrl; ?>img/telegram.png" class="socialink rounded img-fluid w-50" alt="" title="">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8 col-8 m-2 p-2">
                            <a v-bind:href="'https://www.messenger.com/t/bienestarclube'" target="_blank">
                                <img src="<?php echo $refUrl; ?>img/messenger.png" class="socialink rounded img-fluid w-50" alt="" title="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr>
    <section id="servicosPlataforma" class="p-2 rounded">
        <div class="container justify-content-center text-center">
            <h2>Serviços da plataforma</h2>
            <br>
            <h4>
                <label>Modalidade:</label>
                <select class='rounded' v-model="modalidadeServico">
                    <option value="1">Mensal</option>
                    <option value="2">Trimestral</option>
                    <option value="3">Semestral</option>
                    <option value="4">Anual</option>
                </select>
            </h4>
            <br>
            <div class="row justify-content-center text-center">
                <div v-for="item in servicosSistema" class='bg-light m-2 p-2 rounded border col-9'>
                    <h5 class="card-title text-muted text-uppercase text-center"><i v-bind:class="item.icon"></i>{{titulo(item.link)}}</h5>
                    <h6 class="card-price text-center">
                        de <del>R$ {{atualizaPreco(item.valor[Object.keys(item.valor)[max]])}}</del> 
                        por R$ {{atualizaPreco(item.valor[Object.keys(item.valor)[min]])}}
                    </h6>
                    <div v-html='conteudo(item.link)'></div>
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8 col-8 m-2 p-2">
                            <a v-bind:href="'https://wa.me/5511940007917?text='+item.link" target="_blank">
                                <img src="<?php echo $refUrl; ?>img/whatsapp.png" class="socialink rounded img-fluid w-50" alt="" title="">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8 col-8 m-2 p-2">
                            <a v-bind:href="'https://t.me/Bienestarclube'" target="_blank">
                                <img src="<?php echo $refUrl; ?>img/telegram.png" class="socialink rounded img-fluid w-50" alt="" title="">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8 col-8 m-2 p-2">
                            <a v-bind:href="'https://www.messenger.com/t/bienestarclube'" target="_blank">
                                <img src="<?php echo $refUrl; ?>img/messenger.png" class="socialink rounded img-fluid w-50" alt="" title="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<script src="<?php echo $cdn; ?>ws/Site/promocao.js"></script>
