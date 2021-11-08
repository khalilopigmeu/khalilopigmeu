"use strict";
app["anunciante"] = new Vue({
    el: '#anunciante',
    data: {
        src: null,
        Host: "Bienestar/Gerenciamento/Empresa/",
        pgid: null,
        fb: 'null',
        insta: 'null',
        site: 'null',
        logo: null,
        paginas: null,
        vouchers: null,
        anuncios: null,
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
                    this.biencode.id = app.anunciante.pgid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("anunciante", "listar", data);
                setAuth(preauth);
                app.anunciante.src = app.sys.randomList(app.anunciante.src);
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
        },
        getLogo: function (id) {
            var temp = app.sys.search(app.configuracao.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                return temp[0].LogoURL;
            } else {
                return "";
            }
        },
        getFB: function (id) {
            var temp = app.sys.search(app.configuracao.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                var fb = temp[0].Facebook;
                if (fb) {
                    return fb.replace("@", "");
                }
            } else {
                return null;
            }
        },
        getInsta: function (id) {
            var temp = app.sys.search(app.configuracao.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                var ins = temp[0].Instagram;
                if (ins) {
                    return ins.replace("@", "");
                }
            } else {
                return null;
            }
        },
        getSite: function (id) {
            var temp = app.sys.search(app.configuracao.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                return temp[0].Site;
            } else {
                return null;
            }
        },
    },
});
        