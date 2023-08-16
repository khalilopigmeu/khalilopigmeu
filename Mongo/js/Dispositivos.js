"use strict",
//Dispositivos
app["Dispositivos"] = new Vue({
    el: '#Dispositivos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-list-alt"></i>',
        pesqTbl: "",
        Host: "Bienestar/Dispositivos/Dispositivos/",
        paginate: [],

        Nome: null,
        UUID: null,
        Telefone: null,
        IdEmpresa: null,
        IdCategoria: null,
        IdLogin: null,
        Ativo: null,
        RestricaoDia: null,
        RestricaoHora: null,

        LoginSrc: null,
        CategoriaDispositivosSrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Dispositivos.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.Nome = null;
            this.UUID = null;
            this.Telefone = null;
            this.IdEmpresa = null;
            this.IdCategoria = null;
            this.IdLogin = null;
            this.Ativo = null;
            this.RestricaoDia = null;
            this.RestricaoHora = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdCategoria = this.row[1];
            this.IdLogin = this.row[2];
            this.Nome = this.row[3];
            this.UUID = this.row[4];
            this.Telefone = this.row[5];
            this.Ativo = this.row[6];
            this.RestricaoDia = this.row[7];
            this.RestricaoHora = this.row[8];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.id = this.id;
            this.biencode.IdCategoria = this.IdCategoria;
            this.biencode.IdLogin = this.IdLogin;
            this.biencode.Nome = this.Nome;
            this.biencode.UUID = this.UUID.toUpperCase();
            this.biencode.Telefone = this.Telefone;
            this.biencode.RestricaoDia = this.RestricaoDia;
            this.biencode.RestricaoHora = this.RestricaoHora;
            this.biencode.Ativo = this.Ativo;
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
        pesq: function (arr, pesq) {
            let filteredList = arr.filter(field => app.Dispositivos.valida(field, pesq));
            return filteredList;
        },
        valida: function (field, pesq) {
            var keys = Object.keys(field);
            var flag = false;
            for (var i = 0; i <= keys.length - 1; i++) {
                try {
                    var p = field[keys[i]].toLowerCase().indexOf(pesq.toLowerCase());
                    if (p >= 0) {
                        flag = true;
                    }
                } catch (e) {

                }
            }
            return flag;
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Login)) {
                this.LoginSrc = [];
            } else {
                this.LoginSrc = app.Login.src;
            }
            if (nulo(app.CategoriaDispositivos)) {
                this.CategoriaDispositivosSrc = [];
            } else {
                this.CategoriaDispositivosSrc = app.CategoriaDispositivos.src;
            }

        },
    }
});