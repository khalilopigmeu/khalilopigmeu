"use strict",
//AnotacaoAgenda
app["AnotacaoAgenda"] = new Vue({
    el: '#AnotacaoAgenda',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-edit"></i>',
        pesqTbl: "",
        Host: "Bienestar/Agenda/Anotacoes/",

        CategoriaSrc: null,
        Anotacao: null,
        datapesq: new Date().toISOString().slice(0, 10),
        Titulo: null,
        Data: null,
        IdCategoriaEvento: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                this.biencode.data = app.AnotacaoAgenda.datapesq;
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.AnotacaoAgenda.href, "listar", data);
                app.calendar.AnotacaoSrc = app.AnotacaoAgenda.src;
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Anotacao = null;
            this.Titulo = null;
            this.Data = null;
            this.IdCategoriaEvento = null;
            this.id = null;
        },
        autocomplete: function () {
            this.Anotacao = this.row[3];
            this.Titulo = this.row[2];
            this.Data = this.row[4];
            this.IdCategoriaEvento = app.sys.foreignKeyRestore(this.CategoriaSrc, "NomeCategoria", this.row[1]);
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Anotacao = this.Anotacao;
            this.biencode.Titulo = this.Titulo;
            this.biencode.Data = this.Data;
            this.biencode.IdCategoriaEvento = this.IdCategoriaEvento;
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
