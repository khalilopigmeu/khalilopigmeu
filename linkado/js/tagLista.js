"use strict",
//Tags
app["tagLista"] = new Vue({
    el: '#tagLista',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: "links",
        ELtitle: null,
        pesqTbl: "",
        Host: "Linkado/Tags/",
        paginate: [],
        bars: [],
        pesquisa: "",
        chart: null
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (!nulo(getParameterByName("linkado"))) {
                this.biencode.Linkado = getParameterByName("linkado");
            } else if (!nulo(getParameterByName("lista"))) {
                this.biencode.Linkado = getParameterByName("lista");
            } else {
                this.biencode.Linkado = "";
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.tagLista.Host + "listar";
            var p = post(ws, data);
            app.tagLista.src = eval(decrypt(p));
        },
        dados: function (i) {
            if (!nulo(this.chart)) {
                this.chart.destroy();
                this.bars = [];
            }
            var chartColors = ['rgb(255, 99, 132)',  'rgb(255, 159, 64)',
                'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)',
                'rgb(153, 102, 255)', 'rgb(156,233,123)'];
            var labels = ["visualizacao", "medianalike", "medialike", "medianacoment", "mediacoment", "medianavisu", "mediavisu"];
            var titulos = ["Visualizações", "Mediana de Likes", "Média de Likes", "Mediana de Comentários", "Média de Comentários", "Mediana de Interações", "Média de Interações"];
            var ds = [];
            var itens = app.sys.searchByID(this.src, i)[0];
            for (var j = 0; j <= itens.Dados.length - 1; j++) {
                if (j === 0) {
                    ds[labels[0]] = [];
                    ds[labels[1]] = [];
                    ds[labels[2]] = [];
                    ds[labels[3]] = [];
                    ds[labels[4]] = [];
                    ds[labels[5]] = [];
                    ds[labels[6]] = [];
                }
                var item = JSON.parse(itens.Dados[j]);
                ds[labels[0]][j] = {x: item["data"].split('-').reverse().join('/'), y: item["visualizacao"]};
                ds[labels[1]][j] = {x: item["data"].split('-').reverse().join('/'), y: mediana(item["likes"].split(","))};
                ds[labels[2]][j] = {x: item["data"].split('-').reverse().join('/'), y: media(item["likes"].split(","))};
                ds[labels[3]][j] = {x: item["data"].split('-').reverse().join('/'), y: mediana(item["comentario"].split(","))};
                ds[labels[4]][j] = {x: item["data"].split('-').reverse().join('/'), y: media(item["comentario"].split(","))};
                ds[labels[5]][j] = {x: item["data"].split('-').reverse().join('/'), y: mediana(item["vistas"].split(","))};
                ds[labels[6]][j] = {x: item["data"].split('-').reverse().join('/'), y: media(item["vistas"].split(","))};
            }
            for (var x = 0; x <= labels.length-1; x++) {
                this.bars.push({borderColor: chartColors[x], backgroundColor: chartColors[x],
                    data: ds[labels[x]],
                    label: titulos[x],
                    borderWidth: 1,
                    fill: true});
            }
            var ctx = document.getElementById('dados').getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    datasets: this.bars
                },
                options: {
                    plugins: {
                        customCanvasBackgroundColor: {
                            color: 'white',
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
                        y: {
                            beginAtZero: true
                        }
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Relatório de #Hashtag#'
                    }
                }
            }
            );
        }
    }
});