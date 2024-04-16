"use strict";
app["CategoriaProdutosSite"] = new Vue({
    el: '#CategoriaProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Produtos/CategoriaProdutos/",
        pgid: null,
        href: "CategoriaProdutos"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("CategoriaProdutos")) {
                this.src = app.sys.system["CategoriaProdutos"];
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
                app.sys.crud("CategoriaProdutosSite", "listar", data);
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
        