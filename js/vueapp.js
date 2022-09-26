"use strict";
app["SocialMedia"] = new Vue({
    el: '#navbar',
    data: {
        fblog: false,
        fbsai: false,
        gglog: false,
        ggsai: false,
        imgemp: null,
        imgurl: null,
        socialName: null,
        FB: null,
        appid: "",
        googleapikey: "",
        cliente_oauth: "",
        chave: "",
        empresa: null,
        login: null,
        login_oauth: null,
        key_oauth: null,
    },
    created: function () {
    },
    methods: {
    }
});
app["Host"] = new Vue({
    el: '#host',
    data: {
        path: null,
        op: null,
        ac: null,
        url: null
    },
    created: function () {
    },
    methods: {
        send: function () {
            app.Host.url = decrypt(host(app.Host.path, app.Host.op, app.Host.ac));
        }
    }
});
