"use strict";
app["voucherbienclube"] = new Vue({
    el: '#voucherbienclube',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/Voucher/"
    },
    methods: {
        buscar: function () {
            $(function () {
                preAuth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                this.biencode.empresa = app.sys.refid;
                this.biencode.nome = getParameterByName("cod");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("voucherbienclube", "listar", data);
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
        