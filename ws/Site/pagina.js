"use strict";
app["paginasite"] = new Vue({
    el: '#paginasite',
    data: {
        src: null,
        Host: "Bienestar/Pagina/pagina/",
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
                if (app.paginasite.pg !== null) {
                    this.biencode.urlpage = getParameterByName("pg");
                }
                if (typeof app.anunciante !== 'undefined') {
                    if (app.anunciante.pgid !== null) {
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
                app.sys.crud("paginasite", "listar", data);
                setAuth(preauth);
                if (app.anunciante.pgid !== null) {
                    app.anunciante.paginas = app.paginasite.src;
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
        