"use strict";
app["consultasite"] = new Vue({
    el: '#consultasite',
    data: {
        src: null,
        Host: "Bienestar/Clinica/Consulta/",
        href: "Consulta"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("Consulta")) {
                this.src = app.sys.system["Consulta"];
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
                app.sys.crud("consultasite", "listar", data);
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
        