"use strict";
app["Customizar"] = new Vue({
    el: '#Customizar',
    data: {
        src: null,
        Host: "Bienestar/Sistema/Configuracao/",

        dark: null,
        medium: null,
        light: null,
        fssistema: null,
        fundoform: null,
        fsform: null,
        cabecalhotabela: null,
        fscabecalho: null,
        rodapetabela: null,
        fsrodape: null,
        fstabela: null,
        linhaeven: null,
        linhaodd: null,

        navbarbg: null,
        navbarfont: null,
        navbarcolor: null,

        modalbg: null,
        modalfont: null,
        modalcolor: null,

        fieldesetbg: null,
        fieldsetfont: null,
        fieldsetcolor: null,

        tabbg: null,
        tabfont: null,
        tabcolor: null,

        tableheadbg: null,
        tableheadfont: null,
        tableheadcolor: null,

        rowevenbg: null,
        rowevencolor: null,

        rowoddbg: null,
        rowoddcolor: null,

        tablefootbg: null,
        tablefootfont: null,
        tablefootcolor: null,

        botoesbg: null,
        botoesout: null,
        botoesoff: null,
        botoesfont: null,
        botoescolor: null,

        hrefbg: null,
        hreffont: null,
        hrefcolor: null,

        anunciobg: null,
        anunciocolor: null,
        anunciolink: null,
        anuncionavbar: null,
        anunciotitulosfont: null,
        anuncioconteudofont: null,
    },

    methods: {
        setDefault: function () {
            if (urlSite.includes("borealmystic")) {
                app.Customizar.navbarbg = "#333333";
                app.Customizar.navbarfont = "inherit";
                app.Customizar.navbarcolor = "#fff";

                app.Customizar.modalbg = "#fff";
                app.Customizar.modalfont = "inherit";
                app.Customizar.modalcolor = "#000000";

                app.Customizar.fieldesetbg = "#ddd";
                app.Customizar.fieldsetfont = "inherit";
                app.Customizar.fieldsetcolor = "#000000";

                app.Customizar.tabbg = "#d5d5d5";
                app.Customizar.tabfont = "inherit";
                app.Customizar.tabcolor = "#fff";

                app.Customizar.tableheadbg = "#c67c2e";
                app.Customizar.tableheadfont = "inherit";
                app.Customizar.tableheadcolor = "#fff";

                app.Customizar.rowevenbg = "#fff";
                app.Customizar.rowevencolor = "#000";

                app.Customizar.rowoddbg = " #ccc";
                app.Customizar.rowoddcolor = "#000";

                app.Customizar.tablefootbg = "#c67c2e";
                app.Customizar.tablefootfont = "inherit";
                app.Customizar.tablefootcolor = "#fff";

                app.Customizar.botoesbg = "#c67c2e";
                app.Customizar.botoesout = "#ffcc80";
                app.Customizar.botoesoff = "#808080";
                app.Customizar.botoesfont = "inherit";
                app.Customizar.botoescolor = "#fff";

                app.Customizar.hrefbg = "#454545";
                app.Customizar.hreffont = "inherit";
                app.Customizar.hrefcolor = "#fff";

                app.Customizar.anunciobg = "#e6e6e6";
                app.Customizar.anunciocolor = "#000000";
                app.Customizar.anunciolink = "#454545";
                app.Customizar.anuncionavbar = "#333333";
                app.Customizar.anunciotitulosfont = "inherit";
                app.Customizar.anuncioconteudofont = "inherit";
            } else {
                app.Customizar.navbarbg = "#076633";
                app.Customizar.navbarfont = "inherit";
                app.Customizar.navbarcolor = "#fff";

                app.Customizar.modalbg = "#fff";
                app.Customizar.modalfont = "inherit";
                app.Customizar.modalcolor = "#333333";

                app.Customizar.fieldesetbg = "#99cfb3";
                app.Customizar.fieldsetfont = "inherit";
                app.Customizar.fieldsetcolor = "#000000";

                app.Customizar.tabbg = "#c4e3d3";
                app.Customizar.tabfont = "inherit";
                app.Customizar.tabcolor = "#000";

                app.Customizar.tableheadbg = "#006633";
                app.Customizar.tableheadfont = "inherit";
                app.Customizar.tableheadcolor = "#fff";

                app.Customizar.rowevenbg = "#fff";
                app.Customizar.rowevencolor = "#000";

                app.Customizar.rowoddbg = "#ddd";
                app.Customizar.rowoddcolor = "#000";

                app.Customizar.tablefootbg = "#006633";
                app.Customizar.tablefootfont = "inherit";
                app.Customizar.tablefootcolor = "#fff";

                app.Customizar.botoesbg = "#006633";
                app.Customizar.botoesout = "#4cbd86";
                app.Customizar.botoesoff = "#00cc66";
                app.Customizar.botoesfont = "inherit";
                app.Customizar.botoescolor = "#fff";

                app.Customizar.hrefbg = "#006633";
                app.Customizar.hreffont = "inherit";
                app.Customizar.hrefcolor = "#ff8000";

                app.Customizar.anunciobg = "#fff";
                app.Customizar.anunciocolor = "#333333";
                app.Customizar.anunciolink = "#006633";
                app.Customizar.anuncionavbar = "#006633";
                app.Customizar.anunciotitulosfont = "inherit";
                app.Customizar.anuncioconteudofont = "inherit";
            }
            var css = ":root{";
            var itens = Object.keys(app.Customizar._data);
            for (var i = 0; i <= itens.length - 1; i++) {
                if (itens[i] !== "src" || itens[i] !== "Host") {
                    css += "--" + itens[i] + ": " + app.Customizar[itens[i]] + ";";
                }
            }
            css += "}";
            document.getElementsByTagName("style")[0].textContent = css;
        },
        setColorSite: function () {
            if (nulo(app.configuracaosite.src)) {
                if (app.configuracaosite.src[0].RootColors) {
                    document.getElementsByTagName("style")[0].textContent = app.configuracaosite.src[0].RootColors.replace("'", "");
                } else {
                    this.setDefault();
                }
            } else {
                this.setDefault();
            }
        },
        setColorSystem: function () {
            if (nulo(app.Configuracao.src)) {
                if (app.Configuracao.src[0].RootColors) {
                    document.getElementsByTagName("style")[0].textContent =app.Configuracao.src[0].RootColors.replace("'", "");
                } else {
                    this.setDefault();
                }
            } else {
                this.setDefault();
            }
        }
    }
});