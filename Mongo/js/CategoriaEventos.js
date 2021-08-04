"use strict",
//CategoriaEventos
app["CategoriaEventos"] = new Vue({
    el: '#CategoriaEventos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-list-alt"></i>',
        pesqTbl: "",

        Acessos: null,
        NomeCategoria: null,
        Cor: null,
        Loginsrc: null,
        searchQuery: null,
        searchField: null,
    },
    created: function (e) {
        this.populate();
        $(function () {
            $("#CategoriaEventos .modal-body .nav-link").removeClass("active show");
            $("#CategoriaEventos .modal-body .tab-pane").removeClass("active show");
            $("#CategoriaEventos .modal-body .nav-link").eq(0).addClass("active show");
            $("#CategoriaEventos .modal-body .tab-pane").eq(0).addClass("active show");
        });
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
                    this.biencode.acesso = window.localStorage.getItem("IdLogin");
                    var data = {
                        biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "CategoriasEvt", "listar"));
                    var p = (post(ws, data));

                    app.CategoriaEventos.src = eval($(window).Decrypt(p));
                    app.AnotacaoAgenda.CategoriaSrc = app.CategoriaEventos.src;
                    app.Eventos.CategoriaSrc = app.CategoriaEventos.src;
                    app.calendar.CategoriaSrc = app.CategoriaEventos.src;
                    app.Midia.CategoriaSrc = app.CategoriaEventos.src;
                });
            }
        },
        clear: function () {
            this.id = null;
            this.Acessos = null;
            this.NomeCategoria = null;
            this.Cor = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            var x = String(app.sys.foreignKeyRestore(this.Loginsrc, "Login", this.row[3]));
            this.Acessos = eval(x.split(","));
            this.NomeCategoria = this.row[1];
            this.Cor = this.row[2];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.id = this.id;
            var ac = "";
            for (var i = 0; i <= this.Acessos.length - 1; i++) {
                ac += this.Acessos[i];
                if (i < this.Acessos.length - 1) {
                    ac += ";";
                }
            }
            this.biencode.Acessos = ac;
            this.biencode.NomeCategoria = this.NomeCategoria;
            this.biencode.Cor = this.Cor;
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
                    var ws = $(window).Decrypt(host("Bienestar", "CategoriasEvt", "add"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "CategoriasEvt", "edt"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "CategoriasEvt", "exc"));
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
        },
        pesq: function (arr, pesq) {
            let filteredList = arr.filter(field => app.CategoriaEventos.valida(field, pesq));
            return filteredList;
        },
        valida: function (field, pesq) {
            var keys = Object.keys(field);
            var flag = false;
            for (var i = 0; i <= keys.length - 1; i++) {
                try {
                    var p = field[keys[i]].toLowerCase().indexOf(pesq.toLowerCase());
                    if (p >= 0) {
                        flag = true;
                    }
                } catch (e) {

                }
            }
            return flag;
        }

    }
});
function update(picker) {
    app.CategoriaEventos.Cor = picker.dataset.currentColor;
}