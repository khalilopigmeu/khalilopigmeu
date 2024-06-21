"use strict";
app["anunciante"] = new Vue({
    el: '#anunciante',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/Anunciante/",
        pgid: null,
        href: "Anuncio"
    },
    methods: {
        buscar: function (refid) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("Anuncio")) {
                this.src = app.sys.system["Anuncio"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("anunciante", "listar", data);
            }
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
    },
});
        