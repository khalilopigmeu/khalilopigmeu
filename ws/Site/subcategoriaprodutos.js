"use strict";
app["SubcategoriaProdutosSite"] = new Vue({
    el: '#SubcategoriaProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Produtos/SubCatProdutos/",
        pgid: null
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            if (!nulo(refid)) {
                this.biencode.empresa = refid;
            } else {
                this.biencode.all = "";
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("SubcategoriaProdutosSite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        