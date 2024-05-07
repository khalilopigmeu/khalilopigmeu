"use strict";
app["chamadoanunciosite"] = new Vue({
    el: '#chamadoanunciosite',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/ChamadoAnuncio/",
        href: "ChamadaAnuncio"
    },
    methods: {
        buscar: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("ChamadaAnuncio")) {
                this.src = app.sys.system["ChamadaAnuncio"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = app.sys.refid;
                ;
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("chamadoanunciosite", "listar", data);
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
        