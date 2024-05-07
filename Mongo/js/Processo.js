"use strict",
//Processo
app["Processo"] = new Vue({
    el: '#Processo',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        Host: "Bienestar/Processos/Processo/",
        ELtitle: null,
        Icon: '<i class="fas fa-angle-double-right"></i>',
        pesqTbl: "",
        paginate: [],

        IdProfissional: null,
        Profissionalsrc: null,
        NomeProcesso: null,
        Horas: null,
        Descricao: null,
        PermChamado: null,
        Material: null,
        Produtosrc: null,
    },
    methods: {
        populate: function (e) {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.clear();
                if (!this.ravec(1)) {
                    $(function () {
                        $(window).NotifyRavec(this.ELtitle);
                    });
                } else {
                    e.preventDefault();
                    var data = {};
                    var ws = host("Bienestar", "Processp", "listar");
                    data[""] = encrypt();
                    var p = (post(ws, data));
                    this.src = decrypt(p);
                }
            }
        },
        clear: function () {
            this.item = null;
        },
        autocomplete: function () {
            this.item = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
        },
        cadastrar: function () {
            if (!this.ravec(2)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        alterar: function () {
            if (!this.ravec(3)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        excluir: function () {
            if (!this.ravec(4)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        relatorio: function () {
            if (!this.ravec(5)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Profissional)) {
                this.Profissionalsrc = [];
            } else {
                this.Profissionalsrc = app.Profissional.src;
            }
            if (nulo(app.Produto)) {
                this.Produtosrc = [];
            } else {
                this.Produtosrc = app.Produto.src;
            }

        }
    }
});
