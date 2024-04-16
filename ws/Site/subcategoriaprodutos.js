"use strict";
app["SubcategoriaProdutosSite"] = new Vue({
    el: '#SubcategoriaProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Produtos/SubCatProdutos/",
        pgid: null,
        href: "SubcategoriaProdutos"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("SubcategoriaProdutos")) {
                this.src = app.sys.system["SubcategoriaProdutos"];
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
                app.sys.crud("SubcategoriaProdutosSite", "listar", data);
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
        