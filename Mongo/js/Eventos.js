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

        importavel: false,
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
                app.Eventos.eventos = app.Eventos.src;
                app.calendar.load();
                this.itensporpagina = app.sys.itemsPerPage;
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
                console.log(this.biencode);
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Eventos.href, "listar", data);
                app.Eventos.eventos = app.Eventos.src;
                app.Eventos.src = null;
                app.calendar.load();
                app.sys.tabs(this.href);
                this.itensporpagina = app.sys.itemsPerPage;
            }
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
            app.Eventos.groupId = app.Eventos.evt._def.groupId;
            app.Eventos.allDay = parseBoolean(app.Eventos.evt._def.allDay);
            app.Eventos.start = calendar.formatIso(app.Eventos.evt.start);
            app.Eventos.inicio = ISOdata(calendar.formatIso(app.Eventos.start));
            app.AnotacaoAgenda.datapesq = app.Eventos.inicio;
            app.Eventos.horai = formatahora(calendar.formatIso(app.Eventos.start));
            if (!nulo(app.Eventos.evt.end)) {
                app.Eventos.end = calendar.formatIso(app.Eventos.evt.end);
                app.Eventos.fim = ISOdata(calendar.formatIso(app.Eventos.end));
                app.Eventos.horaf = formatahora(calendar.formatIso(app.Eventos.end));
            } else {
                app.Eventos.end = calendar.formatIso(app.Eventos.evt.start);
                app.Eventos.fim = ISOdata(calendar.formatIso(app.Eventos.start));
                app.Eventos.horaf = formatahora(calendar.formatIso(app.Eventos.start));
            }
            app.Eventos.title = app.Eventos.evt._def.title;
            app.Eventos.classNames = app.Eventos.evt.classNames;
            app.Eventos.overlap = app.Eventos.evt.overlap;
            app.Eventos.backgroundColor = app.Eventos.evt.backgroundColor;
            app.Eventos.borderColor = app.Eventos.evt.borderColor;
            app.Eventos.textColor = app.Eventos.evt.textColor;
            app.Eventos.daysOfWeek = app.Eventos.evt.daysOfWeek;
            app.Eventos.startTime = app.Eventos.evt.startTime;
            app.Eventos.endTime = app.Eventos.evt.endTime;
            app.Eventos.startRecur = app.Eventos.evt.startRecur;
            app.Eventos.endRecur = app.Eventos.evt.endRecur;

            app.Eventos.extendedProps = app.Eventos.evt.extendedProps;
            app.Eventos.observacao = app.Eventos.extendedProps.descricao;
            CKEDITOR.instances['observacaoagenda'].setData(unescapeHTML(app.Eventos.observacao))

            app.Eventos.IdCliente = app.Eventos.extendedProps.IdCliente;
            app.Eventos.FichaAtendimento = app.Eventos.extendedProps.FichaAtendimento;
            app.Eventos.LancamentoFinanceiro = app.Eventos.extendedProps.LancamentoFinanceiro;
            app.Eventos.PedidoDeVenda = app.Eventos.extendedProps.PedidoDeVenda;
            app.Eventos.OrdemServico = app.Eventos.extendedProps.OrdemServico;
            app.Eventos.OrdemProducao = app.Eventos.extendedProps.OrdemProducao;
            app.Eventos.id = app.Eventos.extendedProps._id.$oid;
            app.sys.mascara();
            
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
            if (CKEDITOR.instances['observacaoagenda'].getData().length > 0) {
                this.observacao = CKEDITOR.instances['observacaoagenda'].getData();
                extendedProps.descricao = this.observacao;
            } else {
                extendedProps.descricao = this.observacao;
            }
            extendedProps.IdCliente = this.IdCliente;
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
                    captchaSys(app.sys.keysite);
                    app.LancamentoFinanceiro.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
                    captchaSys(app.sys.keysite);
                    app.FichaAtendimento.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
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
            if (nulo(app.OP)) {
                this.OrdemProducaoSrc = [];
            } else {
                this.OrdemProducaoSrc = app.OP.src;
            }
            if (nulo(app.Cliente)) {
                this.ClienteSrc = [];
            } else {
                this.ClienteSrc = app.Cliente.src;
            }

        },
    }
});
