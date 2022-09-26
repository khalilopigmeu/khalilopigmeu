<section v-if="(spy==='associado' || spy===null || spy==='all') && (Anunciante(pgid).Tipo==='1'||Anunciante(pgid).Tipo==='2'||Anunciante(pgid).Tipo==='3')">
    <h2 class="spanCli m-1 p-1">Associado:</h2>
    <div class="row justify-content-center text-center text-capitalize">
        <div class="col-md-12 col-lg-12 col-xl-12 col-12 m-3 p-3 mb-4">
            <img v-bind:src="getLogo(pgid)" class="img-thumbnail rounded mx-auto d-block">
        </div>
        <div v-if="typeof Empresa(pgid).NomeFantasia !== 'undefined'" class="col-md-12 col-lg-12 col-xl-12 col-12 row justify-content-center text-center">
            <div class="col-6" v-if="Empresa(pgid).NomeFantasia!='null'"><span class='spanCli m-1 p-1'>Empresa:</span> {{Empresa(pgid).NomeFantasia}}</div>
            <div class="col-6" v-if="Empresa(pgid).Cnpj!='null'"><span class='spanCli m-1 p-1'>CNPJ:</span> {{Empresa(pgid).Cnpj}}</div>
            <div class="col-6" v-if="Empresa(pgid).Nome!='null'"><span class='spanCli m-1 p-1'>Responsável:</span> {{Empresa(pgid).Nome}}</div>
        </div>
        <div v-else>
            <div class="col-12 row">
                <div v-if="Empresa(pgid).Nome!='null'"><span class='spanCli m-1 p-1'>Responsável:</span> {{Empresa(pgid).Nome}}</div>
            </div>
        </div>
    </div>
    <br>

    <br>
    <div class="row justify-content-center text-center text-capitalize">
        <div class="col-6" v-if="Empresa(pgid).CEP!='null'"><span class='spanCli m-1 p-1'>Cep:</span> {{Empresa(pgid).CEP}}</div>
        <div class="col-6" v-if="Empresa(pgid).UF!='null'"><span class='spanCli m-1 p-1'>Estado:</span> {{Empresa(pgid).UF}}</div>
        <div class="col-6" v-if="Empresa(pgid).Cidade!='null'"><span class='spanCli m-1 p-1'>Cidade:</span> {{Empresa(pgid).Cidade}}</div>
        <div class="col-6" v-if="Empresa(pgid).Bairro!='null'"><span class='spanCli m-1 p-1'>Bairro:</span> {{Empresa(pgid).Bairro}}</div>
        <div class="col-6" v-if="Empresa(pgid).Rua!='null'"><span class='spanCli m-1 p-1'>Rua:</span> {{Empresa(pgid).Rua}}</div>
        <div class="col-6" v-if="Empresa(pgid).Num!='null'"><span class='spanCli m-1 p-1'>Número:</span> {{Empresa(pgid).Num}}</div>
        <div class="col-6" v-if="Empresa(pgid).Complemento!='null'"><span class='spanCli m-1 p-1'>Complemento:</span> {{Empresa(pgid).Complemento}}</div>
        <div class="col-6" v-if="Empresa(pgid).Telefone!='null'"><span class='spanCli m-1 p-1'>Telefone:</span> {{Empresa(pgid).Telefone}}</div>
        <div class="col-6" v-if="Empresa(pgid).Celular!='null'"><span class='spanCli m-1 p-1'><i class="fab fa-whatsapp"></i> whatsapp:</span> <a class='listA' target="_blank" v-bind:href="'https://wa.me/55'+cleanwap(Empresa(pgid).Celular)">{{Empresa(pgid).Celular}}</a></div>
        <div class="col-6" v-if="getFB(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fab fa-facebook-f"></i> Facebook:</span> <a class='listA' target="_blank" v-bind:href="'https://facebook.com/'+getFB(Empresa(pgid)._id['$oid'])">@{{getFB(Empresa(pgid)._id['$oid'])}}</a></div>
        <div class="col-6" v-if="getInsta(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fab fa-instagram"></i> Instagram:</span> <a class='listA' target="_blank" v-bind:href="'https://instagram.com/'+getInsta(Empresa(pgid)._id['$oid'])">@{{getInsta(Empresa(pgid)._id['$oid'])}}</a></div>
        <div class="col-6" v-if="getSite(pgid)!=null"><span class='spanCli m-1 p-1'><i class="fas fa-globe"></i> Site:</span> <a class='listA' target="_blank" v-bind:href="getSite(Empresa(pgid)._id['$oid'])">
                <span v-if="Empresa(pgid).NomeFantasia">
                    {{Empresa(pgid).NomeFantasia}}
                </span>
                <span class="spanCli" v-else>
                    {{Empresa(pgid).Nome}}    
                </span>
            </a></div>
    </div>
    <br>
</section>
<section v-if="(spy==='mapa' || spy==='all')">
    <iframe class="col-md-11 col-lg-7 col-xl-7 col-11 mx-auto d-block"
            width="450"
            height="250"
            frameborder="0" style="border:0"
            v-bind:src="'https://www.google.com/maps/embed/v1/place?key='+app.sys.chave+'&q='+Empresa(pgid).Rua+','+Empresa(pgid).Num" allowfullscreen>
    </iframe>
</section>