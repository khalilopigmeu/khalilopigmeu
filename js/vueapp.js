"use strict";
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
