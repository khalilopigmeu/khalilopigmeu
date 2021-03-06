"use strict";
app["midiasite"] = new Vue({
    el: '#midiasite',
    data: {
        src: null,
        Host: "Bienestar/Album/Midia/",
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
                app.sys.crud("midiasite", "listar", data);
                setAuth(preauth);
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
        