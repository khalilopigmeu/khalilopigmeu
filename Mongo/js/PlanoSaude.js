"use strict",
//PlanoSaude
app["PlanoSaude"] = new Vue({
    el: '#PlanoSaude',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Gestao/PlanoSaude/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",

        Tipo: null,
        CNPJ: null,
        Nome: null,
        Descricao: null,
        Valor: null,
    },
    methods: {
        populate: function (e) {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            this.biencode.data = app.AnotacaoAgenda.datapesq;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.PlanoSaude.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Tipo = null;
            this.CNPJ = null;
            this.Nome = null;
            this.Descricao = null;
            this.Valor = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Tipo = this.row[2];
            this.CNPJ = this.row[1];
            this.Nome = this.row[4];
            this.Descricao = this.row[5];
            this.Valor = this.row[4];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Tipo = this.Tipo;
            this.biencode.CNPJ = this.CNPJ;
            this.biencode.Nome = this.Nome;
            this.biencode.Descricao = this.Descricao;
            this.biencode.Valor = this.Valor;
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
    }
});