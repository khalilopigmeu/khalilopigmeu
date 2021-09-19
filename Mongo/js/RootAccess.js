"use strict",
//AnotacaoAgenda
app["RootAccess"] = new Vue({
    el: '#RootAccess',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-edit"></i>',
        pesqTbl: "",
        Host: "Bienestar/Agenda/Anotacoes/",

        EmpresaSrc: null,
        LoginSrc: null
    },
    methods: {
        populate: function () {
            
        },
        clear: function () {
            
        },
        autocomplete: function () {
            
        },
        checkForm: function () {
           
        },
        cadastrar: function () {
           
        },
        alterar: function () {
           
        },
        excluir: function () {
           
        },
        relatorio: function () {
           
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
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
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
