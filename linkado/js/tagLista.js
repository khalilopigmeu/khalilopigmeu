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
        pesquisa:"",
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
            if(!nulo(this.chart)){
                this.chart.destroy();
                this.bars = [];
            }
            var chartColors = ['rgb(255, 99, 132)', 'rgb(255, 99, 132)', 'rgb(255, 159, 64)',
                'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)',
                'rgb(153, 102, 255)', 'rgb(231,233,237)'];
            var labels = Object.keys(JSON.parse(this.src[i].Dados[0]));
            var titulos = ["Data", "Visualizações", "Mediana de Likes", "Média de Likes", "Mediana de Comentários", "Média de Comentários", "Mediana de Interações", "Média de Interações"];
            var ds = [];
            for (var j = 0; j <= this.src[i].Dados.length - 1; j++) {
                for (var z = 1; z <= labels.length - 1; z++) {
                    if (j === 0) {
                        ds[labels[z]] = [];
                    }
                    var item = JSON.parse(this.src[i].Dados[j])[labels[z]];
                    if (nulo(item)) {
                        item = 0;
                    }
                    ds[labels[z]][j] = {x:JSON.parse(this.src[i].Dados[j])[labels[0]].split('-').reverse().join('/'),y: parseFloat(item)};
                }
            }
            for (var x = 1; x <= labels.length - 1; x++) {
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