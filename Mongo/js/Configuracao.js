"use strict",
//Configuracao
app["Configuracao"] = new Vue({
    el: '#Configuracao',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-cogs"></i>',
        pesqTbl: "",
        Host: "Bienestar/Sistema/Configuracao/",
        paginate: [],
        Nome: "Nome",
        Site: "Site",
        LogoURL: "LogoURL",
        Ghost: "Ghost",
        FtpUrl: "FtpUrl",
        FtpLogin: "FtpLogin",
        FtpPorta: "FtpPorta",
        FtpSenha: "FtpSenha",
        SaldoCaixa: "SaldoCaixa",
        googleApiKey: "googleApiKey",
        ChaveGoogle: "ChaveGoogle",
        clienteOAuth: "clienteOAuth",
        Facebook: "Facebook",
        appId: "appId",
        Instagram: "Instagram",
        MeioPagamento: "MeioPagamento"
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
            app.sys.crud(app.Configuracao.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Nome = null;
            this.Site = null;
            this.LogoURL = null;
            this.Ghost = null;
            this.FtpUrl = null;
            this.FtpLogin = null;
            this.FtpPorta = null;
            this.FtpSenha = null;
            this.SaldoCaixa = null;
            this.googleApiKey = null;
            this.ChaveGoogle = null;
            this.clienteOAuth = null;
            this.Facebook = null;
            this.appId = null;
            this.Instagram = null;
            this.MeioPagamento = null;
        }, autocomplete: function () {
            this.id = this.row[0];
            this.Nome = this.row[1];
            this.Site = this.row[2];
            this.LogoURL = this.row[3];
            this.Ghost = this.row[4];
            this.FtpUrl = this.row[5];
            this.FtpLogin = this.row[6];
            this.FtpPorta = this.row[7];
            this.FtpSenha = this.row[8];
            this.SaldoCaixa = this.row[9];
            this.googleApiKey = decrypt(this.row[10]);
            this.ChaveGoogle = decrypt(this.row[11]);
            this.clienteOAuth = decrypt(this.row[12]);
            this.Facebook = this.row[13];
            this.appId = this.row[14];
            this.Instagram = this.row[15];
            this.MeioPagamento = this.row[16];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Nome = this.Nome;
            this.biencode.Site = this.Site;
            this.biencode.LogoURL = this.LogoURL;
            this.biencode.Ghost = this.Ghost;
            this.biencode.FtpUrl = this.FtpUrl;
            this.biencode.FtpLogin = this.FtpLogin;
            this.biencode.FtpPorta = this.FtpPorta;
            this.biencode.FtpSenha = this.FtpSenha;
            this.biencode.SaldoCaixa = this.SaldoCaixa;
            this.biencode.googleApiKey = this.googleApiKey;
            this.biencode.ChaveGoogle = this.ChaveGoogle;
            this.biencode.clienteOAuth = this.clienteOAuth;
            this.biencode.Facebook = this.Facebook;
            this.biencode.appId = this.appId;
            this.biencode.Instagram = this.Instagram;
            this.biencode.MeioPagamento = this.MeioPagamento;
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
