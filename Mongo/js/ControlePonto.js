"use strict",
//ControlePonto
app["ControlePonto"] = new Vue({
    el: '#ControlePonto',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Sistema/ControlePonto/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",

        HEntra: null,
        IdPonto: null,
        HExtra: null,
        HSaida: null,
        Data: null,
        HAlmoco: null,
        HRetorno: null,
        Justificativa: null,
        
        PontoSrc:null,
    },
    methods: {
        populate: function (e) {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.ControlePonto.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.IdPonto = null;
            this.HEntra = null;
            this.HAlmoco = null;
            this.HRetorno = null;
            this.HSaida = null;
            this.HExtra = null;
            this.Data = null;
            this.Justificativa = null;
        },
        autocomplete: function () {
            this.IdPonto = this.row[1];
            this.HEntra = this.row[2];
            this.HAlmoco = this.row[3];
            this.HRetorno = this.row[4];
            this.HSaida = this.row[5];
            this.HExtra = this.row[6];
            this.Data = this.row[7];
            this.Justificativa = this.row[8];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdPonto = this.IdPonto;
            this.biencode.HEntra = this.HEntra;
            this.biencode.HAlmoco = this.HAlmoco;
            this.biencode.HRetorno = this.HRetorno;
            this.biencode.HSaida = this.HSaida;
            this.biencode.HExtra = this.HExtra;
            this.biencode.Data = this.Data;
            this.biencode.Justificativa = this.Justificativa;
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
        load: function () {
            if (nulo(app.Ponto)) {
                this.PontoSrc = [];
            } else {
                this.PontoSrc = app.Ponto.src;
            }
        },
    }
});