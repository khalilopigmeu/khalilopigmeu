"use strict";
app["eventossite"] = new Vue({
    el: '#eventossite',
    data: {
        src: null,
        Host: "Bienestar/Agenda/Eventos/",
        evtDataCal: null,
        stepkey: 0,
        href: null,
        biencode: null,
        row: null,
        id: null,
        href: "Eventos"
    },
    methods: {
        buscar: function (refid) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("Eventos")) {
                this.src = app.sys.system["Eventos"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.cliente = refid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("eventossite", "listar", data);
            }
        },
        checkForm: function () {

        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
    }
});
        