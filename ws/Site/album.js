"use strict";
app["albumsite"] = new Vue({
    el: '#albumsite',
    data: {
        src: null,
        Host: "Bienestar/Album/Albuns/",
        id: null,
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                if (typeof app.empresasanunciando !== 'undefined') {
                    if (app.empresasanunciando.pgid !== null) {
                        this.biencode.empresa = getParameterByName("pgid");
                    } else {
                        this.biencode.empresa = app.sys.refid;
                    }
                } else {
                    this.biencode.empresa = app.sys.refid;
                }
                if (app.albumsite.id !== null) {
                    this.biencode.id = getParameterByName("id");
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("albumsite", "listar", data);
                setAuth(preAuth);
            });
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        