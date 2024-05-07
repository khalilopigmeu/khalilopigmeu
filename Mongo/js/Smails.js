"use strict",
//Album
app["Smails"] = new Vue({
    el: '#Smails',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-folder-open"></i>',
        pesqTbl: "",
        Host: "Bienestar/Site/Smails/",
        paginate: [],

        SMTP: null,
        Email: null,
        Senha: null,
        Porta: null,
        API: null,
        Qtd: null,
        Partner: null,
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
                app.sys.crud(app.Album.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.SMTP = null;
            this.Email = null;
            this.Senha = null;
            this.Porta = null;
            this.API = null;
            this.Qtd = null;
            this.Partner = null;
        },
        autocomplete: function () {
            this.SMTP = this.row[1];
            this.Email = this.row[2];
            this.Senha = this.row[3];
            this.Porta = this.row[4];
            this.API = this.row[5];
            this.Qtd = this.row[6];
            this.Partner = this.row[7];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.SMTP = this.SMTP;
            this.biencode.Email = this.Email;
            this.biencode.Senha = this.Senha;
            this.biencode.Porta = this.Porta;
            this.biencode.ApiSendblue = this.API;
            this.biencode.Qtdenvio = this.Qtd;
            this.biencode.PartnerKey = this.Partner;
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