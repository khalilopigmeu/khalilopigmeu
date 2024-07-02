<<<<<<< HEAD
<section v-if="((spy==='pagina' || spy==='all') && (Anunciante(pgid).Tipo==='1' || Anunciante(pgid).Tipo==='3'))&& (!nulo(paginas)&&paginas.length>0)">
    <h2 class="spanCli m-2 p-2" v-if="paginas!==null">Conheça nosso conteúdo:</h2>
=======
<section v-if="(spy==='pagina' || spy==='all') && (Anunciante(pgid).Tipo==='1' || Anunciante(pgid).Tipo==='3')">
        <h2 class="spanCli m-2 p-2" v-if="paginas!==null">Conheça nosso conteúdo:</h2>
>>>>>>> e497ba9ed3adbbfe540f42e0b4a31053358f4823
    <div class="accordion" id="accordionPaginas">
        <div v-for="(itens,i) in paginas" class="card">
            <div class="card-header" v-bind:id="'head'+i">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" v-bind:data-target="'#collapse'+i" aria-expanded="true" v-bind:aria-controls="'collapse'+i">
<<<<<<< HEAD
                        {{itens.Titulo}} 
=======
                       {{itens.Titulo}} 
>>>>>>> e497ba9ed3adbbfe540f42e0b4a31053358f4823
                    </button>
                </h2>
            </div>
            <div v-bind:id="'collapse'+i" class="collapse" v-bind:aria-labelledby="'head'+i" data-parent="#accordionPaginas">
                <div class="card-body"  v-html="itens.ContentPage">
<<<<<<< HEAD

                </div>
            </div>
        </div>
    </div>
=======
                  
                </div>
            </div>
        </div>
    </div>
<!--
    <div class="row" v-if="paginas!==null">
        <fieldset class="col-10 mx-auto border rounded p-1 m-1 container-fluid border-dark">
            <ul v-for="itens in paginas" class="navbar-nav justify-content-center text-center flex-column">
                <li class="nav-item">
                    <a class="nav-link" v-on:click="setPg(itens)">{{itens.Titulo}} <i class="fas fa-angle-double-right"></i></a></li>
                </li>
            </ul>
            <div class="col-12 justify-content-center">
                <div v-if="page!=null">
                    <h2 class="spanCli text-center m-2 p-2">{{page.Titulo}}</h2>
                    <div class="text-left" v-html="page.ContentPage"></div>
                </div>
        </fieldset>
    </div>-->
>>>>>>> e497ba9ed3adbbfe540f42e0b4a31053358f4823
</section>