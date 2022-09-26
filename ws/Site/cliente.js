"use strict";
app["clientesite"] = new Vue({
    el: '#clientesite',
    data: {
        src: null,
        Host: "Bienestar/Gestao/Clientes/",
        id: null,
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            if (!nulo(refid)) {
                this.biencode.empresa = refid;
            } else {
                this.biencode.id = app.clientesite.id;
            }
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
        