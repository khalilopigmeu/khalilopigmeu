"use strict",
//Etag
app["Etag"] = new Vue({
    el: '#Etag',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Inventario/Etag/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate:[],

        Numero: null,
        Codigo: null,
    },
    methods: {
        populate: function (e) {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Etag.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Numero = null;
            this.Codigo = null;
        },
        autocomplete: function () {
            this.item = this.row[0];
            this.Numero = this.row[1];
            this.Codigo = this.row[2];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Numero = this.Numero;
            this.biencode.Codigo = this.Codigo;
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
            
        },
    }
});