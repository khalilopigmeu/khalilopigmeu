"use strict",
//Vendedor
app["Vendedor"] = new Vue({
    el: '#Vendedor',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-shopping-basket"></i>',
        pesqTbl: "",

        UF: null,
        CNAE: null,
        CRT: null,
        DataNasc: null,
        IE: null,
        Rg: null,
        CEP: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,
        RazaoSocial: null,
        NomeFantasia: null,
        Nome: null,
        Cnpj: null,
        Cpf: null,
        Telefone: null,
        IM: null,
        Celular: null,
        Cidade: null,
        optCad: "",
    },
    created: function (e) {
        this.populate();
        $(function () {
            $("#Vendedor .modal-body .nav-link").removeClass("active show");
            $("#Vendedor .modal-body .tab-pane").removeClass("active show");
            $("#Vendedor .modal-body .nav-link").eq(0).addClass("active show");
            $("#Vendedor .modal-body .tab-pane").eq(0).addClass("active show");
            app.SocialMedia.mascara();
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
                    var ws = $(window).Decrypt(host("Bienestar", "Vendedor", "listar"));
                    var p = (post(ws, data));

                    app.Vendedor.src = eval($(window).Decrypt(p));
                    app.Login.Vendedorsrc = app.Vendedor.src;
                });
            }
        },
        clear: function () {
            this.UF = null;
            this.CNAE = null;
            this.CRT = null;
            this.DataNasc = null;
            this.IE = null;
            this.Rg = null;
            this.CEP = null;
            this.Bairro = null;
            this.Rua = null;
            this.Num = null;
            this.Complemento = null;
            this.RazaoSocial = null;
            this.NomeFantasia = null;
            this.Nome = null;
            this.Cnpj = null;
            this.Cpf = null;
            this.Telefone = null;
            this.IM = null;
            this.Celular = null;
            this.Cidade = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Nome = this.row[1];
            this.Cpf = this.row[2];
            this.DataNasc = this.row[3];
            this.Rg = this.row[4];
            this.CEP = this.row[5];
            this.UF = this.row[6];
            this.Cidade = this.row[7];
            this.Bairro = this.row[8];
            this.Rua = this.row[9];
            this.Num = this.row[10];
            this.Complemento = this.row[11];
            this.Telefone = this.row[12];
            this.Celular = this.row[13];
            this.Cnpj = this.row[14];
            this.RazaoSocial = this.row[15];
            this.NomeFantasia = this.row[16];
            this.CNAE = this.row[17];
            this.CRT = this.row[18];
            this.IE = this.row[19];
            this.IM = this.row[20];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            if (this.optCad === "fisica") {
                this.biencode.Nome = this.Nome;
                this.biencode.Cpf = this.Cpf;
                this.biencode.Rg = this.Rg;
                var data = this.DataNasc.split("-");
                this.biencode.DataNasc = data[2] + "/" + data[1] + "/" + data[0];
            } else {
                this.biencode.NomeFantasia = this.NomeFantasia;
                this.biencode.Cnpj = this.Cnpj;
                this.biencode.RazaoSocial = this.RazaoSocial;
                this.biencode.CNAE = this.CNAE;
                this.biencode.CRT = this.CRT;
                this.biencode.IE = this.IE;
                this.biencode.IM = this.IM;
                this.biencode.Nome = this.Nome;
                this.biencode.Cpf = this.Cpf;
                this.biencode.Rg = this.Rg;
                this.biencode.DataNasc = this.DataNasc;
            }
            this.biencode.CEP = this.CEP;
            this.biencode.UF = this.UF;
            this.biencode.Cidade = this.Cidade;
            this.biencode.Bairro = this.Bairro;
            this.biencode.Rua = this.Rua;
            this.biencode.Num = this.Num;
            this.biencode.Complemento = this.Complemento;
            this.biencode.Telefone = this.Telefone;
            this.biencode.Celular = this.Celular;
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
                    var ws = $(window).Decrypt(host("Bienestar", "Vendedor", "add"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Vendedor", "alt"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Vendedor", "exc"));
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
