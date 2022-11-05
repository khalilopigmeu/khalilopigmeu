<div id="chamadoanunciosite">

</div>
<script src="<?php echo $cdn; ?>ws/Site/chamadoanuncio.js"></script>
<script>
    $(function () {
        app.chamadoanunciosite.buscar();
        app.Home.chamadashome = app.chamadoanunciosite.src;
    });
</script>