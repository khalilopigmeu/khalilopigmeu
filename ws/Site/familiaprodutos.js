"use strict";
app["FamiliaProdutosSite"] = new Vue({
    el: '#FamiliaProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Produtos/FamiliaProdutos/",
        pgid: null,
        href: "FamiliaProdutos"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("FamiliaProdutos")) {
                this.src = app.sys.system["FamiliaProdutos"];
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
                app.sys.crud("FamiliaProdutosSite", "listar", data);
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
        