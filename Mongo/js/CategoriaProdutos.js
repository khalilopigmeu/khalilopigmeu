"use strict",
//CategoriaProdutos
app["CategoriaProdutos"] = new Vue({
    el: '#CategoriaProdutos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-th-list"></i>',
        pesqTbl: "",
        Host: "Bienestar/Produtos/CategoriaProdutos/",
        paginate: [],

        IdClasse: null,
        TipoCategoria: null,

        ClasseSrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.CategoriaProdutos.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.IdClasse = null;
            this.TipoCategoria = null;
        },
        autocomplete: function () {
            this.IdClasse = app.sys.foreignKeyRestore(app.CategoriaProdutos.ClasseSrc, "TipoClasse", this.row[1]);
            this.TipoCategoria = this.row[2];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdClasse = this.IdClasse;
            this.biencode.TipoCategoria = this.TipoCategoria;
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.ClasseProdutos)) {
                this.ClasseSrc = [];
            } else {
                this.ClasseSrc = app.ClasseProdutos.src;
            }
            
        },
    }
});
