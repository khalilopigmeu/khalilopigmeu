"use strict";
app["textosite"] = new Vue({
    el: '#textosite',
    data: {
        src: null,
        Host: "Bienestar/Textos/Text/",
        href: "Text"
    },
    methods: {
        buscar: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("Text")) {
                this.src = app.sys.system["Text"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = app.sys.refid;
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("textosite", "listar", data);
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
        