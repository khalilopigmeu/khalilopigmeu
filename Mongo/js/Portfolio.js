"use strict",
//Portfolio
app["Portfolio"] = new Vue({
    el: '#Portfolio',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-handshake"></i>',
        pesqTbl: "",
        Host: "Bienestar/Portfolio/Portfolios/",
        paginate: [],

        IdAlbum: null,
        IdCategoriaPortfolio: null,
        Nome: null,
        UrlSite: null,
        Job: null,
        CaseEmpresa: null,
        UrlLogo: null,

        CategoriaPortfolioSrc: null,
        AlbumSrc: null,
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Portfolio.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.IdAlbum = null;
            this.IdCategoriaPortfolio = null;
            this.Nome = null;
            this.UrlSite = null;
            this.Job = null;
            this.CaseEmpresa = null;
            this.UrlLogo = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdAlbum = String(app.sys.foreignKeyRestore(this.AlbumSrc, "NomeAlbum", this.row[1]));
            this.IdCategoriaPortfolio = String(app.sys.foreignKeyRestore(this.CategoriaPortfolioSrc, "Nome", this.row[2]));
            this.Nome = this.row[3];
            this.UrlSite = this.row[4];
            this.Job = this.row[5];
            CKEDITOR.instances['jobtxt'].setData(unescapeHTML(this.Job))
            this.CaseEmpresa = this.row[6];
            CKEDITOR.instances['casetxt'].setData(unescapeHTML(this.CaseEmpresa))
            this.UrlLogo = this.row[7];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.IdAlbum = this.IdAlbum;
            this.biencode.IdCategoriaPortfolio = this.IdCategoriaPortfolio;
            this.biencode.Nome = this.Nome;
            this.biencode.UrlSite = this.UrlSite;
            this.Job = CKEDITOR.instances['jobtxt'].getData();
            ;
            this.biencode.Job = this.Job;
            this.CaseEmpresa = CKEDITOR.instances['casetxt'].getData();
            ;
            this.biencode.CaseEmpresa = this.CaseEmpresa;
            this.biencode.UrlLogo = this.UrlLogo;
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.CategoriaPortfolio)) {
                this.CategoriaPortfolioSrc = [];
            } else {
                this.CategoriaPortfolioSrc = app.CategoriaPortfolio.src;
            }
            if (nulo(app.Album)) {
                this.AlbumSrc = [];
            } else {
                this.AlbumSrc = app.Album.src;
            }

        },
    }
});
