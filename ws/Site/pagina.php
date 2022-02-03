<div id="paginasite" v-if="app.sys.page==='paginas'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
    <div v-if="pg==null">
        <h3 class="mb-2">Conheça nossas páginas:</h3>
        <ul v-for="itens in src">
            <li><a class="listA" v-bind:href="'#paginas?pg='+itens.UrlPage">{{itens.Titulo}} <i class="fas fa-angle-double-right"></i></a></li>
        </ul>
    </div>
    <div v-else>
        <div v-for="itens in src">
            <h3 class="spanCli m-2 p-2" v-if="itens.UrlPage===pg">{{itens.Titulo}}</h3>
            <div v-if="itens.UrlPage===pg" v-html="itens.ContentPage"></div>
            <a v-if="itens.UrlPage===pg" :href="'#anunciante?pgid='+itens.IdEmpresa+'&pg='+pg" class="btn btn-dark">Ir para página do associado</a>
        </div>
    </div>
</div>
