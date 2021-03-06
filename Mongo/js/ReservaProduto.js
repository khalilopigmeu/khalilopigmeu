"use strict",
//ReservaProduto
app["ReservaProduto"] = new Vue({
    el: '#ReservaProduto',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-cash-register"></i>',
        pesqTbl: "",
        Host: "Bienestar/Produto/Reserva",

        Lista: null,
        PedidoVenda: null,
        OrdemProducao: null,
        OrdemServico: null,
        Validade: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.ReservaProduto.href, "listar", data);
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Lista = null;
            this.PedidoVenda = null;
            this.OrdemProducao = null;
            this.OrdemServico = null;
            this.Validade = null;
        },
        autocomplete: function () {
            this.Lista = this.row[1];
            this.PedidoVenda = this.row[2];
            this.OrdemProducao = this.row[3];
            this.OrdemServico = this.row[4];
            this.Validade = this.row[5];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Lista = this.Lista;
            this.biencode.PedidoVenda = this.PedidoVenda;
            this.biencode.OrdemProducao = this.OrdemProducao;
            this.biencode.OrdemServico = this.OrdemServico;
            this.biencode.Validade = this.Validade;
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