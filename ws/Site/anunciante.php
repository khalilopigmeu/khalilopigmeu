<?php $pageName = "AnuncianteSite"; ?>
<div id="empresasanunciando" v-if="app.sys.page==='anunciante'||app.sys.page==='videos'||app.sys.page==='promocoes'||app.sys.page==='listacompra'" class="text-center justify-content-center">
    <div v-if="pgid===null" class="row text-center justify-content-center">
        <div class="col-10 input-group mb-3 row">
            <select class="fa text-white bg-d input-group-text col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" id="basic-addon1">
                <option class='fa'>&#xf279 &nbsp; Páginas</option> 
                <option class='fa'>&#xf3ff &nbsp; Vouchers</option> 
                <option class='fa'>&#xf0a1 &nbsp; Anúncios</option> 
                <option class='fa'>&#xf4c0 &nbsp; Promoções</option> 
            </select>
            <input type="text" v-model="pesquisa" class="form-control mx-auto col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12" placeholder="Pesquise" aria-label="Pesquise" aria-describedby="basic-addon1">
        </div>
    </div>
    <div v-if="pgid===null" class="row text-center justify-content-center">
        <h2 class="spanCli m-2 p-2 mb-3 col-12">Conheça nossos clientes:</h2>
        <div class="wd-100 row text-center justify-content-center">
            <div class="col-md-5 col-sm-5 m-1 col-lg-3 border col-xl-3 col-3 " v-for="itens in PaginasAnunciante">
                <img class="logoanunciante img-fluid rounded"
                     v-bind:src="getLogo(itens._id['$oid'])">
                <br>
                <h3 class="spanCli">
                    {{Config(itens._id['$oid']).Nome}}
                </h3>
                <div v-if="itens.Celular!='null'" >
                    <span class='spanCli'><i class="fab fa-whatsapp"></i> whatsapp:</span>
                    <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(itens.Celular)">{{itens.Celular}}</a>
                    <br>
                </div>
                <div v-if="getFB(itens._id['$oid'])!='null'">
                    <span v-if class='spanCli'><i class="fab fa-facebook-f"></i> Facebook:</span>
                    <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+getFB(itens._id['$oid'])">@{{getFB(itens._id['$oid'])}}</a>
                    <br>
                </div>
                <div v-if="getInsta(itens._id['$oid'])!='null'">
                    <span class='spanCli'><i class="fab fa-instagram"></i> Instagram:</span>
                    <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+getInsta(itens._id['$oid'])">@{{getInsta(itens._id['$oid'])}}</a>
                    <br>
                </div>
                <div v-if="getSite(itens._id['$oid'])!='null'">
                    <span class='spanCli'><i class="fas fa-globe"></i> Site:</span>
                    <a class='listA' target="_blank" v-bind:href="getSite(itens._id['$oid'])">
                        <span v-if="itens.NomeFantasia">
                            {{itens.NomeFantasia}}
                        </span>
                        <span class="spanCli" v-else>
                            {{itens.Nome}}
                        </span>
                    </a>
                    <br>
                </div>
                <br>
                <div class='row text-center justify-content-center'>
                    <a v-if="Promocoes(itens._id['$oid']).length>0" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+itens._id['$oid']+'&spy=promocao#anunciante'">
                        Promoções <i class="fas fa-hand-holding-usd"></i>
                    </a>
                    <a v-if="Pacotes(itens._id['$oid']).length>0" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+itens._id['$oid']+'&spy=promocao#anunciante'">
                        Pacotes <i class="fas fa-hand-holding-usd"></i>
                    </a>
                    <!--<a class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+itens._id['$oid']+'#anunciante'">
                    Cupom <i class="fas fa-ticket-alt"></i>
                    </a>-->
                    <div class='col-12' v-if="Anunciante(itens._id['$oid']).Ativo==='true'">
                        <a v-if="Anunciante(itens._id['$oid']).Tipo==='1'" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+itens._id['$oid']+'#anunciante'">
                            Clique para ver a página <i class="fas fa-angle-double-right"></i>
                        </a>
                        <a v-if="Anunciante(itens._id['$oid']).Tipo==='2'" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+itens._id['$oid']+'#loja'">
                            Clique para ver a loja <i class="fas fa-angle-double-right"></i>
                        </a>
                        <a v-if="Anunciante(itens._id['$oid']).Tipo==='3'" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+itens._id['$oid']+'#anunciante'">
                            Clique para ver a página <i class="fas fa-angle-double-right"></i>
                        </a>
                        <a v-if="Anunciante(itens._id['$oid']).Tipo==='4'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="getSite(itens._id['$oid'])">
                            Clique para ver o Site <i class="fas fa-angle-double-right"></i>
                        </a>
                        <a v-if="Anunciante(itens._id['$oid']).Tipo==='5'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'https://wa.me/55'+cleanwap(itens.Celular)">
                            Clique para falar no Whatsapp <i class="fas fa-angle-double-right"></i>
                        </a>
                        <a v-if="Anunciante(itens._id['$oid']).Tipo==='6'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'https://facebook.com/'+getFB(itens._id['$oid'])">
                            Clique para ir ao Facebook<i class="fas fa-angle-double-right"></i>
                        </a>
                        <a v-if="Anunciante(itens._id['$oid']).Tipo==='7'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'https://instagram.com/'+getInsta(itens._id['$oid'])">
                            Clique para ir ao Instagram <i class="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
        <?php include $refUrl . "Mongo/template/pagination.php" ?>
    </div>
    <div v-else>
        <div v-if="ismajor==false || ismajor==true && majority==true">
            <?php include "anunciante_associado.php" ?>
            <?php include "anunciante_paginas.php" ?>
            <?php include "anunciante_promocoes.php" ?>
            <?php include "anunciante_loja.php" ?>
            <?php include "anunciante_listacompra.php" ?>
            <?php include "exportpdf.php" ?>
            <div v-if="Anunciante(pgid).Tipo==='4'" id="toOpen" v-bind:data-url="getSite(pgid)">
                {{cast()}}
            </div>
            <div v-if="Anunciante(pgid).Tipo==='5'" id="toOpen" v-bind:data-url="'https://wa.me/55'+cleanwap(EmpresaSelecionada(pgid).Celular)">
                {{cast()}}
            </div>
            <div v-if="Anunciante(pgid).Tipo==='6'" id="toOpen" v-bind:data-url="'https://facebook.com/'+getFB(pgid)">
                {{cast()}}
            </div>
            <div v-if="Anunciante(pgid).Tipo==='7'"  id="toOpen" v-bind:data-url="'https://instagram.com/'+getInsta(pgid)">
                {{cast()}}
            </div>
        </div>
        <div  v-if="ismajor==true && majority==false">
            <button onclick="window.location.href = 'index.php#anunciante'">Retornar</button>
        </div>
    </div>
