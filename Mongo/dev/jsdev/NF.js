"use strict",
//NF
app["NF"] = new Vue({
    el: '#NF',
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
        
        TotII: null,
        TotDesc: null,
        TotIPI: null,
        Tipo: null,
        CodNf: null,
        TotVbc: null,
        TotBCST: null,
        TotST: null,
        TotProd: null,
        TotFrete: null,
        TotPIS: null,
        TotICMS: null,
        TotSeg: null,
        TotCOFINS: null,
        UrlXML: null,
        NroNf: null,
        TotICMSD: null,
        TotNF: null,
        TotOutro: null,
        DataEmiss: null,
        ChaveNF: null,
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
                var ws = host("Bienestar", "NF", "listar");
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
        checkForm: function () {app.erros.errors = {};
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
