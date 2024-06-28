<?php include_once 'header.php'; ?>
<div class="container-fluid" id="Linka">
    <nav v-if="con!=='false'" class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Linkado</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" data-backdrop="false" data-toggle="modal" data-target="#links" href='#'>Links</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-backdrop="false" data-toggle="modal" data-target="#tags" href='#'>Tags</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-backdrop="false" data-toggle="modal" data-target="#Cadastro" href='#'>Dados</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-on:click="logout" href='#'>Sair</a>
                </li>
            </ul>
    </nav>
    <div class="row text-center justify-content-center">
        <div v-if="con==='false'" class="col-7 mx-auto">
            <div  v-if="con==='false'" class="linkado mb-2">
                <h1>Linkado</h1>
                <h2><p>Seu app de links</p></h2>
                <a  class="btn btn-sm btn-primary" data-backdrop="false" data-toggle="modal" data-target="#Login" href='#'>Conectar</a>
            </div>
            <div class="card">
                <div class="card-header">
                    Crie já sua lista de links
                </div>
                <div class="card-body">
                    <h5 class="card-title">Centralize seus dados</h5>
                    <p class="card-text">Centralize seus links, diminua suas urls e acompanhe o resultado de seu marketing</p>
                    <a  class="btn btn-sm btn-primary" data-backdrop="false" data-toggle="modal" data-target="#Cadastro" href='#'>Link já!</a>
                </div>
            </div>
        </div>
        <div  v-if="con!=='false'" class="col-8 mx-auto">
            <!-- repeater -->
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
<?php include_once 'acesso.php'; ?>
<?php include_once 'links.php'; ?>
<?php include_once 'tags.php'; ?>
<?php include_once 'footer.php'; ?>