"use strict";
app["empresasanunciando"] = new Vue({
    el: '#empresasanunciando',
    data: {
        src: null,
        Host: "Bienestar/Gerenciamento/Empresa/",
        pgid: null,
        fb: 'null',
        insta: 'null',
        site: 'null',
        logo: null,

        vouchers: null,
        anuncios: null,
        paginas: null,

        anunciosSrc: [],

        familiaprodutos: null,
        familiaselect: [],
        classeprodutos: null,
        classeselect: [],
        categoriaprodutos: null,
        categoriaselect: [],
        subcategoriaprodutos: null,
        subcategoriaselect: [],
        produtos: null,
        produtoselect: "",
        itensporpagina: 0,
        pesquisa: null,
        video: false,
        idtime: 0,
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                if (app.empresasanunciando.pgid !== null) {
                    this.biencode.id = app.empresasanunciando.pgid;
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("empresasanunciando", "listar", data);
                setAuth(preauth);
                app.empresasanunciando.src = app.sys.randomList(app.empresasanunciando.src);
                if (this.video === true) {
                    this.stepvideo();
                }
            });
        },
        stepvideo: function () {
            this.video = true;
            if (this.idtime >= this.Empresa.length) {
                this.idtime == 0;
            }
            this.pgid = this.Empresa(this.idtime)._id['$oid'];
            app.anunciante.pgid = this.pgid;
            app.empresasanunciando.pgid = this.pgid;
            app.sys.seo("anuncio", this.pgid);
            app.configuracaosite.buscar();
            app.paginasite.buscar();
            app.FamiliaProdutosSite.buscar();
            app.ClasseProdutosSite.buscar();
            app.CategoriaProdutosSite.buscar();
            app.SubcategoriaProdutosSite.buscar();
            app.ProdutosSite.buscar();
            this.stepIdTime();
            this.video = false;
        },
        stepIdTime() {
            this.idtime++;
        },
        cleanwap: function (number) {
            var num = number.replace(/[^\w\s]/gi, '');
            return num.replace(/\s/g, '');
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
        getLogo: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                return temp[0].LogoURL;
            } else {
                return "";
            }
        },
        getFB: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                var fb = temp[0].Facebook;
                if (fb) {
                    return fb.replace("@", "");
                }
            } else {
                return null;
            }
        },
        getInsta: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                var ins = temp[0].Instagram;
                if (ins) {
                    return ins.replace("@", "");
                }
            } else {
                return null;
            }
        },
        getSite: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, 'IdEmpresa');
            if (temp.length > 0) {
                return temp[0].Site;
            } else {
                return null;
            }
        },
        onselect: function (element) {
            switch (element) {
                case "familia":
                    this.familiaselect = this.IdFamilia;
                    break;
                case "classe":
                    this.classeselect = this.IdClasse;
                    break;
                case "categoria":
                    this.categoriaselect = this.IdCategoriaProduto;
                    break;
                case "subcategoria":
                    this.subcategoriaselect = this.IdSubCategoriaProduto;
                    break;
                case "produtos":
                    this.produtoselect = this.id;
                    break;
            }
        },
        getFamilia: function (srcpesq) {
            let list = [];
            let source;
            if (srcpesq === null) {
                source = this.src;
            } else {
                source = srcpesq;
            }
            for (var i = 0; i <= source.length - 1; i++) {
                list.push(source[i].IdFamilia);
            }
            return list.filter(app.sys.onlyUnique);
        },
        getClasse: function (srcpesq) {
            let list = [];
            let source;
            if (srcpesq === null) {
                source = this.src;
            } else {
                source = srcpesq;
            }
            for (var i = 0; i <= source.length - 1; i++) {
                list.push(source[i].IdClasse);
            }
            return list.filter(app.sys.onlyUnique);
        },
        getCategoria: function (srcpesq) {
            let list = [];
            let source;
            if (srcpesq === null) {
                source = this.src;
            } else {
                source = srcpesq;
            }
            for (var i = 0; i <= source.length - 1; i++) {
                list.push(source[i].IdClasse);
            }
            return list.filter(app.sys.onlyUnique);
        },
        getSubcategoria: function (srcpesq) {
            let list = [];
            let source;
            if (srcpesq === null) {
                source = this.src;
            } else {
                source = srcpesq;
            }
            for (var i = 0; i <= source.length - 1; i++) {
                list.push(source[i].IdSubCategoriaProduto);
            }
            return list.filter(app.sys.onlyUnique);
        },
        changeItensCount: function () {
            app.sys.itemsPerPage = this.itensporpagina;
        },
        autoList: function (src, opcao) {
            switch (opcao) {
                case "familia":
                    return app.sys.searchByID(src, this.getFamilia(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
                case "classe":
                    return app.sys.searchByID(src, this.getClasse(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
                case "categoria":
                    return app.sys.searchByID(src, this.getCategoria(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
                case "subcategoria":
                    return app.sys.searchByID(src, this.getSubcategoria(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
            }
        },
        Empresa: function (id) {
            if (!this.video) {
                return app.sys.searchByID(this.src, id)[0];
            } else {
                return this.src[this.idtime];
            }
        },
    },
});
        