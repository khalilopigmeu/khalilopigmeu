"use strict",
//OS
app["OS"] = new Vue({
    el: '#OS',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Fiscal/OS/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",

        Cliente: null,
        Atendente: null,
        Tecnico: null,
        Cod: null,
        Nivel: null,
        Observacao: null,
        DescriServico: null,
        DataSolicitacao: null,
        Previsao: null,
        Valor: null,
        Disponibilidade: null,
        
        Funcionariosrc:null,
        Clientesrc:null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Album.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Cliente = null;
            this.Atendente = null;
            this.Tecnico = null;
            this.Cod = null;
            this.Nivel = null;
            this.Observacao = null;
            this.DescriServico = null;
            this.DataSolicitacao = null;
            this.Previsao = null;
            this.Valor = null;
            this.Disponibilidade = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Cliente = this.row[1];
            this.Atendente = this.row[2];
            this.Tecnico = this.row[3];
            this.Cod = this.row[4];
            this.Nivel = this.row[5];
            this.Observacao = this.row[6];
            this.DescriServico = this.row[7];
            this.DataSolicitacao = this.row[8];
            this.Previsao = this.row[9];
            this.Valor = this.row[10];
            this.Disponibilidade = this.row[11];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Cliente = this.Cliente;
            this.biencode.Atendente = this.Atendente;
            this.biencode.Tecnico = this.Tecnico;
            this.biencode.Cod = this.Cod;
            this.biencode.Nivel = this.Nivel;
            this.biencode.Observacao = this.Observacao;
            this.biencode.DescriServico = this.DescriServico;
            this.biencode.DataSolicitacao = this.DataSolicitacao;
            this.biencode.Previsao = this.Previsao;
            this.biencode.Valor = this.Valor;
            this.biencode.Disponibilidade = this.Disponibilidade;
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
        load: function () {
            if (nulo(app.Funcionarios)) {
                this.Funcionariosrc = [];
            } else {
                this.Funcionariosrc = app.Funcionarios.src;
            }
            if (nulo(app.Cliente)) {
                this.Clientesrc = [];
            } else {
                this.Clientesrc = app.Cliente.src;
            }
        },
    }
});