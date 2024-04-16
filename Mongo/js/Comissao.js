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
        paginate: [],

        Nome: null,
        Count: [],
        Referencia: [],
        Percentual: [],
        Cor: [],
        Lancamentos: [],
        Lancar: [],
        Total: null,
        Evento: null,
        chart: null,

        LancamentoFinanceiroSrc: null,
        eventos: null,
    },
    methods: {
        populate: function () {
            if (app.sys.system.hasOwnProperty(this.href)) {
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
                app.sys.crud(app.Comissao.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.Referencia = [];
            this.Percentual = [];
            this.Total = 0;
            this.Nome = null;
        },
        autocomplete: function () {
            this.Referencia = eval(this.row[1].split(","));
            this.Count = this.Referencia;
            this.Percentual = eval(this.row[2].split(","));
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Referencia = this.Referencia;
            this.biencode.Percentual = this.Percentual;
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
        adicionar: function () {
            this.Count.push(0);
        },
        remover: function () {
            this.Count.pop();
        },
        calcularGeral: function () {
            this.Total = [];
            var valor = 0;
            for (var i = 0; i <= this.Lancamentos.length - 1; i++) {
                valor += parseFloat(Real(app.sys.searchByID(this.LancamentoFinanceiroSrc, this.Lancamentos[i])[0].Valor));
            }
            for (var i = 0; i <= this.Referencia.length - 1; i++) {
                var percent = parseFloat(this.Percentual[i]);
                this.Total.push(parseFloat(Real(valor).multiply(percent / 100)));
            }
            this.pie();
        },
        calcularProgressivo: function () {
            var step = 0;
            this.Total = 0;
            var flag = false;
            for (var i = 0; i <= this.Lancamentos.length - 1; i++) {
                if (parseInt(this.Referencia[step]) - 1 >= i) {
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
                        flag = false;
                    }
                }
            }
        },
        salvarGeral: function () {
            for (var i = 0; i <= this.Referencia.length - 1; i++) {
                if (this.Lancar[i] === true) {
                    app.LancamentoFinanceiro.Documento = "Comissão: " + this.Nome + " - " + this.Referencia[i];
                    app.LancamentoFinanceiro.Pago = true;
                    app.LancamentoFinanceiro.Status = false;
                    app.LancamentoFinanceiro.Observacao = null;
                    app.LancamentoFinanceiro.FormaPagamento = null;
                    app.LancamentoFinanceiro.Valor = Real(this.Total[i]);
                    app.LancamentoFinanceiro.Modalidade = 2;
                    app.LancamentoFinanceiro.checkForm();
                    app.LancamentoFinanceiro.cadastrar();
                }
            }
        },
        salvarProgressivo: function () {
            app.LancamentoFinanceiro.Documento = "Comissão: " + this.Nome;
            app.LancamentoFinanceiro.Pago = true;
            app.LancamentoFinanceiro.Status = false;
            app.LancamentoFinanceiro.Observacao = null;
            app.LancamentoFinanceiro.FormaPagamento = null;
            app.LancamentoFinanceiro.Valor = Real(this.Total);
            app.LancamentoFinanceiro.Modalidade = 2;
            app.LancamentoFinanceiro.checkForm();
            app.LancamentoFinanceiro.cadastrar();
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
        limit: function () {
            var limit = 0;
            if (this.Referencia.length > 1) {
                for (var i = 0; i <= this.Referencia.length - 2; i++) {
                    limit += parseInt(this.Percentual[i]);
                }
                if (limit >= 100) {
                    this.Percentual[this.Percentual.length - 1] = 0;
                } else {
                    this.Percentual[this.Percentual.length - 1] = 100 - limit;
                }
            }
        },
        pie: function () {
            var ctx = document.getElementById('piechart').getContext('2d');
            const data = {
                labels: this.Referencia,
                datasets: [{
                        label: 'Comissão',
                        data: this.Total,
                        backgroundColor: this.Cor,
                        hoverOffset: 4
                    }]
            };
            if (this.chart !== null) {
                this.chart.destroy();
            }
            this.chart = new Chart(ctx, {
                type: 'pie',
                data: data,
            });
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.LancamentoFinanceiro)) {
                this.LancamentoFinanceiroSrc = [];
            } else {
                this.LancamentoFinanceiroSrc = app.LancamentoFinanceiro.src;
            }
            if (nulo(app.Eventos)) {
                this.eventos = [];
            } else {
                this.eventos = app.Eventos.eventos;
            }

        },
    }
});