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
        paginate: [],

        Modalidade: null,
        Documento: null,
        Pago: null,
        Valor: null,
        FormaPagamento: null,
        Observacao: null,
        PedidoVenda: [],
        FichaAtendimento: [],
        importar: null,
        Status: null,
        eventos: null,
        Evento: null,
        flag: false,

        FormaPagamentoSrc: null,
        PedidodeVendaSrc: null,
        FichaAtendimentoSrc: null,
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
            app.sys.crud(app.LancamentoFinanceiro.href, "listar", data);
            app.sys.tabs(this.href);
            app.sys.mascara();
        },
        clear: function () {
            this.Modalidade = null;
            this.Documento = null;
            this.Pago = null;
            this.Valor = null;
            this.FormaPagamento = null;
            this.Observacao = null;
            this.Status = null;
        },
        autocomplete: function () {
            this.Status = parseBoolean(this.row[7]);
            this.Observacao = this.row[6];
            this.FormaPagamento = this.row[5];
            this.Valor = this.row[4];
            this.Pago = parseBoolean(this.row[3]);
            this.Documento = this.row[2];
            this.Modalidade = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Documento = this.Documento;
            this.biencode.Pago = this.Pago;
            this.biencode.Observacao = this.Observacao;
            this.biencode.FormaPagamento = this.FormaPagamento;
            this.biencode.Valor = this.Valor;
            this.biencode.Modalidade = this.Modalidade;
            if (this.Evento !== null) {
                this.biencode.Status = this.Status;
            } else {
                this.biencode.Status = true;
            }
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            this.updateStatus();
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            this.updateStatus();
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
        calcPreco: function () {
            var value = 0;
            if (this.importar === "ficha") {
                for (var j = 0; j <= this.FichaAtendimento.length - 1; j++) {
                    for (var i = 0; i <= this.FichaAtendimentoSrc.length - 1; i++) {
                        if (this.FichaAtendimentoSrc[i]._id.$oid === this.FichaAtendimento[j]) {
                            value = Real(value).add(this.FichaAtendimentoSrc[i].Valor);
                        }
                    }
                }
            }
            if (this.importar === "pedido") {
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
            if (this.importar === "ficha") {
                for (var i = 0; i <= this.FichaAtendimento.length - 1; i++) {
                    app.erros.errors = {};
                    app.FichaAtendimento.biencode = {};
                    captchaSys(app.sys.keysite);
                    app.FichaAtendimento.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                    app.FichaAtendimento.biencode.id = this.FichaAtendimento[i];
                    app.FichaAtendimento.biencode.Status = true;
                    var data = {
                        "biencode": encrypt(JSON.stringify(app.FichaAtendimento.biencode))
                    };
                    app.FichaAtendimento.alt();
                    app.sys.crud(app.FichaAtendimento.href, "edt", data);
                }
            }
            if (this.importar === "pedido") {
                for (var i = 0; i <= this.PedidoVenda.length - 1; i++) {
                    app.erros.errors = {};
                    app.PedidoVenda.biencode = {};
                    captchaSys(app.sys.keysite);
                    app.PedidoVenda.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                    app.PedidoVenda.biencode.id = this.PedidoVenda[i];
                    app.PedidoVenda.biencode.Status = true;
                    var data = {
                        "biencode": encrypt(JSON.stringify(app.PedidoVenda.biencode))
                    };
                    app.PedidoVenda.alt();
                    app.sys.crud(app.PedidoVenda.href, "edt", data);
                }
            }
        },
        updateEventos: function (op) {
            var el;
            if (op) {
                el = app.sys.searchByID(this.eventos, window.localStorage.getItem("evento"));
                if (el.extendedProps.FichaAtendimento.isArray()) {
                    el.extendedProps.FichaAtendimento.push(this.src[this.src.length - 1]._id['$oid']);
                } else {
                    el.extendedProps.FichaAtendimento = [this.src[this.src.length - 1]._id['$oid']];
                }
            } else {
                el = app.sys.searchByID(this.eventos, this.Evento);
                if (el.extendedProps.FichaAtendimento.isArray()) {
                    el.extendedProps.FichaAtendimento.push(this.id);
                } else {
                    el.extendedProps.FichaAtendimento = [this.id];
                }
            }
            app.Eventos.atualizaEx(el);
            app.Eventos.alterar();
            window.localStorage.removeItem("evento");
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.FormasPagamento)) {
                this.FormaPagamentoSrc = [];
            } else {
                this.FormaPagamentoSrc = app.FormasPagamento.src;
            }
            if (nulo(app.PedidoVenda)) {
                this.PedidodeVendaSrc = [];
            } else {
                this.PedidodeVendaSrc = app.PedidoVenda.src;
            }
            if (nulo(app.FichaAtendimento)) {
                this.FichaAtendimentoSrc = [];
            } else {
                this.FichaAtendimentoSrc = app.FichaAtendimento.src;
            }

        },
    }
});