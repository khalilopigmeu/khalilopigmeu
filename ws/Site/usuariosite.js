"use strict";
app["usuariosite"] = new Vue({
    el: '#usuariosite',
    data: {
        src: null,
        Host: "Bienestar/Gestao/Clientes/",
        evtDataCal: null,
        stepkey: 0,
        href: null,
        biencode: null,
        row: null,
        id: null,
        ELtitle: null,
        Icon: '',
        pesqTbl: "",
        paginate: [],

        UF: null,
        CNAE: null,
        CRT: null,
        DataNasc: null,
        IE: null,
        Rg: null,
        CEP: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,
        RazaoSocial: null,
        NomeFantasia: null,
        Nome: null,
        Cnpj: null,
        Cpf: null,
        Telefone: null,
        IM: null,
        Celular: null,
        Cidade: null,
        optCad: "",
    },
    methods: {
        buscar: function (refid, refcli) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("Cliente")) {
                this.href = "Cliente";
                this.src = app.sys.system["Cliente"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refcli)) {
                    this.biencode.id = refcli;
                } else if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.id = app.usuariosite.id;
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("usuariosite", "listar", data);
            }
        },
        all: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.all = "";
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("usuariosite", "listar", data);
        },
        checkForm: function () {

        },
        ravec: function (nivel) {
            return true;
        },
        clear: function () {
            this.UF = null;
            this.CNAE = null;
            this.CRT = null;
            this.DataNasc = null;
            this.IE = null;
            this.Rg = null;
            this.CEP = null;
            this.Bairro = null;
            this.Rua = null;
            this.Num = null;
            this.Complemento = null;
            this.RazaoSocial = null;
            this.NomeFantasia = null;
            this.Nome = null;
            this.Cnpj = null;
            this.Cpf = null;
            this.Telefone = null;
            this.IM = null;
            this.Celular = null;
            this.Cidade = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Nome = this.row[1];
            this.Cpf = this.row[2];
            this.DataNasc = this.row[3];
            this.Rg = this.row[4];
            this.CEP = this.row[5];
            this.UF = this.row[6];
            this.Cidade = this.row[7];
            this.Bairro = this.row[8];
            this.Rua = this.row[9];
            this.Num = this.row[10];
            this.Complemento = this.row[11];
            this.Telefone = this.row[12];
            this.Celular = this.row[13];
            this.Cnpj = this.row[14];
            this.RazaoSocial = this.row[15];
            this.NomeFantasia = this.row[16];
            this.CNAE = this.row[17];
            this.CRT = this.row[18];
            this.IE = this.row[19];
            this.IM = this.row[20];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (this.optCad === "fisica") {
                this.biencode.Nome = this.Nome;
                this.biencode.Cpf = this.Cpf;
                this.biencode.Rg = this.Rg;
                var data = this.DataNasc.split("-");
                this.biencode.DataNasc = data[2] + "/" + data[1] + "/" + data[0];
            } else {
                this.biencode.NomeFantasia = this.NomeFantasia;
                this.biencode.Cnpj = this.Cnpj;
                this.biencode.RazaoSocial = this.RazaoSocial;
                this.biencode.CNAE = this.CNAE;
                this.biencode.CRT = this.CRT;
                this.biencode.IE = this.IE;
                this.biencode.IM = this.IM;
                this.biencode.Nome = this.Nome;
                this.biencode.Cpf = this.Cpf;
                this.biencode.Rg = this.Rg;
                this.biencode.DataNasc = this.DataNasc;
            }
            this.biencode.CEP = this.CEP;
            this.biencode.UF = this.UF;
            this.biencode.Cidade = this.Cidade;
            this.biencode.Bairro = this.Bairro;
            this.biencode.Rua = this.Rua;
            this.biencode.Num = this.Num;
            this.biencode.Complemento = this.Complemento;
            this.biencode.Telefone = this.Telefone;
            this.biencode.Celular = this.Celular;
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
        