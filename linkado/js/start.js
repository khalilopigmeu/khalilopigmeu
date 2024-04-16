"use strict";
var urlSite = window.location.href;
var cdn;
var swiper;
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
    console.log(urlSite);
}
app["Cadastro"] = new Vue({
    el: 'Cadastro',
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
            captchaSys(app.sys.keysite);
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
            captchaSys(app.sys.keysite);
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
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            app.sys.crud(this.href, "edt", null);
        },
        excluir: function () {
            app.sys.crud(this.href, "exc", null);
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
    el: 'Login',
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
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.Cadastro.Host + "login";
            var p = post(ws, data);
            app.Cadastro.src = eval(decrypt(p));
            app.Cadastro.autocomplete();
        },
        autocomplete: function () {
            this.Email = this.src[0].Email;
            this.Celular = this.src[0].Celular;
            this.Senha = this.src[0].Senha;
            this.id = this.src[0]._id["$oid"];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Email = this.Email;
            this.biencode.Celular = this.Celular;
            this.biencode.Senha = this.Senha;
            this.biencode.id = this.id;
        }
    }
});