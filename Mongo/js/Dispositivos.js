"use strict",
//Dispositivos
app["Dispositivos"] = new Vue({
    el: '#Dispositivos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-list-alt"></i>',
        pesqTbl: "",
        Host: "Bienestar/Dispositivos/Dispositivos/",

        Nome: null,
        UUID: null,
        Telefone: null,
        IdEmpresa: null,
        IdCategoria: null,
        IdLogin: null,
        Ativo: null,
        RestricaoDia: null,
        RestricaoHora: null,
        LoginSrc: null,
        CategoriaDispositivosSrc: null,

    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Dispositivos.href, "listar", data);
                app.Anuncio.DispositivosSrc = app.Dispositivos.src;
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.Nome = null;
            this.UUID = null;
            this.Telefone = null;
            this.IdEmpresa = null;
            this.IdCategoria = null;
            this.IdLogin = null;
            this.Ativo = null;
            this.RestricaoDia = null;
            this.RestricaoHora = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Nome = this.row[1];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.id = this.id;
            this.biencode.Nome = this.Nome;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            app.sys.crud(this.href, "edt", null);
        },
        excluir: function () {
            app.sys.crud(this.href, "exc", null);
        },
        relatorio: function () {
            app.sys.crud(this.href, "rel", null);
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
        },
        pesq: function (arr, pesq) {
            let filteredList = arr.filter(field => app.Dispositivos.valida(field, pesq));
            return filteredList;
        },
        valida: function (field, pesq) {
            var keys = Object.keys(field);
            var flag = false;
            for (var i = 0; i <= keys.length - 1; i++) {
                try {
                    var p = field[keys[i]].toLowerCase().indexOf(pesq.toLowerCase());
                    if (p >= 0) {
                        flag = true;
                    }
                } catch (e) {

                }
            }
            return flag;
        }

    }
});