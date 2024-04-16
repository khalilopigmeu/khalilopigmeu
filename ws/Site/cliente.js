"use strict";
app["clientesite"] = new Vue({
    el: '#clientesite',
    data: {
        src: null,
        Host: "Bienestar/Gestao/Clientes/",
        id: null,
        href: "Cliente"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("Cliente")) {
                this.src = app.sys.system["Cliente"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.id = app.clientesite.id;
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("clientesite", "listar", data);
            }
        },
        all: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.all = "";
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("clientesite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        