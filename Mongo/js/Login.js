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
        Host: "Bienestar/Gerenciamento/Login/",

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
        DataCadastro: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Login.href, "listar", data);
                app.CategoriaEventos.Loginsrc = app.Login.src;
                app.Anuncio.Loginsrc = app.Login.src;
                app.CategoriaAnuncio.Loginsrc = app.Login.src;
                app.ChamadoAnuncio.Loginsrc = app.Login.src;
                app.Mural.Loginsrc = app.Login.src;
                app.Page.Loginsrc = app.Login.src;
                app.Voucher.Loginsrc = app.Login.src;
                app.Ravec.Loginsrc = app.Login.src;
                app.CategoriaPlanoSistema.Loginsrc = app.Login.src;
            });
            app.sys.tabs(this.href);
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
            this.biencode.DataCadastro = this.DataCadastro;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            app.sys.crud(this.href, "edt", null);
        },
        excluir: function () {
            app.sys.crud(this.href, "exc", null);
        },
        relatorio: function () {
            app.sys.crud(this.href, "rel", null);
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
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
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
