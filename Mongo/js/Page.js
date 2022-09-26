"use strict",
//Page
app["Page"] = new Vue({
    el: '#Page',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-globe"></i>',
        pesqTbl: "",
        Host: "Bienestar/Site/pagina/",

        Titulo: null,
        UrlPage: null,
        ContentPage: null,
        Acessos: null,

        Loginsrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            this.biencode.acesso = window.localStorage.getItem("IdLogin");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Page.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.UrlPage = null;
            this.Titulo = null;
            this.ContentPage = null;
        },
        autocomplete: function () {
            this.ContentPage = this.row[3];
            CKEDITOR.instances['conteudo'].setData(unescapeHTML(this.ContentPage));
            this.Titulo = this.row[1];
            this.UrlPage = this.row[2];
            this.id = this.row[0];
            var x = String(app.sys.foreignKeyRestore(this.Loginsrc, "Login", this.row[4]));
            this.Acessos = eval(x.split(","));
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.ContentPage = CKEDITOR.instances['conteudo'].getData();
            this.biencode.ContentPage = this.ContentPage;
            this.biencode.Titulo = this.Titulo;
            this.biencode.UrlPage = this.UrlPage;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
            var ac = "";
            for (var i = 0; i <= this.Acessos.length - 1; i++) {
                ac += this.Acessos[i];
                if (i < this.Acessos.length - 1) {
                    ac += ";";
                }
            }
            this.biencode.Acessos = ac;
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
            if (nulo(app.Login)) {
                this.Loginsrc = [];
            } else {
                this.Loginsrc = app.Login.src;
            }
        },
    }
});