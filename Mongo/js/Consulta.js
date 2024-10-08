"use strict",
//Consulta
app["Consulta"] = new Vue({
    el: '#Consulta',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-tasks"></i>',
        pesqTbl: "",
        Host: "Bienestar/Clinica/Consulta/",
        paginate: [],

        text: null,
        Descricao: null,
        Nome: null,
        Valor: null,
        Duracao: null,
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Consulta.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.Nome = null;
            this.Valor = null;
            this.Descricao = null;
            this.Duracao = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Nome = this.row[1];
            this.Valor = this.row[2];
            this.Duracao = msToTime(this.row[3]);
            this.Descricao = this.row[4];
            CKEDITOR.instances['consultadescricao'].setData(unescapeHTML(this.Descricao));
            app.sys.mascara();
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Nome = this.Nome;
            this.biencode.Valor = this.Valor;
            this.Descricao = CKEDITOR.instances['consultadescricao'].getData();
            this.biencode.Descricao = this.Descricao;
            this.biencode.Duracao = this.Duracao;
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
