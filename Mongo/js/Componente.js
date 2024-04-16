"use strict",
//Componente
app["Componente"] = new Vue({
    el: '#Componente',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Inventario/Componente/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],

        Especificacao: null,
        Observacao: null,
        Modelo: null,
        Marca: null,
        Nome: null,
        IdEtag: null,
        DataAquisicao: null,
        ativo: null,
        Seguro: null,
        Valor: null,
        Fornecedor: null,
        Manutencao: null,
        Garantia: null,

        FornecedorSrc: null,
        EtagSrc: null,
    },
    methods: {
        populate: function (e) {
            if (app.sys.system.hasOwnProperty(this.href)) {
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
                app.sys.crud(app.Componente.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.Especificacao = null;
            this.Observacao = null;
            this.Modelo = null;
            this.Marca = null;
            this.Nome = null;
            this.IdEtag = null;
            this.DataAquisicao = null;
            this.ativo = null;
            this.Seguro = null;
            this.Valor = null;
            this.Fornecedor = null;
            this.Manutencao = null;
            this.Garantia = null;
            CKEDITOR.instances['especificacaocomponente'].setData("");
            CKEDITOR.instances['observacaocomponente'].setData("");
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Especificacao = this.row[5];
            CKEDITOR.instances['especificacaocomponente'].setData(unescapeHTML(this.Especificacao));
            this.Observacao = this.row[6];
            CKEDITOR.instances['observacaocomponente'].setData(unescapeHTML(this.Observacao));
            this.Modelo = this.row[4];
            this.Marca = this.row[3];
            this.Nome = this.row[2];
            this.IdEtag = this.row[1];
            this.DataAquisicao = this.row[7];
            this.ativo = this.row[8];
            this.Seguro = this.row[9];
            this.Valor = this.row[10];
            this.Fornecedor = this.row[11];
            this.Manutencao = this.row[12];
            this.Garantia = this.row[13];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.Especificacao = CKEDITOR.instances['especificacaocomponente'].getData();
            this.biencode.Especificacao = this.Especificacao;
            this.Observacao = CKEDITOR.instances['observacaocomponente'].getData();
            this.biencode.Observacao = this.Observacao;
            this.biencode.Modelo = this.Modelo;
            this.biencode.Marca = this.Marca;
            this.biencode.Nome = this.Nome;
            this.biencode.IdEtag = this.IdEtag;
            this.biencode.DataAquisicao = this.DataAquisicao;
            this.biencode.ativo = this.ativo;
            this.biencode.Seguro = this.Seguro;
            this.biencode.Valor = this.Valor;
            this.biencode.Fornecedor = this.Fornecedor;
            this.biencode.Manutencao = this.Manutencao;
            this.biencode.Garantia = this.Garantia;
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
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Fornecedor)) {
                this.FornecedorSrc = [];
            } else {
                this.FornecedorSrc = app.Fornecedor.src;
            }
            if (nulo(app.Etag)) {
                this.EtagSrc = [];
            } else {
                this.EtagSrc = app.Etag.src;
            }

        },
    }
});
