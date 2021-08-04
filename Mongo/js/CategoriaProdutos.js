"use strict",
//CategoriaProdutos
app["CategoriaProdutos"] = new Vue({
    el: '#CategoriaProdutos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-th-list"></i>',
        pesqTbl: "",

        IdClasse: null,
        TipoCategoria: null,
        ClasseSrc: null,
    },
    created: function (e) {
        this.populate();
        $(function () {
            $("#CategoriaProdutos .modal-body .nav-link").removeClass("active show");
            $("#CategoriaProdutos .modal-body .tab-pane").removeClass("active show");
            $("#CategoriaProdutos .modal-body .nav-link").eq(0).addClass("active show");
            $("#CategoriaProdutos .modal-body .tab-pane").eq(0).addClass("active show");
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
                    var ws = $(window).Decrypt(host("Bienestar", "Estoque.Categoria", "listar"));
                    var p = (post(ws, data));

                    app.CategoriaProdutos.src = eval($(window).Decrypt(p));
                    app.SubcategoriaProdutos.CategoriaSrc = app.CategoriaProdutos.src;
                    app.Produto.CategoriaSrc = app.CategoriaProdutos.src;
                });
            }
        },
        clear: function () {
            this.IdClasse = null;
            this.TipoCategoria = null;
        },
        autocomplete: function () {
            this.IdClasse = app.sys.foreignKeyRestore(this.ClasseSrc, "TipoClasse", this.row[1]);
            this.TipoCategoria = this.row[2];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdClasse = this.IdClasse;
            this.biencode.TipoCategoria = this.TipoCategoria;
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
                    var ws = $(window).Decrypt(host("Bienestar", "Estoque.Categoria", "add"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Estoque.Categoria", "edt"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Estoque.Categoria", "exc"));
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
