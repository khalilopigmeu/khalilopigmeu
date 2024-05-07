"use strict";
app["ProdutosSite"] = new Vue({
    el: '#ProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Produtos/Produto/",
        pgid: null,
        href: "Produto"
    },
    methods: {
        buscar: function (refid) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("Produto")) {
                this.src = app.sys.system["Produto"];
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
                app.sys.crud("ProdutosSite", "listar", data);
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
