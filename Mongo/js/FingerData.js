"use strict",
//FingerData
app["FingerData"] = new Vue({
    el: '#FingerData',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-list-ol"></i>',
        pesqTbl: "",
        Host: "Bienestar/Sistema/FingerData/",
        paginate: [],

        IdFuncionario: null,
        E1: null,
        E2: null,
        E3: null,
        E4: null,
        E5: null,
        D1: null,
        D2: null,
        D3: null,
        D4: null,
        D5: null,

        FuncionarioSrc: null,
    },
    methods: {
        populate: function () {
            if (app.sys.system.hasOwnProperty(this.href)) {
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
                app.sys.crud(app.FingerData.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.IdFuncionario = null;
            this.D1 = null;
            this.D2 = null;
            this.D3 = null;
            this.D4 = null;
            this.D5 = null;
            this.E1 = null;
            this.E2 = null;
            this.E3 = null;
            this.E4 = null;
            this.E5 = null;
        },
        autocomplete: function () {
            this.IdFuncionario = this.row[1];
            this.D1 = this.row[2];
            this.D2 = this.row[3];
            this.D3 = this.row[4];
            this.D4 = this.row[5];
            this.D5 = this.row[6];
            this.E1 = this.row[7];
            this.E2 = this.row[8];
            this.E3 = this.row[9];
            this.E4 = this.row[10];
            this.E5 = this.row[11];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.IdFuncionario = this.IdFuncionario;
            this.biencode.D1 = this.D1;
            this.biencode.D2 = this.D2;
            this.biencode.D3 = this.D3;
            this.biencode.D4 = this.D4;
            this.biencode.D5 = this.D5;
            this.biencode.E1 = this.E1;
            this.biencode.E2 = this.E2;
            this.biencode.E3 = this.E3;
            this.biencode.E4 = this.E4;
            this.biencode.E5 = this.E5;
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
                this.FuncionarioSrc = [];
            } else {
                this.FuncionarioSrc = app.Funcionarios.src;
            }

        },
    }
});
