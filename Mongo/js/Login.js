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
        Host: "Bienestar/Sistema/Login/",
        paginate: [],

        IdRevenda: null,
        IdVendedor: null,
        IdFunc: null,
        Senha: null,
        IdCliente: null,
        IdConfig: null,
        Memorize: null,
        UserIdFB: null,
        UserIdGG: null,
        Validade: null,
        Login: null,
        Email: null,
        Ask: null,
        DataCadastro: null,

        Funcionariosrc: null,
        Clientesrc: null,
        Operacionalsrc: null,
        Configuracaosrc: null,
        Revendasrc: null,
        Vendedorsrc: null,
        optCad: null,
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Login.href, "listar", data);
                app.sys.tabs(this.href);
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
            this.UserIdGG = null;
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
            this.UserIdGG = this.row[14];
            this.VCard = this.row[15];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            if (this.optCad === "usuario") {
                this.biencode.modelo = "Usuario";
            } else if (this.optCad === "fisica") {
                this.biencode.modelo = "Cliente";
            } else if (this.optCad === "juridica") {
                this.biencode.modelo = "Empresa";
            }
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle");
            this.biencode.IdRevenda = this.IdRevenda;
            this.biencode.IdVendedor = this.IdVendedor;
            this.biencode.IdFunc = this.IdFunc;
            this.biencode.Senha = this.Senha;
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.IdConfig = this.IdConfig;
            this.biencode.Memorize = this.Memorize;
            this.biencode.UserIdFB = this.UserIdFB;
            this.biencode.UserIdGG = this.UserIdGG;
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Funcionarios)) {
                this.Funcionariosrc = [];
            } else {
                this.Funcionariosrc = app.Funcionarios.src;
            }
            if (nulo(app.Cliente)) {
                this.Clientesrc = [];
            } else {
                this.Clientesrc = app.Cliente.src;
            }
            if (nulo(app.Operacional)) {
                this.Operacionalsrc = [];
            } else {
                this.Operacionalsrc = app.Operacional.src;
            }
            if (nulo(app.Configuracao)) {
                this.Configuracaosrc = [];
            } else {
                this.Configuracaosrc = app.Configuracao.src;
            }
            if (nulo(app.Revenda)) {
                this.Revendasrc = [];
            } else {
                this.Revendasrc = app.Revenda.src;
            }
            if (nulo(app.Vendedor)) {
                this.Vendedorsrc = [];
            } else {
                this.Vendedorsrc = app.Vendedor.src;
            }

        },
        conectarFB() {
            app.sys.Status();
            app.Login.UserIdFB = app.sys.FB.getUserID();
        },
        setGG: function (e) {
            app.Login.UserIdGG = e.clientId;
        },
        conectarGG() {
            app.sys.oauthGoogle(app.Login.setGG);
        }
    }
});
