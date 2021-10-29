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
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                if (app.anunciante.pgid !== null) {
                    this.biencode.pgid = app.anunciante.pgid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("configuracao", "listar", data);
                setAuth(preauth);
                if (app.anunciante.pgid !== null) {
                    app.anunciante.fb = app.configuracao.src[0].Facebook;
                    app.anunciante.insta = app.configuracao.src[0].Instagram;
                    app.anunciante.site = app.configuracao.src[0].Site;
                    app.anunciante.logo = app.configuracao.src[0].LogoURL;
                } else {
                    var path = (window.location.pathname).split("/");
                    var search = path[path.length - 1];
                    var fb = app.sys.search(app.configuracao.src, search, "Facebook");
                    var ig = app.sys.search(app.configuracao.src, search, "Instagram");
                    var nm = app.sys.search(app.configuracao.src, search, "Nome");
                    if (fb.length > 0) {
                        window.location.href = "/index.php#anunciante?pgid=" + fb[0].IdEmpresa;
                    } else if (ig.length > 0) {
                        window.location.href = "/index.php#anunciante?pgid=" + ig[0].IdEmpresa;
                    } else if (nm.length > 0) {
                        window.location.href = "/index.php#anunciante?pgid=" + nm[0].IdEmpresa;
                    }
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
        