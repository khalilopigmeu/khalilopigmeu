"use strict",
//Dicionario
app["Dicionario"] = new Vue({
    el: '#Dicionario',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Ferramentas/dicionario/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate:[],

        JP: null,
        FR: null,
        ES: null,
        EN: null,
        PT: null,
        CH: null,
        DE: null,
        IT: null,
        AR: null,
    },
    methods: {
        populate: function (e) {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Dicionario.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.JP = null;
            this.FR = null;
            this.ES = null;
            this.EN = null;
            this.PT = null;
            this.CH = null;
            this.DE = null;
            this.IT = null;
            this.AR = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.PT = this.row[1];
            this.EN = this.row[2];
            this.ES = this.row[3];
            this.FR = this.row[4];
            this.DE = this.row[5];
            this.IT = this.row[6];
            this.JP = this.row[7];
            this.AR = this.row[8];
            this.CH = this.row[9];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.JP = this.JP;
            this.biencode.FR = this.FR;
            this.biencode.ES = this.ES;
            this.biencode.EN = this.EN;
            this.biencode.PT = this.PT;
            this.biencode.CH = this.CH;
            this.biencode.DE = this.DE;
            this.biencode.IT = this.IT;
            this.biencode.AR = this.AR;
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
            this.evtDataCal = "alt";
        },
        rel: function () {
            this.evtDataCal = "rel";
        },
        exc: function () {
            this.evtDataCal = "exc";
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            
        },
    }
});
