<section v-if="((spy==='pagina' || spy==='all') && (Anunciante(pgid).Tipo==='1' || Anunciante(pgid).Tipo==='3')) && (!nulo(paginas)&&paginas.length>0)">
    <h2 class="spanCli m-2 p-2" v-if="paginas!==null">Conheça nosso conteúdo:</h2>
    <div class="accordion" id="accordionPaginas">
        <div v-for="(itens,i) in paginas" class="card">
            <div class="card-header" v-bind:id="'head'+i">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" v-bind:data-target="'#collapse'+i" aria-expanded="true" v-bind:aria-controls="'collapse'+i">
                        {{itens.Titulo}} 
                    </button>
                </h2>
            </div>
            <div v-bind:id="'collapse'+i" class="collapse" v-bind:aria-labelledby="'head'+i" data-parent="#accordionPaginas">
                <div class="card-body"  v-html="itens.ContentPage">

                </div>
            </div>
        </div>
    </div>
</section>