"use strict";
var urlSite = window.location.href;
var cdn;
var swiper;
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
$(function () {

    window.onhashchange = function () {
        LinkRead();
    };

    window.onpopstate = function () {
        LinkRead();
    };

    window.onload = function () {
        LinkRead();

    };
});
function LinkRead() {
    urlSite = window.location.href;
    if (getAuth() === null) {
        app.sys.init();
        setAuth(decrypt(app.sys.bien, "encodedstring"));
    }
    authenticate();
    if (window.location.href.includes("lista")) {
        app.lista.populate();
    } else {
        if (!nulo(getParameterByName("l"))) {
            var biencode = {};
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            biencode.Reduzida = getParameterByName("l");
            var data = {
                biencode: encrypt(JSON.stringify(biencode))
            };
            var ws = app.lista.Host + "listar";
            var p = post(ws, data);
            var item = eval(decrypt(p));
            if (item.length > 0) {
                var bien = {};
                function success(pos) {
                    const crd = pos.coords;
                    bien.Timestamp = new Date().toISOString();
                    bien.Geolocation = crd.latitude + "," + crd.longitude + "," + crd.accuracy;
                    bien.IdLink = item[0]._id["$oid"];
                    var data = {
                        biencode: encrypt(JSON.stringify(bien))
                    };
                    var ws = "Linkado/Dados/add";
                    post(ws, data);
                    window.location.href = item[0].Url;
                }
                function error(err) {
                    bien.Timestamp = new Date().toISOString();
                    bien.IdLink = item[0]._id["$oid"];
                    var data = {
                        biencode: encrypt(JSON.stringify(bien))
                    };
                    var ws = "Linkado/Dados/add";
                    post(ws, data);
                    window.location.href = item[0].Url;
                }
                navigator.geolocation.getCurrentPosition(success, error, options);

            }
        } else if (!nulo(window.localStorage.getItem("Linkado"))) {
            app.Login.src = eval(window.localStorage.getItem("Linkado"));
            app.Linka.con = true;
            app.Login.autocomplete();
            app.links.populate();
        }
    }
}

app["Cadastro"] = new Vue({
    el: '#Cadastro',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-folder-open"></i>',
        pesqTbl: "",
        Host: "Linkado/Usuario/",
        paginate: [],

        Email: null,
        Celular: null,
        Instagram: null,
        YouTube: null,
        TikTok: null,
        Site: null,
        Linkado: null,
        Senha: null,
        id: null
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("linkado");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.Cadastro.Host + "listar";
            var p = post(ws, data);
            app.Cadastro.src = eval(decrypt(p));
            app.Cadastro.autocomplete();
        },
        clear: function () {
            this.Email = null;
            this.Celular = null;
            this.Instagram = null;
            this.YouTube = null;
            this.TikTok = null;
            this.Site = null;
            this.Linkado = null;
            this.Senha = null;
            this.id = null;
        },
        autocomplete: function () {
            this.Email = this.src[0].Email;
            this.Celular = this.src[0].Celular;
            this.Instagram = this.src[0].Instagram;
            this.YouTube = this.src[0].YouTube;
            this.TikTok = this.src[0].TikTok;
            this.Site = this.src[0].Site;
            this.Linkado = this.src[0].Linkado;
            this.Senha = this.src[0].Senha;
            this.id = this.src[0]._id["$oid"];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Email = this.Email;
            this.biencode.Celular = this.Celular;
            this.biencode.Instagram = this.Instagram;
            this.biencode.YouTube = this.YouTube;
            this.biencode.TikTok = this.TikTok;
            this.biencode.Site = this.Site;
            this.biencode.Linkado = this.Linkado;
            this.biencode.Senha = this.Senha;
            this.biencode.id = this.id;
        },
        cadastrar: function () {
            app.Cadastro.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.Cadastro.Host + "add";
            var p = post(ws, data);
            app.Cadastro.clear();
            $(window).NotifyInfo(decrypt(p));
        },
        alterar: function () {
            app.Cadastro.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.Cadastro.Host + "edt";
            var p = post(ws, data);
            app.Cadastro.clear();
            $(window).NotifyInfo(decrypt(p));
            app.Linka.con = "false";
            window.localStorage.clear();

        },
        excluir: function () {
            app.Cadastro.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.Cadastro.Host + "exc";
            var p = post(ws, data);
            app.Cadastro.clear();
            $(window).NotifyInfo(decrypt(p));
        },
        relatorio: function () {
            app.sys.crud(this.href, "rel", null);
        },
        cad: function () {
            this.evtDataCal = "cad";
        },
        alt: function () {
            this.evtDataCal = "alt";
        },
        rel: function () {
            this.evtDataCal = "rel";
        },
        exc: function () {
            this.evtDataCal = "exc";
        },
        load: function () {

        },
    }
});
app["Login"] = new Vue({
    el: '#Login',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-folder-open"></i>',
        pesqTbl: "",
        Host: "Linkado/Usuario/",
        paginate: [],

        Login: null,
        Senha: null,
    },
    methods: {
        login: function () {
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle");
            this.biencode.Login = this.Login;
            this.biencode.Senha = this.Senha;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.Cadastro.Host + "login";
            var p = post(ws, data);
            app.Login.src = eval(decrypt(p));
            window.localStorage.setItem("Linkado", decrypt(p));
            app.Linka.con = true;
            app.Login.autocomplete();
            $("#Login").modal("hide");
        },
        autocomplete: function () {
            app.Cadastro.Email = this.src[0].Email;
            app.Cadastro.Celular = this.src[0].Celular;
            app.Cadastro.Instagram = this.src[0].Instagram;
            app.Cadastro.YouTube = this.src[0].YouTube;
            app.Cadastro.TikTok = this.src[0].TikTok;
            app.Cadastro.Site = this.src[0].Site;
            app.Cadastro.Linkado = this.src[0].Linkado;
            app.Cadastro.id = this.src[0]._id["$oid"];
            this.id = this.src[0]._id["$oid"];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Login = this.Login;
            this.biencode.Senha = this.Senha;
            this.biencode.id = this.id;
        }
    }
});
app["sidebar"] = new Vue({
    el: '#sidebar-wrapper',
    data: {
        fblog: null,
        imgurl: null,
        imgemp: null,
        socialName: null,
        itens: null,
        smenu: [],
        newmenu: [],
        pesqmenu: null,
        empresa: null,
        login: null,
    },
    created: function () {
    },
    methods: {

    }
});
app["sidebarR"] = new Vue({
    el: '#sidebar-wrapper-R',
    data: {
        fblog: null,
        imgurl: null,
        imgemp: null,
        socialName: null,
        itens: null,
        smenu: [],
        newmenu: [],
        pesqmenu: null,
        loja: false,
        qtdProd: {},
        logado: false,
    },
    mounted: function () {

    },
    methods: {

    }
});
app["Linka"] = new Vue({
    el: '#Linka',
    data: {
        con: "false",
        src: null,
    },
    methods: {
        logout: function () {
            app.Linka.con = "false";
            window.localStorage.clear();
        },
        open: function (url) {
            window.open(url, "_blank");
        },
        share: function (url, nome) {
            navigator.share({
                title: nome,
                text: "Link",
                url: url
            });
        }
    }
});