<?php include_once 'header.php'; ?>
<div id="lista">
    <div class="row text-center justify-content-center">
        <div v-if="!nulo(src)" class="col-8 mx-auto">
            <div v-for="item in src">
                <div class="row mb-3 align-items-center" v-if="!nulo(item.Icon)">
                    <div class="col-4 align-self-center">
                        <img class="img-thumbnail w-75" v-bind:src="item.Icon">
                    </div>
                    <div class="col-8">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{item.Nome}}</h5>
                                <p class="card-text">{{item.Descricao}}</p>
                                <a href="#" v-on:click="open(item.Url)" class="btn btn-sm btn-info"><i class="fas fa-external-link-alt"></i> Abrir</a>
                                <a href="#" v-on:click="share(item.Reduzida)"class="btn btn-sm btn-primary"><i class="fas fa-share-alt"></i> Compartilhar</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                <div v-else class="row mb-3 align-items-center">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{item.Nome}}</h5>
                                <p class="card-text">{{item.Descricao}}</p>
                                <a href="#" v-on:click="open(item.Url)" class="btn btn-sm btn-info"><i class="fas fa-external-link-alt"></i> Abrir</a>
                                <a href="#" v-on:click="share(item.Reduzida,item.Nome)"class="btn btn-sm btn-primary"><i class="fas fa-share-alt"></i> Compartilhar</a>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include_once 'footer.php'; ?>