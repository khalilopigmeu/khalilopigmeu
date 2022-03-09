<div id="Promocao" v-if="app.sys.page=='promocao'" >
    <section v-if="servicos" id="servicos" class="p-2 rounded">
        <div class="container justify-content-center text-center">
            <h2>Serviços</h2>
            <br>
            <div class="row justify-content-center text-center">
                <div v-for="item in servicos" class='bg-light m-2 p-2 rounded border col-9'>
                    <h5 class="card-title text-muted text-uppercase text-center"><i v-bind:class="item.icon"></i>{{titulo(item.link)}}</h5>
                    <h6 class="card-price text-center">de <del>R$ {{item.valor[Object.keys(item.valor)[max]]}}</del> por R$ {{item.valor[Object.keys(item.valor)[min]]}}</h6>
                    <div v-html='conteudo(item.link)'></div>
                    <div class="row justify-content-center text-center socialink">
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://www.facebook.com/bienestarclube" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://www.instagram.com/bienestarclube/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://wa.me/5511940007917" target="_blank">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://t.me/Bienestarclube" target="_blank">
                                <i class="fab fa-telegram"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://www.messenger.com/t/bienestarclube" target="_blank">
                                <i class="fab fa-facebook-messenger"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr>
    <section v-if="pacotes" id="servicosPlataforma" class="p-2 rounded">
        <div class="container justify-content-center text-center">
            <h2>Pacotes</h2>
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
                <div v-for="item in pacotes" class='bg-light m-2 p-2 rounded border col-9'>
                    <h5 class="card-title text-muted text-uppercase text-center"><i v-bind:class="item.icon"></i>{{titulo(item.link)}}</h5>
                    <h6 class="card-price text-center">
                        de <del>R$ {{atualizaPreco(item.valor[Object.keys(item.valor)[max]])}}</del> 
                        por R$ {{atualizaPreco(item.valor[Object.keys(item.valor)[min]])}}
                    </h6>
                    <div v-html='conteudo(item.link)'></div>
                    <div class="row justify-content-center text-center socialink">
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://www.facebook.com/bienestarclube" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://www.instagram.com/bienestarclube/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://wa.me/5511940007917" target="_blank">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://t.me/Bienestarclube" target="_blank">
                                <i class="fab fa-telegram"></i>
                            </a>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-8 col-8 m-2">
                            <a href="https://www.messenger.com/t/bienestarclube" target="_blank">
                                <i class="fab fa-facebook-messenger"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<script src="<?php echo $cdn; ?>ws/Site/promocao.js"></script>
