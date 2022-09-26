<br>
<div class="d-flex align-items-end flex-column py-2">
    <button class="btn btn-dark py-2 toTbl"  v-if="evtDataCal=='cad' && app.sys.ravec(2,'<?php echo $page; ?>')"  v-on:click="cadastrar"><i class="far fa-plus-square"></i> Cadastrar</button><br>
    <button class="btn btn-dark py-2 toTbl"  v-if="(evtDataCal=='alt' || evtDataCal=='altexc') && app.sys.ravec(3,'<?php echo $page; ?>')" v-on:click="alterar"><i class="far fa-edit"></i> Alterar</button><br>
    <button class="btn btn-dark py-2 toTbl"  v-if="(evtDataCal=='exc' || evtDataCal=='altexc') && app.sys.ravec(4,'<?php echo $page; ?>')" v-on:click="excluir"><i class="far fa-trash-alt"></i> Excluir</button>
</div>
</fieldset>
</form>
</div>
</div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-warning" data-dismiss="modal"><i class="far fa-times-circle"></i> Fechar</button>
</div>
</div>
</div>
</div>
<script src='<?php echo $cdn . "Mongo/js/" . $page . ".js"; ?>'></script>
<script>
    $(function () {
        app.sidebarR.smenu.push({
            nome: "<?php echo $pgtitle; ?>",
            href: "<?php echo $page; ?>",
        });

        app.<?php echo $page; ?>.href = "<?php echo $page; ?>";
        app.<?php echo $page; ?>.stepkey = <?php echo $stepMenu; ?>;
        app.<?php echo $page; ?>.ELtitle = "<?php echo $pgtitle; ?>";

        $('#<?php echo $page; ?>').on('show.bs.modal', function (e) {
            if (typeof app.<?php echo $page; ?>.populate === "function") {
                app.<?php echo $page; ?>.populate();
            }
            if (typeof app.<?php echo $page; ?>.load === "function") {
                app.<?php echo $page; ?>.load();
            }
        });

        $('body').on('click', '#tbl<?php echo $page; ?> tbody tr', function () {
            var arr = [];
            for (var i = 0; i <= this.childElementCount - 1; i++) {
                arr.push(this.children[i].innerHTML);
            }
            app.<?php echo $page; ?>.row = arr;
            app.<?php echo $page; ?>.autocomplete();
        });
        $('body').on('dblclick', '#tbl<?php echo $page; ?> tbody tr', function () {
            $("#<?php echo $page; ?> .modal-body .nav-link").eq(0).removeClass("active show");
            $("#<?php echo $page; ?> .modal-body .tab-pane").eq(0).removeClass("active show");
            $("#<?php echo $page; ?> .modal-body .nav-link").eq(1).addClass("active show");
            $("#<?php echo $page; ?> .modal-body .tab-pane").eq(1).addClass("active show");
            app.<?php echo $page; ?>.evtDataCal = 'alt';
        });
        $("body").on("click", "#<?php echo $page; ?> .toForm", function () {
            $("#<?php echo $page; ?> .modal-body .nav-link").eq(0).removeClass("active show");
            $("#<?php echo $page; ?> .modal-body .tab-pane").eq(0).removeClass("active show");
            $("#<?php echo $page; ?> .modal-body .nav-link").eq(1).addClass("active show");
            $("#<?php echo $page; ?> .modal-body .tab-pane").eq(1).addClass("active show");
        });
        $("body").on("click", "#<?php echo $page; ?> .toTbl", function () {
            $("#<?php echo $page; ?> .modal-body .nav-link").eq(1).removeClass("active show");
            $("#<?php echo $page; ?> .modal-body .tab-pane").eq(1).removeClass("active show");
            $("#<?php echo $page; ?> .modal-body .nav-link").eq(0).addClass("active show");
            $("#<?php echo $page; ?> .modal-body .tab-pane").eq(0).addClass("active show");
        });
    });
</script>
<?php
$stepMenu++;
?>