"use strict",
//Formula
app["Formula"] = new Vue({
    el: '#Formula',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Processos/Formula/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate:[],

        custototal: null,
        Especificacao: null,
        custo: null,
        Obs: null,
        volume: null,
        custoagregado: null,
        Nome: null,
        Count: 0,
        IdProdutos: [],
        Qtd: [],
        
        ProdutosSrc:null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: $(window).Encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Formula.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.IdProdutos = [];
            this.Qtd = [];
            this.custototal = null;
            this.Especificacao = null;
            this.custo = null;
            this.Obs = null;
            this.volume = null;
            this.custoagregado = null;
            this.Nome = null;
        },
        autocomplete: function () {
            this.IdProdutos = eval(this.row[5].split(","));
            this.Qtd = eval(this.row[6].split(","));
            this.custototal = this.row[9];
            this.Especificacao = this.row[3];
            this.custo = this.row[7];
            this.Obs = this.row[4];
            this.volume = this.row[2];
            this.custoagregado = this.row[8];
            this.Nome = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdProdutos = this.IdProdutos;
            this.biencode.Qtd = this.Qtd;
            this.biencode.id = this.id;
            this.biencode.custototal = this.custototal;
            this.biencode.Especificacao = this.Especificacao;
            this.biencode.custo = this.custo;
            this.biencode.Obs = this.Obs;
            this.biencode.volume = this.volume;
            this.biencode.custoagregado = this.custoagregado;
            this.biencode.Nome = this.Nome;
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
        adicionar: function () {
            this.Count.push(0);
        },
        remover: function () {
            this.Count.pop();
        },
        calcularGeral: function () {
            this.custo = 0;
            var valor = 0;
            for (var i = 0; i <= this.IdProdutos.length - 1; i++) {
                valor += Real(parseFloat(Real(app.sys.searchByID(this.ProdutosSrc, this.IdProdutos[i])[0].Preco)) * parseFloat(this.Qtd[i]));
            }
            this.custo = Real(valor);
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Produto)) {
                this.ProdutosSrc = [];
            } else {
                this.ProdutosSrc = app.Produto.src;
            }
            
        },
    }
});
