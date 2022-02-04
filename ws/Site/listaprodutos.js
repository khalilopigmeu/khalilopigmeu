"use strict";
app["ListaProdutosSite"] = new Vue({
    el: '#ListaProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Estoque/Produtos",
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
                app.sys.crud("ListaProdutosSite", "listar", data);
                setAuth(preauth);
                if (app.empresasanunciando.pgid !== null) {
                    app.empresasanunciando.listaprodutos = app.ListaProdutosSite.src;
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
        