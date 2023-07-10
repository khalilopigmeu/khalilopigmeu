"use strict";
app["midiasite"] = new Vue({
    el: '#midiasite',
    data: {
        src: null,
        Host: "Bienestar/Midia/Midias/",
        id: null,
    },
    methods: {
        buscar: function (refid, id) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (!nulo(refid)) {
                this.biencode.empresa = refid;
            } else {
                this.biencode.empresa = app.sys.refid;
            }
            if (app.albumsite.id !== null) {
                this.biencode.id = id;
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("midiasite", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        