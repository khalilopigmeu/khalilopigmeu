"use strict",
//CategoriaPlanoSistema
app["CategoriaPlanoSistema"] = new Vue({
    el: '#CategoriaPlanoSistema',
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
        Host: "Bienestar/Sistema/CategoriaPlanoSistema/",
        paginate: [],

        NomeCategoria: null,
        Acessos: null,

        Loginsrc: null,
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
                this.biencode.acesso = window.localStorage.getItem("IdLogin");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.CategoriaPlanoSistema.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.id = null;
            this.NomeCategoria = null;
            this.Acessos = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.NomeCategoria = this.row[1];
            var x = String(app.sys.foreignKeyRestore(this.Loginsrc, "Login", this.row[2]));
            this.Acessos = eval(x.split(","));
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.id = this.id;
            this.biencode.NomeCategoria = this.NomeCategoria;
            var ac = "";
            for (var i = 0; i <= this.Acessos.length - 1; i++) {
                ac += this.Acessos[i];
                if (i < this.Acessos.length - 1) {
                    ac += ";";
                }
            }
            this.biencode.Acessos = ac;
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
            let filteredList = arr.filter(field => app.CategoriaPlanoSistema.valida(field, pesq));
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
                this.Loginsrc = [];
            } else {
                this.Loginsrc = app.Login.src;
            }

        },
    }
});