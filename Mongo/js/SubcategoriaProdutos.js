"use strict",
//SubcategoriaProdutos
app["SubcategoriaProdutos"] = new Vue({
    el: '#SubcategoriaProdutos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-th"></i>',
        pesqTbl: "",
        Host: "Bienestar/Estoque/SubCatProdutos/",

        TipoSubCategoria: null,
        IdCategoria: null,
        CategoriaSrc: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.SubcategoriaProdutos.href, "listar", data);
                app.Produto.SubCategoriaSrc = app.SubcategoriaProdutos.src;
                app.ListaCompra.subcategoriaprodutos = app.SubcategoriaProdutos.src;
            });
            app.sys.tabs(this.href);
            
        },
        clear: function () {
            this.TipoSubCategoria = null;
            this.IdCategoria = null;
        },
        autocomplete: function () {
            this.TipoSubCategoria = this.row[2];
            this.IdCategoria = app.sys.foreignKeyRestore(this.CategoriaSrc, "TipoCategoria", this.row[1]);
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.TipoSubCategoria = this.TipoSubCategoria;
            this.biencode.IdCategoria = this.IdCategoria;
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
