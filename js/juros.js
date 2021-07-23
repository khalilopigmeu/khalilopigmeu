var interval;
app["Juros"] = new Vue({
    el: '#Juros',
    data: {
        cotacao: [
            {
                moeda: "BTC",
                valorinvestido: 168.21,
                valorcotado: 166350.00,
                qtdacao: 0.00104026,
            },
            {
                moeda: "BTC",
                valorinvestido: 40.00,
                valorcotado: 183750.00,
                qtdacao: 0.00021769,
            },
            {
                moeda: "BTC",
                valorinvestido: 100.00,
                valorcotado: 178700.00,
                qtdacao: 0.00055960,
            },
        ],
        acao: null,
        real: null,
        valorcompra: null,
        valoratual: null,
        valortaxa: null,
        valoratualjuros: null,
        unidadecompra: null,
        investimento: null,
        valoradquirido: null,
        taxavariacao: null,
        taxa: null,
        modelo: 1,
        moedasE: ["BTC", "ETH", "LTC", "BCH", "XRP", "DAI"],
        ecoin: [],
        valorvariacao: null,
        variacaotd: [0],
        row: null,
        rowEcoin: null,
        rowAlta: null,
        rowBaixa: null,
    },
    created: function () {
        this.acao = window.localStorage.getItem("acao");
        this.valoradquirido = window.localStorage.getItem("valoradquirido");
        this.upecoin();
        this.setTaxa(0.25);
        this.atualizar("BTC");
        this.ibovespa();
        interval = setInterval(function () {
            app.Juros.upecoin();
            app.Juros.atualizar("BTC");
            app.Juros.ibovespa();
        }, 600000);
    },
    methods: {
        base: function () {
            this.valoratual = parseFloat(parseFloat(this.acao) * parseFloat(this.real)).toFixed(2);
            var taxaval;
            if (this.modelo === 1) {
                taxaval = this.taxa / 100;
            } else {
                taxaval = this.taxa;
            }
            this.valortaxa = parseFloat(this.valoratual * taxaval).toFixed(2);
            this.valoratualjuros = parseFloat(this.valoratual - this.valortaxa).toFixed(2);
        },
        compra: function () {
            this.unidadecompra = parseFloat(parseFloat(this.investimento) / parseFloat(this.valorcompra)).toFixed(8);
        },
        variacao: function () {
            this.taxavariacao = parseFloat(((this.real / this.valoradquirido) - 1)).toFixed(5);
        },
        atualizar: function (moeda) {
            this.real = parseFloat(this.ecoin[moeda].ticker.sell).toFixed(2);
            this.valorcompra = parseFloat(this.ecoin[moeda].ticker.buy).toFixed(2);
            this.base();
            this.compra();
            this.variacao();
        },
        upecoin: function () {
            for (var i = 0; i <= this.moedasE.length - 1; i++) {
                this.ecoin[this.moedasE[i]] = JSON.parse($.ajax({
                    type: "GET",
                    url: "https://www.mercadobitcoin.net/api/" + this.moedasE[i] + "/ticker/",
                    crossDomain: true,
                    async: false,
                }).responseText);
            }
        },
        setTaxa: function (valor) {
            this.taxa = valor;
        },
        tipo: function (mod) {
            this.modelo = mod;
        },
        projetar: function () {
            this.variacaotd.push(this.valorvariacao);
        },
        variacao_acao: function (i) {
            var vt = i / 100;
            var total = this.real * vt;
            return parseFloat(total).toFixed(2);
        },
        variacao_valor: function (i) {
            var vt = i / 100;
            var total = this.valoratualjuros * vt;
            return parseFloat(total).toFixed(2);
        },
        variacaoup_acao: function (i) {
            var vt = i / 100;
            var total = parseFloat(this.real) + (this.real * vt);
            return parseFloat(total).toFixed(2);
        },
        variacaoup_valor: function (i) {
            var vt = i / 100;
            var total = parseFloat(this.valoratualjuros) + (this.valoratualjuros * vt);
            return parseFloat(total).toFixed(2);
        },
        variacaodw_acao: function (i) {
            var vt = i / 100;
            var total = parseFloat(this.real) - (this.real * vt);
            return parseFloat(total).toFixed(2);
        },
        variacaodw_valor: function (i) {
            var vt = i / 100;
            var total = parseFloat(this.valoratualjuros) - (this.valoratualjuros * vt);
            return parseFloat(total).toFixed(2);
        },
        stopUpdate: function () {
            clearInterval(interval);
        },
        restartUpdate: function () {
            interval = setInterval(function () {
                app.Juros.upecoin();
                app.Juros.atualizar("BTC");
                app.Juros.ibovespa();
            }, 600000);
        },
        valormoeda: function (moeda) {
            return parseFloat(this.ecoin[moeda].ticker.sell).toFixed(2);
        },
        rendimentop: function (cota) {
            cota = parseFloat(cota);
            return parseFloat(((this.real / cota) - 1)).toFixed(5);
        },
        rendimentor: function (acao, moeda, valor) {
            acao = parseFloat(acao);
            valor = parseFloat(valor);
            return parseFloat((acao * parseFloat(this.ecoin[moeda].ticker.sell)) - valor).toFixed(2);
        },
        rendimentototal: function (valor, rendimento) {
            return parseFloat(parseFloat(valor) + parseFloat(rendimento)).toFixed(2);
        },
        autocomplete: function () {
            this.valoradquirido = parseFloat(this.row[2]).toFixed(2);
            this.acao = this.row[3];
            this.real = parseFloat(this.ecoin[this.row[0]].ticker.sell).toFixed(2);
            app.Juros.base();
        },
        autocompleteHigh: function () {
            this.valorcompra = parseFloat(parseFloat(this.rowAlta[1].replace(",", ".")) * 100).toFixed(2);
        },
        autocompleteLow: function () {
            this.valorcompra = parseFloat(parseFloat(this.rowBaixa[1].replace(",", ".")) * 100).toFixed(2);
        },
        autocompleteEcoin: function () {
            this.valorcompra = parseFloat(parseFloat(this.rowEcoin[1].replace(",", ".")) * 100).toFixed(2);
        },
        ibovespa: function () {
            $(function () {
                this.biencode = {};
                //this.biencode.url = "https://www.infomoney.com.br/ferramentas/carteira-de-acompanhamento/";
                this.biencode.url = "https://www.infomoney.com.br/cotacoes/ibovespa/";
                this.biencode.idel = "index-table";
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                var ws = $(window).Decrypt(host("Bienestar", "Crawler", "crawl"));
                var p = (post(ws, data));
                $("#ibovespa").html($(window).Decrypt(p));
                $("#tblacoesalta").html($('#ibovespa table').eq(0).html());
                $("#tblacoesbaixa").html($('#ibovespa table').eq(1).html());
                if (!$.fn.DataTable.isDataTable('#tblacoesalta')) {
                    table["high"] = $('#tblacoesalta').DataTable({
                        "language": {
                            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json",
                            "decimal": ".",
                        },
                    }).columns.adjust();
                } else {
                    $('#tblacoesalta').dataTable().fnDraw();
                }
                if (!$.fn.DataTable.isDataTable('#tblacoesbaixa')) {
                    table["low"] = $('#tblacoesbaixa').DataTable({
                        "language": {
                            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json",
                            "decimal": ".",
                        },
                    }).columns.adjust();
                } else {
                    $('#tblacoesbaixa').dataTable().fnDraw();
                }
                $('body').on('click', '#tblacoesalta tbody tr', function () {
                    app.Juros.rowAlta = table["high"].table().row(this).data();
                    app.Juros.autocompleteHigh();
                });
                $('body').on('click', '#tblacoesbaixa tbody tr', function () {
                    app.Juros.rowBaixa = table["low"].table().row(this).data();
                    app.Juros.autocompleteLow();
                });
                $("#ibovespa").remove();
            });
        }
    }
});
