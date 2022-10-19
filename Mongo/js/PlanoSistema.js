"use strict",
//PlanoSistema
app["PlanoSistema"] = new Vue({
    el: '#PlanoSistema',
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
        Host: "Bienestar/Sistema/PlanoSistema/",
        paginate:[],

        IdCategoriaPlanoSistema: null,
        CodPlano: null,
        Descricao: null,
        Valor: null,
        Link: null,
        
        CategoriaPlanoSistemaSrc:null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.PlanoSistema.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.IdCategoriaPlanoSistema = null;
            this.CodPlano = null;   
            this.Descricao = null;
            this.Valor = null;
            this.Link = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdCategoriaPlanoSistema = app.sys.foreignKeyRestore(this.CategoriaPlanoSistemaSrc, "NomeCategoria", this.row[1]);
            this.CodPlano = this.row[2];
            this.Descricao = this.row[3];
            this.Valor = this.row[4];
            this.Link = this.row[5];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdCategoriaPlanoSistema = this.IdCategoriaPlanoSistema;
            this.biencode.CodPlano = this.CodPlano;
            this.biencode.Descricao = this.Descricao;
            this.biencode.Valor = this.Valor;
            this.biencode.Descricao = this.Descricao;
            this.biencode.Link = this.Link;
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
            if (nulo(app.CategoriaPlanoSistema)) {
                this.CategoriaPlanoSistemaSrc = [];
            } else {
                this.CategoriaPlanoSistemaSrc = app.CategoriaPlanoSistema.src;
            }
            
        },
    }
});
