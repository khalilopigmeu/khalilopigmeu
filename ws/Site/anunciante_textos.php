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