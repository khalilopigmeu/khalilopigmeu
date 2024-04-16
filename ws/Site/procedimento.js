"use strict";
app["procedimentosite"] = new Vue({
    el: '#procedimentosite',
    data: {
        src: null,
        Host: "Bienestar/Clinica/Procedimento/",
        href: "Procedimento"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("Procedimento")) {
                this.src = app.sys.system["Procedimento"];
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
                app.sys.crud("procedimentosite", "listar", data);
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
        