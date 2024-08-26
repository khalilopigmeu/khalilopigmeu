<?php include 'header.php'; ?>
<div id="tagLista" class="container-fluid">
    <fieldset class="border rounded container-fluid border-dark">
        <legend>Pesquisa</legend>
        <label>Hashtag</label>
        <input type="text" class="form-control" v-model="pesquisa" placeholder="Digite a hashtag">
        <br>
    </fieldset>
    <div class="row text-center justify-content-center pt-2">
        <div v-if="!nulo(src)" class="col-4">
            <ul class="list-group list-group-flush" id="liststyle">
                <li class="list-group-item" v-for="(item) in app.sys.sorter(app.sys.searchall(src,pesquisa),'ASC','IdTag')"  v-on:click="dados(item._id['$oid'])">
                    {{item.IdTag}}
                </li>
            </ul>
        </div>
        <div v-if="!nulo(src)" class="col-8">
            <canvas id="dados"  style="max-width: 90%; max-height: 90vh; overflow: auto; background: white!important;"></canvas>
        </div>
    </div>
</div>
<?php include 'footer.php'; ?>
