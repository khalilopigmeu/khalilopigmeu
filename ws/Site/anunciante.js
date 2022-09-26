"use strict";
app["anunciante"] = new Vue({
    el: '#anunciante',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/Anunciante/",
        pgid: null,
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            if (!nulo(refid)) {
                this.biencode.empresa = refid;
            } else {
                this.biencode.all = "";
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("anunciante", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
    },
});
        