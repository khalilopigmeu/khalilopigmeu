"use strict";
app["paginasite"] = new Vue({
    el: '#paginasite',
    data: {
        src: null,
        Host: "Bienestar/Site/pagina/",
        pg: null,
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            if (app.paginasite.pg !== null) {
                this.biencode.urlpage = getParameterByName("pg");
            }
            if (!nulo(refid)) {
                this.biencode.empresa = refid;
            } else {
                this.biencode.empresa = app.sys.refid;
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("paginasite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        