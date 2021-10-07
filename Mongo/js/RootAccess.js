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
        Host: "Bienestar/Gerenciamento/Empresa/",

        EmpresaSrc: null,
        LoginSrc: null,
        selEmpresa: null,
        selLogin: null
    },
    methods: {
        populate: function () {
            this.Host = "Bienestar/Gerenciamento/Empresa/";
            $(function () {
                this.biencode = {};
                this.biencode.all = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.RootAccess.href, "listar", data);
                app.RootAccess.EmpresaSrc = app.Empresa.src;
            });
            app.sys.tabs(this.href);
        },
        login: function () {
            this.Host = "Bienestar/Gerenciamento/Login/";
            $(function () {
                this.biencode = {};
                this.biencode.empresa = app.RootAccess.selEmpresa;
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.RootAccess.href, "listar", data);
                app.RootAccess.LoginSrc = app.Empresa.src;
            });
            app.sys.tabs(this.href);
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
