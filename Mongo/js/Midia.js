"use strict",
//Midia
app["Midia"] = new Vue({
    el: '#Midia',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-file"></i>',
        pesqTbl: "",
        Host: "Bienestar/Midia/Midias/",

        UrlMidia: null,
        DescricaoMidia: null,
        IdAlbum: null,
        Tipo: null,
        NomeMidia: null,
        Categorias: null,
        IdProduto: null,
        Ativo: null,
        nomes: [],
        descricao: [],
        files: [],
        fileBox: [],
        pesqAlbum: "",
        pesqCategoria: "",
        pesqProduto: "",
        importar: null,
        AlbumSrc: null,
        CategoriaSrc: null,
        ProdutoSrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Midia.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.UrlMidia = null;
            this.DescricaoMidia = null;
            this.IdAlbum = null;
            this.Tipo = null;
            this.NomeMidia = null;
            this.Categorias = null;
            this.IdProduto = null;
            this.Ativo = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdAlbum = app.sys.foreignKeyRestore(this.AlbumSrc, "NomeAlbum", this.row[1]);
            this.Categorias = app.sys.foreignKeyRestore(this.CategoriaSrc, "NomeCategoria", this.row[2]);
            this.IdProduto = app.sys.foreignKeyRestore(this.ProdutoSrc, "NomeProduto", this.row[3]);
            this.NomeMidia = this.row[4];
            this.UrlMidia = this.row[5];
            this.DescricaoMidia = this.row[6];
            this.Tipo = this.row[7];
            this.Ativo = this.row[8];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.UrlMidia = this.UrlMidia;
            this.biencode.DescricaoMidia = this.DescricaoMidia;
            this.biencode.IdAlbum = this.IdAlbum;
            this.biencode.Tipo = this.Tipo;
            this.biencode.NomeMidia = this.NomeMidia;
            this.biencode.Categorias = this.Categorias;
            this.biencode.IdProduto = this.IdProduto;
            this.biencode.Ativo = this.Ativo;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            if (app.Midia.fileBox.lenght > 0) {
                this.biencode = {};
                this.biencode.nomes = {};
                this.biencode.descricao = {};
                this.biencode.files = {};
                for (var i = 0; i <= app.Midia.fileBox.length - 1; i++) {
                    this.biencode.nomes[i] = (app.Midia.fileBox[i].name);
                    this.biencode.descricao[i] = (app.Midia.fileBox[i].lastModifiedDate);
                    this.biencode.files[i] = (this.files[i]);
                }
                this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    "biencode": encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(this.href, "add", data);
            } else {
                app.sys.crud(this.href, "add", null);
            }
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
        previewFiles: function (event) {
            for (var i = 0; i <= event.target.files.length - 1; i++) {
                this.fileBox[i] = event.target.files[i];
                this.nomes[i] = this.fileBox[i].name;
                this.getBase64(this.fileBox[i]);
                this.descricao[i] = "";
            }
        },
        getBase64: function (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                app.Midia.files.push(reader.result);
            };
        },
        load: function () {
            if (nulo(app.Album)) {
                this.AlbumSrc = [];
            } else {
                this.AlbumSrc = app.Album.src;
            }
            if (nulo(app.CategoriaEventos)) {
                this.CategoriaSrc = [];
            } else {
                this.CategoriaSrc = app.CategoriaEventos.src;
            }
            if (nulo(app.Produto)) {
                this.ProdutoSrc = [];
            } else {
                this.ProdutoSrc = app.Produto.src;
            }
        },
    }
});