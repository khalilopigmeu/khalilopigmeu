"use strict";
app["ClasseProdutosSite"] = new Vue({
    el: '#ClasseProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Estoque/ClasseProdutos/",
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
                app.sys.crud("ClasseProdutosSite", "listar", data);
                setAuth(preauth);
                app.empresasanunciando.classeprodutos = app.ClasseProdutosSite.src;
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
        