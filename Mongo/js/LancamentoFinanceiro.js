"use strict",
//LancamentoFinanceiro
app["LancamentoFinanceiro"] = new Vue({
    el: '#LancamentoFinanceiro',
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
        Host: "Bienestar/Financeiro/Lancamento/",

        Modalidade: null,
        Documento: null,
        Pago: null,
        Valor: null,
        FormaPagamento: null,
        FormaPagamentoSrc: null,
        Observacao: null,
        PedidodeVendaSrc: null,
        FichaAtendimentoSrc: null,
        PedidoVenda: [],
        FichaAtendimento: [],
        importar: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.LancamentoFinanceiro.href, "listar", data);
                app.Eventos.LancamentoFinanceiroSrc = app.LancamentoFinanceiro.src;
                app.calendar.LancamentoFinanceiroSrc = app.LancamentoFinanceiro.src;
            });
            app.sys.tabs(this.href);
            app.SocialMedia.mascara();
        },
        clear: function () {
            this.Modalidade = null;
            this.Documento = null;
            this.Pago = null;
            this.Valor = null;
            this.FormaPagamento = null;
            this.Observacao = null;
        },
        autocomplete: function () {
            this.Observacao = this.row[6];
            this.FormaPagamento = this.row[5];
            this.Valor = this.row[4];
            this.Pago = this.row[3];
            this.Documento = this.row[2];
            this.Modalidade = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Documento = this.Documento;
            this.biencode.Pago = this.Pago;
            this.biencode.Observacao = this.Observacao;
            this.biencode.FormaPagamento = this.FormaPagamento;
            this.biencode.Valor = this.Valor;
            this.biencode.Modalidade = this.Modalidade;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            app.sys.crud(this.href, "add", null);
            this.updateStatus();
        },
        alterar: function () {
            app.sys.crud(this.href, "edt", null);
            this.updateStatus();
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
        },
        calcPreco: function () {
            var value = 0;
            if (this.importar == "ficha") {
                for (var j = 0; j <= this.FichaAtendimento.length - 1; j++) {
                    for (var i = 0; i <= this.FichaAtendimentoSrc.length - 1; i++) {
                        if (this.FichaAtendimentoSrc[i]._id.$oid === this.FichaAtendimento[j]) {
                            value = Real(value).add(this.FichaAtendimentoSrc[i].Valor);
                        }
                    }
                }
            }
            if (this.importar == "pedido") {
                for (var j = 0; j <= this.PedidoVenda.length - 1; j++) {
                    for (var i = 0; i <= this.PedidodeVendaSrc.length - 1; i++) {
                        if (this.PedidodeVendaSrc[i]._id.$oid === this.PedidoVenda[j]) {
                            value = Real(value).add(this.PedidodeVendaSrc[i].ValorTotal);
                        }
                    }
                }
            }
            this.Valor = Real(value).format();
        },
        updateStatus: function () {
            if (this.importar == "ficha") {
                for (var i = 0; i <= this.FichaAtendimento.length - 1; i++) {
                    app.erros.errors = {};
                    app.FichaAtendimento.biencode = {};
                    app.FichaAtendimento.biencode.id = this.FichaAtendimento[i];
                    app.FichaAtendimento.biencode.Status = true;
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(app.FichaAtendimento.biencode))
                    };
                    app.FichaAtendimento.alt();
                    app.sys.crud(app.FichaAtendimento.href, "edt", data);
                }
            }
            if (this.importar == "pedido") {
                for (var i = 0; i <= this.PedidoVenda.length - 1; i++) {
                    app.erros.errors = {};
                    app.PedidoVenda.biencode = {};
                    app.PedidoVenda.biencode.id = this.PedidoVenda[i];
                    app.PedidoVenda.biencode.Status = true;
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(app.PedidoVenda.biencode))
                    };
                    app.PedidoVenda.alt();
                    app.sys.crud(app.PedidoVenda.href, "edt", data);
                }
            }
        },
    }
});