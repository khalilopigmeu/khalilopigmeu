"use strict",
//Procedimento
app["Procedimento"] = new Vue({
    el: '#Procedimento',
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
        Host: "Bienestar/Clinica/Procedimento/",
        paginate:[],

        text: null,
        Descricao: null,
        Nome: null,
        Valor: null,
        Duracao: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Procedimento.href, "listar", data);
            app.sys.tabs(this.href);
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
            CKEDITOR.instances['procedimentodescricao'].setData(unescapeHTML(this.Descricao));
            app.sys.mascara();
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Nome = this.Nome;
            this.biencode.Valor = this.Valor;
            this.Descricao = CKEDITOR.instances['procedimentodescricao'].getData();
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
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            
        },
    }
});
