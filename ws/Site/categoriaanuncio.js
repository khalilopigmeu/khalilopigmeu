"use strict";
app["categoriaanuncioclube"] = new Vue({
    el: '#categoriaanuncioclube',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/CategoriaAnuncio/",
    },
    methods: {
        buscar: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            this.biencode.empresa = app.sys.refid;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("categoriaanuncioclube", "listar", data);
        }
    }
});
        