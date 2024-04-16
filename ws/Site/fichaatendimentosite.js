"use strict";
app["fichaatendimentosite"] = new Vue({
    el: '#fichaatendimentosite',
    data: {
        src: null,
        Host: "Bienestar/Clinica/FichaAtendimento/",
        evtDataCal: null,
        stepkey: 0,
        href: null,
        biencode: null,
        row: null,
        id: null,
        ELtitle: null,
        Icon: '',
        pesqTbl: "",
        paginate: [],

        IdCliente: null,
        Consulta: [],
        Procedimento: [],
        DataAtendimento: null,
        HoraAtendimento: null,
        Valor: null,
        LinkAnamnese: null,
        Observacao: null,
        Status: null,
        Registrado: null,
        Evento: null,
        flag: true,

        Procedimentosrc: null,
        Clientesrc: null,
        Consultasrc: null,
        eventos: null,

        PromocaoSrc: null,
        Promocao: null,
        href: "FichaAtendimento"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("FichaAtendimento")) {
                this.src = app.sys.system["FichaAtendimento"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.cliente = refid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("fichaatendimentosite", "listar", data);
            }
        },
        clear: function () {
            this.IdCliente = null;
            this.Consulta = null;
            this.Procedimento = null;
            this.Observacao = null;
            this.DataAtendimento = null;
            this.HoraAtendimento = null;
            this.Valor = null;
            this.LinkAnamnese = null;
            this.Status = null;
            this.Registrado = null;
        },
        checkForm: function () {

        },
        autocomplete: function () {
            this.IdCliente = this.row[1];
            this.Consulta = this.row[2];
            this.Procedimento = this.row[3];
            this.Observacao = this.row[4];
            this.DataAtendimento = this.row[5];
            this.HoraAtendimento = this.row[6];
            this.Valor = this.row[7];
            this.LinkAnamnese = this.row[8];
            this.Status = parseBoolean(this.row[9]);
            this.Registrado = parseBoolean(this.row[10]);
        },
        ravec: function (nivel) {
            return true;
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
    }
});
        