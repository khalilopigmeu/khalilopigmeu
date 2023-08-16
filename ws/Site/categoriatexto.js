"use strict";
app["categoriatextosite"] = new Vue({
    el: '#categoriatextosite',
    data: {
        src: null,
        Host: "Bienestar/Textos/CategoriaTexto/"
    },
    methods: {
        buscar: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = app.sys.refid;
            this.biencode.nome = getParameterByName("cod");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("categoriatextosite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        