"use strict",
//Profissional
app["Profissional"] = new Vue({
    el: '#Profissional',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Processos/Profissional/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",

        Descricao: null,
        NomeProfissao: null,
        ValHou: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Profissional.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.NomeProfissao = null;
            this.Descricao = null;
            this.ValHou = null;
        },
        autocomplete: function () {
            this.Descricao = this.row[3];
            this.ValHou = this.row[2];
            this.NomeProfissao = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Descricao = this.Descricao;
            this.biencode.ValHou = this.ValHou;
            this.biencode.NomeProfissao = this.NomeProfissao;
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