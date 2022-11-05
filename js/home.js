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
        chamadas: [],
        chamadashome: [],
        pghome: null,
    },
    methods: {
        diasnoar: function () {
            /*       app.anunciante.pgid = null;
             app.empresasanunciando.pgid = null;
             app.configuracaosite.buscar();
             app.empresasanunciando.buscar();
             app.anunciante.buscar();
             
             var Difference_In_Time = this.date2.getTime() - this.date1.getTime();
             var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
             this.diferenca = Math.round(Difference_In_Days);*/
        },
    }
});

  