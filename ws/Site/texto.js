"use strict";
app["textosite"] = new Vue({
    el: '#textosite',
    data: {
        src: null,
        Host: "Bienestar/Textos/Text/"
    },
    methods: {
        buscar: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            this.biencode.empresa = app.sys.refid;
            this.biencode.nome = getParameterByName("cod");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("textosite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        