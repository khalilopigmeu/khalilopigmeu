"use strict",
//SubComponente
app["SubComponente"] = new Vue({
    el: '#SubComponente',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Inventario/SubComponente/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate:[],

        Nome: null,
        IdComponente: null,
        DataAquisicao: null,
        ativo: null,
        IdEtag: null,
        Seguro: null,
        Valor: null,
        Fornecedor: null,
        Manutencao: null,
        Marca: null,
        Modelo: null,
        Especificacao: null,
        Garantia: null,
        Observacao: null,

        ComponenteSrc: null,
        FornecedorSrc: null,
        EtagSrc: null,
    },
    methods: {
        populate: function (e) {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            this.biencode.data = app.AnotacaoAgenda.datapesq;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.SubComponente.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Nome = null;
            this.IdComponente = null;
            this.DataAquisicao = null;
            this.Ativo = null;
            this.IdEtag = null;
            this.Seguro = null;
            this.Valor = null;
            this.Fornecedor = null;
            this.Manutencao = null;
            this.Marca = null;
            this.Modelo = null;
            this.Especificacao = null;
            this.Garantia = null;
            this.Observacao = null;
            CKEDITOR.instances['especificacaoscomponente'].setData("");
            CKEDITOR.instances['observacaoscomponente'].setData("");
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdComponente = this.row[1];
            this.IdEtag = this.row[2];
            this.Nome = this.row[3];
            this.DataAquisicao = this.row[4];
            this.Ativo = this.row[5];
            this.Seguro = this.row[6];
            this.Valor = this.row[7];
            this.Fornecedor = this.row[8];
            this.Manutencao = this.row[9];
            this.Marca = this.row[10];
            this.Modelo = this.row[11];
            this.Especificacao = this.row[12];
            this.Garantia = this.row[13];
            this.Observacao = this.row[14];
            CKEDITOR.instances['especificacaocomponente'].setData(unescapeHTML(this.Especificacao));
            CKEDITOR.instances['observacaocomponente'].setData(unescapeHTML(this.Observacao));
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Nome = this.Nome;
            this.biencode.IdComponente = this.IdComponente;
            this.biencode.DataAquisicao = this.DataAquisicao;
            this.biencode.Ativo = this.Ativo;
            this.biencode.IdEtag = this.IdEtag;
            this.biencode.Seguro = this.Seguro;
            this.biencode.Valor = this.Valor;
            this.biencode.Fornecedor = this.Fornecedor;
            this.biencode.Manutencao = this.Manutencao;
            this.biencode.Marca = this.Marca;
            this.biencode.Modelo = this.Modelo;
            this.Especificacao = CKEDITOR.instances['especificacaocomponente'].getData();
            this.biencode.Especificacao = this.Especificacao;
            this.biencode.Garantia = this.Garantia;
            this.Observacao = CKEDITOR.instances['observacaocomponente'].getData();
            this.biencode.Observacao = this.Observacao;
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
            if (nulo(app.Componente)) {
                this.ComponenteSrc = [];
            } else {
                this.ComponenteSrc = app.Componente.src;
            }
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
            
        }
    }
});