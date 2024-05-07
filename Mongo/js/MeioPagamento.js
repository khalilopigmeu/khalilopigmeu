"use strict",
//MeioPagamento
app["MeioPagamento"] = new Vue({
    el: '#MeioPagamento',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Loja/MeioPagamento/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],
        Nome: "Nome",
        Ambiente: "Ambiente",
        TokenSandbox: "TokenSandbox",
        AppIdSandbox: "AppIdSandbox",
        SenhaSandbox: "SenhaSandbox",
        TokenProducao: "TokenProducao",
        AppIdProducao: "AppIdProducao",
        SenhaProducao: "SenhaProducao",
        Email: "Email",
        IdEmpresa: "IdEmpresa"
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
                app.sys.crud(app.MeioPagamento.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.Nome = null;
            this.Ambiente = null;
            this.TokenSandbox = null;
            this.AppIdSandbox = null;
            this.SenhaSandbox = null;
            this.TokenProducao = null;
            this.AppIdProducao = null;
            this.SenhaProducao = null;
            this.Email = null;
        },
        autocomplete: function () {
            this.Nome = this.row[1];
            this.Ambiente = this.row[2];
            this.Email = this.row[3];
            this.TokenSandbox = this.row[4];
            this.AppIdSandbox = this.row[5];
            this.SenhaSandbox = this.row[6];
            this.TokenProducao = this.row[7];
            this.AppIdProducao = this.row[8];
            this.SenhaProducao = this.row[9];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.id = this.id;
            this.biencode.Nome = this.Nome;
            this.biencode.Ambiente = this.Ambiente;
            this.biencode.TokenSandbox = this.TokenSandbox;
            this.biencode.AppIdSandbox = this.AppIdSandbox;
            this.biencode.SenhaSandbox = this.SenhaSandbox;
            this.biencode.TokenProducao = this.TokenProducao;
            this.biencode.AppIdProducao = this.AppIdProducao;
            this.biencode.SenhaProducao = this.SenhaProducao;
            this.biencode.Email = this.Email;
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

        },
    }
});