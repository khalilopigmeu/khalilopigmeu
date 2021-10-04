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
        Host: "Bienestar/Gerenciamento/Configuracao/",

        Nome: null,
        NNF: null,
        Model: null,
        FinNFe: null,
        Serie: null,
        Ambiente: null,
        TpImp: null,
        TpEmis: null,
        appId: null,
        googleApiKey: null,
        clienteOAuth: null,
        ChaveGoogle: null,
        AvisoChamado: null,
        EmailsChamado: null,
        AvisoVencimento: null,
        EmailsVencimento: null,
        AvisoContabil: null,
        EmailsContabil: null,
        AvisoAgenda: null,
        EmailsAgenda: null,
        AvisoCompra: null,
        EmailsCompra: null,
        AvisoEstoque: null,
        EmailsEstoque: null,
        Ghost: null,
        SaldoCaixa: null,
        LogoURL: null,
        Site: null,
        Instagram: null,
        Facebook: null,
        FtpUrl: null,
        FtpLogin: null,
        FtpSenha: null,
        FtpPorta: null,
        PagSeguroEmail: null,
        PagSeguroToken: null,
        PagSeguroKey: null,
        PagSeguroId: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Configuracao.href, "listar", data);
                app.Login.Configuracaosrc = app.Configuracao.src;
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Nome = null;
            this.NNF = null;
            this.Model = null;
            this.FinNFe = null;
            this.Serie = null;
            this.Ambiente = null;
            this.TpImp = null;
            this.TpEmis = null;
            this.appId = null;
            this.googleApiKey = null;
            this.clienteOAuth = null;
            this.ChaveGoogle = null;
            this.AvisoChamado = null;
            this.EmailsChamado = null;
            this.AvisoVencimento = null;
            this.EmailsVencimento = null;
            this.AvisoContabil = null;
            this.EmailsContabil = null;
            this.AvisoAgenda = null;
            this.EmailsAgenda = null;
            this.AvisoCompra = null;
            this.EmailsCompra = null;
            this.AvisoEstoque = null;
            this.EmailsEstoque = null;
            this.Ghost = null;
            this.SaldoCaixa = null;
            this.LogoURL = null;
            this.Site = null;
            this.Instagram = null;
            this.Facebook = null;
            this.FtpUrl = null;
            this.FtpLogin = null;
            this.FtpSenha = null;
            this.FtpPorta = null;
            this.PagSeguroEmail = null;
            this.PagSeguroToken = null;
            this.PagSeguroKey = null;
            this.PagSeguroId = null;
        }, autocomplete: function () {
            this.id = this.row[0];
            this.Nome = this.row[1];
            this.NNF = this.row[14];
            this.Model = this.row[15];
            this.FinNFe = this.row[16];
            this.Serie = this.row[17];
            this.Ambiente = this.row[18];
            this.TpImp = this.row[19];
            this.TpEmis = this.row[20];
            this.appId = this.row[21];
            this.googleApiKey = this.row[22];
            this.clienteOAuth = this.row[23];
            this.ChaveGoogle = this.row[24];
            this.AvisoChamado = this.row[25];
            this.EmailsChamado = this.row[26];
            this.AvisoVencimento = this.row[27];
            this.EmailsVencimento = this.row[28];
            this.AvisoContabil = this.row[29];
            this.EmailsContabil = this.row[30];
            this.AvisoAgenda = this.row[31];
            this.EmailsAgenda = this.row[32];
            this.AvisoCompra = this.row[33];
            this.EmailsCompra = this.row[34];
            this.AvisoEstoque = this.row[35];
            this.EmailsEstoque = this.row[36];
            this.Ghost = this.row[2];
            this.SaldoCaixa = this.row[3];
            this.Site = this.row[4];
            this.LogoURL = this.row[37];
            this.Instagram = this.row[5];
            this.Facebook = this.row[6];
            this.FtpUrl = this.row[7];
            this.FtpLogin = this.row[8];
            this.FtpSenha = this.row[9];
            this.FtpPorta = this.row[10];
            this.PagSeguroEmail = this.row[11];
            this.PagSeguroToken = this.row[14];
            this.PagSeguroKey = this.row[12];
            this.PagSeguroId = this.row[13];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Nome = this.Nome;
            this.biencode.NNF = this.NNF;
            this.biencode.Model = this.Model;
            this.biencode.FinNFe = this.FinNFe;
            this.biencode.Serie = this.Serie;
            this.biencode.Ambiente = this.Ambiente;
            this.biencode.TpImp = this.TpImp;
            this.biencode.TpEmis = this.TpEmis;
            this.biencode.appId = this.appId;
            this.biencode.googleApiKey = this.googleApiKey;
            this.biencode.clienteOAuth = this.clienteOAuth;
            this.biencode.ChaveGoogle = this.ChaveGoogle;
            this.biencode.AvisoChamado = this.AvisoChamado;
            this.biencode.EmailsChamado = this.EmailsChamado;
            this.biencode.AvisoVencimento = this.AvisoVencimento;
            this.biencode.EmailsVencimento = this.EmailsVencimento;
            this.biencode.AvisoContabil = this.AvisoContabil;
            this.biencode.EmailsContabil = this.EmailsContabil;
            this.biencode.AvisoAgenda = this.AvisoAgenda;
            this.biencode.EmailsAgenda = this.EmailsAgenda;
            this.biencode.AvisoCompra = this.AvisoCompra;
            this.biencode.EmailsCompra = this.EmailsCompra;
            this.biencode.AvisoEstoque = this.AvisoEstoque;
            this.biencode.EmailsEstoque = this.EmailsEstoque;
            this.biencode.Ghost = this.Ghost;
            this.biencode.SaldoCaixa = this.SaldoCaixa;
            this.biencode.Site = this.Site;
            this.biencode.LogoURL = this.LogoURL;
            this.biencode.Instagram = this.Instagram;
            this.biencode.Facebook = this.Facebook;
            this.biencode.FtpUrl = this.FtpUrl;
            this.biencode.FtpLogin = this.FtpLogin;
            this.biencode.FtpSenha = this.FtpSenha;
            this.biencode.FtpPorta = this.FtpPorta;
            this.biencode.PagSeguroEmail = this.PagSeguroEmail;
            this.biencode.PagSeguroToken = this.PagSeguroToken;
            this.biencode.PagSeguroKey = this.PagSeguroKey;
            this.biencode.PagSeguroId = this.PagSeguroId;
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
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
});
