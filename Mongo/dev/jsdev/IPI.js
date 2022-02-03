"use strict",
//IPI
app["IPI"] = new Vue({
    el: '#IPI',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",

        vISSQN: null,
        indISS: null,
        cServico: null,
        cMun: null,
        cListServ: null,
        cPais: null,
        cEnq: null,
        nProcesso: null,
        indIncentivo: null,
        vISSRet: null,
        vDescCond: null,
        cMunFG: null,
        vDeducao: null,
        vAliq: null,
        vIOF: null,
        vOutro: null,
        vDespAdu: null,
        vBC: null,
        CST: null,
        vDescIncond: null,
        vII: null,
        Modelo: null,
    },
    created: function (e) {
        //this.populate();
    },
    methods: {
        populate: function (e) {
            this.clear();
            if (!this.ravec(1)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                e.preventDefault();
                var data = {};
                var ws = host("Bienestar", "IPI", "listar");
                data[""] = $(window).Encrypt();
                var p = (post(ws, data));
                this.src = $(window).Decrypt(p);
            }
        },
        clear: function () {
            this.item = null;
        },
        autocomplete: function () {
            this.item = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
        },
        cadastrar: function () {
            if (!this.ravec(2)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        alterar: function () {
            if (!this.ravec(3)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        excluir: function () {
            if (!this.ravec(4)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        relatorio: function () {
            if (!this.ravec(5)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        cad: function () {
            this.evtDataCal = "cad";
        },
        alt: function () {
            this.evtDataCal = "alt";
        },
        rel: function () {
            this.evtDataCal = "rel";
        },
        exc: function () {
            this.evtDataCal = "exc";
        },
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null ) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
});
