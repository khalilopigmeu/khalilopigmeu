"use strict";
app["Promocao"] = new Vue({
    el: '#Promocao',
    data: {
        paginasSrc: [],
        modalidadeServico: "1",
        mensal: 0,
        trimestre: 0.10,
        semestre: 0.15,
        anual: 0.2,
        max: 4,
        min: 0,
        servicosGraficos: [
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaologonovo",
                valor: {
                    lote1: 90,
                    lote2: 100,
                    lote3: 120,
                    lote4: 150,
                    lote5: 180,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaologoalteracao",
                valor: {
                    lote1: 45,
                    lote2: 55,
                    lote3: 70,
                    lote4: 90,
                    lote5: 100,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaoanimado",
                valor: {
                    lote1: 135,
                    lote2: 155,
                    lote3: 190,
                    lote4: 240,
                    lote5: 280,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaovideo",
                valor: {
                    lote1: 180,
                    lote2: 200,
                    lote3: 240,
                    lote4: 300,
                    lote5: 360,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaopanfleto",
                valor: {
                    lote1: 60,
                    lote2: 70,
                    lote3: 90,
                    lote4: 110,
                    lote5: 135,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaobanners",
                valor: {
                    lote1: 60,
                    lote2: 70,
                    lote3: 90,
                    lote4: 110,
                    lote5: 135,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaocartoes",
                valor: {
                    lote1: 60,
                    lote2: 70,
                    lote3: 90,
                    lote4: 110,
                    lote5: 135,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaotimbrados",
                valor: {
                    lote1: 60,
                    lote2: 70,
                    lote3: 90,
                    lote4: 110,
                    lote5: 135,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocionaisdiversos",
                valor: {
                    lote1: 60,
                    lote2: 70,
                    lote3: 90,
                    lote4: 110,
                    lote5: 135,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaoimpressoes",
                valor: {
                    lote1: 0,
                    lote2: 0,
                    lote3: 0,
                    lote4: 0,
                    lote5: 0,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaosite",
                valor: {
                    lote1: 1300,
                    lote2: 1450,
                    lote3: 1600,
                    lote4: 1800,
                    lote5: 2000,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaoapp",
                valor: {
                    lote1: 1800,
                    lote2: 2000,
                    lote3: 2300,
                    lote4: 2500,
                    lote5: 2800,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaoloja",
                valor: {
                    lote1: 2800,
                    lote2: 3200,
                    lote3: 3600,
                    lote4: 4000,
                    lote5: 4500,
                }
            }, ],
        servicosSistema: [
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaodirecionado",
                valor: {
                    lote1: 25,
                    lote2: 30,
                    lote3: 40,
                    lote4: 50,
                    lote5: 60,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaopaginaanuncio",
                valor: {
                    lote1: 40,
                    lote2: 45,
                    lote3: 55,
                    lote4: 65,
                    lote5: 80,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaocatalogodeprodutos",
                valor: {
                    lote1: 70,
                    lote2: 80,
                    lote3: 90,
                    lote4: 100,
                    lote5: 110,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaoagenda",
                valor: {
                    lote1: 60,
                    lote2: 70,
                    lote3: 80,
                    lote4: 90,
                    lote5: 100,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaoestoque",
                valor: {
                    lote1: 70,
                    lote2: 80,
                    lote3: 90,
                    lote4: 100,
                    lote5: 110,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaofinanceiro",
                valor: {
                    lote1: 30,
                    lote2: 40,
                    lote3: 50,
                    lote4: 60,
                    lote5: 70,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaopdv",
                valor: {
                    lote1: 30,
                    lote2: 45,
                    lote3: 55,
                    lote4: 65,
                    lote5: 80,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaoadmsite",
                valor: {
                    lote1: 75,
                    lote2: 85,
                    lote3: 100,
                    lote4: 120,
                    lote5: 150,
                }
            },
        ],
    },
    created: function () {
    },
    methods: {
        atualizaPreco: function (preco) {
            switch (this.modalidadeServico) {
                case "1":
                    return preco;
                case "2":
                    var total = (preco * 3);
                    return total - (total * parseFloat(this.mensal));
                case "3":
                    var total = (preco * 6);
                    return total - (total * parseFloat(this.trimestre));
                case "4":
                    var total = (preco * 12);
                    return total - (total * parseFloat(this.anual));
                default :
                    return preco;
            }
        },
        conteudo: function (link) {
            var search = app.sys.search(this.paginasSrc, link, "UrlPage");
            if (search.length > 0) {
                return search[0].ContentPage;
            } else {
                return "-";
            }
        },
        titulo: function (link) {
            var search = app.sys.search(this.paginasSrc, link, "UrlPage");
            if (search.length > 0) {
                return search[0].Titulo;
            } else {
                return "-";
            }
        }
    }
});
