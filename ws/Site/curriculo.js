"use strict";
app["curriculosite"] = new Vue({
    el: '#curriculosite',
    data: {
        src: null,
        Host: "Bienestar/Site/Curriculum/",
    },
    methods: {
        buscar: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            this.biencode.empresa = app.sys.refid;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("curriculosite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        