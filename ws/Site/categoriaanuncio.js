"use strict";
app["categoriaanuncioclube"] = new Vue({
    el: '#categoriaanuncioclube',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/CategoriaAnuncio/",
    },
    methods: {
        buscar: function () {
            if (app.sys.system.hasOwnProperty("CategoriaAnuncio")) {
                this.src = app.sys.system["CategoriaAnuncio"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = app.sys.refid;
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("categoriaanuncioclube", "listar", data);
            }
        }
    }
});
        