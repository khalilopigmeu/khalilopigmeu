"use strict",
//Dependentes
app["Dependentes"] = new Vue({
    el: '#Dependentes',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Gestao/Dependentes/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],

        Nome: null,
        RG: null,
        CEP: null,
        Bairro: null,
        Telefone: null,
        Cidade: null,
        DataNasc: null,
        CPF: null,
        IdPlanoOdonto: null,
        IdPlanoSaude: null,
        Complemento: null,
        Numero: null,
        IdFuncionario: null,
        Estado: null,
        Rua: null,

        Funcionariosrc: null,
        PlanoSaudesrc: null,
        PlanoOdontosrc: null,
    },
    methods: {
        populate: function (e) {
            if (app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                this.biencode.data = app.AnotacaoAgenda.datapesq;
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Dependentes.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.Nome = null;
            this.RG = null;
            this.CEP = null;
            this.Bairro = null;
            this.Telefone = null;
            this.Cidade = null;
            this.DataNasc = null;
            this.CPF = null;
            this.IdPlanoOdonto = null;
            this.IdPlanoSaude = null;
            this.Complemento = null;
            this.Numero = null;
            this.IdFuncionario = null;
            this.Estado = null;
            this.Rua = null;
        },
        autocomplete: function () {
            this.item = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Nome = this.Nome;
            this.biencode.RG = this.RG;
            this.biencode.CEP = this.CEP;
            this.biencode.Bairro = this.Bairro;
            this.biencode.Telefone = this.Telefone;
            this.biencode.Cidade = this.Cidade;
            this.biencode.DataNasc = this.DataNasc;
            this.biencode.CPF = this.CPF;
            this.biencode.IdPlanoOdonto = this.IdPlanoOdonto;
            this.biencode.IdPlanoSaude = this.IdPlanoSaude;
            this.biencode.Complemento = this.Complemento;
            this.biencode.Numero = this.Numero;
            this.biencode.IdFuncionario = this.IdFuncionario;
            this.biencode.Estado = this.Estado;
            this.biencode.Rua = this.Rua;
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
            if (nulo(app.Funcionarios)) {
                this.Funcionariosrc = [];
            } else {
                this.Funcionariosrc = app.Funcionarios.src;
            }
            if (nulo(app.PlanoSaude)) {
                this.PlanoSaudesrc = [];
            } else {
                this.PlanoSaudesrc = app.PlanoSaude.src;
            }
            if (nulo(app.PlanoOdonto)) {
                this.PlanoOdontosrc = [];
            } else {
                this.PlanoOdontosrc = app.PlanoOdonto.src;
            }

        },
    }
});
