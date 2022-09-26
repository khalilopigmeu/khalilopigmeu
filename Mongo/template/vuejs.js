"use strict",
//FileName
app["FileName"] = new Vue({
    el: '#FileName',
    data: {
        evtDataCal: null,
        src: null,
        stepkey: 0, href: null,
        biencode: null, row: null, id: null, stepkey: 0, href: null
    },
    created: function (e) {
        //this.populate();
    },
    methods: {
        populate: function (e) {
            if (this.ravec(this.href, this.index, 1)) {
                $(window).NotifyRavec();
            } else {
            }
        },
        clear: function () {
            this.item = null;
        },
        autocomplete: function () {
            this.item = this.row[0];
        },
        checkForm: function () {
        },
        cadastrar: function () {
            if (this.ravec(this.href, this.stepkey, 2)) {
                $(window).NotifyRavec();
            } else {
            }
        },
        alterar: function () {
            if (this.ravec(this.href, this.stepkey, 3)) {
                $(window).NotifyRavec();
            } else {
            }
        },
        excluir: function () {
            if (this.ravec(this.href, this.stepkey, 4)) {
                $(window).NotifyRavec();
            } else {
            }
        },
        relatorio: function () {
            if (this.ravec(this.href, this.stepkey, 5)) {
                $(window).NotifyRavec();
            } else {
            }
        },
        cad: function () {
            this.evtDataCal = "cad";
        },
        alt: function () {
            this.evtDataCal = "alt";
        },
        rel: function () {
            this.evtDataCal = "rel";
        },
        exc: function () {
            this.evtDataCal = "exc";
        },
        sorter: function (arr, model, field) {
            if (arr !== null) {
                if (model === "ASC") {
                    return arr.slice().sort(function (a, b) {
                        if (a < b) {
                            return -1;
                        }
                    });
                } else {
                    return arr.slice().sort(function (a, b) {
                        if (b > a) {
                            return 1;
                        }
                    });
                }
            }
        }
    }
});