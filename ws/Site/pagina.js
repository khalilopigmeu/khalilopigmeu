"use strict";
app["paginasite"] = new Vue({
    el: '#paginasite',
    data: {
        src: null,
        Host: "Bienestar/Site/pagina/",
        pg: null,
        endpg: null,
        startpg: null,
        href: "Page"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("Page")) {
                this.src = app.sys.system["Page"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (app.paginasite.pg !== null) {
                    this.biencode.urlpage = getParameterByName("pg");
                }
                if (app.paginasite.startpg !== null) {
                    this.biencode.startpg = getParameterByName("startpg");
                }
                if (app.paginasite.endpg !== null) {
                    this.biencode.endpg = getParameterByName("endpg");
                }
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.empresa = app.sys.refid;
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("paginasite", "listar", data);
            }
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
        validapg: function (url) {
            if (app.paginasite.startpg !== null) {
                if (url.startsWith(app.paginasite.startpg)) {
                    return true;
                } else {
                    return false;
                }
            } else if (app.paginasite.endpg !== null) {
                if (url.endsWith(app.paginasite.endpg)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    }
});
        