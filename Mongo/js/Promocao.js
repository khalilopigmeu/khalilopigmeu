"use strict",
//Album
app["Promocao"] = new Vue({
    el: '#Promocao',
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
        Host: "Bienestar/Site/Promocao/",
        paginate: [],

        modalidadeServico: null,
        mensal: null,
        trimestre: null,
        semestre: null,
        anual: null,
        max: null,
        min: null,
        PromocaoItem: null,
        PromocaoItemsrc: null,
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
            app.sys.crud(app.Promocao.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.modalidadeServico = null;
            this.mensal = null;
            this.trimestre = null;
            this.semestre = null;
            this.anual = null;
            this.max = null;
            this.min = null;
            this.PromocaoItem = null;
        },
        autocomplete: function () {
            this.modalidadeServico = this.row[1];
            this.mensal = this.row[2];
            this.trimestre = this.row[3];
            this.semestre = this.row[4];
            this.anual = this.row[5];
            this.max = this.row[6];
            this.min = this.row[7];
            this.PromocaoItem = this.row[8];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.modalidadeServico = this.modalidadeServico;
            this.biencode.mensal = this.mensal;
            this.biencode.trimestre = this.trimestre;
            this.biencode.semestre = this.semestre;
            this.biencode.anual = this.anual;
            this.biencode.max = this.max;
            this.biencode.min = this.min;
            this.biencode.PromocaoItem = this.PromocaoItem;
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
            if (nulo(app.Login)) {
                this.PromocaoItemsrc = [];
            } else {
                this.PromocaoItemsrc = app.PromocaoItem.src;
            }

        },
        item: function (el) {
            var item = "";
            if (el.Produto !== null || el.Produto !== "null") {
                item += app.sys.foreignKeyReplace(app.Produto.src, 'NomeProduto', el.Produto);
                item += ",";
            } else {
                item += "";
            }
            if (el.Consulta !== null || el.Consulta !== "null") {
                item += app.sys.foreignKeyReplace(app.Consulta.src, 'Nome', el.Consulta);
                item += ",";
            } else {
                item += "";
            }
            if (el.Procedimento !== null || el.Procedimento !== "null") {
                item += app.sys.foreignKeyReplace(app.Procedimento.src, 'Nome', el.Procedimento);
                item += ",";
            } else {
                item += "";
            }/*
             if (el.Projeto !== null || el.Projeto !== "null") {
             item += app.sys.foreignKeyReplace(app.Projetos.src, 'Nome', el.Projeto);
             item+= ",";
             } else {
             item += "";
             }*/
            return item;
        },
    }
});