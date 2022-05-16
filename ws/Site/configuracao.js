"use strict";
app["configuracaosite"] = new Vue({
    el: '#configuracaosite',
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
                if (app.empresasanunciando.pgid !== null) {
                    this.biencode.pgid = app.empresasanunciando.pgid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("configuracaosite", "listar", data);
                setAuth(preauth);
                if (app.empresasanunciando.pgid !== null) {
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
                } else {
                    var path = (window.location.pathname).split("/");
                    var search = path[path.length - 1];
                    if (search !== null && search.length > 3) {
                        var fb = app.sys.search(app.configuracaosite.src, search, "Facebook");
                        var ig = app.sys.search(app.configuracaosite.src, search, "Instagram");
                        var nm = app.sys.search(app.configuracaosite.src, search, "Nome");
                        if (fb.length > 1) {
                            window.location.href = "/index.php#anunciante?pgid=" + fb[0].IdEmpresa;
                            urlRead();
                        } else if (ig.length > 1) {
                            window.location.href = "/index.php#anunciante?pgid=" + ig[0].IdEmpresa;
                            urlRead();
                        } else if (nm.length > 1) {
                            window.location.href = "/index.php#anunciante?pgid=" + nm[0].IdEmpresa;
                            urlRead();
                        }
                    }
                }
            });
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
    }
});
        