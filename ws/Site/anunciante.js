"use strict";
app["anunciante"] = new Vue({
    el: '#anunciante',
    data: {
        src: null,
        Host: "Bienestar/Gerenciamento/Empresa/",
        pgid: null,
        fb: null,
        insta: null,
        site: null,
        logo: null,
        paginas: null,
        vouchers: null,
        anuncios: null,
    },
    methods: {
        buscar: function () {
            Vue.config.devtools = true;
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                if (app.anunciante.pgid !== null) {
                    this.biencode.id = app.anunciante.pgid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("anunciante", "listar", data);
                setAuth(preauth);
            });
        },
        cleanwap: function (number) {
            var num = number.replace(/[^\w\s]/gi, '');
            return num.replace(/\s/g, '');
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        