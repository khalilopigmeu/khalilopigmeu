"use strict",
//Funcionarios
app["Funcionarios"] = new Vue({
    el: '#Funcionarios',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-id-card"></i>',
        pesqTbl: "",

        Departamentosrc: null,
        Cargosrc: null,
        PlanoSaudesrc: null,
        PlanoOdontosrc: null,
        UF: null,
        DataNasc: null,
        Rg: null,
        CEP: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,
        Nome: null,
        Cpf: null,
        Telefone: null,
        Celular: null,
        Cidade: null,
        Salario: null,
        Comissao: null,
        ContaSalario: null,
        DataAdmis: null,
        IdDepartamento: null,
        IdCargo: null,
        IdPlanoSaude: null,
        IdPlanoOdonto: null,
    },
    created: function (e) {
        this.populate();
        $(function () {
            $("#Funcionarios .modal-body .nav-link").removeClass("active show");
            $("#Funcionarios .modal-body .tab-pane").removeClass("active show");
            $("#Funcionarios .modal-body .nav-link").eq(0).addClass("active show");
            $("#Funcionarios .modal-body .tab-pane").eq(0).addClass("active show");
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
                    var ws = $(window).Decrypt(host("Bienestar", "Funcionario", "listar"));
                    var p = (post(ws, data));

                    app.Funcionarios.src = eval($(window).Decrypt(p));
                    app.Login.Funcionariosrc = app.Funcionarios.src;
                });
            }
        },
        clear: function () {
            this.UF = null;
            this.DataNasc = null;
            this.Rg = null;
            this.CEP = null;
            this.Bairro = null;
            this.Rua = null;
            this.Num = null;
            this.Complemento = null;
            this.Nome = null;
            this.Cpf = null;
            this.Telefone = null;
            this.Celular = null;
            this.Cidade = null;
            this.Salario = null;
            this.Comissao = null;
            this.ContaSalario = null;
            this.DataAdmis = null;
            this.IdDepartamento = null;
            this.IdCargo = null;
            this.IdPlanoSaude = null;
            this.IdPlanoOdonto = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Cpf = this.row[1];
            this.Rg = this.row[2];
            this.Nome = this.row[3];
            this.DataNasc = this.row[4];
            /* this.IdDepartamento = this.row[5];
             this.IdCargo = this.row[6];
             this.IdPlanoSaude = this.row[7];
             this.IdPlanoOdonto = this.row[8];*/
            this.Salario = this.row[9];
            this.Comissao = this.row[10];
            this.ContaSalario = this.row[11];
            this.DataAdmis = this.row[12];
            this.CEP = this.row[13];
            this.UF = this.row[14];
            this.Cidade = this.row[15];
            this.Bairro = this.row[16];
            this.Rua = this.row[17];
            this.Num = this.row[18];
            this.Complemento = this.row[19];
            this.Telefone = this.row[20];
            this.Celular = this.row[21];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.UF = this.UF;
            this.biencode.DataNasc = this.DataNasc;
            this.biencode.Rg = this.Rg;
            this.biencode.CEP = this.CEP;
            this.biencode.Bairro = this.Bairro;
            this.biencode.Rua = this.Rua;
            this.biencode.Num = this.Num;
            this.biencode.Complemento = this.Complemento;
            this.biencode.Nome = this.Nome;
            this.biencode.Cpf = this.Cpf;
            this.biencode.Telefone = this.Telefone;
            this.biencode.Celular = this.Celular;
            this.biencode.Cidade = this.Cidade;
            this.biencode.Salario = this.Salario;
            this.biencode.Comissao = this.Comissao;
            this.biencode.ContaSalario = this.ContaSalario;
            this.biencode.DataAdmis = this.DataAdmis;
            this.biencode.IdDepartamento = this.IdDepartamento;
            this.biencode.IdCargo = this.IdCargo;
            this.biencode.IdPlanoSaude = this.IdPlanoSaude;
            this.biencode.IdPlanoOdonto = this.IdPlanoOdonto;
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
                    var ws = $(window).Decrypt(host("Bienestar", "Funcionario", "add"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Funcionario", "alt"));
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
                    var ws = $(window).Decrypt(host("Bienestar", "Funcionario", "exc"));
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
