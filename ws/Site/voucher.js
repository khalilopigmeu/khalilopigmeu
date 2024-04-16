"use strict";
app["voucherbienclube"] = new Vue({
    el: '#voucherbienclube',
    data: {
        src: null,
        Host: "Bienestar/Site/Voucher/",
        href: "Voucher"

    },
    methods: {
        buscar: function () {
            if (app.sys.system.hasOwnProperty("Voucher")) {
                this.src = app.sys.system["Voucher"];
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
                app.sys.crud("voucherbienclube", "listar", data);
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
        