"use strict";
app["configuracaosite"] = new Vue({
    el: '#configuracaosite',
    data: {
        src: null,
        Host: "Bienestar/Sistema/Configuracao/",
        pgid: null
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (!nulo(refid)) {
                this.biencode.pgid = refid;
            } else {
                this.biencode.all = "";
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            //app.sys.crud("configuracaosite", "listar", data);
            app.sys.crud("configuracaosite", "variavel", data, "listar", app.configuracaosite.id);
        },
        buscaurl: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.all = "";
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("configuracaosite", "variavel", data, "listar", app.configuracaosite.url);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
        id: function () {
            if (app.configuracaosite.src.length > 0) {
                if (app.configuracaosite.src[0].Facebook) {
                    app.empresasanunciando.fb = app.configuracaosite.src[0].Facebook.replace("@", "");
                }
                if (app.configuracaosite.src[0].Instagram) {
                    app.empresasanunciando.insta = app.configuracaosite.src[0].Instagram.replace("@", "");
                }
                if (app.configuracaosite.src[0].Site) {
                    app.empresasanunciando.site = app.configuracaosite.src[0].Site;
                }
                if (app.configuracaosite.src[0].LogoURL) {
                    app.empresasanunciando.logo = app.configuracaosite.src[0].LogoURL;
                }
            }
        },
        url: function () {
            var search = getParameterByName("cli");
            if (search !== null && search.length > 3) {
                var fb = app.sys.search(app.configuracaosite.src, search, "Facebook");
                var ig = app.sys.search(app.configuracaosite.src, search, "Instagram");
                var nm = app.sys.search(app.configuracaosite.src, search, "Nome");
                if (fb.length > 0) {
                    window.location.href = "/index.php#anunciante?pgid=" + fb[0].IdEmpresa;
                } else
                if (ig.length > 0) {
                    window.location.href = "/index.php#anunciante?pgid=" + ig[0].IdEmpresa;
                } else
                if (nm.length > 0) {
                    window.location.href = "/index.php#anunciante?pgid=" + nm[0].IdEmpresa;
                }
            }
        },
    }
});
        