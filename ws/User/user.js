"use strict";
var calendar;
app.usercalendar = new Vue({
    el: '#UserApp',
    data: {
        irpara: null,
        diaevento: null,
        iniciopesq: null,
        fimpesq: null,
        chart: null,
        tempSrc: null,
        tempClass: null,
        grpslc: [],
        data: [],
        progress: 0,
        totalentradas: 0,
        totalsaidas: 0,
        restante: 0,
        itens: [],
        itensentradas: [],
        itenssaidas: [],
        itenstotal: [],
        tabela: [],

        CategoriaSrc: null,
        AnotacaoSrc: null,
        eventosSrc: null,
        LancamentoFinanceiroSrc: null,
    },
    methods: {
        betdate: function () {
            app.Eventos.populate();
            app.calendar.grafico();
        },
        gotodate: function () {
            var data = this.irpara.split("-");
            app.Eventos.calendar.gotoDate(new Date(parseInt(data[0]), parseInt(data[1]) - 1, parseInt(data[2])));
            app.AnotacaoAgenda.populate();
            this.grafico();
        },
        grafico: function () {
            this.data = [];
            this.totalentradas = 0;
            this.totalsaidas = 0;
            this.restante = 0;
            this.itensentradas = [];
            this.itenssaidas = [];
            this.itenstotal = [];
            this.itens = [];
            this.tabela = [];
            this.eventosSrc = app.sys.sorter(this.eventosSrc, "DESC", "start");
            for (var j = 0; j <= this.eventosSrc.length - 1; j++) {
                var fin = this.eventosSrc[j].extendedProps.LancamentoFinanceiro;
                if (typeof fin !== "undefined") {
                    if (fin !== null) {
                        var grupo = this.eventosSrc[j].groupId;
                        if (Array.isArray(fin)) {
                            var preco = 0;
                            var modalidade = 0;
                            for (var lancamento = 0; lancamento <= fin.length - 1; lancamento++) {
                                var item = app.sys.searchByID(this.LancamentoFinanceiroSrc, fin[lancamento])[0];
                                //this.pushItem(item, this.eventosSrc, j, grupo);
                                var p = replaceAll("R$", "", item.Valor);
                                p = replaceAll(",", ".", p);
                                preco += Real(p).value;
                                modalidade = item.Modalidade;
                            }
                            var dia = DataISO(formatadata(app.Eventos.calendar.formatIso(this.eventosSrc[j].start)));
                            this.pushItemManual(dia, preco, modalidade, grupo, this.eventosSrc[j].title);
                        } else {
                            var item = app.sys.searchByID(this.LancamentoFinanceiroSrc, fin)[0];
                            this.pushItem(item, this.eventosSrc, j, grupo);
                        }
                    }
                }
            }
            if (this.grpslc.length > 0) {
                this.tempClass = eval(this.CategoriaSrc).filter(i => this.grpslc.includes(i._id["$oid"]))
            } else {
                this.tempClass = this.CategoriaSrc;
            }
            for (var i = 0; i <= this.tempClass.length - 1; i++) {
                this.data.push({
                    label: this.CategoriaSrc[i].NomeCategoria,
                    data: this.itens[this.CategoriaSrc[i]._id.$oid],
                    backgroundColor: this.CategoriaSrc[i].Cor,
                    borderColor: this.CategoriaSrc[i].Cor,
                    borderWidth: 1
                });
            }
            this.pushTotalMedias(null);
            this.pushTotal();
            var ctx = document.getElementById('Grafico').getContext('2d');
            if (app.calendar.chart !== null) {
                app.calendar.chart.destroy();
            }
            const decimation = {
                enabled: false,
                algorithm: 'min-max',
            };
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: this.data
                },
                options: {
                    responsive: true,
                    stacked: false,
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    },
                    plugins: {
                        decimation: decimation,
                        title: {
                            display: true,
                            text: 'Relatório Financeiro'
                        },
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'xy',
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'month',
                            },
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: {
                                drawOnChartArea: false,
                            },
                        },
                    }
                }
            });
        },
        pushItemManual: function (data, preco, modalidade, grupo, nome) {
            var dia = data;
            var valor = Real(preco).value;
            if (DataMenor(formatadata(dia), dataAtualFormatada())) {
                if (modalidade === "1") {
                    if (typeof this.itens[grupo] === "undefined") {
                        this.itens[grupo] = [];
                    }
                    this.itens[grupo].push({
                        x: dia,
                        y: valor
                    });
                    this.pushReferencia(dia, valor, modalidade);
                    this.tabela.push({
                        data: dia,
                        nome: nome,
                        entrada: valor,
                        saida: 0,
                        total: this.restante
                    });
                } else {
                    valor = (Real(valor).value) * -1;
                    if (typeof this.itens[grupo] === "undefined") {
                        this.itens[grupo] = []
                    }
                    this.itens[grupo].push({
                        x: dia,
                        y: valor
                    });
                    this.pushReferencia(dia, valor, modalidade);
                    this.tabela.push({
                        data: dia,
                        nome: nome,
                        entrada: 0,
                        saida: valor,
                        total: this.restante
                    });
                }
            }
        },
        pushItem: function (item, src, j, grupo) {
            if (src !== null) {
                if (src[j] !== null) {
                    var dia = DataISO(formatadata(app.Eventos.calendar.formatIso(src[j].start)));
                    if (DataMenor(formatadata(dia), dataAtualFormatada())) {
                        var p = replaceAll("R$", "", item.Valor);
                        p = replaceAll(",", ".", p);
                        var valor = Real(p).value;
                        if (item.Modalidade === "1") {
                            if (typeof this.itens[grupo] === "undefined") {
                                this.itens[grupo] = [];
                            }
                            this.itens[grupo].push({
                                x: dia,
                                y: valor
                            });
                            this.pushReferencia(dia, valor, item.Modalidade);
                            this.tabela.push({
                                data: dia,
                                nome: item.Documento,
                                entrada: valor,
                                saida: 0,
                                total: this.restante
                            });
                        } else {
                            valor = (Real(valor).value) * -1;
                            if (typeof this.itens[grupo] === "undefined") {
                                this.itens[grupo] = []
                            }
                            this.itens[grupo].push({
                                x: dia,
                                y: valor
                            });
                            this.pushReferencia(dia, valor, item.Modalidade);
                            this.tabela.push({
                                data: dia,
                                nome: item.Documento,
                                entrada: 0,
                                saida: valor,
                                total: this.restante
                            });
                        }
                    }
                }
            }
        },
        pushReferencia: function (dia, valor, modalidade) {
            var referencia = DataISO(getDataAtual());
            if (dia !== null) {
                referencia = dia;
            }
            if (modalidade == "1") {
                this.itensentradas.push({
                    x: referencia,
                    y: Real(valor).value
                });
                this.totalentradas += Real(valor).value;
            } else {
                this.itenssaidas.push({
                    x: referencia,
                    y: Real(valor).value
                });
                this.totalsaidas += Real(valor).value;
            }
            this.pushTotalMedias(dia);
        },
        pushTotalMedias: function (dia) {
            var referencia = DataISO(getDataAtual());
            if (dia !== null) {
                referencia = dia;
            }
            this.restante = Real(this.totalentradas).value + Real(this.totalsaidas).value;
            this.itenstotal.push({
                x: referencia,
                y: Real(this.restante).value
            });
        },
        pushTotal: function () {
            if (this.data.length > 0) {
                this.data.push({
                    label: "TOTAL - Entradas",
                    data: this.itensentradas,
                    backgroundColor: "#10ff00",
                    borderColor: "#10ff00",
                    borderWidth: 1
                });
                this.data.push({
                    label: "TOTAL - Saídas",
                    data: this.itenssaidas,
                    backgroundColor: "#ff0000",
                    borderColor: "#ff0000",
                    borderWidth: 1
                });
                this.data.push({
                    label: "TOTAL - Restante",
                    data: this.itenstotal,
                    backgroundColor: "#FF8000",
                    borderColor: "#FF8000",
                    borderWidth: 1
                });
                this.tabela.push({
                    data: DataISO(dataAtualFormatada()),
                    nome: "Total",
                    entrada: this.totalentradas,
                    saida: this.totalsaidas,
                    total: this.restante
                });
            }
        },
        updateChart: function () {
            this.chart.destroy();
            this.grafico();
        },
        updateFC: function () {
            if (this.grpslc !== null) {
                if (this.grpslc.length > 0) {
                    this.tempSrc = this.eventosSrc.filter(i => this.grpslc.includes(i.groupId));
                    app.Eventos.calendar.destroy();
                    app.Eventos.calendar = instanceCalendar("calendarTabContent", JSON.stringify(this.tempSrc), "#Eventos");
                    this.updateChart();
                } else {
                    app.Eventos.calendar.destroy();
                    app.Eventos.calendar = instanceCalendar("calendarTabContent", JSON.stringify(this.eventosSrc), "#Eventos");
                    this.updateChart();
                }
            } else {
                app.Eventos.calendar.destroy();
                app.Eventos.calendar = instanceCalendar("calendarTabContent", JSON.stringify(this.eventosSrc), "#Eventos");
                this.updateChart();
            }
        },
        load: function () {
            if (nulo(app.CategoriaEventos)) {
                this.CategoriaSrc = [];
            } else {
                this.CategoriaSrc = app.CategoriaEventos.src;
            }
            if (nulo(app.AnotacaoAgenda)) {
                this.AnotacaoSrc = [];
            } else {
                this.AnotacaoSrc = app.AnotacaoAgenda.src;
            }
            if (nulo(app.Eventos)) {
                this.eventosSrc = [];
            } else {
                this.eventosSrc = app.Eventos.src;
                app.calendar.eventosSrc = eval(app.Eventos.eventos);
                if (app.Eventos.calendar !== null) {
                    app.Eventos.calendar.destroy();
                }
                app.Eventos.calendar = instanceCalendar("calendarTabContent", app.Eventos.eventos, "#Eventos");
                app.calendar.diaevento = formatadata(app.Eventos.calendar.formatIso(app.Eventos.calendar.getDate()));
            }
            if (nulo(app.LancamentoFinanceiro)) {
                this.LancamentoFinanceiroSrc = [];
            } else {
                this.LancamentoFinanceiroSrc = app.LancamentoFinanceiro.src;
            }
        },
    }
});