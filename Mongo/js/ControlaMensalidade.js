"use strict",
//ControleMensalidade
app["ControlaMensalidade"] = new Vue({
    el: '#ControlaMensalidade',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-hand-holding-usd"></i>',
        pesqTbl: "",
        Host: "Bienestar/Financeiro/ControlaMensalidade/",
        paginate: [],

        IdCliente: null,
        Modulos: [],
        DataPreferencia: null,

        Clientesrc: null,
        PlanoSistemaSrc: null,
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
                this.biencode.data = app.AnotacaoAgenda.datapesq;
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.ControlaMensalidade.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.IdCliente = null;
            this.Modulos = [];
            this.DataPreferencia = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdCliente = app.sys.foreignKeyRestore(this.Clientesrc, "Nome", this.row[1]);
            var x = String(app.sys.foreignKeyRestore(this.PlanoSistemaSrc, "CodPlano", this.row[2]));
            this.Modulos = eval(x.split(","));
            this.DataPreferencia = this.row[3];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.id = this.id;
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.Modulos = this.Modulos;
            this.biencode.DataPreferencia = this.DataPreferencia;
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
            if (nulo(app.Cliente)) {
                this.Clientesrc = [];
            } else {
                this.Clientesrc = app.Cliente.src;
            }
            if (nulo(app.PlanoSistema)) {
                this.PlanoSistemaSrc = [];
            } else {
                this.PlanoSistemaSrc = app.PlanoSistema.src;
            }

        },
    }
});
