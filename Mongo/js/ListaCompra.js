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

        IdLogin: null,
        Cliente: null,
        Produtos: null,
        DataLista: null,
        NomeLista: null,
        Solicitacao: false,

        listaProdutos: [],
        lineRow: [],
        Clientesrc: [],
        pesqCliente: "",

        familiaprodutos: null,
        familiaselect: [],
        classeprodutos: null,
        classeselect: [],
        categoriaprodutos: null,
        categoriaselect: [],
        subcategoriaprodutos: null,
        subcategoriaselect: [],
        produtos: [],
        produtoselect: null,
        itensporpagina: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.ListaCompra.href, "listar", data);
                app.PedidoVenda.ListaCompraSrc = app.ListaCompra.src;
            });
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
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        changeItensCount: function () {
            app.sys.itemsPerPage = this.itensporpagina;
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
        }
    }
});