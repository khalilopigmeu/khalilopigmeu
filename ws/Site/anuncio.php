<?php include"header.php"; ?>
<div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" id="categoriaanuncioclube" style="width: 300px;">
    <div class="list-group list-group-flush border-bottom scrollarea">
        <!-- o primeiro id selecionado tem que ter active -->
        <a v-for="item in src" v-bind:href="'anuncio.php?catid='+item._id['$oid']" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{{item.Nome}}</strong>
                <small><i class="fas fa-chevron-right"></i></small>
            </div>
        </a>
    </div>
</div>
<div id="anunciobienclube">

</div>
<script src="<?php echo $cdn; ?>ws/Site/categoriaanuncio.js"></script>
<script src="<?php echo $cdn; ?>ws/Site/anuncio.js"></script>

<?php include"footer.php"; ?>