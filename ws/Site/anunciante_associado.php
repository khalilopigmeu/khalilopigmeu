<div class="col-md-12 col-lg-12 col-xl-12 col-12">
    <img v-bind:src="getLogo(pgid)" style="width: 15%;" class="img-thumbnail rounded mx-auto d-block">
</div>
<section v-if="(spy==='associado' || spy===null || spy==='all') && (Anunciante(pgid).Tipo==='1'||Anunciante(pgid).Tipo==='2'||Anunciante(pgid).Tipo==='3')">
    <h2 class="spanCli m-1 p-1">Associado:</h2>
    <div class="row justify-content-center text-center text-capitalize">
        <div v-if="typeof EmpresaSelecionada(pgid).NomeFantasia !== 'undefined'" class="col-md-12 col-lg-12 col-xl-12 col-12 row justify-content-center text-center">
            <div class="col-6" v-if="EmpresaSelecionada(pgid).NomeFantasia!='null'"><span class='spanCli m-1 p-1'>Empresa:</span> {{EmpresaSelecionada(pgid).NomeFantasia}}</div>
            <div class="row" v-if="Anunciante(pgid).cpfcnpj=='true'">
                <div class="col-6" v-if="EmpresaSelecionada(pgid).Cnpj!='null'"><span class='spanCli m-1 p-1'>CNPJ:</span> {{EmpresaSelecionada(pgid).Cnpj}}</div>
            </div>
            <div class="row" v-if="Anunciante(pgid).responsavel=='true'">
                <div class="col-6" v-if="EmpresaSelecionada(pgid).Nome!='null'"><span class='spanCli m-1 p-1'>Responsável:</span> {{EmpresaSelecionada(pgid).Nome}}</div>
            </div>
        </div>
        <div v-else>
            <div class="col-12 row"  v-if="Anunciante(pgid).responsavel=='true'">
                <div v-if="EmpresaSelecionada(pgid).Nome!='null'"><span class='spanCli m-1 p-1'>Responsável:</span> {{EmpresaSelecionada(pgid).Nome}}</div>
            </div>
        </div>
    </div>
    <br>
    <div class='col-5 mx-auto' v-if="Anunciante(pgid).Ativo==='true'">
        <a v-if="Anunciante(pgid).Tipo==='1'" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+pgid+'&spy=pagina#anunciante'">
            Clique para ver a página <i class="fas fa-angle-double-right"></i>
        </a>
        <a v-if="Anunciante(pgid).Tipo==='2'" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+pgid+'&spy=loja#anunciante'">
            Clique para ver a loja <i class="fas fa-angle-double-right"></i>
        </a>
        <a v-if="Anunciante(pgid).Tipo==='3'" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'?pgid='+pgid+'&spy=pagina#anunciante'">
            Clique para ver a página <i class="fas fa-angle-double-right"></i>
        </a>
        <a v-if="Anunciante(pgid).Tipo==='4'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="getSite(pgid)">
            Clique para ver o Site <i class="fas fa-angle-double-right"></i>
        </a>
        <a v-if="Anunciante(pgid).Tipo==='5'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'https://wa.me/55'+cleanwap(itens.Celular)">
            Clique para falar no Whatsapp <i class="fas fa-angle-double-right"></i>
        </a>
        <a v-if="Anunciante(pgid).Tipo==='6'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'https://facebook.com/'+getFB(pgid)">
            Clique para ir ao Facebook<i class="fas fa-angle-double-right"></i>
        </a>
        <a v-if="Anunciante(pgid).Tipo==='7'" target="_blank" class="btn btn-dark col-10 my-1 py-1" v-bind:href="'https://instagram.com/'+getInsta(pgid)">
            Clique para ir ao Instagram <i class="fas fa-angle-double-right"></i>
        </a>
    </div>
    <br>
    <div class="row justify-content-center text-center text-capitalize">
        <div class="row" v-if="Anunciante(pgid).endereco=='true'">
            <div class="col-6" v-if="EmpresaSelecionada(pgid).CEP!='null'"><span class='spanCli m-1 p-1'>Cep:</span> {{EmpresaSelecionada(pgid).CEP}}</div>
            <div class="col-6" v-if="EmpresaSelecionada(pgid).UF!='null'"><span class='spanCli m-1 p-1'>Estado:</span> {{EmpresaSelecionada(pgid).UF}}</div>
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Cidade!='null'"><span class='spanCli m-1 p-1'>Cidade:</span> {{EmpresaSelecionada(pgid).Cidade}}</div>
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Bairro!='null'"><span class='spanCli m-1 p-1'>Bairro:</span> {{EmpresaSelecionada(pgid).Bairro}}</div>
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Rua!='null'"><span class='spanCli m-1 p-1'>Rua:</span> {{EmpresaSelecionada(pgid).Rua}}</div>
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Num!='null'"><span class='spanCli m-1 p-1'>Número:</span> {{EmpresaSelecionada(pgid).Num}}</div>
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Complemento!='null'"><span class='spanCli m-1 p-1'>Complemento:</span> {{EmpresaSelecionada(pgid).Complemento}}</div>
        </div>
        <div class="row"  v-if="Anunciante(pgid).telefone=='true'">
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Telefone!='null'"><span class='spanCli m-1 p-1'>Telefone:</span> {{EmpresaSelecionada(pgid).Telefone}}</div>
        </div>
        <div class="row"  v-if="Anunciante(pgid).whatsapp=='true'">
            <div class="col-6" v-if="EmpresaSelecionada(pgid).Celular!='null'"><span class='spanCli m-1 p-1'><i class="fab fa-whatsapp"></i> whatsapp:</span> <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(EmpresaSelecionada(pgid).Celular)">{{EmpresaSelecionada(pgid).Celular}}</a></div>
        </div>
        <div  class="row" v-if="Anunciante(pgid).facebook=='true'">
            <div class="col-6" v-if="getFB(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fab fa-facebook-f"></i> Facebook:</span> <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+getFB(EmpresaSelecionada(pgid)._id['$oid'])">@{{getFB(EmpresaSelecionada(pgid)._id['$oid'])}}</a></div>
        </div>
        <div class="row"  v-if="Anunciante(pgid).instagram=='true'">
            <div class="col-6" v-if="getInsta(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fab fa-instagram"></i> Instagram:</span> <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+getInsta(EmpresaSelecionada(pgid)._id['$oid'])">@{{getInsta(EmpresaSelecionada(pgid)._id['$oid'])}}</a></div>
        </div>
        <div class="row"  v-if="Anunciante(pgid).site=='true'">
            <div class="col-6" v-if="getSite(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fas fa-globe"></i> Site:</span> <a class='listA' target="_blank" v-bind:href="getSite(EmpresaSelecionada(pgid)._id['$oid'])">
                    <span v-if="EmpresaSelecionada(pgid).NomeFantasia">
                        {{EmpresaSelecionada(pgid).NomeFantasia}}
                    </span>
                    <span class="spanCli" v-else>
                        {{EmpresaSelecionada(pgid).Nome}}    
                    </span>
                </a></div>
        </div>
    </div>
    <br>
</section>
<section v-if="(spy==='mapa' || spy==='all')">
    <iframe class="col-md-11 col-lg-7 col-xl-7 col-11 mx-auto d-block"
            width="450"
            height="250"
            frameborder="0" style="border:0"
            v-bind:src="'https://www.google.com/maps/embed/v1/place?key='+app.sys.chave+'&q='+EmpresaSelecionada(pgid).Rua+','+EmpresaSelecionada(pgid).Num" allowfullscreen>
    </iframe>
</section>