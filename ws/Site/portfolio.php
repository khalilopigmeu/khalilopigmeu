<div id="portfolio" v-if="app.sys.page==='portfolio'" class="border rounded glory m-3 p-3 shadow-lg borda-x row">
    <nav class="navbar bg-m navbar-light res col-md-12 col-lg-3 col-xl-3 col-12" id="navbarProdutos">
        <div class="container-fluid justify-content-center w-100">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsivePro" aria-controls="navbarResponsivePro" aria-expanded="false" aria-label="Toggle navigation">
                <span class="res navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarResponsivePro">
                <h3 class="text-white m-1 p-1"><i class="fas fa-angle-double-left"></i> Categorias de Portfólio <i class="fas fa-angle-double-right"></i></h3>
                <ul v-for="itens in catport" class="navbar-nav justify-content-center text-center flex-column">
                    <li class="nav-item">
                        <span class="nav-link"><input type="checkbox" v-model="catselect" v-bind:value="itens._id['$oid']"> {{itens.Nome}} <i class="fas fa-angle-double-right"></i></span></li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="col-md-12 mx-auto col-lg-8 col-xl-8 col-12 text-center justify-content-center">
        <div class="row text-center justify-content-center">
            <div  class="border border-dark rounded my-auto mx-auto col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" v-for="itens in src">
                <img class="logoanunciante img-fluid rounded" 
                     v-bind:src="itens.UrlLogo">
                <br>
                <h3 class="spanCli">{{itens.Nome}}</h3>
                <div class='row justify-content-center'>
                    <a class="m-1 p-1 col-8 btn" target="_blank" v-bind:href="itens.UrlSite">Link</a>
                    <button class="m-1 p-1 col-8 btn" v-on:click="modal('job',itens._id.$oid)">Ideia</button>
                    <button class="m-1 p-1 col-8 btn" v-on:click="modal('case',itens._id.$oid)">Projeto</button>
                    <button class="m-1 p-1 col-8 btn" v-on:click="modal('fotos',itens._id.$oid)">Fotos</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="portfoliomodal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Sobre o trabalho</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body lightbox-gallery">
                    <p v-html="escolha"></p>
                    <div class="row photos" v-html="photos"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="categoriaportfolio" v-if="app.sys.page==='categoriaportfolio'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="midiasite" v-if="app.sys.page==='midiasite'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<script src="<?php echo $cdn; ?>ws/Site/categoriaportfolio.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/portfolio.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/midias.js"></script>
