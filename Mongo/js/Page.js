"use strict",
//Page
app["Page"] = new Vue({
    el: '#Page',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-globe"></i>',
        pesqTbl: "",

        UrlPage: null,
        ContentPage: null,
    },
    created: function (e) {
        this.populate();
        $(function () {
            $("#Page .modal-body .nav-link").removeClass("active show");
            $("#Page .modal-body .tab-pane").removeClass("active show");
            $("#Page .modal-body .nav-link").eq(0).addClass("active show");
            $("#Page .modal-body .tab-pane").eq(0).addClass("active show");
        });
        this.evtDataCal = "cad";
    },
    methods: {
        populate: function (e) {
            this.clear();
            if (!this.ravec(1)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                $(function () {
                    this.biencode = {};
                    this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                    var data = {
                        biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Pagina", "listar"));
                    var p = (post(ws, data));

                    app.Page.src = eval($(window).Decrypt(p));
                });
            }
        },
        clear: function () {
            this.UrlPage = null;
            this.ContentPage = null;
        },
        autocomplete: function () {
            this.ContentPage = this.row[2];
            this.UrlPage = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.ContentPage = CKEDITOR.instances['conteudo'].getData();
            this.biencode.ContentPage = this.ContentPage;
            this.biencode.UrlPage = this.UrlPage;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            if (!this.ravec(2)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                this.checkForm();
                if (!app.erros.valida()) {
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Pagina", "add"));
                    var p = (post(ws, data));
                    var rs = $(window).Decrypt(p);
                    $(window).NotifyInfo(rs);
                    this.populate();
                }
            }
        },
        alterar: function () {
            if (!this.ravec(3)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                this.checkForm();
                if (!app.erros.valida()) {
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Pagina", "edt"));
                    var p = (post(ws, data));
                    var rs = $(window).Decrypt(p);
                    $(window).NotifyInfo(rs);
                    this.populate();
                }
            }
        },
        excluir: function () {
            if (!this.ravec(4)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                this.checkForm();
                if (!app.erros.valida()) {
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Pagina", "exc"));
                    var p = (post(ws, data));
                    var rs = $(window).Decrypt(p);
                    $(window).NotifyInfo(rs);
                    this.populate();
                }
            }
        },
        relatorio: function () {
            if (!this.ravec(5)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
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
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && typeof app.Ravec.acesso[this.stepkey][this.href] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null && app.Ravec.acesso[this.stepkey][this.href] !== null) {
                if (app.Ravec.acesso[this.stepkey][this.href].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
});