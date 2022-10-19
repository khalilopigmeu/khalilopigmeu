"use strict",
//PedidoVenda
app["PedidoVenda"] = new Vue({
    el: '#PedidoVenda',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-shopping-basket"></i>',
        pesqTbl: "",
        Host: "Bienestar/Loja/PedidoVenda/",
        paginate: [],

        IdLista: null,
        IdLogin: null,
        IdCliente: null,
        DataPedido: null,
        ValorTotal: null,
        Desconto: 0,
        Frete: 0,
        Seguro: 0,
        Anotacao: null,
        Nfatura: null,
        Status: false,
        TotalProdutos: null,

        IdTransportadora: null,

        pesqCliente: "",

        entrega: null,
        Rg: null,
        CEP: null,
        UF: null,
        Cidade: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,

        Clientesrc: null,
        Produtosrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.PedidoVenda.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.IdLista = null;
            this.IdLogin = null;
            this.IdCliente = null;
            this.DataPedido = null;
            this.ValorTotal = null;
            this.Desconto = 0;
            this.Frete = 0;
            this.Seguro = 0;
            this.Anotacao = null;
            this.Nfatura = null;
            this.Status = false;

            this.CEP = null;
            this.Estado = null;
            this.Cidade = null;
            this.Bairro = null;
            this.Rua = null;
            this.Numero = null;
            this.Complemento = null;

            this.IdTransportadora = null;
        },
        autocomplete: function () {
            this.IdLista = this.row[1];
            this.IdLogin = this.row[2];
            this.IdCliente = this.row[3];
            this.DataPedido = this.row[4];
            this.ValorTotal = this.row[5];
            this.Desconto = this.row[6];
            this.Frete = this.row[7];
            this.Seguro = this.row[8];
            this.Anotacao = this.row[9];
            this.Nfatura = this.row[10];
            this.Status = this.row[11];
            this.CEP = this.row[12];
            this.UF = this.row[13];
            this.Cidade = this.row[14];
            this.Bairro = this.row[15];
            this.Rua = this.row[16];
            this.Numero = this.row[17];
            this.Complemento = this.row[18];
            this.IdTransportadora = this.row[19];
            this.id = this.row[0];
            this.atualizaPreco();
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Nfatura = this.Nfatura;
            this.IdLogin = window.localStorage.getItem("IdLogin");
            this.biencode.IdLogin = this.IdLogin;
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.IdLista = this.IdLista;
            this.DataPedido = dataAtualFormatada();
            this.biencode.DataPedido = this.DataPedido;
            this.biencode.Frete = this.Frete;
            this.biencode.Seguro = this.Seguro;
            this.biencode.Desconto = this.Desconto;
            this.biencode.ValorTotal = this.ValorTotal;
            this.biencode.Anotacao = this.Anotacao;
            this.biencode.Status = this.Status;

            this.biencode.CEPEntrega = this.CEP;
            this.biencode.EstadoEntrega = this.UF;
            this.biencode.CidadeEntrega = this.Cidade;
            this.biencode.BairroEntrega = this.Bairro;
            this.biencode.RuaEntrega = this.Rua;
            this.biencode.NumeroEntrega = this.Numero;
            this.biencode.Complemento = this.Complemento;
            this.biencode.IdTransportadora = this.IdTransportadora;
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
        atualizaPreco: function () {
            var totalprod = 0;
            var lista = app.sys.searchByID(this.ListaCompraSrc, this.IdLista)[0];
            var prods = eval(lista.Produtos);
            for (var j = 0; j <= prods.length - 1; j++) {
                var valor = app.sys.searchByID(this.Produtosrc, prods[j].produto)[0].Preco;
                totalprod += parseFloat(Real(valor).multiply(prods[j].qtd));
            }
            this.TotalProdutos = totalprod;
            this.ValorTotal = parseFloat(totalprod) + parseFloat(this.Frete) + parseFloat(this.Seguro) - parseFloat(this.Desconto);
        },
        ListaCompraSrc: function () {
            if (nulo(app.ListaCompra)) {
                return [];
            } else {
                return app.ListaCompra.src;
            }
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Cliente)) {
                this.Clientesrc = [];
            } else {
                this.Clientesrc = app.Cliente.src;
            }
            if (nulo(app.Produto)) {
                this.Produtosrc = [];
            } else {
                this.Produtosrc = app.Produto.src;
            }
            
        },
    }
});