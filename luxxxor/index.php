<script src="https://www.google.com/recaptcha/api.js?render=6LfuesokAAAAACJcqvQqVpE0oiI_kEMl2vhGw57J"></script>
<?php
include 'src.php';
?>
<script>
    function urlRead() {
        window.location.href = "https://bienclube.com.br/index.php#anunciante?pgid=6560a8e12dda985864d91316&spy=loja"
    }
    window.onload = function () {
        setAuth(decrypt(app.sys.bien, "encodedstring"));
        app.sys.start();
    };

    setAuth(decrypt(app.sys.bien, "encodedstring"));
    app.sys.start();

</script>