"use strict",
//Mural
app["Mural"] = new Vue({
    el: '#Mural',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-sticky-note"></i>',
        pesqTbl: "",
        Host: "Bienestar/Site/Mural/",
        paginate: [],

        Link: null,
        IdMidia: null,
        Texto: null,
        InOut: null,
        Acessos: null,

        Loginsrc: null,
        MidiaSrc: null,
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
                app.sys.crud(app.Mural.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.IdMidia = null;
            this.Link = null;
            this.Texto = null;
            this.InOut = null;
            this.Acessos = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            var x = String(app.sys.foreignKeyRestore(this.Loginsrc, "Login", this.row[2]));
            this.IdMidia = eval(x.split(","));
            var x = String(app.sys.foreignKeyRestore(this.Loginsrc, "Login", this.row[5]));
            this.Acessos = eval(x.split(","));
            this.Link = this.row[1];
            this.Texto = this.row[3];
            this.InOut = this.row[4];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.IdMidia = this.IdMidia;
            this.biencode.Acessos = this.Acessos;
            this.biencode.Link = this.Link;
            this.biencode.Texto = this.Texto;
            this.biencode.InOut = this.InOut;
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
            if (nulo(app.Login)) {
                this.Loginsrc = [];
            } else {
                this.Loginsrc = app.Login.src;
            }
            if (nulo(app.Midia)) {
                this.MidiaSrc = [];
            } else {
                this.MidiaSrc = app.Midia.src;
            }

        },
    }
});
