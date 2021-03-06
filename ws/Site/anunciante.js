"use strict";
app["anunciante"] = new Vue({
    el: '#anunciante',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/Anunciante/",
        pgid: null,
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                this.biencode.all = "all";
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("anunciante", "listar", data);
                setAuth(preauth);
                app.empresasanunciando.anunciosSrc = app.sys.randomList(app.anunciante.src);
                app.Home.anunciantes = app.anunciante.src.length;
                app.Home.update();
            });
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
    },
});
        