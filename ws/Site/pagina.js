"use strict";
app["paginabienclube"] = new Vue({
    el: '#paginabienclube',
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
                if (app.paginabienclube.pg !== null) {
                    this.biencode.urlpage = getParameterByName("pg");
                }
                if (app.anunciante.pgid !== null) {
                    this.biencode.empresa = getParameterByName("pgid");
                } else {
                    this.biencode.empresa = app.sys.refid;
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("paginabienclube", "listar", data);
                setAuth(preauth);
                if (app.anunciante.pgid !== null) {
                    app.anunciante.paginas = app.paginabienclube.src;
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
        