"use strict",
//MeioPagamento
app["MeioPagamento"] = new Vue({
    el: '#MeioPagamento',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Financeiro/MeioPagamento/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],

        ChavePagSeguro: null,
        TokenPPagSeg: null,
        TokenSPagSeg: null,
        EmailPagSeguro: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.MeioPagamento.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.EmailPagSeguro = null;
            this.ChavePagSeguro = null;
            this.TokenPPagSeg = null;
            this.TokenSPagSeg = null;
        },
        autocomplete: function () {
            this.EmailPagSeguro = this.row[4];
            this.TokenSPagSeg = this.row[3];
            this.TokenPPagSeg = this.row[2];
            this.ChavePagSeguro = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.EmailPagSeguro = this.EmailPagSeguro;
            this.biencode.TokenSPagSeg = this.TokenSPagSeg;
            this.biencode.TokenPPagSeg = this.TokenPPagSeg;
            this.biencode.ChavePagSeguro = this.ChavePagSeguro;
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