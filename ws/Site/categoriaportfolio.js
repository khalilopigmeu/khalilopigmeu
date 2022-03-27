"use strict";
app["categoriaportfolio"] = new Vue({
    el: '#categoriaportfolio',
    data: {
        src: null,
        Host: "Bienestar/Portfolio/CategoriaPortfolio/",
        pg: null,
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                if (typeof app.empresasanunciando !== 'undefined') {
                    if (app.empresasanunciando.pgid !== null) {
                        this.biencode.empresa = getParameterByName("pgid");
                    } else {
                        this.biencode.empresa = app.sys.refid;
                    }
                } else {
                    this.biencode.empresa = app.sys.refid;
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("categoriaportfolio", "listar", data);
                setAuth(preauth);
                app.portfolio.catport = app.categoriaportfolio.src;
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
        