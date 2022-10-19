"use strict",
//Eventos
app["Eventos"] = new Vue({
    el: '#Eventos',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-calendar-alt"></i>',
        pesqTbl: "",
        Host: "Bienestar/Agenda/Eventos/",
        paginate: [],

        groupId: null,
        allDay: false,
        start: null,
        end: null,
        title: null,
        classNames: null,
        overlap: false,
        backgroundColor: null,
        borderColor: null,
        textColor: null,
        extendedProps: null,
        daysOfWeek: [],
        startTime: null,
        endTime: null,
        startRecur: null,
        endRecur: null,

        inicio: null,
        fim: null,
        horai: null,
        horaf: null,
        observacao: null,
        repetir: "",
        repetirate: "",
        evt: null,
        info: null,
        modelo: null,
        eventos: null,

        calendar: null,

        PedidoDeVenda: [],
        OrdemServico: [],
        OrdemProducao: [],

        importar: null,
        CategoriaSrc: null,
        FichaAtendimentoSrc: null,
        OrdemServicoSrc: null,
        LancamentoFinanceiroSrc: null,
        PedidoDeVendaSrc: null,
        FichaAtendimento: null,
        OrdemProducaoSrc: null,
        LancamentoFinanceiro: null,

        IdCliente: null,
        pesqCliente: null,
        ClienteSrc: [],
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var d = new Date();
            var m = d.getMonth() + 1;
            var y = d.getFullYear();
            this.biencode.inicio = y + "-" + m;
            if (!nulo(app.CategoriaEventos.src) && app.CategoriaEventos.src.length > 0) {
                this.biencode.grupo = "";
                for (var i = 0; i <= app.CategoriaEventos.src.length - 1; i++) {
                    this.biencode.grupo += app.CategoriaEventos.src[i]._id['$oid'];
                    if (i < app.CategoriaEventos.src.length - 1) {
                        this.biencode.grupo += ",";
                    }
                }
            }
            if (app.calendar.iniciopesq !== null) {
                this.biencode.inicio = app.calendar.iniciopesq;
            }
            if (app.calendar.fimpesq !== null) {
                this.biencode.fim = app.calendar.fimpesq;
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Eventos.href, "listar", data);
            app.Eventos.eventos = app.Eventos.src;
            app.Eventos.src = null;
            app.calendar.load();
            app.sys.tabs(this.href);
            this.itensporpagina = app.sys.itemsPerPage;
        },
        clear: function () {
            this.groupId = null;
            this.allDay = "";
            this.start = null;
            this.end = null;
            this.title = null;
            this.classNames = null;
            this.overlap = false;
            this.backgroundColor = null;
            this.borderColor = null;
            this.textColor = null;
            this.extendedProps = null;
            this.daysOfWeek = [];
            this.startTime = null;
            this.endTime = null;
            this.startRecur = null;
            this.endRecur = null;

            this.FichaAtendimento = [];
            this.LancamentoFinanceiro = [];
            this.PedidoDeVenda = [];
            this.OrdemServico = [];
            this.OrdemProducao = [];
        },
        autocomplete: function () {
            this.groupId = this.evt.groupId;
            this.allDay = parseBoolean(this.evt.allDay);
            this.start = calendar.formatIso(this.evt.start);
            this.inicio = ISOdata(calendar.formatIso(this.start));
            app.AnotacaoAgenda.datapesq = this.inicio;
            this.horai = formatahora(calendar.formatIso(this.start));
            this.end = calendar.formatIso(this.evt.end);
            this.fim = ISOdata(calendar.formatIso(this.end));
            this.horaf = formatahora(calendar.formatIso(this.end));
            this.title = this.evt.title;
            this.classNames = this.evt.classNames;
            this.overlap = this.evt.overlap;
            this.backgroundColor = this.evt.backgroundColor;
            this.borderColor = this.evt.borderColor;
            this.textColor = this.evt.textColor;
            this.daysOfWeek = this.evt.daysOfWeek;
            this.startTime = this.evt.startTime;
            this.endTime = this.evt.endTime;
            this.startRecur = this.evt.startRecur;
            this.endRecur = this.evt.endRecur;

            this.extendedProps = this.evt.extendedProps;
            this.observacao = this.extendedProps.descricao;
            CKEDITOR.instances['observacaoagendacont'].setData(unescapeHTML(this.observacao))

            this.cliente = this.extendedProps.cliente;
            this.FichaAtendimento = this.extendedProps.FichaAtendimento;
            this.LancamentoFinanceiro = this.extendedProps.LancamentoFinanceiro;
            this.PedidoDeVenda = this.extendedProps.PedidoDeVenda;
            this.OrdemServico = this.extendedProps.OrdemServico;
            this.OrdemProducao = this.extendedProps.OrdemProducao;
            this.id = this.extendedProps._id.$oid;
            app.sys.mascara();
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.groupId = this.groupId;
            this.biencode.allDay = this.allDay;
            if (this.horai.match(new RegExp(":", "g") || []).length === 1) {
                this.horai = this.horai + ":00";
            }
            this.start = toUTC(this.inicio, this.horai);
            this.biencode.start = this.start;
            if (this.horaf.match(new RegExp(":", "g") || []).length === 1) {
                this.horaf = this.horaf + ":00";
            }

            this.end = toUTC(this.fim, this.horaf);
            this.biencode.end = this.end;
            this.biencode.title = this.title;
            this.biencode.classNames = this.classNames;
            this.biencode.overlap = this.overlap;
            var el = document.getElementsByClassName("categoria");
            if (el.length > 0) {
                for (var i = 0; i <= el.length - 1; i++) {
                    if (el[i].selected) {
                        this.backgroundColor = el[i].dataset.color;
                        this.borderColor = el[i].dataset.color;
                    }
                }
            } else {
                this.biencode.textColor = this.textColor;
                this.biencode.borderColor = this.borderColor;
            }
            this.biencode.backgroundColor = this.backgroundColor;
            this.biencode.textColor = this.textColor;
            this.biencode.borderColor = this.borderColor;
            this.biencode.id = this.id;
            var extendedProps = {};
            extendedProps.empresa = window.localStorage.getItem("IdEmpresa");
            if (CKEDITOR.instances['observacaoagendacont'].getData().length > 0) {
                this.observacao = CKEDITOR.instances['observacaoagendacont'].getData();
                extendedProps.descricao = this.observacao;
            } else {
                extendedProps.descricao = this.observacao;
            }
            extendedProps.FichaAtendimento = this.FichaAtendimento;
            extendedProps.LancamentoFinanceiro = this.LancamentoFinanceiro;
            extendedProps.PedidoDeVenda = this.PedidoDeVenda;
            extendedProps.OrdemServico = this.OrdemServico;
            extendedProps.OrdemProducao = this.OrdemProducao;

            this.extendedProps = extendedProps;
            this.biencode.extendedProps = this.extendedProps;
            /*if (this.repetir) {
             this.startTime = toUTC(this.inicio, this.horai + ":00");
             this.endTime = toUTC(this.fim, this.horaf + ":00");
             this.biencode.daysOfWeek = this.daysOfWeek;
             this.biencode.startTime = this.startTime;
             this.biencode.endTime = this.endTime;
             this.startRecur = this.startTime;
             this.biencode.startRecur = this.startRecur;
             this.endRecur = toUTC(this.repetirate, this.horaf);
             this.biencode.endRecur = this.endRecur;
             }*/
        },
        atualizaEx: function (evento) {
            this.groupId = evento.groupId;
            this.allDay = evento.allDay;
            if (evento.horai.match(new RegExp(":", "g") || []).length === 1) {
                evento.horai = evento.horai + ":00";
            }
            evento.start = toUTC(evento.inicio, evento.horai);
            this.start = evento.start;
            if (evento.horaf.match(new RegExp(":", "g") || []).length === 1) {
                evento.horaf = evento.horaf + ":00";
            }

            this.end = toUTC(evento.fim, evento.horaf);
            this.end = evento.end;
            this.title = evento.title;
            this.classNames = evento.classNames;
            this.overlap = evento.overlap;
            this.backgroundColor = evento.backgroundColor;
            this.borderColor = evento.borderColor;
            this.backgroundColor = evento.backgroundColor;
            this.textColor = evento.textColor;
            this.borderColor = evento.borderColor;
            this.id = evento.id;
            this.empresa = window.localStorage.getItem("IdEmpresa");
            this.descricao = evento.observacao;
            this.FichaAtendimento = evento.FichaAtendimento;
            this.LancamentoFinanceiro = evento.LancamentoFinanceiro;
            this.PedidoDeVenda = evento.PedidoDeVenda;
            this.OrdemServico = evento.OrdemServico;
            this.OrdemProducao = evento.OrdemProducao;
        },
        cadastrar: function () {
            this.updateStatus();
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            this.updateStatus();
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
        updateStatus: function () {
            if (this.importar === "financeiro") {
                for (var i = 0; i <= this.LancamentoFinanceiro.length - 1; i++) {
                    app.erros.errors = {};
                    app.LancamentoFinanceiro.biencode = {};
                    app.LancamentoFinanceiro.biencode.id = this.LancamentoFinanceiro[i];
                    app.LancamentoFinanceiro.biencode.Status = true;
                    var data = {
                        "biencode": encrypt(JSON.stringify(app.LancamentoFinanceiro.biencode))
                    };
                    app.LancamentoFinanceiro.alt();
                    app.sys.crud(app.LancamentoFinanceiro.href, "edt", data);
                }
            }
            if (this.importar === "atendimento") {
                for (var i = 0; i <= this.FichaAtendimento.length - 1; i++) {
                    app.erros.errors = {};
                    app.FichaAtendimento.biencode = {};
                    app.FichaAtendimento.biencode.id = this.FichaAtendimento[i];
                    app.FichaAtendimento.biencode.Registrado = true;
                    var data = {
                        "biencode": encrypt(JSON.stringify(app.FichaAtendimento.biencode))
                    };
                    app.FichaAtendimento.alt();
                    app.sys.crud(app.FichaAtendimento.href, "edt", data);
                }
            }
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.CategoriaEventos)) {
                this.CategoriaSrc = [];
            } else {
                this.CategoriaSrc = app.CategoriaEventos.src;
            }
            if (nulo(app.FichaAtendimento)) {
                this.FichaAtendimentoSrc = [];
            } else {
                this.FichaAtendimentoSrc = app.FichaAtendimento.src;
            }
            if (nulo(app.OS)) {
                this.OrdemServicoSrc = [];
            } else {
                this.OrdemServicoSrc = app.OS.src;
            }
            if (nulo(app.LancamentoFinanceiro)) {
                this.LancamentoFinanceiroSrc = [];
            } else {
                this.LancamentoFinanceiroSrc = app.LancamentoFinanceiro.src;
            }
            if (nulo(app.PedidoVenda)) {
                this.PedidoDeVendaSrc = [];
            } else {
                this.PedidoDeVendaSrc = app.PedidoVenda.src;
            }
            if (nulo(app.FichaAtendimento)) {
                this.FichaAtendimento = [];
            } else {
                this.FichaAtendimento = app.FichaAtendimento.src;
            }
            if (nulo(app.OP)) {
                this.OrdemProducaoSrc = [];
            } else {
                this.OrdemProducaoSrc = app.OP.src;
            }
            if (nulo(app.LancamentoFinanceiro)) {
                this.LancamentoFinanceiro = [];
            } else {
                this.LancamentoFinanceiro = app.LancamentoFinanceiro.src;
            }
            if (nulo(app.Cliente)) {
                this.ClienteSrc = [];
            } else {
                this.ClienteSrc = app.Cliente.src;
            }
            
        },
    }
});
