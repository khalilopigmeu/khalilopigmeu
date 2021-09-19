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

        CategoriaSrc: null,
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

        cliente: null,
        Clientesrc: null,
        procedimento: [],
        Procedimentosrc: null,
        Consultasrc: null,

        Juros: null,
        Referencia: null,
        NotaFiscal: null,
        Valor: null,
        Forma: null,
        Status: null,
        Modalidade: null,
        calendar: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var d = new Date();
                var m = d.getMonth() + 1;
                var y = d.getFullYear();
                this.biencode.inicio = y + "-" + m;
                if (app.CategoriaEventos.src.length > 0) {
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
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Eventos.href, "listar", data);
                app.Eventos.eventos = app.Eventos.src;
                app.Eventos.src = null;
                app.calendar.eventosSrc = eval(app.Eventos.eventos);
                if (app.Eventos.calendar !== null) {
                    app.Eventos.calendar.destroy();
                }
                app.Eventos.calendar = instanceCalendar("calendarTabContent", app.Eventos.eventos, "#Eventos");
                app.calendar.diaevento = formatadata(app.Eventos.calendar.formatIso(app.Eventos.calendar.getDate()));
            });
            app.sys.tabs(this.href);
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
        },
        autocomplete: function () {
            this.groupId = this.evt.groupId;
            this.allDay = this.evt.allDay;
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
            this.extendedProps = this.evt.extendedProps;
            this.daysOfWeek = this.evt.daysOfWeek;
            this.startTime = this.evt.startTime;
            this.endTime = this.evt.endTime;
            this.startRecur = this.evt.startRecur;
            this.endRecur = this.evt.endRecur;
            this.observacao = this.extendedProps.descricao;
            CKEDITOR.instances['observacaoagenda'].setData(unescapeHTML(this.observacao))
            this.cliente = this.extendedProps.cliente;
            this.procedimento = this.extendedProps.procedimento;
            this.Modalidade = this.extendedProps.modelo;
            this.Juros = this.extendedProps.Juros;
            this.Referencia = this.extendedProps.Referencia;
            this.NotaFiscal = this.extendedProps.NotaFiscal;
            this.Valor = this.extendedProps.Valor;
            this.Forma = this.extendedProps.Forma;
            this.Status = this.extendedProps.Status;
            app.SocialMedia.mascara();
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
            for (var i = 0; i <= el.length - 1; i++) {
                if (el[i].selected) {
                    this.backgroundColor = el[i].dataset.color;
                    this.borderColor = el[i].dataset.color;
                }
            }
            this.observacao = CKEDITOR.instances['observacaoagenda'].getData();
            this.biencode.backgroundColor = this.backgroundColor;
            this.biencode.textColor = this.textColor;
            this.biencode.borderColor = this.borderColor;

            var extendedProps = {};
            extendedProps.empresa = window.localStorage.getItem("IdEmpresa");
            extendedProps.descricao = this.observacao;
            extendedProps.cliente = this.cliente;
            extendedProps.procedimento = this.procedimento;
            extendedProps.modelo = this.Modalidade;
            extendedProps.Juros = this.Juros;
            extendedProps.Referencia = this.Referencia;
            extendedProps.NotaFiscal = this.NotaFiscal;
            extendedProps.Valor = this.Valor;
            extendedProps.Forma = this.Forma;
            extendedProps.Status = this.Status;

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
        procedimentos: function () {
            var value = 0;
            for (var j = 0; j <= this.procedimento.length - 1; j++) {
                for (var i = 0; i <= this.Procedimentosrc.length - 1; i++) {
                    if (this.Procedimentosrc[i]._id.$oid === this.procedimento[j]) {
                        value = currency(value).add(this.Procedimentosrc[i].Valor);
                    }
                }
            }
            this.Valor = Real(value).format();
        },
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
});
