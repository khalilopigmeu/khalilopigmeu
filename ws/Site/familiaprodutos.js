"use strict";
app["FamiliaProdutosSite"] = new Vue({
    el: '#FamiliaProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Estoque/FamiliaProdutos/",
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
                app.sys.crud("FamiliaProdutosSite", "listar", data);
                setAuth(preauth);
                app.empresasanunciando.familiaprodutos = app.FamiliaProdutosSite.src;
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
        