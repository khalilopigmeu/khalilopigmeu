"use strict",
//ListaCompra
app["ListaCompra"] = new Vue({
    el: '#ListaCompra',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-list-ol"></i>',
        pesqTbl: "",
        Host: "Bienestar/Loja/ListaLoja/",
        paginate: [],

        IdLogin: null,
        Cliente: null,
        Produtos: null,
        DataLista: null,
        NomeLista: null,
        Solicitacao: false,

        listaProdutos: [],
        lineRow: [],
        pesqCliente: "",
        PaginasLoja: [],
     
        familiaselect: [],
        classeselect: [],
        categoriaselect: [],
        subcategoriaselect: [],
        produtoselect: null,
        itensporpagina: null,

        Clientesrc: null,
        familiaprodutos: null,
        classeprodutos: null,
        categoriaprodutos: null,
        subcategoriaprodutos: null,
        produtos: null,
        produtopesq: null,
        order: null,
        formato: "coluna",
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
                app.sys.crud(app.ListaCompra.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.IdLogin = null;
            this.Cliente = null;
            this.Produtos = null;
            this.listaProdutos = [];
            this.DataLista = null;
            this.NomeLista = null;
            this.Solicitacao = false;
        },
        autocomplete: function () {
            this.Solicitacao = this.row[6];
            try {
                this.listaProdutos = eval(this.row[5]);
            } catch (e) {
                this.listaProdutos = [];
            }
            this.Cliente = this.row[4];
            this.DataLista = this.row[3];
            this.NomeLista = this.row[2];
            this.IdLogin = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Solicitacao = this.Solicitacao;
            this.DataLista = dataAtualFormatada();
            this.IdLogin = window.localStorage.getItem("IdLogin");
            this.biencode.DataLista = this.DataLista;
            this.biencode.NomeLista = this.NomeLista;
            this.biencode.Produtos = this.listaProdutos;
            this.biencode.Cliente = this.Cliente;
            this.biencode.IdLogin = this.IdLogin;
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
        changeItensCount: function (item) {
            app.sys.itemsPerPage[item] = this.itensporpagina;
        },
        addTblLista: function (itens) {
            this.listaProdutos.push({"produto": itens._id["$oid"], "qtd": 1});
            this.lineRow[this.listaProdutos.length - 1] = 1;
        },
        updateLista: function (row) {
            this.listaProdutos[row].qtd = this.lineRow[row];
        },
        lista: function (id) {
            var filtro = this.listaProdutos.filter(i => id.includes(i["produto"]));
            if (filtro.length < 1) {
                this.listaProdutos.push({"produto": id, "qtd": 1});
            }
        },
        Total: function (valor, qtd) {
            valor = parseFloat(valor.replace(",","."));
            return parseFloat(valor * qtd);
        },
        removerItem: function (row) {
            this.listaProdutos.splice(row, 1);
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
            app.sys.paginate(app.sys.sorter(app.sys.searchall(app.Produto.src, app.ListaCompra.produtopesq), "DESC", "QtdMin"), this.href, [this.href, "PaginasLoja"]);
        },
        load: function () {
            if (nulo(app.Cliente)) {
                this.Clientesrc = [];
            } else {
                this.Clientesrc = app.Cliente.src;
            }
            if (nulo(app.FamiliaProdutos)) {
                this.familiaprodutos = [];
            } else {
                this.familiaprodutos = app.FamiliaProdutos.src;
            }
            if (nulo(app.ClasseProdutos)) {
                this.classeprodutos = [];
            } else {
                this.classeprodutos = app.ClasseProdutos.src;
            }
            if (nulo(app.CategoriaProdutos)) {
                this.categoriaprodutos = [];
            } else {
                this.categoriaprodutos = app.CategoriaProdutos.src;
            }
            if (nulo(app.SubcategoriaProdutos)) {
                this.subcategoriaprodutos = [];
            } else {
                this.subcategoriaprodutos = app.SubcategoriaProdutos.src;
            }
            if (nulo(app.Produto)) {
                this.produtos = [];
            } else {
                this.produtos = app.Produto.src;
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
                    this.produtopesq = this.id;
                    break;
            }
        },
        getFamilia: function (srcpesq) {
            let list = [];
            let source;
            if (srcpesq === null) {
                source = this.produtos;
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
                source = this.produtos;
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
                source = this.produtos;
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
                source = this.produtos;
            } else {
                source = srcpesq;
            }
            for (var i = 0; i <= source.length - 1; i++) {
                list.push(source[i].IdSubCategoriaProduto);
            }
            return list.filter(app.sys.onlyUnique);
        },
        autoList: function (src, opcao) {
            switch (opcao) {
                case "familia":
                    return app.sys.searchByID(src, this.getFamilia(app.sys.searchall(this.produtos, this.produtopesq)));
                    break;
                case "classe":
                    return app.sys.searchByID(src, this.getClasse(app.sys.searchall(this.produtos, this.produtopesq)));
                    break;
                case "categoria":
                    return app.sys.searchByID(src, this.getCategoria(app.sys.searchall(this.produtos, this.produtopesq)));
                    break;
                case "subcategoria":
                    return app.sys.searchByID(src, this.getSubcategoria(app.sys.searchall(this.produtos, this.produtopesq)));
                    break;
            }
        },
        carroCompra: function () {
            app.sidebarR.qtdProd = app.ListaCompra.qtdProd;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.ListaCompra.qtdProd));
            $("#menu-toggle-R .badge").html(Object.keys(app.ListaCompra.qtdProd).length);
            $("#menu-toggle-R").popover('show');
            $(window).NotifySucesso("Adicionado a sacola");
            app.sidebarR.loja = false;
            app.sidebarR.loja = true;
        },
        dec: function (id) {
            var item = app.ListaCompra.qtdProd[id];
            if (isNaN(item) || item === "") {
                item = 0;
            }
            if (item > 0) {
                item = item - 1;
            } else {
                item = 0;
            }
            $("#" + id).val(item);
            app.ListaCompra.qtdProd[id] = item;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.ListaCompra.qtdProd));
        },
        inc: function (id) {
            var item = app.ListaCompra.qtdProd[id];
            if (isNaN(item) || item === "") {
                item = 0;
            }
            item = item + 1;
            $("#" + id).val(item);
            app.ListaCompra.qtdProd[id] = item;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.ListaCompra.qtdProd));
        },
        loja: function () {
            $(function () {
                $(".pro-qty").on("click", '.product__details__pic__slider img', function () {
                    var imgurl = $(this).data('imgbigurl');
                    var bigImg = $('.product__details__pic__item--large').attr('src');
                    if (imgurl !== bigImg) {
                        $('.product__details__pic__item--large').attr({
                            src: imgurl
                        });
                    }
                });
                app.sys.setColorSite();
            });
        },
        addSpy: function (nome, href) {
            app.sidebar.newmenu.push({"nome": nome, "href": href});
        },
        Midias: function (pesq) {
            var search = app.sys.search(app.Midia.src, pesq, "IdAlbum");
            if (search.length > 0) {
                return search;
            } else {
                return [{"UrlMidia": "/img/not-found.jpg"}];
            }
        },
        atualizaPreco: function (id) {
            var search = app.sys.searchByID(this.Itemsrc, id)[0];
            var valor = "";
            if (!nulo(search.Procedimento) || search.Procedimento !== "null") {
                valor = app.sys.searchByID(this.procedimento, search.Procedimento);
                if (valor.length > 0) {
                    return valor[0].Valor;
                } else {
                    return "0";
                }
            } else if (!nulo(search.Consulta) || search.Consulta !== "null") {
                valor = app.sys.searchByID(this.consulta, search.Consulta);
                if (valor.length > 0) {
                    return  valor[0].Valor;
                } else {
                    return "0";
                }
            } else if (!nulo(search.Produto) || search.Produto !== "null") {
                valor = app.sys.searchByID(this.produtos, search.Produto);
                if (valor.length > 0) {
                    var idpromo = valor[0]._id['$oid'];
                    if (this.promoprodutos.length > 0) {
                        if (!this.promoprodutos.includes(idpromo)) {
                            this.promoprodutos.push(idpromo);
                        }
                    }
                    return  valor[0].Preco;
                } else {
                    return "0";
                }
            } else {
                return "0";
            }
        },
        atualizaPrecoMin: function (item) {
            if (!nulo(item.LoteAtivo)) {
                switch (item.LoteAtivo) {
                    case "1":
                        return item.lote1;
                    case "2":
                        return item.lote2;
                    case "3":
                        return item.lote3;
                    case "4":
                        return item.lote4;
                    case "5":
                        return item.lote5;
                    default :
                        return item.lote5;
                }
            } else {
                return item.lote5;
            }
        },
        atualizaPrecoMax: function (id) {
            return this.atualizaPreco(id);
        },
        combo: function (preco, item) {
            preco = parseFloat(preco);
            if (nulo(item)) {
                switch (this.modalidadeServico) {
                    case "1":
                        var total = (preco * 1);
                        return total;
                    case "2":
                        var total = (preco * 3);
                        return total;
                    case "3":
                        var total = (preco * 6);
                        return total;
                    case "4":
                        var total = (preco * 12);
                        return total;
                    default :
                        return preco;
                }
            } else {
                switch (this.modalidadeServico) {
                    case "1":
                        var total = (preco * 1);
                        return total - (total * (parseFloat(item.mensal) / 100));
                    case "2":
                        var total = (preco * 3);
                        return total - (total * (parseFloat(item.trimestre) / 100));
                    case "3":
                        var total = (preco * 6);
                        return total - (total * (parseFloat(item.semestre) / 100));
                    case "4":
                        var total = (preco * 12);
                        return total - (total * (parseFloat(item.anual) / 100));
                    default :
                        return preco;
                }
            }
        },
        buscaProduto: function (id) {
            window.scroll({top: 0, behavior: "smooth"});
            if (this.flagProd === false) {
                this.flagProd = true;
            }
            this.selectProduto = null;
            var item = app.sys.searchByID(this.produtos, id);
            this.selectProduto = item[0];
            if (nulo(this.qtdProd[this.selectProduto._id['$oid']])) {
                this.qtdProd[this.selectProduto._id['$oid']] = 1;
            }
            this.loja();
        },
        HasPromo: function (id, preco) {
            var search = app.sys.searchall(this.Itemsrc, id)[0];
            var lote;
            if (!nulo(search)) {
                if (search.length > 0) {
                    if (!nulo(search.LoteAtivo)) {
                        switch (search.LoteAtivo) {
                            case "1":
                                lote = search.lote1;
                                return "de <del>R$ " + preco + "</del> por R$ " + search.lote1;
                            case "2":
                                lote = search.lote2;
                                return "de <del>R$ " + preco + "</del> por R$ " + search.lote2;
                            case "3":
                                lote = search.lote3;
                                return "de <del>R$ " + preco + "</del> por R$ " + search.lote3;
                            case "4":
                                lote = search.lote4;
                                return "de <del>R$ " + preco + "</del> por R$ " + search.lote4;
                            case "5":
                                lote = search.lote5;
                                return "de <del>R$ " + preco + "</del> por R$ " + search.lote5;
                            default :
                                lote = search.lote5;
                                return "de <del>R$ " + preco + "</del> por R$ " + search.lote5;
                        }
                    } else {
                        lote = search.lote5;
                        return "de <del>R$ " + preco + "</del> por R$ " + search.lote5;
                    }
                } else {
                    return "R$" + preco;
                }
            } else {
                return "R$" + preco;
            }
        },
        orderProdutos: function (order) {
            var pesq = null;
            switch (order) {
                case "RN":
                    pesq = app.sys.sorter(app.ListaCompra.produtos, "ASC", "NomeProduto");
                    app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
                    break;
                case "DS":
                    pesq = app.sys.sorter(app.ListaCompra.produtos, "DESC", "QtdMin");
                    app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
                    break;
                case "EN":
                    pesq = app.sys.sorter(app.ListaCompra.produtos, "ASC", "QtdMin");
                    app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
                    break;
                case "ZA":
                    pesq = app.sys.sorter(app.ListaCompra.produtos, "DESC", "NomeProduto");
                    app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
                    break;
                case "UP":
                    pesq = app.sys.sorter(app.ListaCompra.produtos, "ASC", "Preco");
                    app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
                    break;
                case "DW":
                    pesq = app.sys.sorter(app.ListaCompra.produtos, "DESC", "Preco");
                    app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
                    break;
            }
        },
        pesquisaprodutos: function () {
            var pesq = app.sys.sorter(app.sys.searchall(app.ListaCompra.produtos, app.ListaCompra.produtopesq), "DESC", "QtdMin");
            app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
        },
        pesquisaFamilia: function () {
            var pesq;
            if (app.ListaCompra.familiaselect.length === 0) {
                pesq = app.sys.sorter(app.ListaCompra.produtos, "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.ListaCompra.produtos, app.ListaCompra.familiaselect, "IdFamilia"), "DESC", "QtdMin");
                app.ListaCompra.classeselect = [];
                app.ListaCompra.categoriaselect = [];
                app.ListaCompra.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
        },
        pesquisaClasse: function () {
            var pesq;
            if (app.ListaCompra.classeselect.length === 0) {
                pesq = app.sys.sorter(app.sys.searchinArray(app.ListaCompra.produtos, app.ListaCompra.familiaselect, "IdFamilia"), "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.ListaCompra.produtos, app.ListaCompra.classeselect, "IdClasse"), "DESC", "QtdMin");
                app.ListaCompra.categoriaselect = [];
                app.ListaCompra.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
        },
        pesquisaCategoria: function () {
            var pesq;
            if (app.ListaCompra.categoriaselect.length === 0) {
                pesq = app.sys.sorter(app.sys.searchinArray(app.ListaCompra.produtos, app.ListaCompra.classeselect, "IdClasse"), "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.ListaCompra.produtos, app.ListaCompra.categoriaselect, "IdCategoriaProduto"), "DESC", "QtdMin");
                app.ListaCompra.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
        },
        pesquisaSubCategoria: function () {
            var pesq;
            if (app.ListaCompra.subcategoriaselect.length === 0) {
                pesq = app.sys.sorter(app.sys.searchinArray(app.ListaCompra.produtos, app.ListaCompra.categoriaselect, "IdCategoriaProduto"), "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.ListaCompra.produtos, app.ListaCompra.subcategoriaselect, "IdSubCategoriaProduto"), "DESC", "QtdMin");
                app.ListaCompra.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'ListaCompra', ["ListaCompra", "PaginasLoja"]);
        }
    }
});