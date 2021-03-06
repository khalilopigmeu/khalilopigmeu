"use strict";
app["ProdutosSite"] = new Vue({
    el: '#ProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Estoque/Produtos/",
        pgid: null
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                if (app.empresasanunciando.pgid !== null) {
                    this.biencode.empresa = app.empresasanunciando.pgid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("ProdutosSite", "listar", data);
                setAuth(preauth);
                if (app.empresasanunciando.pgid !== null) {
                    app.empresasanunciando.produtos = app.ProdutosSite.src;
                }
            });
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        