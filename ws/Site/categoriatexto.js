"use strict";
app["categoriatextosite"] = new Vue({
    el: '#categoriatextosite',
    data: {
        src: null,
        Host: "Bienestar/Textos/CategoriaTexto/",
        href: "CategoriaText"
    },
    methods: {
        buscar: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("CategoriaText")) {
                this.src = app.sys.system["CategoriaText"];
            } else {
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
            }
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        