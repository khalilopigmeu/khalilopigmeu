"use strict";
app["chamadoanunciosite"] = new Vue({
    el: '#chamadoanunciosite',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/ChamadoAnuncio/",
    },
    methods: {
        buscar: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            this.biencode.empresa = app.sys.refid;;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("chamadoanunciosite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        