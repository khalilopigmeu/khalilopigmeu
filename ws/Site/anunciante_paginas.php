<section v-if="(spy==='pagina' || spy==='all') && (Anunciante(pgid).Tipo==='1' || Anunciante(pgid).Tipo==='3')">
    <h2 class="spanCli m-2 p-2" v-if="paginas!==null">Conheça nosso conteúdo:</h2>
    <div class="row" v-if="paginas!==null">
        <fieldset class="col-10 mx-auto border rounded p-1 m-1 container-fluid border-dark">
            <nav class="navbar bg-m navbar-light res col-12" id="navbarCliente">
                <div class="container-fluid justify-content-center w-100">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsivePg" aria-controls="navbarResponsivePg" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="res navbar-toggler-icon"></span> Páginas
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarResponsivePg">
                        <ul v-for="itens in paginas" class="navbar-nav justify-content-center text-center flex-column">
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="setPg(itens)">{{itens.Titulo}} <i class="fas fa-angle-double-right"></i></a></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="col-12 justify-content-center">
                <div v-if="page!=null">
                    <h2 class="spanCli text-center m-2 p-2">{{page.Titulo}}</h2>
                    <div class="text-left" v-html="page.ContentPage"></div>
                </div>
            </div>
        </fieldset>
    </div>
</section>