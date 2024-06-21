"use strict",
//Produto
app["Produto"] = new Vue({
    el: '#Produto',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-warehouse"></i>',
        pesqTbl: "",
        Host: "Bienestar/Produtos/Produto/",
        paginate: [],
        QtdMin: null,
        Caracteristicas: null,
        EspecificacaoProduto: null,
        ResumoProduto: null,
        DimensaoProduto: null,
        QtdEstoque: null,
        Preco: null,
        Peso: null,
        UnidComp: null,
        CodBarras: null,
        KeyWord: null,
        DataCriacao: null,
        UnidVend: null,
        DataValidade: null,
        NomeProduto: null,
        CodProduto: null,
        IdFamilia: null,
        IdCategoriaProduto: null,
        IdClasse: null,
        IdSubCategoriaProduto: null,
        IdFornecedor: null,
        pesqAlbum: null,
        IdAlbum: null,
        Contas: null,
        Tipo: null,
        Uso: null,
        Custo: null,
        ValorMercado: null,
        familiaselect: null,
        classeselect: null,
        categoriaselect: null,
        subcategoriaselect: null,
        produtoselect: null,
        FamiliaSrc: null,
        ClasseSrc: null,
        SubCategoriaSrc: null,
        CategoriaSrc: null,
        FornecedorSrc: null,
        AlbumSrc: null,
        Encargos: "14%+4,20",
        CustoComposto: "",
        Midia: "",
        Cotacao: "",
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Produto.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.QtdMin = null;
            this.Caracteristicas = null;
            this.EspecificacaoProduto = null;
            this.ResumoProduto = null;
            this.DimensaoProduto = null;
            this.QtdEstoque = null;
            this.Preco = null;
            this.Peso = null;
            this.UnidComp = null;
            this.CodBarras = null;
            this.KeyWord = null;
            this.DataCriacao = null;
            this.UnidVend = null;
            this.DataValidade = null;
            this.NomeProduto = null;
            this.CodProduto = null;
            this.IdFamilia = null;
            this.IdCategoriaProduto = null;
            this.IdClasse = null;
            this.IdSubCategoriaProduto = null;
            this.IdFornecedor = null;
            this.IdAlbum = null;
            this.Contas = null;
            this.Tipo = null;
            this.Uso = null;
            this.Custo = null;
            this.ValorMercado = null;
            this.Cotacao = null;
            this.id = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdFamilia = app.sys.foreignKeyRestore(this.FamiliaSrc, "TipoFamilia", this.row[1]);
            this.familiaselect = this.IdFamilia;
            this.IdClasse = app.sys.foreignKeyRestore(this.ClasseSrc, "TipoClasse", this.row[2]);
            this.classeselect = this.IdClasse;
            this.IdCategoriaProduto = app.sys.foreignKeyRestore(this.CategoriaSrc, "TipoCategoria", this.row[3]);
            this.categoriaselect = this.IdCategoriaProduto;
            this.IdSubCategoriaProduto = app.sys.foreignKeyRestore(this.SubCategoriaSrc, "TipoSubCategoria", this.row[4]);
            this.subcategoriaselect = this.IdSubCategoriaProduto;
            var fornecs = String(app.sys.foreignKeyRestore(this.FornecedorSrc, "Nome", this.row[5]));
            this.IdFornecedor = eval(fornecs.split(","));
            this.IdAlbum = app.sys.foreignKeyRestore(this.AlbumSrc, "NomeAlbum", this.row[6]);
            this.CodProduto = this.row[7];
            this.NomeProduto = this.row[8];
            this.Caracteristicas = this.row[9];
            CKEDITOR.instances['caracteristica'].setData(unescapeHTML(this.Caracteristicas));
            this.EspecificacaoProduto = this.row[10];
            CKEDITOR.instances['especificacao'].setData(unescapeHTML(this.EspecificacaoProduto));
            this.ResumoProduto = this.row[11];
            CKEDITOR.instances['resumo'].setData(unescapeHTML(this.ResumoProduto));
            this.Preco = this.row[12];
            this.Peso = this.row[13];
            this.DimensaoProduto = this.row[14];
            this.QtdMin = this.row[15];
            this.QtdEstoque = this.row[16];
            this.DataValidade = this.row[17];
            this.CodBarras = this.row[18];
            this.KeyWord = this.row[19];
            this.DataCriacao = this.row[20];
            this.UnidVend = this.row[21];
            this.Contas = this.row[22];
            this.Tipo = this.row[23];
            this.Uso = this.row[24];
            this.UnidComp = this.row[25];
            this.Custo = this.row[26];
            this.ValorMercado = this.row[27];
            this.Cotacao = eval(this.row[28]);
            for (var i = 0; i <= this.Cotacao.length - 1; i++) {
                var id = this.Cotacao[i].split("#")[0];
                var val = this.Cotacao[i].split("#")[1];
                document.getElementById("cot" + id).value = val;
            }
            app.sys.mascara();
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.QtdMin = this.QtdMin;
            this.Caracteristicas = CKEDITOR.instances['caracteristica'].getData();
            this.biencode.Caracteristicas = this.Caracteristicas;
            this.EspecificacaoProduto = CKEDITOR.instances['especificacao'].getData();
            this.biencode.EspecificacaoProduto = this.EspecificacaoProduto;
            this.ResumoProduto = CKEDITOR.instances['resumo'].getData();
            this.biencode.ResumoProduto = this.ResumoProduto;
            this.biencode.DimensaoProduto = this.DimensaoProduto;
            this.biencode.QtdEstoque = this.QtdEstoque;
            this.biencode.Preco = this.Preco;
            this.biencode.Peso = this.Peso;
            this.biencode.UnidComp = this.UnidComp;
            this.biencode.CodBarras = this.CodBarras;
            this.biencode.KeyWord = this.KeyWord;
            this.biencode.DataCriacao = this.DataCriacao;
            this.biencode.UnidVend = this.UnidVend;
            this.biencode.DataValidade = this.DataValidade;
            this.biencode.NomeProduto = this.NomeProduto;
            this.biencode.CodProduto = this.CodProduto;
            this.biencode.IdFamilia = this.IdFamilia;
            this.biencode.IdCategoriaProduto = this.IdCategoriaProduto;
            this.biencode.IdClasse = this.IdClasse;
            this.biencode.IdSubCategoriaProduto = this.IdSubCategoriaProduto;
            var fornec = "";
            if (!nulo(this.IdFornecedor)) {
                for (var i = 0; i <= this.IdFornecedor.length - 1; i++) {
                    fornec += this.IdFornecedor[i];
                    if (i < this.IdFornecedor.length - 1) {
                        fornec += ";";
                    }
                }
            } else {

            }
            this.biencode.IdFornecedor = fornec;
            var cotacao = "";
            if (!nulo(this.IdFornecedor)) {
                for (var i = 0; i <= this.IdFornecedor.length - 1; i++) {
                    cotacao += this.IdFornecedor[i] + "#" + document.getElementById("cot" + this.IdFornecedor[i]).value;
                    if (i < this.IdFornecedor.length - 1) {
                        cotacao += ";";
                    }
                }
            }
            this.biencode.Cotacao = cotacao;
            this.biencode.IdAlbum = this.IdAlbum;
            this.biencode.Contas = this.Contas;
            this.biencode.Tipo = this.Tipo;
            this.biencode.Uso = this.Uso;
            this.biencode.Custo = this.Custo;
            this.biencode.ValorMercado = this.ValorMercado;
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.FamiliaProdutos)) {
                this.FamiliaSrc = [];
            } else {
                this.FamiliaSrc = app.FamiliaProdutos.src;
            }
            if (nulo(app.ClasseProdutos)) {
                this.ClasseSrc = [];
            } else {
                this.ClasseSrc = app.ClasseProdutos.src;
            }
            if (nulo(app.SubcategoriaProdutos)) {
                this.SubCategoriaSrc = [];
            } else {
                this.SubCategoriaSrc = app.SubcategoriaProdutos.src;
            }
            if (nulo(app.CategoriaProdutos)) {
                this.CategoriaSrc = [];
            } else {
                this.CategoriaSrc = app.CategoriaProdutos.src;
            }
            if (nulo(app.Fornecedor)) {
                this.FornecedorSrc = [];
            } else {
                this.FornecedorSrc = app.Fornecedor.src;
            }
            if (nulo(app.Album)) {
                this.AlbumSrc = [];
            } else {
                this.AlbumSrc = app.Album.src;
            }

        },
        calcCusto: function () {
            var part = app.Produto.Encargos.split("%+");
            var percent = parseFloat(part[0]) / 100;
            var inteiro = parseFloat(part[1]);
            app.Produto.CustoComposto = parseFloat(app.Produto.Custo) + (parseFloat(app.Produto.Custo) * percent) + inteiro;
        },
        cotacao: function () {
            for (var i = 0; i <= this.IdFornecedor.length - 1; i++) {
                this.Cotacao[this.IdFornecedor[i]] = 0;
            }
        }

    }
});
