"use strict";
app["listacomprasite"] = new Vue({
    el: '#listacomprasite',
    data: {
        src: null,
        Host: "Bienestar/Loja/ListaLoja/",
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

        listaProdutos: null,
        href: "ListaCompra"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("ListaCompra")) {
                this.src = app.sys.system["ListaCompra"];
            } else {
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
                app.sys.crud("listacomprasite", "listar", data);
            }
        },
        clear: function () {
            this.IdLogin = null;
            this.Cliente = null;
            this.Produtos = null;
            this.listaProdutos = null;
            this.DataLista = null;
            this.NomeLista = null;
            this.Solicitacao = false;
        },
        checkForm: function () {

        },
        total: function (preco, qtd) {
            return Real(Real(preco).multiply(qtd), {separator: '', decimal: ','}).format();
        },
        autocomplete: function () {
            this.Solicitacao = this.row[5];
            try {
                this.listaProdutos = JSON.parse(this.row[4]);
            } catch (e) {
                this.listaProdutos = [];
            }
            this.Cliente = this.row[3];
            this.DataLista = this.row[2];
            this.NomeLista = this.row[1];
            this.id = this.row[0];
        },
        ravec: function (nivel) {
            return true;
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
        CarroCompra: function () {
            window.localStorage.setItem("CarroCompra", this.listaProdutos);
            var itens = JSON.parse(window.localStorage.getItem("CarroCompra"));
            app.sidebarR.qtdProd = itens;
            app.empresasanunciando.qtdProd = itens;
            $("#menu-toggle-R .badge").html(Object.keys(app.empresasanunciando.qtdProd).length);
            $("#menu-toggle-R").popover('show');
            this.loja = false;
            this.loja = true;
        },
        DeletaLista: function () {
            setAuth(decrypt(app.sys.bien, "encodedstring"));
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            biencode.id = this.id;
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Loja/ListaLoja/exc";
            var p = (post(ws, data));
            var rs = decrypt(p);
            $(window).NotifyInfo(rs);
            app.listacomprasite.buscar(window.localStorage.getItem("IdLoginCliente"));
        }
    }
});
        