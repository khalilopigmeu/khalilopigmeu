"use strict";
app["ClasseProdutosSite"] = new Vue({
    el: '#ClasseProdutosSite',
    data: {
        src: null,
        Host: "Bienestar/Produtos/ClasseProdutos/",
        pgid: null,
        href: "ClasseProdutos"
    },
    methods: {
        buscar: function (refid) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("ClasseProdutos")) {
                this.src = app.sys.system["ClasseProdutos"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("ClasseProdutosSite", "listar", data);
            }
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        