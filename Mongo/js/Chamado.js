"use strict",
//Chamado
app["Chamado"] = new Vue({
    el: '#Chamado',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/HelpDeskt/Chamado/",
        ELtitle: null,
        Icon: '<i class="fas fa-bell"></i>',
        pesqTbl: "",
        paginate: [],

        Observacao: null,
        Servico: null,
        pesqCliente: "",
        Ticket: null,
        IdCliente: null,
        DataSolicitacao: null,
        Status: null,
        DataAlteracao: null,
        Previsao: null,
        Solucao: null,
        Nivel: null,

        ClienteSrc: null,
    },
    methods: {
        populate: function (e) {
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Chamado.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.Servico = null;
            this.Ticket = null;
            this.IdCliente = null;
            this.DataSolicitacao = null;
            this.Status = null;
            this.DataAlteracao = null;
            this.Previsao = null;
            this.Nivel = null;
            this.Solucao = null;
            this.Observacao = null;
            CKEDITOR.instances['solucaochamado'].setData("");
            CKEDITOR.instances['observacaochamado'].setData("");
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdCliente = String(app.sys.foreignKeyRestore(this.ClienteSrc, "Nome", this.row[1]));
            this.Servico = this.row[2];
            this.DataSolicitacao = this.row[3];
            this.Ticket = this.row[4];
            this.Nivel = this.row[5];
            this.Status = this.row[6];
            this.DataAlteracao = this.row[7];
            this.Previsao = this.row[8];
            this.Observacao = this.row[9];
            CKEDITOR.instances['observacaochamado'].setData(unescapeHTML(this.Observacao));
            this.Solucao = this.row[10];
            CKEDITOR.instances['solucaochamado'].setData(unescapeHTML(this.Solucao));
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.id = this.id;
            this.biencode.Servico = this.Servico;
            this.biencode.Ticket = this.Ticket;
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.DataSolicitacao = this.DataSolicitacao;
            this.biencode.Status = this.Status;
            this.biencode.DataAlteracao = this.DataAlteracao;
            this.biencode.Previsao = this.Previsao;
            this.biencode.Nivel = this.Nivel;
            this.Solucao = CKEDITOR.instances['solucaochamado'].getData();
            this.biencode.Solucao = this.Solucao;
            this.Observacao = CKEDITOR.instances['observacaochamado'].getData();
            this.biencode.Observacao = this.Observacao;
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
            if (nulo(app.Cliente)) {
                this.ClienteSrc = [];
            } else {
                this.ClienteSrc = app.Cliente.src;
            }

        },
    }
});
