"use strict";
app["curriculosite"] = new Vue({
    el: '#curriculosite',
    data: {
        src: null,
        Host: "Bienestar/Site/Curriculum/",
        href: "Curriculum"
    },
    methods: {
        buscar: function () {
            if (app.sys.system.hasOwnProperty("Curriculum")) {
                this.src = app.sys.system["Curriculum"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = app.sys.refid;
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("curriculosite", "listar", data);
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
        