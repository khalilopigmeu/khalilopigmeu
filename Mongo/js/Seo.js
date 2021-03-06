"use strict",
//Seo
app["Seo"] = new Vue({
    el: '#Seo',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-search"></i>',
        pesqTbl: "",
        Host: "Bienestar/Seo/SEO/",

        URLPage: null,
        NomeSite: null,
        TituloSite: null,
        DescriSite: null,
        Keyword: null,
        PageId: null,
        UrlFB: null,
        UrlImage: null,
    }, 
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Seo.href, "listar", data);
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.URLPage = null;
            this.NomeSite = null;
            this.TituloSite = null;
            this.DescriSite = null;
            this.Keyword = null;
            this.PageId = null;
            this.UrlFB = null;
            this.UrlImage = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.URLPage = this.row[1];
            this.NomeSite = this.row[2];
            this.TituloSite = this.row[3];
            this.DescriSite = this.row[4];
            this.Keyword = this.row[5];
            this.PageId = this.row[7];
            this.UrlFB = this.row[6];
            this.UrlImage = this.row[8];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.URLPage = this.URLPage;
            this.biencode.NomeSite = this.NomeSite;
            this.biencode.TituloSite = this.TituloSite;
            this.biencode.DescriSite = this.DescriSite;
            this.biencode.Keyword = this.Keyword;
            this.biencode.PageId = this.PageId;
            this.biencode.UrlFB = this.UrlFB;
            this.biencode.UrlImage = this.UrlImage;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
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
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
});
