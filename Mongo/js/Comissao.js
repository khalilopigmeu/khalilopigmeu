"use strict",
app["Comissao"] = new Vue({
    el: '#Comissao',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-funnel-dollar"></i>',
        pesqTbl: "",
        Host: "Bienestar/Financeiro/Comissao/",

        Nome: null,
        IdFunc: [],
        Funcionariossrc: null,
        Inicio: null,
        Fim: null,
        Referencia: [],
        Percentual: [],
        LancamentoFinanceiroSrc: null,
        Lancamentos: [],
        Total: 0,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Comissao.href, "listar", data);
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Referencia = [];
            this.Percentual = [];
            this.Total = 0;
            this.Inicio = null;
            this.Fim = null;
            this.Nome = null;
        },
        autocomplete: function () {
            this.Referencia = this.row[1];
            this.Percentual = this.row[1];
            this.Total = this.row[1];
            this.Inicio = this.row[1];
            this.Fim = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Descricao = this.Descricao;
            this.biencode.Nome = this.Nome;
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
        },
        adicionar: function () {
            this.Referencia.push(0);
            this.Percentual.push(0);
        },
        remover: function () {
            this.Referencia.pop();
            this.Percentual.pop();
        },
        calcular: function () {
            var step = 0;
            this.Total = 0;
            var flag = false;
            for (var i = 0; i <= this.Lancamentos.length - 1; i++) {
                if (parseInt(this.Referencia[step]) - 1 >= i + j) {
                    var percent = parseFloat(this.Percentual[step]);
                    var valor = parseFloat(Real(app.sys.searchByID(this.LancamentoFinanceiroSrc, this.Lancamentos[i])[0].Valor));
                    this.Total += parseFloat(Real(valor).multiply(percent / 100));
                    flag = true;
                } else {
                    step++;
                    if (step >= this.Referencia.length) {
                        step = this.Referencia.length - 1;
                        this.Referencia[step] = this.Lancamentos.length;
                    }
                    if (flag) {
                        j--;
                        flag = false;
                    }
                }
            }
        },
        salvar: function () {
            app.LancamentoFinanceiro.Documento = "Comissão: " + app.sys.searchByID(this.Funcionariossrc, this.IdFunc)[0].Nome
                    + " - " + dataAtualFormatada();
            app.LancamentoFinanceiro.Pago = true;
            app.LancamentoFinanceiro.Observacao = null;
            app.LancamentoFinanceiro.FormaPagamento = null;
            app.LancamentoFinanceiro.Valor = Real(this.Total);
            app.LancamentoFinanceiro.Modalidade = 2;
            app.LancamentoFinanceiro.checkForm();
            app.LancamentoFinanceiro.cadastrar();
        }
    }
});