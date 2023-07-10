"use strict",
//Manutencao
app["Manutencao"] = new Vue({
    el: '#Manutencao',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/HelpDesk/Manutencao/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],

        Custo: null,
        Data: null,
        Observacao: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            this.biencode.acesso = window.localStorage.getItem("IdLogin");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Manutencao.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Data = null;
            this.Custo = null;
            this.Observacao = null;
            CKEDITOR.instances['observacaomanutencao'].setData("");
        },
        autocomplete: function () {
            this.Observacao = this.row[3];
            CKEDITOR.instances['observacaomanutencao'].setData(unescapeHTML(this.Observacao));
            this.Custo = this.row[1];
            this.Data = this.row[2];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.Observacao = CKEDITOR.instances['conteudo'].getData();
            this.biencode.Observacao = this.Observacao;
            this.biencode.Custo = this.Custo;
            this.biencode.Data = this.Data;
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

        },
    }
});