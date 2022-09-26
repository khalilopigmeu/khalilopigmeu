"use strict";
app["Home"] = new Vue({
    el: '#Home',
    data: {
        date1: new Date("03/07/2022"),
        date2: new Date(),
        diferenca: null,
        anunciantes: 0,
        portfolio: 0,
        cupons: 0,
        banner: null,
        itens: [
            {
                boxclass: "py-2 my-2 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4",
                class: "far fa-heart",
                nome: "Base",
                texto: "A nossa base é o amor por proporcionar sempre o bem estar, tendo isso como base, podemos buscar o melhor ao próximo, sem lesar, ganhar vantagens, e tomar atalhos.",
            },
            {
                boxclass: "py-2 my-2 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4",
                class: "fas fa-dna",
                nome: "Essência",
                texto: "O principio da empatia, se colocar no lugar do próximo."
            },
            {
                boxclass: "py-2 my-2 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4",
                class: "fas fa-handshake",
                nome: "Gestão",
                texto: "Conectar pessoas com interesses em comum."
            },
            {
                boxclass: "py-2 my-2 col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3",
                class: "fas fa-bullhorn",
                nome: "Comunicação",
                texto: "Demonstre suas qualidades, não deixe duvidas sobre os trabalhos que fazem, não permita que tirem conclusões precipitadas."
            },
            {
                boxclass: "py-2 my-2 col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3",
                class: "fas fa-cogs",
                nome: "Reinventar-se",
                texto: "Esteja sempre em busca de aprimoramento."
            },
            {
                boxclass: "py-2 my-2 col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3",
                class: "fas fa-balance-scale",
                nome: "Gerenciamento de conflitos",
                texto: "Saber lidar com divergência de opiniões."
            },
            {
                boxclass: "py-2 my-2 col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3",
                class: "fas fa-hourglass-half",
                nome: "Ciclo",
                texto: "Estar de acordo com o tempo, como saber se adequar ao mesmo"
            }
        ],
    },
    created: function () {

    },
    methods: {
        diasnoar: function () {
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.configuracaosite.buscar();
            app.empresasanunciando.buscar();
            app.anunciante.buscar();

            var Difference_In_Time = this.date2.getTime() - this.date1.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            this.diferenca = Math.round(Difference_In_Days);
        },
        load: function(){
        /*    if (app.anunciante.src !== null) {
                app.Home.anunciantes = app.anunciante.src.length;
            } else {
                app.Home.anunciantes = 0;
            }*/
        },
        update: function () {
            this.banner = [
                {
                    id: 0,
                    mensagem: "Data de lançamento - 07/03/2022",
                    active: "active"
                },
                {
                    id: 1,
                    mensagem: "Sua plataforma de anúncios à " + this.diferenca + " dias divulgando você",
                    active: ""
                },
                {
                    id: 2,
                    mensagem: "<a href=\"#anunciante\">Anunciantes - " + this.anunciantes + " <br><br> Ver mais <i class=\"fas fa-bullhorn\"></i></a>",
                    active: ""
                },
                {
                    id: 3,
                    mensagem: "<a href=\"#portfolio\">Projetos - " + this.portfolio + " <br><br> Ver mais <i class=\"far fa-handshake\"></i></a>",
                    active: ""
                },
                {
                    id: 4,
                    mensagem: "<a href=\"#vouchers\">Cupons - " + this.cupons + " <br><br> Ver mais <i class=\"fas fa-ticket-alt\"></i></a>",
                    active: ""
                },
            ];
        }
    }
});

  