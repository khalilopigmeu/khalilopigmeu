<section v-if="(spy==='promocao' || spy==='all')">
    <h2 class="spanCli m-2 p-2">Conheça nossas promoções:</h2> 
    <div class="row justify-content-center text-center">
        <div v-for="item in Itemsrc" class='bg-light m-2 p-2 rounded border col-4'>
            <h5 class="card-title text-muted text-uppercase text-center">
                <div v-if="item.icon.includes('http')">
                    <img class="img-fluid" v-bind:src="item.icon">
                </div>
                <div v-else>
                    <span v-html="item.icon"></span>
                </div>
                {{titulo(item._id['$oid'])}}
            </h5>
            <h6 class="card-price text-center">
                de <del>R$ {{atualizaPrecoMax(item._id['$oid'])}}</del> 
                por R$ {{atualizaPrecoMin(item)}}
            </h6>
            <span data-toggle="modal" data-target="#AboutProduto" class="btn" v-if="!nulo(item.Produto) || item.Produto !== 'null'" v-on:click='buscaProduto(item.Produto)'>Ver Produto</span>
            <div v-html="conteudo(item._id['$oid'])"></div>
        </div>
    </div>
</section>
<section v-if="(spy==='combos' || spy==='all')">
    <h2 class="spanCli m-2 p-2">Conheça nossos combos:</h2>
    <label>Modalidade:</label>
    <select class='rounded' v-model="modalidadeServico">
        <option value="1">Mensal</option>
        <option value="2">Trimestral</option>
        <option value="3">Semestral</option>
        <option value="4">Anual</option>
    </select>
    <div class="row justify-content-center text-center">
        <div v-for="item in Pacotesrc" class='bg-light m-2 p-2 rounded border col-4'>
            <h5 class="card-title text-muted text-uppercase text-center">
                <span v-html="item.icon"></span>
                {{titulo(item.PromocaoItem)}}
            </h5>
            <h6 class="card-price text-center">
                de <del>R$ {{combo(atualizaPrecoMax(item.PromocaoItem))}}</del> 
                por R$ {{combo(atualizaPrecoMin(app.sys.searchByID(Itemsrc,item.PromocaoItem)[0]),item)}}
            </h6>
            <span data-toggle="modal" data-target="#AboutProduto" class="btn" v-if="!nulo(app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Produto) || app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Produto !== 'null'" v-on:click='buscaProduto(app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Produto)'>Ver Produto</span>
            <span data-toggle="modal" data-target="#ConPro" class="btn" v-if="!nulo(app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Consulta) || app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Consulta !== 'null'" v-on:click='buscaConsulta(app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Consulta)'>Ver Consulta</span>
            <span data-toggle="modal" data-target="#ConPro" class="btn" v-if="!nulo(app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Procedimento) || app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Procedimento !== 'null'" v-on:click='buscaProcedimento(app.sys.searchByID(Itemsrc,item.PromocaoItem)[0].Procedimento)'>Ver Procedimento</span>
            <div v-html="conteudo(item.PromocaoItem)"></div>
        </div>
    </div>
</section>

<section v-if="(spy==='promocao' || spy==='all')">
    <div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="AboutConPro">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Consultas e Procedimentos</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body" v-if="conpro!=null">
                    <h3>Nome</h3>
                    <div v-html="conpro.Nome"></div>
                    <h3>Descrição</h3>
                    <div v-html="conpro.Descricao"></div>
                    <h3>Preço</h3>
                    <div v-html="conpro.Valor"></div>
                    <h3>Duração</h3>
                    <div v-html="conpro.Duracao"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</section>