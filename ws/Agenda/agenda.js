"use strict";
var calendar;
app.calendar = new Vue({
    el: '#CalendarApp',
    data: {
        irpara: null,
        diaevento: null,
        CategoriaSrc: null,
        AnotacaoSrc: null,
        iniciopesq: null,
        fimpesq: null,
        chart: null,
        eventosSrc: null,
        tempSrc: null,
        tempClass: null,
        grpslc: [],
        data: []
    },
    created: function () {
    },
    methods: {
        betdate: function () {
            $(function () {
                app.Eventos.populate();
                app.calendar.grafico();
            });
        },
        gotodate: function () {
            var data = this.irpara.split("-");
            app.Eventos.calendar.gotoDate(new Date(parseInt(data[0]), parseInt(data[1]) - 1, parseInt(data[2])));
            app.AnotacaoAgenda.populate();
            this.grafico();
        },
        grafico: function () {
          /*  var itens = [];
            this.eventosSrc = this.sorter(this.eventosSrc, "DESC", "start");
            if (this.grpslc.length > 0) {
                this.tempSrc = this.eventosSrc.filter(i => this.grpslc.includes(i.groupId));
                this.tempClass = eval(this.CategoriaSrc).filter(i => this.grpslc.includes(i._id["$oid"]))
                for (var i = 0; i <= this.tempClass.length - 1; i++) {
                    itens = [];
                    for (var j = 0; j <= this.tempSrc.length - 1; j++) {
                        if (this.tempSrc[j].groupId === this.tempClass[i]._id["$oid"]) {
                            itens.push({x: formatadata(app.Eventos.calendar.formatIso(this.tempSrc[j].start)), y: this.random()});
                        }
                    }
                    this.data[i] = {
                        label: this.tempClass[i].NomeCategoria,
                        data: itens,
                        backgroundColor: this.tempClass[i].Cor,
                        Color: this.tempClass[i].Cor,
                        borderWidth: 1
                    };
                }
            } else {
                for (var i = 0; i <= this.CategoriaSrc.length - 1; i++) {
                    itens = [];
                    for (var j = 0; j <= this.eventosSrc.length - 1; j++) {
                        if (this.eventosSrc[j].groupId === this.CategoriaSrc[i]._id["$oid"]) {
                            itens.push({x: formatadata(app.Eventos.calendar.formatIso(this.eventosSrc[j].start)), y: this.random()});
                        }
                    }
                    if (itens.length > 0) {
                        this.data[i] = {
                            label: this.CategoriaSrc[i].NomeCategoria,
                            data: itens,
                            backgroundColor: this.CategoriaSrc[i].Cor,
                            Color: this.CategoriaSrc[i].Cor,
                            borderWidth: 1
                        };
                    }
                }
            }
            var ctx = document.getElementById('myChart').getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: this.data
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });*/
        },
        updateChart: function () {
            /*this.chart.destroy();
            this.grafico();*/
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
        random: function () {
            return parseInt(Math.random() * (100 - 5) + 5);
        },
        sorter: function (arr, model, field) {
            if (arr !== null) {
                if (model === "ASC") {
                    return arr.slice().sort(function (a, b) {
                        return a[field] - b[field];
                    });
                } else {
                    return arr.slice().sort(function (a, b) {
                        return b[field] - a[field];
                    });
                }
            }
        }
    }
});