"use strict";
app["PromocaoSite"] = new Vue({
    el: '#PromocaoSite',
    data: {
        src: null,
        Host: "",
        id: null,
        Itemsrc: [],
        Pacotesrc: [],
    },
    methods: {
        buscaItens: function (refid) {
            this.href = "PromocaoItem";
            if (app.sys.system.hasOwnProperty("PromocaoItem")) {
                this.src = app.sys.system["PromocaoItem"];
                this.Itemsrc = this.src;
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.all = "";
                }
                this.Host = "Bienestar/Site/PromocaoItem/";
                var key = decrypt(app.sys.bien, "encodedstring");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("PromocaoSite", "listar", data);
                this.Itemsrc = this.src;
            }
        },
        buscaPacotes: function (refid) {
            this.href = "Promocao";
            if (app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                this.Pacotesrc = this.src;
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.all = "";
                }
                this.Host = "Bienestar/Site/Promocao/";
                var key = decrypt(app.sys.bien, "encodedstring");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("PromocaoSite", "listar", data);
                this.Pacotesrc = this.src;
            }
        }
    },
    clear: function () {
        this.src = null;
    },
    ravec: function (nivel) {
        return true;
    }
});
        