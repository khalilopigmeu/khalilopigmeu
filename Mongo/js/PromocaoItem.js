"use strict",
//Album
app["PromocaoItem"] = new Vue({
    el: '#PromocaoItem',
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
        Host: "Bienestar/Site/PromocaoItem/",
        paginate:[],

        icon: null,
        LoteAtivo: null,
        lote1: null,
        lote2: null,
        lote3: null,
        lote4: null,
        lote5: null,
        Produto: null,
        Consulta: null,
        Procedimento: null,
        Projeto: null,
        Produtosrc: null,
        Consultasrc: null,
        Procedimentosrc: null,
        Projetosrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.PromocaoItem.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.icon = null;
            this.LoteAtivo = null;
            this.lote1 = null;
            this.lote2 = null;
            this.lote3 = null;
            this.lote4 = null;
            this.lote5 = null;
            this.Produto = null;
            this.Consulta = null;
            this.Procedimento = null;
            this.Projeto = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.icon = this.row[1];
            this.LoteAtivo = this.row[2];
            this.lote1 = this.row[3];
            this.lote2 = this.row[4];
            this.lote3 = this.row[5];
            this.lote4 = this.row[6];
            this.lote5 = this.row[7];
            this.Produto = this.row[8];
            this.Consulta = this.row[9];
            this.Procedimento = this.row[10];
            this.Projeto = this.row[11];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.icon = this.icon;
            this.biencode.LoteAtivo = this.LoteAtivo;
            this.biencode.lote1 = this.lote1;
            this.biencode.lote2 = this.lote2;
            this.biencode.lote3 = this.lote3;
            this.biencode.lote4 = this.lote4;
            this.biencode.lote5 = this.lote5;
            this.biencode.Produto = this.Produto;
            this.biencode.Consulta = this.Consulta;
            this.biencode.Procedimento = this.Procedimento;
            this.biencode.Projeto = this.Projeto;
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
            if (nulo(app.Login)) {
                this.Produtosrc = [];
            } else {
                this.Produtosrc = app.Produto.src;
            }
            if (nulo(app.Login)) {
                this.Consultasrc = [];
            } else {
                this.Consultasrc = app.Consulta.src;
            }
            if (nulo(app.Login)) {
                this.Procedimentosrc = [];
            } else {
                this.Procedimentosrc = app.Procedimento.src;
            }
            if (nulo(app.Login)) {
                this.Projetosrc = [];
            } else {
                this.Projetosrc = [];
              //  this.Projetosrc = app.Projetos.src;
            }
            
        },
    }
});