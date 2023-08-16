"use strict";
app["funcionariosite"] = new Vue({
    el: '#funcionariosite',
    data: {
        src: null,
        Host: "Bienestar/Gestao/Funcionario/",
        id: null,
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (app.funcionariosite.id === null) {
                this.biencode.empresa = app.sys.refid;
            } else {
                this.biencode.id = app.funcionariosite.id;
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("funcionariosite", "listar", data);
        },
        all: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.all = "";
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("funcionariosite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        