</div>
<div id="anunciante" v-if="app.sys.page==='config'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="configuracaosite" v-if="app.sys.page==='config'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="FamiliaProdutosSite" v-if="app.sys.page==='familiaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="ClasseProdutosSite" v-if="app.sys.page==='classeprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="CategoriaProdutosSite" v-if="app.sys.page==='categoriaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="SubcategoriaProdutosSite" v-if="app.sys.page==='subcategoriaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="ListaProdutosSite" v-if="app.sys.page==='listaprodutos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="ProdutosSite" v-if="app.sys.page==='produtos'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="LoginsOauth" v-if="app.sys.page==='loginoauth'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="PromocaoSite" v-if="app.sys.page==='promocionais'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="consultasite" v-if="app.sys.page==='consulta'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="procedimentosite" v-if="app.sys.page==='procedimento'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="albumsite" v-if="app.sys.page==='album'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<div id="midiasite" v-if="app.sys.page==='midia'" class="border rounded glory m-3 p-3 shadow-lg borda-x">
</div>
<script>
    window.onload = function () {
        app.empresasanunciando.load();
    };
</script>

<?php include 'pedido.php'; ?>
<?php include 'user.php'; ?>
<?php include 'ficha.php'; ?>
<?php include 'lista.php'; ?>

<script src="<?php echo $cdn; ?>ws/Site/pagina.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/empresas.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/configuracao.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/familiaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/classeprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/categoriaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/subcategoriaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/listaprodutos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/produtos.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/anunciante.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/logins.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/promocoes.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/album.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/midias.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/consulta.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/procedimento.js"></script>
