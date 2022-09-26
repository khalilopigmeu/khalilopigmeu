"use strict",
//Ponto
app["Ponto"] = new Vue({
    el: '#Ponto',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Sistema/Ponto/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",

        ToleranciaEntrada: null,
        ToleranciaSaida: null,
        IdFunc: null,
        Acessos: null,
        IdFP: null,
        CargaHorariaDia: null,
        
        Loginsrc:null,
        Funcionariosrc:null,
        Fingersrc:null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Ponto.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.ToleranciaEntrada = null;
            this.ToleranciaSaida = null;
            this.IdFunc = null;
            this.Acessos = null;
            this.IdFP = null;
            this.CargaHorariaDia = null;
        },
        autocomplete: function () {
            this.IdFunc = this.row[1];
            this.IdFP = this.row[2];
            this.ToleranciaEntrada = this.row[3];
            this.ToleranciaSaida = this.row[4];
            this.CargaHorariaDia = this.row[5];
            this.Acessos = this.row[6];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdFunc = this.IdFunc;
            this.biencode.IdFP = this.IdFP;
            this.biencode.ToleranciaEntrada = this.ToleranciaEntrada;
            this.biencode.ToleranciaSaida = this.ToleranciaSaida;
            this.biencode.CargaHorariaDia = this.CargaHorariaDia;
            this.biencode.Acesso = this.Acessos;
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
            if (nulo(app.Login)) {
                this.Loginsrc = [];
            } else {
                this.Loginsrc = app.Login.src
            }
            if (nulo(app.Funcionarios)) {
                this.Funcionariosrc = [];
            } else {
                this.Funcionariosrc = app.Funcionarios.src;
            }
            if (nulo(app.FingerData)) {
                this.Fingersrc = [];
            } else {
                this.Fingersrc = app.FingerData.src;
            }
        },
    }
});