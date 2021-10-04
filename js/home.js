"use strict";
app["Home"] = new Vue({
    el: '#Home',
    created: function () {

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
        ],
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
        itensPricing: [
            {
                icon: "far fa-map",
                nome: "Mensal",
                preco: "55,00",
                pros: [],
                contras: [],
                link: "https://wa.me/5511940007917?text=Pagina-Mensal",
                prazo: "Mês"
            },
            {
                icon: "far fa-map",
                nome: "Trimestral",
                preco: "159,50",
                pros: ["5% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=Pagina-Trimestral",
                prazo: "Trimestre"
            },
            {
                icon: "far fa-map",
                nome: "Semestral",
                preco: "321,75",
                pros: ["10% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=Pagina-Semestral",
                prazo: "Semestre"
            },
            {
                icon: "far fa-map",
                nome: "Anual",
                preco: "649,00",
                pros: ["15% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=Pagina-Anual",
                prazo: "Anual"
            },
            {
                icon: "fas fa-bullhorn",
                nome: "Mensal",
                preco: "40,00",
                pros: [],
                contras: [],
                link: "https://wa.me/5511940007917?text=Anuncio-mensal",
                prazo: "Mês"
            },
            {
                icon: "fas fa-bullhorn",
                nome: "Trimestral",
                preco: "116,00",
                pros: ["5% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=Anuncio-Trimestral",
                prazo: "Trimestre"
            },
            {
                icon: "fas fa-bullhorn",
                nome: "Semestral",
                preco: "234,00",
                pros: ["10% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=Anuncio-Semestral",
                prazo: "Semestre"
            },
            {
                icon: "fas fa-bullhorn",
                nome: "Anual",
                preco: "472,00",
                pros: ["15% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=Anuncio-Anual",
                prazo: "Anual"
            }/*,
            {
                icon: "",
                nome: "Mensal",
                preco: "",
                pros: [],
                contras: [],
                link: "https://wa.me/5511940007917?text=",
                prazo: "Mês"
            },
            {
                icon: "",
                nome: "Trimestral",
                preco: "",
                pros: ["5% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=",
                prazo: "Trimestre"
            },
            {
                icon: "",
                nome: "Semestral",
                preco: "",
                pros: ["10% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=",
                prazo: "Semestre"
            },
            {
                icon: "",
                nome: "Anual",
                preco: "",
                pros: ["15% de desconto"],
                contras: [],
                link: "https://wa.me/5511940007917?text=",
                prazo: "Anual"
            },*/
        ],
    },
    created: function () {
        this.seo();
    },
    methods: {
        seo: function () {
            var preauth = getAuth();
            setAuth("encodedstring");
            var auth = $(window).Decrypt(app.sys.bien);
            setAuth(auth);
            this.biencode = {};
            this.biencode.empresa = app.sys.refid;
            this.biencode.urlpage = window.location.href;
            var ws = "/Bienestar/Seo/SEO/site";
            var p = (post(ws, data));
            var rs = $(window).Decrypt(p);
            document.getElementsByTagName("head").appendChild(rs);
            setAuth(preauth);
        }
    }
});
