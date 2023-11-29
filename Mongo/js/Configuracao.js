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
        MeioPagamento: "MeioPagamento",
        majority: "majority",
        RootColors: "RootColors",

        C_dark: null,
        C_medium: null,
        C_light: null,
        C_fssistema: null,
        C_fundoform: null,
        C_fsform: null,
        C_cabecalhotabela: null,
        C_fscabecalho: null,
        C_rodapetabela: null,
        C_fsrodape: null,
        C_fstabela: null,
        C_linhaeven: null,
        C_linhaodd: null,

        C_navbarbg: null,
        C_navbarfont: null,
        C_navbarcolor: null,

        C_modalbg: null,
        C_modalfont: null,
        C_modalcolor: null,

        C_fieldesetbg: null,
        C_fieldsetfont: null,
        C_fieldsetcolor: null,

        C_tabbg: null,
        C_tabfont: null,
        C_tabcolor: null,

        C_tableheadbg: null,
        C_tableheadfont: null,
        C_tableheadcolor: null,

        C_rowevenbg: null,
        C_rowevencolor: null,

        C_rowoddbg: null,
        C_rowoddcolor: null,

        C_tablefootbg: null,
        C_tablefootfont: null,
        C_tablefootcolor: null,

        C_botoesbg: null,
        C_botoesout: null,
        C_botoesoff: null,
        C_botoesfont: null,
        C_botoescolor: null,

        C_hrefbg: null,
        C_hreffont: null,
        C_hrefcolor: null,

        C_anunciobg: null,
        C_anunciocolor: null,
        C_anunciolink: null,
        C_anuncionavbar: null,
        C_anunciotitulosfont: null,
        C_anuncioconteudofont: null,
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
            this.majority = null;
            this.RootColors = null;
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
            this.majority = this.row[17];
            this.RootColors = this.row[18];
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
            this.biencode.majority = this.majority;
            this.biencode.RootColors = this.RootColors;
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
            app.sys.setColorSystem();
        },
        createOpts: function () {
            if (this.RootColors.length > 10) {
                document.getElementsByTagName("style")[0].textContent = app.Configuracao.RootColors.replace("'","");
                var css = app.Configuracao.RootColors.replace(":root{", "").replace("}", "").split(";");
                for (var i = 0; i <= css.length - 1; i++) {
                    var key = css[i].split(":")[0].replace("--", "");
                    var pair = css[i].split(":")[1];
                    app.Configuracao["C_" + key] = pair;
                }
            } else {
                this.setDefault();
            }
            for (var i = 0; i <= Object.keys(app.Configuracao._data).length - 1; i++) {
                if (Object.keys(app.Configuracao._data)[i].includes("C_")) {
                    if (Object.keys(app.Configuracao._data)[i].includes("font")) {
                        //$("#formcustomize").append("<label>" + Object.keys(app.Configuracao._data)[i] + ":</label><input class='form-control'  value='"+app.Configuracao[Object.keys(app.Configuracao._data)[i]]+"' type='text' disabled name='" + Object.keys(app.Configuracao._data)[i] + "'><br>");
                    } else {
                        $("#formcustomize").append("<label>" + replaceAll("C_", "", Object.keys(app.Configuracao._data)[i]) + ":</label><input class='form-control'<input value='" + app.Configuracao[Object.keys(app.Configuracao._data)[i]] + "' type='color' name='" + Object.keys(app.Configuracao._data)[i] + "'><br>");
                    }
                }
            }
        },
        changeColorSystem: function () {
            var css = ":root{";
            for (var i = 0; i <= Object.keys(app.Configuracao._data).length - 1; i++) {
                if (Object.keys(app.Configuracao._data)[i].includes("C_")) {
                    css += "--" + replaceAll("C_", "", Object.keys(app.Configuracao._data)[i]) + ":" + app.Configuracao[Object.keys(app.Configuracao._data)[i]] + ";";
                }
            }
            css += "}";
            app.Configuracao.RootColors = css;
            document.getElementsByTagName("style")[0].textContent = css;
        },
        setDefault: function () {
            if (urlSite.includes("borealmystic")) {
                this.C_navbarbg = "#333333";
                this.C_navbarfont = "inherit";
                this.C_navbarcolor = "#ffffff";

                this.C_modalbg = "#ffffff";
                this.C_modalfont = "inherit";
                this.C_modalcolor = "#000000";

                this.C_fieldesetbg = "#dddddd";
                this.C_fieldsetfont = "inherit";
                this.C_fieldsetcolor = "#000000";

                this.C_tabbg = "#d5d5d5";
                this.C_tabfont = "inherit";
                this.C_tabcolor = "#ffffff";

                this.C_tableheadbg = "#c67c2e";
                this.C_tableheadfont = "inherit";
                this.C_tableheadcolor = "#ffffff";

                this.C_rowevenbg = "#ffffff";
                this.C_rowevencolor = "#000000";

                this.C_rowoddbg = " #cccccc";
                this.C_rowoddcolor = "#000000";

                this.C_tablefootbg = "#c67c2e";
                this.C_tablefootfont = "inherit";
                this.C_tablefootcolor = "#ffffff";

                this.C_botoesbg = "#c67c2e";
                this.C_botoesout = "#ffcc80";
                this.C_botoesoff = "#808080";
                this.C_botoesfont = "inherit";
                this.C_botoescolor = "#ffffff";

                this.C_hrefbg = "#454545";
                this.C_hreffont = "inherit";
                this.C_hrefcolor = "#ffffff";

                this.C_anunciobg = "#e6e6e6";
                this.C_anunciocolor = "#000000";
                this.C_anunciolink = "#454545";
                this.C_anuncionavbar = "#333333";
                this.C_anunciotitulosfont = "inherit";
                this.C_anuncioconteudofont = "inherit";
            } else {
                this.C_navbarbg = "#076633";
                this.C_navbarfont = "inherit";
                this.C_navbarcolor = "#ffffff";

                this.C_modalbg = "#ffffff";
                this.C_modalfont = "inherit";
                this.C_modalcolor = "#333333";

                this.C_fieldesetbg = "#99cfb3";
                this.C_fieldsetfont = "inherit";
                this.C_fieldsetcolor = "#000000";

                this.C_tabbg = "#c4e3d3";
                this.C_tabfont = "inherit";
                this.C_tabcolor = "#000000";

                this.C_tableheadbg = "#006633";
                this.C_tableheadfont = "inherit";
                this.C_tableheadcolor = "#ffffff";

                this.C_rowevenbg = "#ffffff";
                this.C_rowevencolor = "#000000";

                this.C_rowoddbg = "#dddddd";
                this.C_rowoddcolor = "#000000";

                this.C_tablefootbg = "#006633";
                this.C_tablefootfont = "inherit";
                this.C_tablefootcolor = "#ffffff";

                this.C_botoesbg = "#006633";
                this.C_botoesout = "#4cbd86";
                this.C_botoesoff = "#00cc66";
                this.C_botoesfont = "inherit";
                this.C_botoescolor = "#ffffff";

                this.C_hrefbg = "#006633";
                this.C_hreffont = "inherit";
                this.C_hrefcolor = "#ff8000";

                this.C_anunciobg = "#ffffff";
                this.C_anunciocolor = "#333333";
                this.C_anunciolink = "#006633";
                this.C_anuncionavbar = "#006633";
                this.C_anunciotitulosfont = "inherit";
                this.C_anuncioconteudofont = "inherit";

            }
        },
    }
});

$(function () {
    $("body").on("change", "#formcustomize input", function () {
        app.Configuracao[$(this).prop("name")] = $(this).val();
    });
});