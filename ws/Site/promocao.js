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
        servicos: [],
        pacotes: [],
        arte: 0,
        site: 0,
        servicosBienestar: [{
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
                link: "promocaovideominuto",
                valor: {
                    lote1: 20,
                    lote2: 35,
                    lote3: 50,
                    lote4: 65,
                    lote5: 80,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaogestaosocial",
                valor: {
                    lote1: 160,
                    lote2: 210,
                    lote3: 260,
                    lote4: 330,
                    lote5: 430,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaopostsocial",
                valor: {
                    lote1: 35,
                    lote2: 40,
                    lote3: 45,
                    lote4: 50,
                    lote5: 55,
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
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "promocaosocial",
                valor: {
                  /*  lote1: socialFinal(1),
                    lote2: socialFinal(1),
                    lote3: socialFinal(1),
                    lote4: socialFinal(1),
                    lote5: socialFinal(1), */
                }
            },
        ],
        pacotesBienestar: [
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
        servicos_61fbb5a965ac59817653d77c: [
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "reiki",
                valor: {
                    lote1: 95,
                    lote2: 115,
                    lote3: 135,
                    lote4: 155,
                    lote5: 175,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "fengshui",
                valor: {
                    lote1: 100,
                    lote2: 125,
                    lote3: 150,
                    lote4: 175,
                    lote5: 200,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "cristaloterapia",
                valor: {
                    lote1: 95,
                    lote2: 115,
                    lote3: 135,
                    lote4: 155,
                    lote5: 175,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "aromaterapia",
                valor: {
                    lote1: 95,
                    lote2: 115,
                    lote3: 135,
                    lote4: 155,
                    lote5: 175,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "cromoterapia",
                valor: {
                    lote1: 95,
                    lote2: 115,
                    lote3: 135,
                    lote4: 155,
                    lote5: 175,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "radiestesia",
                valor: {
                    lote1: 95,
                    lote2: 115,
                    lote3: 135,
                    lote4: 155,
                    lote5: 175,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "acupunturaeterica",
                valor: {
                    lote1: 65,
                    lote2: 80,
                    lote3: 95,
                    lote4: 110,
                    lote5: 125,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "auriculoterapiaesfera",
                valor: {
                    lote1: 70,
                    lote2: 90,
                    lote3: 110,
                    lote4: 130,
                    lote5: 150,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "auriculoterapiachoque",
                valor: {
                    lote1: 100,
                    lote2: 120,
                    lote3: 140,
                    lote4: 160,
                    lote5: 180,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "auriculoterapialaser",
                valor: {
                    lote1: 175,
                    lote2: 195,
                    lote3: 215,
                    lote4: 235,
                    lote5: 255,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemfacial",
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
                link: "drenagemfacial",
                valor: {
                    lote1: 80,
                    lote2: 90,
                    lote3: 100,
                    lote4: 110,
                    lote5: 120,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "limpezadepelebasica",
                valor: {
                    lote1: 130,
                    lote2: 145,
                    lote3: 160,
                    lote4: 175,
                    lote5: 190,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "limpezadepeleprofunda",
                valor: {
                    lote1: 180,
                    lote2: 195,
                    lote3: 210,
                    lote4: 225,
                    lote5: 240,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "limpezatoraxcosta",
                valor: {
                    lote1: 190,
                    lote2: 215,
                    lote3: 240,
                    lote4: 265,
                    lote5: 290,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemrelaxante",
                valor: {
                    lote1: 75,
                    lote2: 85,
                    lote3: 95,
                    lote4: 105,
                    lote5: 120,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemrelaxante",
                valor: {
                    lote1: 150,
                    lote2: 165,
                    lote3: 180,
                    lote4: 195,
                    lote5: 210,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemcombambu",
                valor: {
                    lote1: 160,
                    lote2: 175,
                    lote3: 190,
                    lote4: 205,
                    lote5: 220,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "pedrasquentes",
                valor: {
                    lote1: 160,
                    lote2: 175,
                    lote3: 190,
                    lote4: 205,
                    lote5: 220,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemterapeutica",
                valor: {
                    lote1: 170,
                    lote2: 190,
                    lote3: 210,
                    lote4: 230,
                    lote5: 250,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "drenagemlinfatica",
                valor: {
                    lote1: 140,
                    lote2: 155,
                    lote3: 170,
                    lote4: 185,
                    lote5: 200,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemmodeladora",
                valor: {
                    lote1: 160,
                    lote2: 175,
                    lote3: 190,
                    lote4: 205,
                    lote5: 220,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemliporedutora",
                valor: {
                    lote1: 170,
                    lote2: 190,
                    lote3: 210,
                    lote4: 230,
                    lote5: 250,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "massagemdetoxcorporal",
                valor: {
                    lote1: 170,
                    lote2: 190,
                    lote3: 210,
                    lote4: 230,
                    lote5: 250,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "fisioterapia",
                valor: {
                    lote1: 130,
                    lote2: 140,
                    lote3: 150,
                    lote4: 160,
                    lote5: 170,
                }
            },
            {
                icon: "<i class='fas fa-percent'></i>",
                link: "terapiaproalivio",
                valor: {
                    lote1: 150,
                    lote2: 165,
                    lote3: 180,
                    lote4: 195,
                    lote5: 210,
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
        },
        arredonda: function (n) {
            return Math.ceil(n / 10) * 10;
        },
        arte: function (n) {
            this.arte = n;
            return arte;
        },
        site: function (n) {
            this.site = n;
            return n;
        },
        socialFinal: function (q) {

        }
    }
});
