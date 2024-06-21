"use strict",
//Projetos
app["Projetos"] = new Vue({
    el: '#Projetos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Processos/Projetos/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],

        Data: null,
        Nome: null,
        Caminho: null,
        Processos: null,
        Materiais: null,
        Preco: null,
        Descricao: null,
        HorasImplementacao: null,
        Horas: null,
        Custo: null,

        Count: [],
    },
    created: function (e) {
        //this.populate();
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                $(function () {
                    this.biencode = {};
                    captchaSys(app.sys.keysite);
                    this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                    this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                    var data = {
                        biencode: encrypt(JSON.stringify(this.biencode))
                    };
                    app.sys.crud(app.Projetos.href, "listar", data);
                });
                app.sys.tabs(this.href);
            }
        },
        clear: function () {

        },
        autocomplete: function () {
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
        adicionar: function () {
            this.Count.push(0);
        },
        remover: function () {
            this.Count.pop();
        },
        calcularGeral: function () {
            this.Total = [];
            var valor = 0;
            for (var i = 0; i <= this.Lancamentos.length - 1; i++) {
                valor += parseFloat(Real(app.sys.searchByID(this.LancamentoFinanceiroSrc, this.Lancamentos[i])[0].Valor));
            }
            for (var i = 0; i <= this.Referencia.length - 1; i++) {
                var percent = parseFloat(this.Percentual[i]);
                this.Total.push(parseFloat(Real(valor).multiply(percent / 100)));
            }
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
    }
});
