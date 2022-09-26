"use strict",
//Text
app["Text"] = new Vue({
    el: '#Text',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-align-center"></i>',
        pesqTbl: "",
        Host: "Bienestar/Textos/Text/",

        DataPublicacao: null,
        DataPostagemText: null,
        TPredata: null,
        Text: null,
        IdCategoriaText: null,
        Titulo: null,
        IdAlbum: null,
        Resumo: null,

        CategoriaTextSrc: null,
        AlbumSrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            this.biencode.acesso = window.localStorage.getItem("IdLogin");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Text.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.IdEmpresa = null;
            this.DataPublicacao = null;
            this.DataPostagemText = null;
            this.TPredata = null;
            this.Text = null;
            this.IdCategoriaText = null;
            this.Titulo = null;
            this.IdAlbum = null;
            this.Resumo = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdCategoriaText = app.sys.foreignKeyRestore(this.CategoriaTextSrc, "Nome", this.row[1]);
            this.IdAlbum = app.sys.foreignKeyRestore(this.AlbumSrc, "NomeAlbum", this.row[2]);
            this.Titulo = this.row[3];
            this.Resumo = this.row[4];
            CKEDITOR.instances['resumotexto'].setData(unescapeHTML(this.Resumo))
            this.Text = this.row[5];
            CKEDITOR.instances['conteudotexto'].setData(unescapeHTML(this.Text))
            this.TPredata = this.row[6];
            CKEDITOR.instances['chamadatexto'].setData(unescapeHTML(this.TPredata))
            this.DataPublicacao = this.row[7];
            this.DataPostagemText = this.row[8];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
            this.biencode.DataPublicacao = this.DataPublicacao;
            this.biencode.DataPostagemText = this.DataPostagemText;
            this.TPredata = CKEDITOR.instances['chamadatexto'].getData();
            this.biencode.TPredata = this.TPredata;
            this.Text = CKEDITOR.instances['conteudotexto'].getData();
            this.biencode.Text = this.Text;
            this.biencode.CategoriaText = this.IdCategoriaText;
            this.biencode.Titulo = this.Titulo;
            this.biencode.IdAlbum = this.IdAlbum;
            this.Resumo = CKEDITOR.instances['resumotexto'].getData();
            this.biencode.Resumo = this.Resumo;
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
            if (nulo(app.CategoriaText)) {
                this.CategoriaTextSrc = [];
            } else {
                this.CategoriaTextSrc = app.CategoriaText.src;
            }
            if (nulo(app.Album)) {
                this.AlbumSrc = [];
            } else {
                this.AlbumSrc = app.Album.src;
            }
        }
    }
});
