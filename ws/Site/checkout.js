"use strict";
app["checkoutvenda"] = new Vue({
    el: '#checkoutvenda',
    data: {
        CEP: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,
        UF: null,
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
        parcelas: null,
        metodo: null,
        outroEndereco: false,
        observacao: null,
        frete: null,
        seguro: 0,
        desconto: 0,
        logado: false,
        Nome: null,
    },
    methods: {
        carroCompra: function () {
            return app.sidebarR.qtdProd;
        },
        ligar: function () {
            this.flag = true;
        },
        listar: function (id) {
            var item = app.sys.searchByID(app.empresasanunciando.produtos, id);
            return item[0];
        },
        HasPromo: function (id, preco) {
            if (app.empresasanunciando.Itemsrc.length > 0) {
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
            } else {
                return preco;
            }
        },
        total: function (preco, qtd) {
            app.checkoutvenda.SubTotal = (Real(preco).multiply(qtd).value);
            return Real(Real(preco).multiply(qtd), {separator: '', decimal: ','}).format();

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
         
        },
        FinalizarPedido: function () {
            var biencode = {};
            var pedidovenda = {};
            var listacompra = {};

            listacompra.Empresa = getParameterByName("pgid");
            listacompra.IdLogin = window.localStorage.getItem("IdLoginCliente");
            listacompra.Produtos = JSON.stringify(this.qtdProd);
            listacompra.Cliente = app.clientLogin.dadosLogin[0].IdCliente;
            listacompra.DataLista = dataAtualFormatada();
            listacompra.NomeLista = "Listacliente";
            listacompra.Solicitacao = "";

            pedidovenda.IdEmpresa = getParameterByName("pgid");
            pedidovenda.IdLogin = window.localStorage.getItem("IdLoginCliente");
            pedidovenda.IdCliente = app.clientLogin.dadosLogin[0].IdCliente;
            pedidovenda.DataPedido = dataAtualFormatada();
            pedidovenda.ValorTotal = String(Real(this.SubTotal).intValue);
            pedidovenda.Desconto = String(Real(this.desconto).intValue);
            pedidovenda.Frete = String(Real(this.frete).intValue);
            pedidovenda.Seguro = String(Real(this.seguro).intValue);
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
            switch (this.metodo) {
                case "pix":
                    break;
                case "boleto":
                    break;
                case "credito":
                    biencode.cartao = this.cartao;
                    biencode.expiracao = this.expiracao;
                    biencode.cvv = this.cvv;
                    var ws = "Bienestar/Loja/MeioPagamento/GetPublicKeyPagSeguro";
                    var mp = {};
                    captchaSys(app.sys.keysite);
                    mp.tokenCaptcha = window.localStorage.getItem("tokenGoogle");
                    mp.empresa = getParameterByName("pgid");
                    var data = {
                        "biencode": encrypt(JSON.stringify(mp))
                    };
                    var p = (post(ws, data));
                    var rs = decrypt(p);
                    var card = PagSeguro.encryptCard({
                        publicKey: JSON.parse(rs).public_key,
                        holder: this.Nome,
                        number: this.cartao,
                        expMonth: this.expiracao.split("/")[0],
                        expYear: this.expiracao.split("/")[1],
                        securityCode: this.cvv
                    });
                    biencode.hash = card.encryptedCard;

                    biencode.holder = this.Nome;
                    biencode.mm = this.expiracao.split("/")[0];
                    biencode.yyyy = this.expiracao.split("/")[1];
                    biencode.cvv = this.cvv;
                    biencode.parcelas = this.parcelas;

                    break;
            }
            biencode.empresa = getParameterByName("pgid");
            biencode.idcliente = app.clientLogin.dadosLogin[0].IdCliente;
            biencode.idlogin = window.localStorage.getItem("IdLoginCliente");
            biencode.Nome = this.Nome;
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
            console.log(rs);
        }
    }
});
