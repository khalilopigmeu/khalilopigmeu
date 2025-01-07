<script src="https://www.google.com/recaptcha/api.js?render=6LfuesokAAAAACJcqvQqVpE0oiI_kEMl2vhGw57J"></script>
<style id="cssroot">
    :root{

    }
</style>
<?php
include 'src.php';
?>
<script>
    window.localStorage.setItem("labeledby", "bienclube.com.br");
    function urlRead() {
        window.location.href = "https://bienclube.com.br/index.php?pgid=6560a8e12dda985864d91316&spy=blog&major=true#anunciante"
    }
    window.onload = function () {
        setAuth(decrypt(app.sys.bien, "encodedstring"));
        app.sys.start();
    };

    setAuth(decrypt(app.sys.bien, "encodedstring"));
    app.sys.start();

</script>