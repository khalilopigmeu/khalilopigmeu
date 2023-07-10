"use strict";
app["checkoutvenda"] = new Vue({
    el: '#checkoutvenda',
    data: {
        CEP: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,
        Telefone: null,
        Celular: null,
        Cidade: null,
        loginbtn: null,
       SubTotal: 0,
        qtdProd: {},
        flag: false,
        cartao: null,
        expiracao: null,
        cvv: null,
        metodo: null,
        outroEndereco: false,
        observacao: null,
        frete: null,
        seguro: 0,
        desconto: 0,
        logado:false
    },
    created: function () {
        /*if (!nulo(window.localStorage.getItem("CarroCompra"))) {
         if (window.localStorage.getItem("CarroCompra").length > 0) {
         $("#menu-toggle-R i").removeClass("fa-bars").addClass("fa-shopping-cart");
         $("#menu-toggle-R").show();
         $(window).NotifySucesso("Você já possui itens na sacola");
         }
         }*/
    },
    methods: {
       carroCompra: function () {
            return this.qtdProd;
        },
        ligar: function () {
            this.flag = true;
        },
        listar: function (id) {
            var item = app.sys.searchByID(app.empresasanunciando.produtos, id);
            return item[0];
        },
        HasPromo: function (id, preco) {
            var search = app.sys.searchall(app.empresasanunciando.Itemsrc, id)[0];
            if (!nulo(search)) {
                if (!nulo(search.LoteAtivo)) {
                    switch (search.LoteAtivo) {
                        case "1":
                            return  search.lote1;
                        case "2":
                            return  search.lote2;
                        case "3":
                            return  search.lote3;
                        case "4":
                            return  search.lote4;
                        case "5":
                            return  search.lote5;
                        default :
                            return  search.lote5;
                    }
                } else {
                    return  search.lote5;
                }
            } else {
                return preco;
            }
        },
        total: function (preco, qtd) {
            this.SubTotal = +parseFloat(preco) * parseFloat(qtd);
            return parseFloat(preco) * parseFloat(qtd);
        },
        alteraQtd: function (key) {
            this.qtdProd[key] = document.getElementById('c' + key).value;
            app.empresasanunciando.qtdProd = this.qtdProd;
            app.sidebarR.loja = false;
            app.sidebarR.loja = true;
        },
        Frete: function (id) {
            setAuth(decrypt(app.sys.bien, "encodedstring"));
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            biencode.empresa = id;
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Loja/Frete/listar";
            var p = (post(ws, data));
            var rs = decrypt(p);
            return rs;
        },
        SalvarPedido: function () {
            var biencode = {};
            var pedidovenda = {};
            var listacompra = {};

            listacompra.Empresa = app.empresasanunciando.produtos[0].IdEmpresa;
            listacompra.IdLogin = window.localStorage.getItem("IdLogin");
            listacompra.Produtos = JSON.stringify(this.qtdProd);
            listacompra.Cliente = window.localStorage.getItem("Chave");
            listacompra.DataLista = dataAtualFormatada();
            listacompra.NomeLista = "Listacliente";
            listacompra.Solicitacao = "";

            pedidovenda.IdEmpresa = app.empresasanunciando.produtos[0].IdEmpresa;
            pedidovenda.IdLogin = window.localStorage.getItem("IdLogin");
            pedidovenda.IdCliente = window.localStorage.getItem("Chave");
            pedidovenda.DataPedido = dataAtualFormatada();
            pedidovenda.ValorTotal = this.SubTotal;
            pedidovenda.Desconto = this.desconto;
            pedidovenda.Frete = this.frete;
            pedidovenda.Seguro = this.seguro;
            pedidovenda.Anotacao = this.observacao;
            //pedidovenda.Nfatura = "Nfatura";
            //pedidovenda.Status = "Status";
            pedidovenda.CEPEntrega = this.CEP;
            pedidovenda.EstadoEntrega = this.UF;
            pedidovenda.CidadeEntrega = this.Cidade;
            pedidovenda.BairroEntrega = this.Bairro;
            pedidovenda.RuaEntrega = this.Rua;
            pedidovenda.NumeroEntrega = this.Num;
            pedidovenda.Complemento = this.Complemento;
            pedidovenda.IdTransportadora = null;

            biencode.empresa = app.empresasanunciando.produtos[0].IdEmpresa;
            biencode.idcliente = window.localStorage.getItem("Chave");
            biencode.idlogin = window.localStorage.getItem("IdLogin");
            biencode.outroEndereco = this.outroEndereco;
            biencode.CEP = this.CEP;
            biencode.UF = this.UF;
            biencode.Cidade = this.Cidade;
            biencode.Bairro = this.Bairro;
            biencode.Rua = this.Rua;
            biencode.Numero = this.Num;
            biencode.Complemento = this.Complemento;

            var data = {
                "biencode": encrypt(JSON.stringify(biencode)),
                "listacompra": encrypt(JSON.stringify(listacompra)),
                "pedidovenda": encrypt(JSON.stringify(pedidovenda))
            };

            var ws = "Bienestar/Loja/Frete/listar";
            var p = (post(ws, data));
            var rs = decrypt(p);
            return rs;
        },
        FinalizarPedido: function () {
            var biencode = {};
            var pedidovenda = {};
            var listacompra = {};

            listacompra.Empresa = app.empresasanunciando.produtos[0].IdEmpresa;
            listacompra.IdLogin = window.localStorage.getItem("IdLogin");
            listacompra.Produtos = JSON.stringify(this.qtdProd);
            listacompra.Cliente = window.localStorage.getItem("Chave");
            listacompra.DataLista = dataAtualFormatada();
            listacompra.NomeLista = "Listacliente";
            listacompra.Solicitacao = "";

            pedidovenda.IdEmpresa = app.empresasanunciando.produtos[0].IdEmpresa;
            pedidovenda.IdLogin = window.localStorage.getItem("IdLogin");
            pedidovenda.IdCliente = window.localStorage.getItem("Chave");
            pedidovenda.DataPedido = dataAtualFormatada();
            pedidovenda.ValorTotal = this.SubTotal;
            pedidovenda.Desconto = this.desconto;
            pedidovenda.Frete = this.frete;
            pedidovenda.Seguro = this.seguro;
            pedidovenda.Anotacao = this.observacao;
            //pedidovenda.Nfatura = "Nfatura";
            //pedidovenda.Status = "Status";
            pedidovenda.CEPEntrega = this.CEP;
            pedidovenda.EstadoEntrega = this.UF;
            pedidovenda.CidadeEntrega = this.Cidade;
            pedidovenda.BairroEntrega = this.Bairro;
            pedidovenda.RuaEntrega = this.Rua;
            pedidovenda.NumeroEntrega = this.Num;
            pedidovenda.Complemento = this.Complemento;
            pedidovenda.IdTransportadora = null;

            biencode.metodo = this.metodo;
            biencode.Nome = this.Nome;
            biencode.cartao = this.cartao;
            biencode.expiracao = this.expiracao;
            biencode.cvv = this.cvv;
            var card = PagSeguro.encryptCard({
                publicKey: "ChaveAcessoPagSeguro",
                holder: this.Nome,
                number: this.cartao,
                expMonth: this.expiracao.split("/")[0],
                expYear: this.expiracao.split("/")[1],
                securityCode: this.cvv
            });

            biencode.hash = card.encryptedCard;

            biencode.empresa = app.empresasanunciando.produtos[0].IdEmpresa;
            biencode.idcliente = window.localStorage.getItem("Chave");
            biencode.idlogin = window.localStorage.getItem("IdLogin");
            biencode.outroEndereco = this.outroEndereco;
            biencode.CEP = this.CEP;
            biencode.UF = this.UF;
            biencode.Cidade = this.Cidade;
            biencode.Bairro = this.Bairro;
            biencode.Rua = this.Rua;
            biencode.Numero = this.Num;
            biencode.Complemento = this.Complemento;

            var data = {
                "biencode": encrypt(JSON.stringify(biencode)),
                "listacompra": encrypt(JSON.stringify(listacompra)),
                "pedidovenda": encrypt(JSON.stringify(pedidovenda))
            };

            var ws = "Bienestar/Loja/Order/FazerPedido";
            var p = (post(ws, data));
            var rs = decrypt(p);
            return rs;
        }
    }
});
