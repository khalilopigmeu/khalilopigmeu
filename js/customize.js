"use strict";
app["Customizar"] = new Vue({
    el: '#Customizar',
    data: {
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
        
        src: null,
        Host: "Bienestar/",
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
        /*buscar: function () {
         $(function () {
         var preauth = getAuth();
         setAuth("encodedstring");
         var auth = $(window).Decrypt(app.sys.bien);
         setAuth(auth);
         this.biencode = {};
         this.biencode.empresa = app.sys.refid;
         var data = {
         biencode: $(window).Encrypt(JSON.stringify(this.biencode))
         };
         app.sys.crud("Customizar", "listar", data);
         setAuth(preauth);
         });
         },*/
        defaultPallete: function () {
            var itens = Object.keys(app.Customizar._data);
            for (var i = 0; i <= itens.length - 1; i++) {
                if (itens[i] !== "src" || itens[i] !== "Host") {
                    //app.Customizar[itens[i]] = app.Customizar.src[app.sys.pallete][itens[i]];
                    app.Customizar[itens[i]] = app.Customizar.src[0][itens[i]];
                }
            }
        },
        readDef: function () {
            var itens = Object.keys(app.Customizar._data);
            for (var i = 0; i <= itens.length - 1; i++) {
                if (itens[i] !== "src" || itens[i] !== "Host") {
                    var element = window.localStorage.getItem(itens[i]);
                    if (typeof element === "undefined" || element === null) {
                        if (app.Customizar[itens[i]] === null) {
                            this.setDefault(itens[i]);
                        } else {
                            window.localStorage.setItem(app.Customizar[itens[i]], app.Customizar[itens[i]]);
                        }
                    }
                }
            }
        },
        setDefault: function (element) {
            var dflt = {};
            if (urlSite.includes("borealmystic")) {
                dflt.navbarbg = "#333333";
                dflt.navbarfont = "inherit";
                dflt.navbarcolor = "#fff";

                dflt.modalbg = "#fff";
                dflt.modalfont = "inherit";
                dflt.modalcolor = "#000000";

                dflt.fieldesetbg = "#ddd";
                dflt.fieldsetfont = "inherit";
                dflt.fieldsetcolor = "#000000";

                dflt.tabbg = "#c67c2e";
                dflt.tabfont = "inherit";
                dflt.tabcolor = "#fff";

                dflt.tableheadbg = "#c67c2e";
                dflt.tableheadfont = "inherit";
                dflt.tableheadcolor = "#fff";

                dflt.rowevenbg = "#fff";
                dflt.rowevencolor = "#000";

                dflt.rowoddbg = " #ccc";
                dflt.rowoddcolor = "#000";

                dflt.tablefootbg = "#c67c2e";
                dflt.tablefootfont = "inherit";
                dflt.tablefootcolor = "#fff";

                dflt.botoesbg = "#c67c2e";
                dflt.botoesout = "#ffcc80";
                dflt.botoesoff = "#808080";
                dflt.botoesfont = "inherit";
                dflt.botoescolor = "#fff";

                dflt.hrefbg = "#454545";
                dflt.hreffont = "inherit";
                dflt.hrefcolor = "#fff";

                dflt.anunciobg = "#e6e6e6";
                dflt.anunciocolor = "#000000";
                dflt.anunciolink = "#454545";
                dflt.anuncionavbar = "#333333";
                dflt.anunciotitulosfont = "inherit";
                dflt.anuncioconteudofont = "inherit";
            } else {
                dflt.navbarbg = "#076633";
                dflt.navbarfont = "inherit";
                dflt.navbarcolor = "#fff";

                dflt.modalbg = "#fff";
                dflt.modalfont = "inherit";
                dflt.modalcolor = "#333333";

                dflt.fieldesetbg = "#99cfb3";
                dflt.fieldsetfont = "inherit";
                dflt.fieldsetcolor = "#000000";

                dflt.tabbg = "#c4e3d3";
                dflt.tabfont = "inherit";
                dflt.tabcolor = "#000";

                dflt.tableheadbg = "#006633";
                dflt.tableheadfont = "inherit";
                dflt.tableheadcolor = "#fff";

                dflt.rowevenbg = "#fff";
                dflt.rowevencolor = "#000";

                dflt.rowoddbg = "#ddd";
                dflt.rowoddcolor = "#000";

                dflt.tablefootbg = "#006633";
                dflt.tablefootfont = "inherit";
                dflt.tablefootcolor = "#fff";

                dflt.botoesbg = "#006633";
                dflt.botoesout = "#4cbd86";
                dflt.botoesoff = "#00cc66";
                dflt.botoesfont = "inherit";
                dflt.botoescolor = "#fff";

                dflt.hrefbg = "#006633";
                dflt.hreffont = "inherit";
                dflt.hrefcolor = "#ff8000";

                dflt.anunciobg = "#fff";
                dflt.anunciocolor = "#333333";
                dflt.anunciolink = "#006633";
                dflt.anuncionavbar = "#006633";
                dflt.anunciotitulosfont = "inherit";
                dflt.anuncioconteudofont = "inherit";
            }
            app.Customizar[element] = dflt[element];
            this.changeColorSystem();
        },
        defaultColor: function () {
            this.readDef();
            this.changeColorSystem();
        },
        changeColorSystem: function () {
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
        clearColor: function () {
            var itens = Object.keys(app.Customizar._data);
            for (var i = 0; i <= itens.length - 1; i++) {
                if (itens[i] !== "src" || itens[i] !== "Host") {
                    window.localStorage.removeItem(itens[i]);
                }
            }
        },
    }
});