"use strict";
app["categoriaanuncioclube"] = new Vue({
    el: '#categoriaanuncioclube',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/CategoriaAnuncio/",
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                this.biencode.empresa = app.sys.refid;
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("categoriaanuncioclube", "listar", data);
                setAuth(preauth);
            });
        }
    }
});
        