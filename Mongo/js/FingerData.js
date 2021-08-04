"use strict",
//FingerData
app["FingerData"] = new Vue({
    el: '#FingerData',
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

        IdFuncionario: null,
        D1: null,
        D2: null,
        D3: null,
        D4: null,
        D5: null,
        E1: null,
        E2: null,
        E3: null,
        E4: null,
        E5: null,
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
                var ws = host("Bienestar", "FingerData", "listar");
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
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && typeof app.Ravec.acesso[this.stepkey][this.href] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null && app.Ravec.acesso[this.stepkey][this.href] !== null) {
                if (app.Ravec.acesso[this.stepkey][this.href].nivel >= nivel) {
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
