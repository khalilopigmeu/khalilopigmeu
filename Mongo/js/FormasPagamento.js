"use strict",
//FormasPagamento
app["FormasPagamento"] = new Vue({
    el: '#FormasPagamento',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-list-ol"></i>',
        pesqTbl: "",
        Host: "Bienestar/Financeiro/FormasPagamento/",

        Taxa: null,
        NomeForma: null,
        Descricao: null,
    },
    created: function (e) {
        //this.populate();
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.FormasPagamento.href, "listar", data);
                app.LancamentoFinanceiro.FormaPagamentoSrc = app.FormasPagamento.src;
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.NomeForma = null;
            this.Descricao = null;
            this.Taxa = null;
        },
        autocomplete: function () {
            this.Taxa = this.row[3];
            this.Descricao = this.row[2];
            this.NomeForma = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Taxa = this.Taxa;
            this.biencode.Descricao = this.Descricao;
            this.biencode.NomeForma = this.NomeForma;
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
