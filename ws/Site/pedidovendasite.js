"use strict";
app["pedidovendasite"] = new Vue({
    el: '#pedidovendasite',
    data: {
        src: null,
        Host: "Bienestar/Loja/PedidoVenda/",
        evtDataCal: null,
        stepkey: 0,
        href: null,
        biencode: null,
        row: null,
        id: null,
        ELtitle: null,
        Icon: '',
        pesqTbl: "",
        paginate: [],

        IdLogin: null,
        Cliente: null,
        Produtos: null,
        DataLista: null,
        NomeLista: null,
        Solicitacao: false,
        TotalProdutos: null,
        Frete: null,
        Seguro: null,
        Desconto: null,
        ValorTotal: null,
        Anotacao: null,
        Nfatura: null,
        DataPedido: null,
        Status: null,

        produtos: null,
        CEP: null,
        UF: null,
        Cidade: null,
        Bairro: null,
        Rua: null,
        Numero: null,
        Complemento: null
    },
    methods: {
        buscar: function (refid) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (!nulo(refid)) {
                this.biencode.cliente = refid;
            } else {
                this.biencode.all = "";
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            app.sys.crud("pedidovendasite", "listar", data);
        },
        clear: function () {
            
        },
        autocomplete: function () {
            this.NomeLista = this.row[1];
            this.IdLogin = this.row[2];
            this.Cliente = this.row[3];
            this.DataPedido = this.row[4];
            this.ValorTotal = this.row[5];
            this.Desconto = this.row[6];
            this.Frete = this.row[7];
            this.Seguro = this.row[8];
            this.Anotacao = this.row[9];
            this.Nfatura = this.row[10];
            this.Status = this.row[11];
            this.DataPedido = this.row[12];
            this.CEP = this.row[12];
            this.UF = this.row[13];
            this.Cidade = this.row[14];
            this.Bairro = this.row[15];
            this.Rua = this.row[16];
            this.Numero = this.row[17];
            this.Complemento = this.row[18];
            this.id = this.row[0];
        },
        checkForm: function () {

        },
        ravec: function (nivel) {
            return true;
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
    }
});
        