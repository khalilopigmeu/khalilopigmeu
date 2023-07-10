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
        Host: "Bienestar/Financeiro/MeioPagamento/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],
        Nome: "Nome",
        API: "API",
        Chave: "Chave",
        Token: "Token",
        SandBox: "SandBox",
        Email: "Email",
        IdEmpresa: "IdEmpresa"
    },
    methods: {
        populate: function () {
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.MeioPagamento.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Nome = null;
            this.API = null;
            this.Chave = null;
            this.Token = null;
            this.SandBox = null;
            this.Email = null;
        },
        autocomplete: function () {
            this.Nome = this.row[1];
            this.API = this.row[2];
            this.Chave = this.row[3];
            this.Token = this.row[4];
            this.SandBox = this.row[5];
            this.Email = this.row[6];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Nome = this.Nome;
            this.biencode.API = this.API;
            this.biencode.Chave = this.Chave;
            this.biencode.Token = this.Token;
            this.biencode.SandBox = this.SandBox;
            this.biencode.Email = this.Email;
            this.biencode.biencode.id = this.id;
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