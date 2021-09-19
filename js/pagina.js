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
                this.biencode.empresa = app.sys.refid;
                if (app.paginabienclube.pg !== null) {
                    this.biencode.urlpage = getParameterByName("pg");
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("paginabienclube", "listar", data);
                setAuth(preauth);
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
        