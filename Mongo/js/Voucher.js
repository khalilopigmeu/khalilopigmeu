"use strict",
//Voucher
app["Voucher"] = new Vue({
    el: '#Voucher',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-ticket-alt"></i>',
        pesqTbl: "",
        Host: "Bienestar/Anuncio/Voucher/",

        Taxa: null,
        Juros: null,
        Nome: null,
        Validade: null,
        Valor: null,
        Link: null,
        Acessos: null,
        Loginsrc: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                this.biencode.acesso = window.localStorage.getItem("IdLogin");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Voucher.href, "listar", data);
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.Taxa = null;
            this.Juros = null;
            this.Nome = null;
            this.Validade = null;
            this.Valor = null;
            this.Link = null;
        },
        autocomplete: function () {
            this.item = this.row[0];
            this.Taxa = this.row[2];
            this.Juros = this.row[3];
            this.Nome = this.row[1];
            this.Validade = this.row[5];
            this.Valor = this.row[4];
            this.Link = this.row[6];
            var x = String(app.sys.foreignKeyRestore(this.Loginsrc, "Login", this.row[7]));
            this.Acessos = eval(x.split(","));
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
            var ac = "";
            for (var i = 0; i <= this.Acessos.length - 1; i++) {
                ac += this.Acessos[i];
                if (i < this.Acessos.length - 1) {
                    ac += ";";
                }
            }
            this.biencode.Acessos = ac;
            this.biencode.Taxa = this.Taxa;
            this.biencode.Juros = this.Juros;
            this.biencode.Nome = this.Nome;
            this.biencode.Validade = this.Validade;
            this.biencode.Valor = this.Valor;
            this.biencode.Link = this.Link;
            this.biencode.id = this.id;
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
        }
    }
});
