"use strict";
app["Carousel"] = new Vue({
    el: '#Carousel',
    created: function () {
        window.localStorage.clear();
    },
    data: {
        banner: [
            {
                id: 5,
                titulo: "O Menestrel - Veronica A. Shoffstall - William Shakespeare",
                mensagem: "\"Depois de algum tempo você descobre que se leva <br> anos para construir confiança e apenas segundos para destruí-la. \"",
                active: "active"
            }, {
                id: 0,
                titulo: "Oscar Wilde",
                mensagem: "\"Cada um dá o que tem no coração, e cada um recebe com o coração que tem.\"",
                active: ""
            },
            {
                id: 6,
                titulo: "O Menestrel - Veronica A. Shoffstall - William Shakespeare",
                mensagem: "\"Depois de algum tempo você aprende que as circunstâncias <br> e os ambientes têm influência sobre nós, mas nós somos responsáveis por nós mesmos.\"",
                active: ""
            },
            {
                id: 1,
                titulo: "Tatiana Vitor",
                mensagem: "\"É preciso muita força para desistir do que já foi seu mundo um dia...<br>E uma coragem maior ainda para buscar o que você merece.\"",
                active: ""
            },
            {
                id: 7,
                titulo: "O Menestrel - Veronica A. Shoffstall - William Shakespeare",
                mensagem: "\"Depois de algum tempo você começa a aprender que não se deve <br> comparar com os outros, mas com o melhor que pode ser.\"",
                active: ""
            },
            {
                id: 2,
                titulo: "O Segredo",
                mensagem: "<b>Conselhos de vida</b>.<br><b>Escute</b>, mas não perca sua voz.<br><b>Dê</b>, mas não permita que te usem.<br><b>Ame</b>, mas não deixe que abusem do seu coração.<br><b>Confie</b>, mas não seja ingênuo.",
                active: ""
            },
            {
                id: 8,
                titulo: "O Menestrel - Veronica A. Shoffstall - William Shakespeare",
                mensagem: "\"Depois de algum tempo você aprende que não importa onde já chegou, mas para onde está indo…<br> Mas, se você não sabe para onde está indo, qualquer caminho serve\"",
                active: ""
            },
            {
                id: 3,
                titulo: "Paulo Coelho",
                mensagem: "Feche algumas portas.<br> Não por orgulho ou arrogância.<br> Mas porque já não levam a lugar nenhum.",
                active: ""
            },
            {
                id: 9,
                titulo: "O Menestrel - Veronica A. Shoffstall - William Shakespeare",
                mensagem: "\"Depois de algum tempo você aprende que maturidade tem mais a ver com os tipos <br> de experiência que se teve e o que você aprendeu com elas do que com quantos aniversários você celebrou.\"",
                active: ""
            },
            {
                id: 4,
                titulo: "Chico Xavier",
                mensagem: "Aos outros, dou o direito de ser como são. <br> A mim, dou o dever de ser cada dia melhor.",
                active: ""
            },
            {
                id: 10,
                titulo: "O Menestrel - Veronica A. Shoffstall - William Shakespeare",
                mensagem: "\"Depois de algum tempo você aprende que realmente a vida tem valor e que você tem valor diante da vida!\"",
                active: ""
            }
        ]
    }
});

app["sobreBien"] = new Vue({
    el: '#sobreBien',
    data: {
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
        ]
    }
});
app["Pricing"] = new Vue({
    el: '#Pricing',
    data: {
        itens: [
            {
                class: "far fa-calendar-alt",
                nome: "Recepção",
                preco: "15,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#1"
            },
            {
                class: "fas fa-hand-holding-usd",
                nome: "Financeiro",
                preco: "20,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#2"
            },
            {
                class: "fas fa-users",
                nome: "Administrativo",
                preco: "15,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#3"
            },
            {
                class: "fas fa-warehouse",
                nome: "Estoque",
                preco: "20,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#4"
            },
            {
                class: "fas fa-tags",
                nome: "E-tag",
                preco: "20,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#5"
            },
            {
                class: "fas fa-mobile-alt",
                nome: "Dispositivos",
                preco: "10,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#5"
            },
            {
                class: "fas fa-project-diagram",
                nome: "Processos",
                preco: "20,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#5"
            }
        ]
    }
});
app["ClientPricing"] = new Vue({
    el: '#ClientPricing',
    data: {
        itens: [
            {
                class: "far fa-handshake",
                nome: "Gratuito",
                preco: "00,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#1"
            },
            {
                class: "fas fa-hand-holding-usd",
                nome: "Básico",
                preco: "15,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#2"
            },
            {
                class: "fas fa-medal",
                nome: "Intermediário",
                preco: "35,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#3"
            },
            {
                class: "fas fa-trophy",
                nome: "Plus",
                preco: "55,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#4"
            },
            {
                class: "far fa-gem",
                nome: "Vip",
                preco: "70,00",
                pros: ["teste pro", "teste pro2"],
                contras: [],
                link: "#5"
            }
        ]
    }
});
