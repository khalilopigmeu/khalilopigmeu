"use strict",
//Anuncio
app["Anuncio"] = new Vue({
    el: '#Anuncio',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-bullhorn"></i>',
        pesqTbl: "",
        Host: "Bienestar/Anuncio/Anunciante/",
        paginate: [],

        IdCategoriaAnuncio: null,
        Conteudo: null,
        Descricao: null,
        Tipo: null,
        Ativo: null,
        Keywords: null,
        cpfcnpj: false,
        responsavel: false,
        endereco: false,
        telefone: false,
        site: false,
        whatsapp: false,
        facebook: false,
        instagram: false,

        Loginsrc: null,
        CategoriaAnuncioSrc: null,
    },
    methods: {
        populate: function () {
            if (app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Anuncio.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.Conteudo = null;
            this.IdCategoriaAnuncio = null;
            this.Keywords = null;
            this.Descricao = null;
            this.Ativo = null;
            this.Tipo = null;
            CKEDITOR.instances['conteudoanuncio'].setData("");
            CKEDITOR.instances['descricaoanuncio'].setData("")
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Conteudo = this.row[3];
            CKEDITOR.instances['conteudoanuncio'].setData(unescapeHTML(this.Conteudo))
            this.IdCategoriaAnuncio = app.sys.foreignKeyRestore(app.Anuncio.CategoriaAnuncioSrc, "Nome", this.row[1]);
            this.Ativo = parseBoolean(this.row[5]);
            this.Keywords = this.row[6];
            this.Descricao = this.row[4];
            CKEDITOR.instances['descricaoanuncio'].setData(unescapeHTML(this.Descricao))
            this.Tipo = this.row[2];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.Conteudo = CKEDITOR.instances['conteudoanuncio'].getData();
            this.biencode.Conteudo = this.Conteudo;
            this.biencode.IdCategoriaAnuncio = this.IdCategoriaAnuncio;
            this.biencode.Keywords = this.Keywords;
            this.Descricao = CKEDITOR.instances['descricaoanuncio'].getData();
            this.biencode.Descricao = this.Descricao;
            this.biencode.Tipo = this.Tipo;
            this.biencode.Ativo = this.Ativo;
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
            if (nulo(app.Login)) {
                this.Loginsrc = [];
            } else {
                this.Loginsrc = app.Login.src;
            }
            if (nulo(app.CategoriaAnuncio)) {
                this.CategoriaAnuncioSrc = [];
            } else {
                this.CategoriaAnuncioSrc = app.CategoriaAnuncio.src;
            }

        },
    }
});
