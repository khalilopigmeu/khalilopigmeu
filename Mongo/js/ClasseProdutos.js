"use strict",
//ClasseProdutos
app["ClasseProdutos"] = new Vue({
    el: '#ClasseProdutos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-th-large"></i>',
        pesqTbl: "",
        Host: "Bienestar/Estoque/ClasseProdutos/",

        IdFamilia: null,
        TipoClasse: null,
        FamiliaSrc: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.ClasseProdutos.href, "listar", data);
                app.CategoriaProdutos.ClasseSrc = app.ClasseProdutos.src;
                app.Produto.ClasseSrc = app.ClasseProdutos.src;
                app.ListaCompra.classeprodutos = app.ClasseProdutos.src;
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.IdFamilia = null;
            this.TipoClasse = null;
        },
        autocomplete: function () {
            this.IdFamilia = app.sys.foreignKeyRestore(this.FamiliaSrc, "TipoFamilia", this.row[1]);
            this.TipoClasse = this.row[2];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdFamilia = this.IdFamilia;
            this.biencode.TipoClasse = this.TipoClasse;
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
