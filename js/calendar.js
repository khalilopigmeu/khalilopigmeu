"use strict";
var calendar;
function setHoje(dia) {
    $(".anotdata").text(dia);
}
function instanceCalendar(el, rs, evtModal) {
    rs = replaceAll("\"null\"", "\"\"", rs);
    rs = replaceAll("\"false\"", "false", rs);
    rs = replaceAll("\"true\"", "true", rs);
    rs = eval(rs);
    var calendarEl = document.getElementById(el);
    calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list', 'moment'],
        customButtons: {
            imprimir: {
                text: 'imprimir',
                click: function () {
                    $('#printmodal').modal("show");
                }
            },
            add: {
                text: 'Novo Evento',
                click: function () {
                    $('#Eventos').modal("show");
                }
            },
            recarregar: {
                text: 'Recarregar',
                click: function () {
                    app.Eventos.calendar.destroy();
                    app.Ravec.ravecUpdate();
                }
            }
        },
        header: {
            left: 'prev,today,next  add,recarregar',
            center: 'dayGridMonth,timeGridWeek,timeGridDay  listMonth',
            right: 'title'
        },
        minTime: "07:00:00",
        maxTime: "22:00:00",
        defaultView: 'listMonth',
        weekNumbers: false,
        aspectRation: 2,
        eventLimit: true,
        weekends: true,
        locale: 'pt-br',
        droppable: false,
        allDaySlot: true,
        slotEventOverlap: true,
        editable: true,
        selectable: true,
        firstDay: 0,
        timeZone: 'America/Sao_Paulo',
        slotDuration: '00:30:00',
        navLinks: true,
        events: rs,
        select: function (info) {
            var allDay = info.allDay;
            app.Eventos.inicio = info.startStr;
            app.Eventos.fim = info.endStr;
            app.AnotacaoAgenda.datapesq = app.Eventos.inicio;
            if (!allDay) {
                app.Eventos.horai = formatahora(info.startStr);
                app.Eventos.horaf = formatahora(info.endStr);
            }
            app.Eventos.evtDataCal = "cad";
            $(evtModal).modal();
        },
        eventClick: function (info) {
            app.Eventos.evt = info.event;
            app.Eventos.autocomplete();
            app.Eventos.evtDataCal = "altexc";
            $(evtModal).modal();
        },
        eventDrop: function (info) {
            app.Eventos.info = info;
            var d = info.delta.days;
            var ml = info.delta.milliseconds;
            var m = info.delta.months;
            var y = info.delta.years;
            var novaDataInicio = DropData(formatadata(calendar.formatIso(info.event.start)),
                    formatahora(calendar.formatIso(info.event.start)), d, m, y, ml);
            var novaDataFim = DropData(formatadata(calendar.formatIso(info.event.end)),
                    formatahora(calendar.formatIso(info.event.end)), d, m, y, ml);
            app.Eventos.inicio = formatadata(novaDataInicio);
            app.Eventos.fim = formatadata(novaDataFim);
            if (!info.allDay) {
                app.Eventos.horai = formatahora(novaDataInicio);
                app.Eventos.horaf = formatahora(novaDataFim);
            }
            app.Eventos.evtDataCal = "altexc";
            $(evtModal).modal();
        },
        eventResize: function (info) {
            app.Eventos.info = info;
            var novaData = ResizeData(formatadata(calendar.formatIso(info.event.end)),
                    formatahora(calendar.formatIso(info.event.end)), info.endDelta.milliseconds);
            app.Eventos.fim = formatadata(novaData);
            if (!info.allDay) {
                app.Eventos.horaf = formatahora(info.novaData);
            }
            app.Eventos.evtDataCal = "altexc";
            $(evtModal).modal();
        }});
    calendar.render();
    return calendar;
}
