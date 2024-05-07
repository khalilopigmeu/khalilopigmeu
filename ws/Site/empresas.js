"use strict";
app["empresasanunciando"] = new Vue({
    el: '#empresasanunciando',
    data: {
        src: null,
        Host: "Bienestar/Gestao/Empresa/",
        pgid: null,
        fb: 'null',
        insta: 'null',
        site: 'null',

        logo: null,
        vouchers: null,
        anuncios: null,
        paginas: null,
        spy: null,

        consulta: null,
        procedimento: null,
        produtos: null,

        agenda: null,
        familiaselect: [],
        classeselect: [],
        categoriaselect: [],
        subcategoriaselect: [],
        produtopesq: "",
        itensporpagina: 6,
        pesquisa: null,
        video: false,
        idtime: 0,
        tipo: null,
        selectProduto: null,
        promoprodutos: [],
        promoprojetos: [],
        promoconsultas: [],
        promoprocedimento: [],
        anunciosSrc: null,
        Itemsrc: null,
        Pacotesrc: null,
        familiaprodutos: null,
        classeprodutos: null,
        categoriaprodutos: null,
        subcategoriaprodutos: null,
        modalidadeServico: 1,
        owl: [],
        qtdProd: {},
        page: null,
        conpro: null,

        PaginasAnunciante: [],
        PaginasLoja: [],
        flagProd: false,

        min: 1,
        max: 25,
        posicao: 0,
        Empresa: null,
        Email: null,
        Login: null,
        Senha: null,
        Cod: null,
        UF: null,
        CNAE: null,
        CRT: null,
        DataNasc: null,
        IE: null,
        Rg: null,
        CEP: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,
        RazaoSocial: null,
        NomeFantasia: null,
        Nome: null,
        Cnpj: null,
        Cpf: null,
        Telefone: null,
        IM: null,
        Celular: null,
        Cidade: null,
        optCad: "",
        eula: false,
        lgpd: false,
        loginbtn: null,
        Modelo: null,
        majority: false,
        ismajor: false,
        order: "RN",
        formato: "coluna",
        printpdf: false,
        TipoCatalogo: 1,
        print: 0,
        href: "Empresa"
    },
    methods: {
        buscar: function (refid) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty("Empresa")) {
                this.src = app.sys.system["Empresa"];
                app.empresasanunciando.src = app.sys.randomList(app.empresasanunciando.src);
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.id = refid;
                    app.empresasanunciando.Anunciante(this.biencode.id);
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("empresasanunciando", "listar", data);
                app.empresasanunciando.src = app.sys.randomList(app.empresasanunciando.src);
            }
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
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp[0].LogoURL;
                } else {
                    return "";
                }
            } else {
                return "";
            }
        },
        getFB: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, 'IdEmpresa');
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    var fb = temp[0].Facebook;
                    if (fb) {
                        return fb.replace("@", "");
                    }
                } else {
                    return null;
                }
            } else {
                return null;
            }
        },
        getInsta: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, 'IdEmpresa');
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    var ins = temp[0].Instagram;
                    if (ins) {
                        return ins.replace("@", "");
                    }
                } else {
                    return null;
                }
            } else {
                return null;
            }
        },
        getSite: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, 'IdEmpresa');
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp[0].Site;
                } else {
                    return null;
                }
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
        changeItensCount: function (nome) {
            app.sys.itemsPerPage[nome] = this.itensporpagina;
            app.sys.paginate(app.sys.sorter(app.sys.searchall(app.empresasanunciando.produtos, app.empresasanunciando.produtopesq), "DESC", "QtdMin"), 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
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
        EmpresaSelecionada: function (id) {
            var temp = app.sys.searchByID(this.src, id);
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp[0];
                } else {
                    return "";
                }
            } else {
                return "";
            }
        },
        Config: function (id) {
            var temp = app.sys.search(app.configuracaosite.src, id, "IdEmpresa");
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp[0];
                } else {
                    return "";
                }
            } else {
                return "";
            }
        },
        Anunciante: function (id) {
            var temp = app.sys.search(app.anunciante.src, id, "IdEmpresa");
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp[0];
                } else {
                    return "";
                }
            } else {
                return "";
            }
        },
        Pacotes: function (id) {
            var temp = app.sys.search(this.Pacotesrc, id, "IdEmpresa");
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp;
                } else {
                    return "";
                }
            } else {
                return "";
            }
        },
        Promocoes: function (id) {
            var temp = app.sys.search(this.Itemsrc, id, "IdEmpresa");
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp;
                } else {
                    return "";
                }
            } else {
                return "";
            }
        },
        Cupons: function (id) {
            var temp = app.sys.search(app.voucherbienclube.src, id, "IdEmpresa");
            if (typeof temp !== "undefined") {
                if (temp.length > 0) {
                    return temp;
                } else {
                    return "";
                }
            } else {
                return "";
            }
        },
        Divulgando: function () {
            var itens = app.sys.searchall(this.src, this.pesquisa);
            for (var i = 0; i <= itens.length - 1; i++) {
                if (this.Anunciante(itens[i]._id["$oid"]).Ativo === 'true'
                        || this.Promocoes(itens[i]._id["$oid"]).length > 0
                        || this.Pacotes(itens[i]._id["$oid"]).length > 0) {
                } else {
                    itens.splice(i, 1);
                }
            }
            return itens;
        },
        cast: function () {
            var url = $("#toOpen").attr("data-url");
            if (url !== null) {
                window.location.href = url;
            }
        },
        espiar: function (id) {
            this.spy = id;
            if (id == "loja") {
                this.loja();
            }
            if (id == "anunciante") {
                window.location.href = "index.php#anunciante";
            }
            if (id == "login") {
                $("#modalLoginSys").modal();
            }
            window.scrollTo({top: 0, behavior: 'smooth'});
        },
        carroCompra: function () {
            app.sidebarR.qtdProd = app.empresasanunciando.qtdProd;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.empresasanunciando.qtdProd));
            $("#menu-toggle-R .badge").html(Object.keys(app.empresasanunciando.qtdProd).length);
            $("#menu-toggle-R").popover('show');
            $(window).NotifySucesso("Adicionado a sacola");
            app.sidebarR.loja = false;
            app.sidebarR.loja = true;
        },
        dec: function (id) {
            var item = app.empresasanunciando.qtdProd[id];
            if (isNaN(item) || item === "") {
                item = 0;
            }
            if (item > 0) {
                item = item - 1;
            } else {
                item = 0;
            }
            $("#" + id).val(item);
            app.empresasanunciando.qtdProd[id] = item;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.empresasanunciando.qtdProd));
        },
        inc: function (id) {
            var item = app.empresasanunciando.qtdProd[id];
            if (isNaN(item) || item === "") {
                item = 0;
            }
            item = item + 1;
            $("#" + id).val(item);
            app.empresasanunciando.qtdProd[id] = item;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.empresasanunciando.qtdProd));
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
            var search = app.sys.search(app.midiasite.src, pesq, "IdAlbum");
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
        conteudo: function (id) {
            var search = app.sys.searchByID(this.Itemsrc, id)[0];
            var conteudo = "";
            if (!nulo(search.Procedimento) || search.Procedimento !== "null") {
                conteudo = app.sys.searchByID(this.procedimento, search.Procedimento);
                if (conteudo.length > 0) {
                    return conteudo[0].Descricao;
                } else {
                    return "-";
                }
            } else if (!nulo(search.Consulta) || search.Consulta !== "null") {
                conteudo = app.sys.searchByID(this.consulta, search.Consulta);
                if (conteudo.length > 0) {
                    return conteudo[0].Descricao;
                } else {
                    return "-";
                }
            } else if (!nulo(search.Produto) || search.Produto !== "null") {
                conteudo = app.sys.searchByID(this.produtos, search.Produto);
                if (conteudo.length > 0) {
                    return  conteudo[0].ResumoProduto;
                } else {
                    return "-";
                }
                /*} else if (!nulo(search.Projeto) || search.Projeto !== "null") {
                 conteudo = app.sys.searchByID(this.projetos, search.Projeto);
                 if (conteudo.length > 0) {
                 return "Projeto: " + conteudo.Nome;
                 } else {
                 return "-";
                 }*/
            } else {
                return "-";
            }
        },
        titulo: function (id) {
            var search = app.sys.searchByID(this.Itemsrc, id)[0];
            var titulo = "";
            if (!nulo(search.Procedimento) || search.Procedimento !== "null") {
                titulo = app.sys.searchByID(this.procedimento, search.Procedimento);
                if (titulo.length > 0) {
                    return "Procedimento: " + titulo[0].Nome;
                } else {
                    return "-";
                }
            } else if (!nulo(search.Consulta) || search.Consulta !== "null") {
                titulo = app.sys.searchByID(this.consulta, search.Consulta);
                if (titulo.length > 0) {
                    return "Consulta: " + titulo[0].Nome;
                } else {
                    return "-";
                }
            } else if (!nulo(search.Produto) || search.Produto !== "null") {
                titulo = app.sys.searchByID(this.produtos, search.Produto);
                if (titulo.length > 0) {
                    return "Produto: " + titulo[0].NomeProduto;
                } else {
                    return "-";
                }
                /*} else if (!nulo(search.Projeto) || search.Projeto !== "null") {
                 titulo = app.sys.searchByID(this.projetos, search.Projeto);
                 if (titulo.length > 0) {
                 return "Projeto: " + titulo[0].Nome;
                 } else {
                 return "-";
                 }*/
            } else {
                return "-";
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
                this.qtdProd[this.selectProduto._id['$oid']] = 1
            }
            this.loja();
        },
        buscaConsulta: function (id) {
            this.conpro = null;
            var item = app.sys.searchByID(this.consulta, id);
            this.conpro = item[0];
        },
        buscaProcedimento: function (id) {
            this.conpro = null;
            var item = app.sys.searchByID(this.procedimento, id);
            this.conpro = item[0];
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
                    pesq = app.sys.sorter(app.empresasanunciando.produtos, "ASC", "NomeProduto");
                    app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
                    break;
                case "DS":
                    pesq = app.sys.sorter(app.empresasanunciando.produtos, "DESC", "QtdMin");
                    app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
                    break;
                case "EN":
                    pesq = app.sys.sorter(app.empresasanunciando.produtos, "ASC", "QtdMin");
                    app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
                    break;
                case "ZA":
                    pesq = app.sys.sorter(app.empresasanunciando.produtos, "DESC", "NomeProduto");
                    app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
                    break;
                case "UP":
                    pesq = app.sys.sorter(app.empresasanunciando.produtos, "ASC", "Preco");
                    app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
                    break;
                case "DW":
                    pesq = app.sys.sorter(app.empresasanunciando.produtos, "DESC", "Preco");
                    app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
                    break;
            }
        },
        pesquisaprodutos: function () {
            var pesq = app.sys.sorter(app.sys.searchall(app.empresasanunciando.produtos, app.empresasanunciando.produtopesq), "DESC", "QtdMin");
            app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
        },
        pesquisaFamilia: function () {
            var pesq;
            if (app.empresasanunciando.familiaselect.length === 0) {
                pesq = app.sys.sorter(app.empresasanunciando.produtos, "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.empresasanunciando.produtos, app.empresasanunciando.familiaselect, "IdFamilia"), "DESC", "QtdMin");
                app.empresasanunciando.classeselect = [];
                app.empresasanunciando.categoriaselect = [];
                app.empresasanunciando.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
        },
        pesquisaClasse: function () {
            var pesq;
            if (app.empresasanunciando.classeselect.length === 0) {
                pesq = app.sys.sorter(app.sys.searchinArray(app.empresasanunciando.produtos, app.empresasanunciando.familiaselect, "IdFamilia"), "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.empresasanunciando.produtos, app.empresasanunciando.classeselect, "IdClasse"), "DESC", "QtdMin");
                app.empresasanunciando.categoriaselect = [];
                app.empresasanunciando.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
        },
        pesquisaCategoria: function () {
            var pesq;
            if (app.empresasanunciando.categoriaselect.length === 0) {
                pesq = app.sys.sorter(app.sys.searchinArray(app.empresasanunciando.produtos, app.empresasanunciando.classeselect, "IdClasse"), "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.empresasanunciando.produtos, app.empresasanunciando.categoriaselect, "IdCategoriaProduto"), "DESC", "QtdMin");
                app.empresasanunciando.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
        },
        pesquisaSubCategoria: function () {
            var pesq;
            if (app.empresasanunciando.subcategoriaselect.length === 0) {
                pesq = app.sys.sorter(app.sys.searchinArray(app.empresasanunciando.produtos, app.empresasanunciando.categoriaselect, "IdCategoriaProduto"), "DESC", "QtdMin");
            } else {
                pesq = app.sys.sorter(app.sys.searchinArray(app.empresasanunciando.produtos, app.empresasanunciando.subcategoriaselect, "IdSubCategoriaProduto"), "DESC", "QtdMin");
                app.empresasanunciando.subcategoriaselect = [];
            }
            app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
        },
        setPg: function (item) {
            this.page = item;
        },
        Criarpaginas: function () {
            app.sys.paginate(app.empresasanunciando.Divulgando(), 'AnuncianteSite', ["empresasanunciando", "PaginasAnunciante"]);
            app.sys.paginate(app.sys.sorter(app.sys.searchall(app.empresasanunciando.produtos, app.empresasanunciando.produtopesq), "DESC", "QtdMin"), 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
        },
        load: function () {
            app.sidebar.newmenu = [];
            app.empresasanunciando.addSpy("<i class='fas fa-arrow-left'</i> Voltar", "anunciante");
            app.empresasanunciando.addSpy("<i class='far fa-user-circle'></i> Login", "login");
            app.empresasanunciando.addSpy("<i class='fas fa-bullhorn'></i> Anúncio", "all");
            if (nulo(app.anunciante)) {
                this.anunciosSrc = [];
            } else {
                this.anunciosSrc = app.anunciante.src;
                app.empresasanunciando.addSpy("<i class='far fa-building'></i> Sobre", "associado");
                app.empresasanunciando.addSpy("<i class='fas fa-map-marker-alt'></i> Localização", "mapa");
            }
            if (nulo(app.FamiliaProdutosSite)) {
                this.familiaprodutos = [];
            } else {
                this.familiaprodutos = app.FamiliaProdutosSite.src;
            }
            if (nulo(app.ClasseProdutosSite)) {
                this.classeprodutos = [];
            } else {
                this.classeprodutos = app.ClasseProdutosSite.src;
            }
            if (nulo(app.CategoriaProdutosSite)) {
                this.categoriaprodutos = [];
            } else {
                this.categoriaprodutos = app.CategoriaProdutosSite.src;
            }
            if (nulo(app.SubcategoriaProdutosSite)) {
                this.subcategoriaprodutos = [];
            } else {
                this.subcategoriaprodutos = app.SubcategoriaProdutosSite.src;
            }
            if (nulo(app.ProdutosSite)) {
                this.produtos = [];
            } else {
                this.produtos = app.ProdutosSite.src;
                app.empresasanunciando.addSpy("<i class='fas fa-store'></i> Loja", "loja");
            }
            if (nulo(app.ProdutosSite)) {
                this.Pacotesrc = [];
            } else {
                this.Pacotesrc = app.PromocaoSite.Pacotesrc;
                app.empresasanunciando.addSpy("<i class='fas fa-boxes'></i> Pacotes", "combos");
            }
            if (nulo(app.ProdutosSite)) {
                this.Itemsrc = [];
            } else {
                this.Itemsrc = app.PromocaoSite.Itemsrc;
                app.empresasanunciando.addSpy("<i class='fas fa-percent'></i> Promoções", "promocao");
                for (var i = 0; i <= this.Itemsrc.length - 1; i++) {
                    var search = this.Itemsrc[i];
                    if (!nulo(search.Procedimento) || search.Procedimento !== "null") {
                        var valor = app.sys.searchByID(this.procedimento, search.Procedimento);
                        if (valor.length > 0) {
                            var idpromo = valor[0]._id['$oid'];
                            if (this.promoprocedimento.length > 0) {
                                if (!this.promoprocedimento.includes(idpromo)) {
                                    this.promoprocedimento.push(idpromo);
                                }
                            }
                        }
                    }
                    if (!nulo(search.Consulta) || search.Consulta !== "null") {
                        var valor = app.sys.searchByID(this.consulta, search.Consulta);
                        if (valor.length > 0) {
                            var idpromo = valor[0]._id['$oid'];
                            if (this.promoconsulta.length > 0) {
                                if (!this.promoconsulta.includes(idpromo)) {
                                    this.promoconsulta.push(idpromo);
                                }
                            }
                        }
                    }
                    if (!nulo(search.Produto) || search.Produto !== "null") {
                        var valor = app.sys.searchByID(this.produtos, search.Produto);
                        if (valor.length > 0) {
                            var idpromo = valor[0]._id['$oid'];
                            if (this.promoprodutos.length > 0) {
                                if (!this.promoprodutos.includes(idpromo)) {
                                    this.promoprodutos.push(idpromo);
                                }
                            }
                        }
                    }
                }
            }
            if (nulo(app.paginasite)) {
                this.paginas = [];
            } else {
                this.paginas = app.paginasite.src;
                app.empresasanunciando.addSpy("<i class='fas fa-globe'></i> Páginas", "pagina");
            }
            if (nulo(app.consultasite)) {
                this.consulta = [];
            } else {
                this.consulta = app.consultasite.src;
            }
            if (nulo(app.procedimentosite)) {
                this.procedimento = [];
            } else {
                this.procedimento = app.procedimentosite.src;
            }

            if (getParameterByName('spy') !== null) {
                this.espiar(getParameterByName('spy'));
            }
            this.Criarpaginas();
            if (nulo(window.localStorage.ismajor) || window.localStorage.ismajor === false) {
                if (app.empresasanunciando.Config(app.empresasanunciando.pgid).majority === 'true' || app.empresasanunciando.ismajor !== true) {
                    modalConfirm("empresasanunciando", "majority", "Esta é uma área com conteúdo para Maiores de 18 anos, esteja ciente caso deseje continuar.");
                    app.empresasanunciando.ismajor = true;
                    window.localStorage.ismajor = true;
                } else {
                    app.empresasanunciando.ismajor = false;
                }
            }
            $("#waiter").hide();
            if (!nulo(getParameterByName("pdid"))) {
                console.log(getParameterByName("pdid"));
                this.buscaProduto(getParameterByName("pdid"));
                $(function () {
                    $("#AboutProduto").modal();
                });
            }
        },
        catalogoProdutos: function (opt) {
            //|1 - estoque | 0 - encomenda|
            var itens = app.empresasanunciando.produtos;
            var selecionados = [];
            var step = 0;
            for (var i = 0; i <= itens.length - 1; i++) {
                if (itens[i].QtdMin == opt) {
                    selecionados[step] = itens[i];
                    step++;
                }
            }
            return selecionados;
        },
        resetPrint: function () {
            this.print = 0;
        },
        filtrarCatalogo: function (tipo) {
            app.empresasanunciando.TipoCatalogo = tipo;
            var pesq = app.empresasanunciando.produtos;
            var filt = [];
            for (var i = 0; i <= pesq.length - 1; i++) {
                if (tipo === 1) {
                    if (pesq[i].QtdMin === "1") {
                        filt.push(pesq[i]);
                    }
                } else if (tipo === 0) {
                    if (pesq[i].QtdMin === "0") {
                        filt.push(pesq[i]);
                    }
                } else {
                    filt = pesq;
                }
            }
            pesq = app.sys.sorter(app.sys.sorter(filt, "DESC", "QtdMin"), "ASC", "NomeProduto");
            app.sys.paginate(pesq, 'AnuncianteLoja', ["empresasanunciando", "PaginasLoja"]);
        },
        ImprimirCatalogo: function () {
            app.empresasanunciando.printpdf = true;
            $("#CatalogoDeProdutos").modal();
            $(function () {
                return new Swiper('.swipe', {
                    // Optional parameters
                    direction: 'horizontal',
                    loop: true,
                    autoplay: {
                        delay: 7000,
                    },
                    /*effect: 'creative',
                     creativeEffect: {
                     prev: {
                     // will set `translateZ(-400px)` on previous slides
                     translate: [0, 0, -400],
                     },
                     next: {
                     // will set `translateX(100%)` on next slides
                     translate: ['100%', 0, 0],
                     },
                     },
                     effect: 'cube',
                     cubeEffect: {
                     slideShadows: false,
                     },*/
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    /*effect: 'flip',
                     flipEffect: {
                     slideShadows: false,
                     },*/

                    /*pagination: {
                     el: '.swiper-pagination',
                     dynamicBullets: true,
                     clickable: true,
                     },*/
                    mousewheel: true,
                    keyboard: {
                        enabled: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    // And if we need scrollbar
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                });
            })
        },
        popin: function (item, index) {
            $("." + item).eq(index).closest("li").popover("show");
        },
        popout: function (item, index) {
            $("." + item).eq(index).closest("li").popover("hide");
        },
        share(item) {
            var sharer = window.location.href.split("#");
            navigator.share({
                title: item.NomeProduto,
                text: "Preço especial: " + this.HasPromo(item._id['$oid'], item.Preco) + "\n \n" + item.EspecificacaoProduto.replace(/<[^>]*>?/gm, '').replace(/&quot;/g, "") + "\n",
                url: +sharer[0] + "&pdid=" + item._id['$oid'] + "#" + sharer[1]
            });
        }
    },
});
        