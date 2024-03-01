"use strict",
//Album
app["ConfigLoja"] = new Vue({
    el: '#ConfigLoja',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-folder-open"></i>',
        pesqTbl: "",
        Host: "Bienestar/Loja/ConfigLoja/",
        paginate: [],
        Ambiente: null,
        IdPagamentoPix: null,
        IdPagamentoBoleto: null,
        IdPagamentoCredito: null,
        Ativo: null,
        MeioPagamentosrc: []
    },
    methods: {
        populate: function () {
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Album.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Ambiente = null;
            this.IdPagamentoPix = null;
            this.IdPagementoBoleto = null;
            this.IdPagamentoCredito = null;
            this.Ativo = null;
        },
        autocomplete: function () {
            this.Ambiente = this.row[5];
            this.IdPagamentoPix = this.row[1];
            this.IdPagementoBoleto = this.row[2];
            this.IdPagamentoCredito = this.row[3];
            this.Ativo = this.row[4];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Ambiente = this.Ambiente;
            this.biencode.IdPagamentoPix = this.IdPagamentoPix;
            this.biencode.IdPagementoBoleto = this.IdPagementoBoleto;
            this.biencode.IdPagamentoCredito = this.IdPagamentoCredito;
            this.biencode.Ativo = this.Ativo;
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
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.ClasseProdutos)) {
                this.MeioPagamentosrc = [];
            } else {
                this.MeioPagamentosrc = app.MeioPagamento.src;
            }
        },
    }
});