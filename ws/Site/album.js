"use strict";
app["albumsite"] = new Vue({
    el: '#albumsite',
    data: {
        src: null,
        Host: "Bienestar/Midia/Albuns/",
        id: null,
        href: "Album"
    },
    methods: {
        buscar: function (refid, id) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("Album")) {
                this.src = app.sys.system["Album"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.empresa = app.sys.refid;
                }
                if (id !== null) {
                    this.biencode.id = id;
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("albumsite", "listar", data);
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
        