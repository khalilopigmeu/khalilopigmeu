"use strict";
app["categoriaportfolio"] = new Vue({
    el: '#categoriaportfolio',
    data: {
        src: null,
        Host: "Bienestar/Portfolio/CategoriaPortfolio/",
        pg: null,
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (!nulo(refid)) {
                this.biencode.empresa = refid;
            } else {
                this.biencode.empresa = app.sys.refid;
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("categoriaportfolio", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        