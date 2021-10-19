"use strict";
app["anunciobienclube"] = new Vue({
    el: '#anunciobienclube',
    data: {
        src: null,
        Host: "Bienestar/Anuncio/Anunciante/"
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
                this.biencode.conteudo = getParameterByName("conteudo");
                this.biencode.descricao = getParameterByName("descricao");
                this.biencode.keyword = getParameterByName("keyword");
                this.biencode.categoria = getParameterByName("categoria");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("anunciobienclube", "listar", data);
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
        