"use strict";
app["albumsite"] = new Vue({
    el: '#albumsite',
    data: {
        src: null,
        Host: "Bienestar/Album/Albuns/"
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                this.biencode.empresa = app.sys.refid;
                this.biencode.nome = getParameterByName("cod");
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
        