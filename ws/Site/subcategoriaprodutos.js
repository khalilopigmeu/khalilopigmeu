"use strict";
app["SubcategoriaProdutosSite"] = new Vue({
    el: '#SubcategoriaProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Estoque/SubCatProdutos/",
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
                this.biencode.empresa = getParameterByName('pgid');
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("SubcategoriaProdutosSite", "listar", data);
                setAuth(preauth);
                app.empresasanunciando.subcategoriaprodutos = app.SubcategoriaProdutosSite.src;
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
        