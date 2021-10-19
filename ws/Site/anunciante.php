<div id="anunciante" v-if="app.sys.page==='anunciante'" class="border rounded glory m-3 p-3 shadow-lg borda-x text-center justify-content-center">
    <div v-if="pgid==null">
        <h3 class="spanCli m-2 p-2">Conheça nossos clientes:</h3>
        <ul v-for="itens in src">
            <li v-if="itens.NomeFantasia"><a class="listA" v-bind:href="'#anunciante?pgid='+itens._id['$oid']">{{itens.NomeFantasia}} <i class="fas fa-angle-double-right"></i></a></li>
            <li v-else><a class="listA" v-bind:href="'#anunciante?pgid='+itens._id['$oid']">{{itens.Nome}} <i class="fas fa-angle-double-right"></i></a></li>
        </ul>
    </div>
    <div v-else>
        <div v-for="itens in src">
            <div v-if="itens._id['$oid']===pgid">
                <div v-if="itens.NomeFantasia">
                    <h3 class="spanCli m-2 p-2">Associado:</h3>
                    <div class="row justify-content-center text-center text-capitalize">
                        <div class="col-md-12 col-lg-12 col-xl-12 col-12 m-3 p-3">
                            <img v-if="logo" v-bind:src="logo" class="img-thumbnail rounded mx-auto d-block">
                        </div>
                        <div class="col-md-12 col-lg-12 col-xl-12 col-12 row">
                            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.NomeFantasia"><span class='spanCli m-2 p-2'>Empresa:</span> {{itens.NomeFantasia}}</div>
                            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Cnpj"><span class='spanCli m-2 p-2'>CNPJ:</span> {{itens.Cnpj}}</div>
                            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Nome"><span class='spanCli m-2 p-2'>Responsável:</span> {{itens.Nome}}</div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h3 class="spanCli m-2 p-2">Associado:</h3>
                    <div class="row justify-content-center text-center text-capitalize">
                        <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                            <img v-if="logo" v-bind:src="logo" class="img-thumbnail rounded mx-auto d-block">
                        </div>
                        <div class="col-md-12 col-lg-12 col-xl-12 col-12 row">
                            <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Nome"><span class='spanCli m-2 p-2'>Responsável:</span> {{itens.Nome}}</div>
                        </div>
                    </div>
                </div>
                <br>
                <hr>
                <br>
                <div class="row justify-content-center text-center text-capitalize">
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.CEP"><span class='spanCli m-2 p-2'>Cep:</span> {{itens.CEP}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.UF"><span class='spanCli m-2 p-2'>Estado:</span> {{itens.UF}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Cidade"><span class='spanCli m-2 p-2'>Cidade:</span> {{itens.Cidade}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Bairro"><span class='spanCli m-2 p-2'>Bairro:</span> {{itens.Bairro}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Rua"><span class='spanCli m-2 p-2'>Rua:</span> {{itens.Rua}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Num"><span class='spanCli m-2 p-2'>Número:</span> {{itens.Num}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Complemento"><span class='spanCli m-2 p-2'>Complemento:</span> {{itens.Complemento}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Telefone"><span class='spanCli m-2 p-2'>Telefone:</span> {{itens.Telefone}}</div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="itens.Celular"><span class='spanCli m-2 p-2'><i class="fab fa-whatsapp"></i> whatsapp:</span> <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(itens.Celular)">{{itens.Celular}}</a></div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="fb"><span class='spanCli m-2 p-2'><i class="fab fa-facebook-f"></i> Facebook:</span> <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+fb.replace('@','')">{{fb}}</a></div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="insta"><span class='spanCli m-2 p-2'><i class="fab fa-instagram"></i> Instagram:</span> <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+insta.replace('@','')">{{insta}}</a></div>
                    <div class="col-md-12 col-lg-4 col-xl-4 col-12" v-if="site"><span class='spanCli m-2 p-2'><i class="fas fa-globe"></i> Site:</span> <a class='listA' target="_blank" v-bind:href="site">{{site}}</a></div>
                </div>
                <br>
                <hr>
                <br>
                <iframe class="col-md-11 col-lg-7 col-xl-7 col-11 mx-auto d-block"
                        width="450"
                        height="250"
                        frameborder="0" style="border:0"
                        v-bind:src="'https://www.google.com/maps/embed/v1/place?key='+app.sys.gapi+'&q='+itens.Rua+','+itens.Num" allowfullscreen>
                </iframe>
                <br>
                <hr>
                <br>
                <h3 class="spanCli m-2 p-2">Conheça nosso conteúdo:</h3>
                <div class="row">
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
                            <h3 class="spanCli m-2 p-2" v-if="itens.UrlPage===getParameterByName('pg')">{{itens.Titulo}}</h3>
                            <div v-if="itens.UrlPage===getParameterByName('pg')" v-html="itens.ContentPage"></div>
                        </div>
                    </div>
                </div>
                <br>
                <hr>
                <br>
            </div>
        </div>
    </div>
</div>
<div id="configuracao" v-if="app.sys.page==='config'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<script src="<?php echo $cdn; ?>ws/Site/anunciante.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/configuracao.js"></script>
