"use strict";
app["anunciobienclube"] = new Vue({
    el: '#anunciobienclube',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/Anunciante/"
    },
    methods: {
        buscar: function () {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = app.sys.refid;
            this.biencode.conteudo = getParameterByName("conteudo");
            this.biencode.descricao = getParameterByName("descricao");
            this.biencode.keyword = getParameterByName("keyword");
            this.biencode.categoria = getParameterByName("categoria");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("anunciobienclube", "listar", data);
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        }
    }
});
        