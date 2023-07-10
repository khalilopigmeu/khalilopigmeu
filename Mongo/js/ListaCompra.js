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
    },
    methods: {
        populate: function () {
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.ListaCompra.href, "listar", data);
            app.sys.tabs(this.href);
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
        autoList: function (src, opcao) {
            switch (opcao) {
                case "familia":
                    return app.sys.searchByID(src, app.Produto.getFamilia(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
                case "classe":
                    return app.sys.searchByID(src, app.Produto.getClasse(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
                case "categoria":
                    return app.sys.searchByID(src, app.Produto.getCategoria(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
                case "subcategoria":
                    return app.sys.searchByID(src, app.Produto.getSubcategoria(app.sys.searchall(this.produtos, this.produtoselect)));
                    break;
            }
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
            valor = parseFloat(valor);
            qtd = parseFloat(qtd);
            return parseFloat(valor * qtd).toFixed(2);
        },
        removerItem: function (row) {
            this.listaProdutos.splice(row, 1);
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
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
    }
});