"use strict",
//Tags
app["lista"] = new Vue({
    el: '#lista',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: "links",
        ELtitle: null,

        pesqTbl: "",
        Host: "Linkado/Link/",
        paginate: [],

        id: null,
        Nome: null,
        Descricao: null,
        Url: null,
        Reduzida: null,
        Icon: null,

    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (!nulo(getParameterByName("linkado"))) {
                this.biencode.Linkado = getParameterByName("linkado");
            } else if (!nulo(getParameterByName("lista"))) {
                this.biencode.Linkado = getParameterByName("lista");
            } else {
                this.biencode.Linkado = "";
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.lista.Host + "listar";
            var p = post(ws, data);
            app.lista.src = eval(decrypt(p));
        },
        open: function (url) {
            window.open(url, "_blank");
        },
        share: function (url, nome) {
            navigator.share({
                title: nome,
                text: "Link",
                url: url
            });
        }
    }
});