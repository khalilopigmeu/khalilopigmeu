<?php
$pgtitle = "Lista de Compra";
$page = "ListaCompra";
$td = ["" . $page => ["Id", "Vendedor", "Nome da Lista", "Data", "Cliente", "Lista", "Solicitado"]];
$tdvue = ["" . $page => ["td.IdLogin", "td.NomeLista", "td.DataLista", "td.Cliente", "td.Produtos", "td.Solicitacao"]];
$pageName = "ListadeCompra";
include $refUrl . "Mongo/template/head.php"
?>
<label>Nome da lista:</label>
<input class="form-control" type="text" v-model="NomeLista"><br>
<hr>
<label>Pesquisa:</label><input class="form-control" type="text" v-model="pesqCliente"><br>
<label>Cliente:</label>
<select class="form-control" v-model="Cliente" placeholder="Campo..." >
    <option v-for="el in app.sys.sorter(app.sys.searchall(Clientesrc,pesqCliente),'DESC','id')" v-bind:value="el._id['$oid']">{{el.Nome}}</option>
</select>
<br>
<span class="btn" data-dismiss="modal" onclick="setModal('Cliente', 'Eventos')">Adicionar Cliente <i class="far fa-plus-square"></i></span><br>
<br>
<hr>
<div class="row">
    <table class="table table-striped table-bordered">
        <thead class="thead-dark text-white text-center">
            <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>Remover</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(td,i) in listaProdutos" class="text-center justify-content-center">
                <td>{{app.sys.searchByID(produtos,td.produto)[0].NomeProduto}}</td>
                <td>R$ {{app.sys.searchByID(produtos,td.produto)[0].Preco}}</td>
                <td><input class="form-control" v-on:change="updateLista(i)" minlength="0" v-model="lineRow[i]" type="number"></td>
                <td>R$ {{Total(app.sys.searchByID(produtos,td.produto)[0].Preco,td.qtd)}}</td>
                <td><button class="btn btn-dark" v-on:click="removerItem(i)"><i class="far fa-times-circle"></i> remover item</button></td>
            </tr>
        </tbody>
        <tfoot class="thead-dark text-white text-center">
            <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>Remover</th>
            </tr>
        </tfoot>
    </table>
    <hr>
    <div class="row"  v-if="produtos!==null && produtos.length>0">
        <div class="col-12 text-center justify-content-center">
            <div class="row text-center justify-content-center">
                <fieldset class="col-10 mx-auto border rounded p-1 m-1 container-fluid border-dark anunciobox">
                    <div v-if="urlSite.includes('rti')" class="row justify-content-center mb-1 text-center">
                        <div class="col-10 row justify-content-center text-center">
                            <div class="col-3"><input v-on:click="orderProdutos('RN')" v-model="order" name='order' value="RN" type="radio"><span> Aleatório</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('DS')" v-model="order" name='order' value="DS" type="radio"><span> Disponíveis</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('EN')" v-model="order" name='order' value="EN" type="radio"><span> Encomendas</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('AZ')" v-model="order" name='order' value="AZ" type="radio"><span> A-Z</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('ZA')" v-model="order" name='order' value="ZA" type="radio"><span> Z-A</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('UP')" v-model="order" name='order' value="UP" type="radio"><span> Maior Preço</span></div>
                            <div class="col-3"><input v-on:click="orderProdutos('DW')" name='order' name="order" value="DW" type="radio"><span> Menor Preço</span></div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5 text-left justify-content-start">
                    <span class="spanCli m-1 p-1"> Categorias </span>
                    <ul v-if="!nulo(familiaprodutos)"  class="list-group text-left">
                        <li v-for="itens,index in autoList(familiaprodutos,'familia')" v-on:mouseover="popin('chkfamilia',index)" v-on:touchstart="popin('chkfamilia',index)"
                            v-on:mouseleave="popout('chkfamilia',index)" v-on:touchend="popout('chkfamilia',index)" class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoFamilia">
                            <span>
                                <input type="checkbox" class="chkfamilia" v-on:change="pesquisaFamilia" v-model="familiaselect" v-bind:value="itens._id['$oid']">
                                {{itens.TipoFamilia}}
                            </span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <span class="spanCli m-1 p-1"> Subcategorias </span>
                    <ul v-if="!nulo(classeprodutos)" class="list-group text-left">
                        <li  v-for="itens,index in app.sys.searchinArray(autoList(classeprodutos,'classe'),familiaselect,'IdFamilia')"  v-on:mouseover="popin('chkclasse',index)" v-on:touchstart="popin('chkclasse',index)"
                             v-on:mouseleave="popout('chkclasse',index)" v-on:touchend="popout('chkclasse',index)"  class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoClasse">
                            <span>
                                <input class="chkclasse" type="checkbox" v-on:change="pesquisaClasse" v-model="classeselect"  v-bind:value="itens._id['$oid']"> 
                                {{itens.TipoClasse}}
                            </span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <span class="spanCli m-1 p-1"> Variedades </span>
                    <ul v-if="!nulo(categoriaprodutos)" class="list-group text-left">
                        <li  v-for="itens,index in app.sys.searchinArray(autoList(categoriaprodutos,'categoria'),classeselect,'IdClasse')" v-on:mouseover="popin('chkcategoria',index)" v-on:touchstart="popin('chkcategoria',index)"
                             v-on:mouseleave="popout('chkcategoria',index)" v-on:touchend="popout('chkcategoria',index)"  class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoCategoria">
                            <span>
                                <input class="chkcategoria" type="checkbox" v-on:change="pesquisaCategoria" v-model="categoriaselect"  v-bind:value="itens._id['$oid']" > 
                                {{itens.TipoCategoria}}
                            </span>
                        </li>
                    </ul>
                    <hr class="border bg-light">
                    <span class="spanCli m-1 p-1"> Opções </span>
                    <ul v-if="!nulo(subcategoriaprodutos)" class="list-group text-left">
                        <li  v-for="itens,index in app.sys.searchinArray(autoList(subcategoriaprodutos,'subcategoria'),categoriaselect,'IdCategoria')"  v-on:mouseover="popin('chksubcategoria',index)" v-on:touchstart="popin('chksubcategoria',index)"
                             v-on:mouseleave="popout('chksubcategoria',index)" v-on:touchend="popout('chksubcategoria',index)" class="list-group-item d-inline-block text-truncate"   data-toggle="popover" data-placement="bottom" v-bind:data-content="itens.TipoSubCategoria">
                            <span>
                                <input class="chksubcategoria" type="checkbox" v-on:change="pesquisaSubCategoria" v-model="subcategoriaselect"  v-bind:value="itens._id['$oid']" > 
                                {{itens.TipoSubCategoria}}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-7">
                    <div v-if="formato=='coluna'"  class="row justify-content-center text-center">
                        <div v-for="itens in PaginasLoja" class="col-lg-3 col-md-5 col-sm-11 p-1 m-1 border rounded border-dark produto">
                            <div class="product__item" >
                                <div v-if="itens.QtdMin==1">
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                    </div>
                                </div>
                                <div v-else>
                                    <!--<div class="product__item__pic set-bg"  v-bind:style="'filter: grayscale(100%); background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">-->
                                    <div class="product__item__pic set-bg"  v-bind:style="'background-image: url('+encodeURI(Midias(itens.IdAlbum)[0].UrlMidia)+')'">
                                    </div>
                                </div>
                                <hr>
                                <div class="product__item__text">
                                    <h6>{{itens.NomeProduto}}</h6>
                                    <h5 v-html="HasPromo(itens._id['$oid'],itens.Preco)"></h5>
                                    <div v-html="itens.EspecificacaoProduto"></div>
                                    <div v-if="itens.QtdMin==1" class="badge badge-success">
                                        Disponível em estoque!
                                    </div>
                                    <div v-else class="badge badge-warning">
                                        Apenas por encomenda! <br> tempo de espera de 7 a 10 dias úteis;<br>
                                        Preço em exibição tem como base a última compra<br> o preço final poderá sofrer acréscimo ou decréscimo.
                                    </div>
                                    <p class="mt-2 seemore" v-on:click="addTblLista(itens)">Adicionar a lista</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php
                    $pageName = "ListaCompra";
                    include $refUrl . "Mongo/template/pagination.php";
                    $pageName = "ListadeCompra";
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include $refUrl . "Mongo/template/foot.php" ?>