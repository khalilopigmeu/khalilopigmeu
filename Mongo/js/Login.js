"use strict",
//Login
app["Login"] = new Vue({
    el: '#Login',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-id-badge"></i>',
        pesqTbl: "",

        Funcionariosrc: null,
        Clientesrc: null,
        Operacionalsrc: null,
        Configuracaosrc: null,
        Revendasrc: null,
        Vendedorsrc: null,
        IdRevenda: null,
        IdVendedor: null,
        IdFunc: null,
        Senha: null,
        IdCliente: null,
        IdConfig: null,
        Memorize: null,
        UserIdFB: null,
        Validade: null,
        Login: null,
        Email: null,
        Ask: null,
        RAVEC: null,
        DataCadastro: null,
    },
    created: function (e) {
        this.populate();
        $(function () {
            $("#Login .modal-body .nav-link").removeClass("active show");
            $("#Login .modal-body .tab-pane").removeClass("active show");
            $("#Login .modal-body .nav-link").eq(0).addClass("active show");
            $("#Login .modal-body .tab-pane").eq(0).addClass("active show");
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
                    var data = {
                        biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Login", "listar"));
                    var p = (post(ws, data));

                    app.Login.src = eval($(window).Decrypt(p));
                    app.CategoriaEventos.Loginsrc = app.Login.src;
                    app.Ravec.Loginsrc = app.Login.src;
                });
            }
        },
        clear: function () {
            this.IdRevenda = null;
            this.IdVendedor = null;
            this.IdFunc = null;
            this.Senha = null;
            this.IdCliente = null;
            this.IdConfig = null;
            this.Memorize = null;
            this.UserIdFB = null;
            this.Validade = null;
            this.Login = null;
            this.Email = null;
            this.Ask = null;
            this.VCard = null;
            this.DataCadastro = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdFunc = app.sys.foreignKeyRestore(this.Funcionariosrc, "Nome", this.row[1]);
            this.IdCliente = app.sys.foreignKeyRestore(this.Clientesrc, "Nome", this.row[2]);
            this.IdVendedor = app.sys.foreignKeyRestore(this.Vendedorsrc, "Nome", this.row[3]);
            this.IdRevenda = app.sys.foreignKeyRestore(this.Revendasrc, "Nome", this.row[4]);
            this.IdConfig = app.sys.foreignKeyRestore(this.Configuracaosrc, "Nome", this.row[5]);
            this.Email = this.row[6];
            this.Login = this.row[7];
            this.Senha = this.row[8];
            this.Validade = this.row[9];
            this.DataCadastro = this.row[10];
            this.Ask = this.row[11];
            this.Memorize = this.row[12];
            this.UserIdFB = this.row[13];
            this.VCard = this.row[14];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdRevenda = this.IdRevenda;
            this.biencode.IdVendedor = this.IdVendedor;
            this.biencode.IdFunc = this.IdFunc;
            this.biencode.Senha = this.Senha;
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.IdConfig = this.IdConfig;
            this.biencode.Memorize = this.Memorize;
            this.biencode.UserIdFB = this.UserIdFB;
            this.biencode.Validade = this.Validade;
            this.biencode.Login = this.Login;
            this.biencode.Email = this.Email;
            this.biencode.Ask = this.Ask;
            this.biencode.RAVEC = this.RAVEC;
            this.biencode.DataCadastro = this.DataCadastro;
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
                    var ws = $(window).Decrypt(host("Bienestar", "Login", "add"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Login", "edt"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Login", "exc"));
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
            alert("Por segurança toda as vezes que for realizar uma alteração no login é necessário re-inserir a senha.");
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
