"use strict",
//Departamento
app["Departamento"] = new Vue({
    el: '#Departamento',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Gestao/Departamento/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],

        Descricao: null,
        Sigla: null,
        Nome: null,
    },
    methods: {
        populate: function (e) {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            this.biencode.data = app.AnotacaoAgenda.datapesq;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Departamento.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Descricao = null;
            this.Sigla = null;
            this.Nome = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Descricao = this.row[3];
            this.Sigla = this.row[2];
            this.Nome = this.row[1];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Descricao = this.Descricao;
            this.biencode.Sigla = this.Sigla;
            this.biencode.Nome = this.Nome;
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
