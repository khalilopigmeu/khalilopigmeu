"use strict";
app["configuracao"] = new Vue({
    el: '#configuracao',
    data: {
        src: null,
        Host: "Bienestar/Gerenciamento/Configuracao/",
        pgid: null
    },
    methods: {
        buscar: function () {
            $(function () {
                preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                this.biencode.pgid = getParameterByName("pgid");
                //this.biencode.empresa = getParameterByName("pgid");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("configuracao", "listar", data);
                setAuth(preauth);
                app.anunciante.fb = app.configuracao.src[0].Facebook;
                app.anunciante.insta = app.configuracao.src[0].Instagram;
                app.anunciante.site = app.configuracao.src[0].Site;
                app.anunciante.logo = app.configuracao.src[0].LogoURL;
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
        