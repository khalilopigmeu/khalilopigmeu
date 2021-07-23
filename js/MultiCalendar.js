"use strict";
var calendar = [];
var TblJson = [];
var DataEvt = []
var categoriaTab = "";
var idTab = "";
var cal = "";
var slcday = "";
$(function () {
    $.fn.CategoriaEventos = function () {
        $("#calendarTabContent").html("");
        var dados = {
            'ipp': $(this).Encrypt("0"),
            'campos': $(this).Encrypt("0,2,3,4"),
            'pagin': $(this).Encrypt("0"),
            'random': $(this).Encrypt("rand")
        };
        var xml = post(host("Sistema", "Evt", "categorias"), dados);
        var parser = new DOMParser();
        xml = parser.parseFromString(xml, "text/xml");
        var el = xml.getElementsByTagName("CategoriaEventos").length;
        var li = "", act = "";
        for (var i = 0; i <= el - 1; i++) {
            if (i === 0) {
                act = "active";
                cal = 0;
                idTab = $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[0].childNodes[0].nodeValue);
                categoriaTab = $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue);
            } else {
                act = "";
            }
            var color;
            if (i % 2 === 0) {
                color = "deeadd";
            } else {
                color = "eee";
            }
            li += "<li class='nav-item list-group-item' style='background:#" + color + "'>" +
                    "<a class='nav-link rounded " + act + "' id='" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue) +
                    "-tab' data-toggle='tab' data-cal='" + i + "' href='#" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue) +
                    "' role='tab' aria-controls='" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue) +
                    "' data-id='" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[0].childNodes[0].nodeValue) +
                    "' style='background:#" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[2].childNodes[0].nodeValue)
                    + "'>" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue) +
                    "</a>" +
                    " <a href='#' class='altcat py-2 my-2' data-id='" + $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[0].childNodes[0].nodeValue)
                    + "'><i class='far fa-edit'></i></a> " +
                    "</li>";
            var pane = "<div class='tab-pane fade show " + act + "' id='" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue) +
                    "' role='tabpanel' aria-labelledby='" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue) +
                    "-tab'>" +
                    "<div class='calendar' id='" +
                    $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue) +
                    "Evt'></div>" +
                    "</div>";
            $("#calendarTabContent").append(pane);
            fc($(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[0].childNodes[0].nodeValue), $(window).Decrypt(xml.getElementsByTagName("CategoriaEventos")[i].childNodes[1].childNodes[0].nodeValue), i);
        }
        $("#categoriasCal").html(li);
    };
    $.fn.AnotEventos = function (dia, idc) {
        var dados = {
            'ipp': $(this).Encrypt("0"),
            'campos': $(this).Encrypt("0,3,4,5"),
            'pagin': $(this).Encrypt("0"),
            'random': $(this).Encrypt("rand"),
            'param': $(this).Encrypt("Data like '" + dia + "' and IdCategoriaEvento like '" + idc + "'")
        };
        var xml = post(host("Sistema", "Anotacoes", "anotacoes"), dados);
        var parser = new DOMParser();
        xml = parser.parseFromString(xml, "text/xml");
        var el = xml.getElementsByTagName("AnotacaoAgenda").length;
        var li = "";
        for (var i = 0; i <= el - 1; i++) {
            li += "<li class='list-group-item'><span>" + $(window).Decrypt(xml.getElementsByTagName("AnotacaoAgenda")[i].childNodes[2].childNodes[0].nodeValue) +
                    "</span> <a href='#' data-id='" +
                    $(window).Decrypt(xml.getElementsByTagName("AnotacaoAgenda")[i].childNodes[0].childNodes[0].nodeValue)
                    + "'><i class='anotsText far fa-sticky-note' id='anot" +
                    $(window).Decrypt(xml.getElementsByTagName("AnotacaoAgenda")[i].childNodes[0].childNodes[0].nodeValue)
                    + "'></i></a>"
                    + " <a href='#' class='altanot py-2 my-2' data-id='" + $(window).Decrypt(xml.getElementsByTagName("AnotacaoAgenda")[i].childNodes[0].childNodes[0].nodeValue)
                    + "'><i class='far fa-edit'></i></a> " +
                    "<div id='lianot" +
                    $(window).Decrypt(xml.getElementsByTagName("AnotacaoAgenda")[i].childNodes[0].childNodes[0].nodeValue)
                    + "' class='d-none'>" +
                    $(window).Decrypt(xml.getElementsByTagName("AnotacaoAgenda")[i].childNodes[3].childNodes[0].nodeValue)
                    + "</div>" +
                    "</li>";
        }
        $("#anots").html(li);
    };
    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd/mm/yy",
        showAnim: "slideDown",
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', acentuar('Sábado'), 'Domingo'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        monthNames: ['Janeiro', 'Fevereiro', acentuar('Março'), 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    });
    $("#anots").on("click", ".anotsText", function () {
        $("#modal").modal();
        $("#modal .modal-body").html($("#li" + $(this).attr("id")).text());
    });
    $("#categoriasCal").on("click", ".nav-item", function () {
        categoriaTab = $(this).text();
        idTab = $(this).children().attr("data-id");
        cal = $(this).children().attr("data-cal");
    });
    $("#anots").on("click", ".altanot", function () {
        $("#frmAnotacaoEvt input[name='Data']").val(slcday);
        $("#frmAnotacaoEvt input[name='Categoria']").val(categoriaTab);
        $("#frmAnotacaoEvt input[name='Nome']").val($(this).parent().children().eq(0).text());
        CKEDITOR.instances['Anotacao'].destroy(true);
        $("#frmAnotacaoEvt textarea[name='Anotacao']").val($("#lianot" + $(this).attr("data-id")).html());
        CKEDITOR.replace('Anotacao', {
            customConfig: '../../../js/configEditor.js'
        });
        $("#frmAnotacaoEvt input[name='id']").val($(this).attr("data-id"));
        $("#modalEvtAnotacoes").modal();
    });
    $("#categoriasCal").on("click", ".altcat", function () {
        $("#frmCategoriaEvt input[name='Nome']").val($(this).parent().children().text());
        $("#frmCategoriaEvt input[name='id']").val($(this).attr("data-id"));
        $("#frmCategoriaEvt input[name='Cor']").val(rgb2hex($(this).parent().css("background-color")));
        $("#modalEvtCategoria").modal();
    });
    //$(window).CategoriaEventos();
    //setHoje(formatadata(calendar[0].formatIso(calendar[0].getDate())), idTab);
    $(".gotodate").click(function () {
        var dia = $("input[name='irpara']").val().split("/");
        calendar[cal].gotoDate(dia[2] + "-" + dia[1] + "-" + dia[0]);
        setHoje(formatadata(calendar[cal].formatIso(calendar[cal].getDate())), idTab);
    });
    $(".addAnots").click(function () {
        $("#frmAnotacaoEvt input[name='Data']").val(slcday);
        $("#frmAnotacaoEvt input[name='Categoria']").val(categoriaTab);
        $("#frmAnotacaoEvt input[name='Categoria']").attr("data-id", idTab);
    });
    $("#frmAgendaEvt .btnact").click(function () {
        $("#frmAgendaEvt input[name=act]").val($(this).attr("data-act"));
        $("#frmAgendaEvt").submit();
    });
    $("#ckbR").click(function () {
        if ($("#ckbR").is(":checked")) {
            $("#frmRepeat").removeAttr("disabled");
        } else {
            $("#frmRepeat").attr("disabled", "disabled");
        }
    });
    $("#ckbF").click(function () {
        if ($("#ckbF").is(":checked")) {
            $("#frmEnd").removeAttr("disabled");
        } else {
            $("#frmEnd").attr("disabled", "disabled");
        }
    });
    $("#frmAgendaEvt").submit(function (e) {
        e.preventDefault();
        var data = {};
        var dataEvt = {};
        var act = $("#frmAgendaEvt input[name='act']").val();
        var id = $("#frmAgendaEvt input[name='id']").val();
        var ID = $("#frmAgendaEvt input[name='IdEvento']").val();
        if (id !== null || typeof id !== "undefined") {
            data["Id"] = $(window).Encrypt(id);
            dataEvt["Id"] = ID;
            data["id"] = $(window).Encrypt(id);
        }
        var nome = $("#frmAgendaEvt input[name='Nome']").val();
        if (nome !== null || typeof nome !== "undefined") {
            data["Title"] = $(window).Encrypt(nome);
            dataEvt["title"] = nome;
        }
        var inicio = $("#frmAgendaEvt input[name='Inicio']").val();
        var horai = $("#frmAgendaEvt input[name='Horai']").val();
        if ((inicio !== null || typeof inicio !== "undefined") && (horai !== null || typeof horai !== "undefined")) {
            data["Start"] = $(window).Encrypt(toUTC(invertData(inicio), horai));
            dataEvt["start"] = toUTC(invertData(inicio), horai);
        }
        if ($("#ckbF").is(":checked")) {
            var fim = $("#frmAgendaEvt input[name='Fim']").val();
            var horaf = $("#frmAgendaEvt input[name='Horaf']").val();
            if ((fim !== null || typeof fim !== "undefined") && (horaf !== null || typeof horaf !== "undefined")) {
                data["End"] = $(window).Encrypt(toUTC(invertData(fim), horaf));
                dataEvt["end"] = toUTC(invertData(fim), horaf);
            }
        } else {
            data["End"] = data["Start"];
            dataEvt["end"] = dataEvt["Start"];
        }
        var categoria = $("#frmAgendaEvt input[name='Categoria']").attr("data-id");
        if (categoria !== null || typeof categoria !== "undefined") {
            data["GroupId"] = $(window).Encrypt(categoria);
            dataEvt["groupId"] = categoria;
        }
        var Observacao = window.btoa(CKEDITOR.instances['observacaoagenda'].getData());
        var repeat = $("#frmAgendaEvt input[name='repeat']").val();
        var ckb = $("#frmAgendaEvt input[name='ckb']").val();
        var days = [];
        var ckb = document.getElementsByName('ckb');
        for (var i = 0; i < ckb.length; i++) {
            if (ckb[i].checked)
                days.push(ckb[i].value);
        }
        if ($("#ckbR").is(":checked")) {
            data["DaysOfWeek"] = days;
            data["StartTime"] = horai;
            data["EndTime"] = horaf;
            data["StartRecur"] = invertData(inicio);
            data["EndRecur"] = repeat;
            dataEvt["daysOfWeek"] = days;
            dataEvt["startTime"] = horai;
            dataEvt["endTime"] = horaf;
            dataEvt["startRecur"] = invertData(inicio);
            dataEvt["endRecur"] = repeat;
        }
        var model = $("#nav-tabEvt a.active").attr("data-model");
        if (model === "1") {
            data["ExtendedProps"] = $(window).Encrypt("empresa:" + window.localStorage.getItem("IdEmpresa") + ";descricao:" + Observacao + "");
            dataEvt["extendedProps"] = $(window).Encrypt("empresa:" + window.localStorage.getItem("IdEmpresa") + ";descricao:" + Observacao + "");
        } else if (model === "2") {
            var paciente = $("#frmAgendaEvtMedica input[name='Paciente']").val();
            data["ExtendedProps"] = "empresa:" + window.localStorage.getItem("IdEmpresa") + ";cliente:"
                    + paciente + ";descricao:" + Observacao + ";status:;bgcolor:";
            dataEvt["extendedProps"] = "empresa:" + window.localStorage.getItem("IdEmpresa") + ";cliente:"
                    + paciente + ";descricao:" + Observacao + ";status:;bgcolor:";
        } else if (model === "3") {
            data["ExtendedProps"] = $(window).Encrypt("empresa:" + window.localStorage.getItem("IdEmpresa") + ";descricao:" + Observacao + "");
            dataEvt["extendedProps"] = $(window).Encrypt("empresa:" + window.localStorage.getItem("IdEmpresa") + ";descricao:" + Observacao + "");
        } else {
            data["ExtendedProps"] = $(window).Encrypt("empresa:" + window.localStorage.getItem("IdEmpresa") + ";descricao:" + Observacao + "");
            dataEvt["extendedProps"] = $(window).Encrypt("empresa:" + window.localStorage.getItem("IdEmpresa") + ";descricao:" + Observacao + "");
        }
        data["AllDay"] = $(window).Encrypt("false");
        data["Overlap"] = $(window).Encrypt("false");
        data["BackgroundColor"] = $(window).Encrypt($("#frmAgendaEvt input[name='catcolor']").val());
        data["TextColor"] = $(window).Encrypt("#000000");
        data["BorderColor"] = $(window).Encrypt($("#frmAgendaEvt input[name='catcolor']").val());
        dataEvt["allDay"] = "false";
        dataEvt["overlap"] = "false";
        dataEvt["backgroundColor"] = $("#frmAgendaEvt input[name='catcolor']").val();
        dataEvt["textColor"] = "#000000";
        dataEvt["borderColor"] = $("#frmAgendaEvt input[name='catcolor']").val();
        if (act === "cad") {
            var rs = $(window).Decrypt(post(host("Sistema", "Eventos", "add"), data));
            $("#modal").modal();
            if (rs === "true") {
                calendar[cal].addEvent(eval(JSON.parse(JSON.stringify(dataEvt))));
                $(this).avisoAdd();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "alt") {
            var data = {};
            var rs = $(window).Decrypt(post(host("Sistema", "Eventos", "edt"), data));
            $("#modal").modal();
            if (rs === "true") {
                var event = calendar[cal].getEventById(ID);
                event.setProp("Id", ID);
                if (nome !== null || typeof nome !== "undefined") {
                    event.setProp("title", nome);
                }
                if ((inicio !== null || typeof inicio !== "undefined") && (horai !== null || typeof horai !== "undefined")) {
                    event.setProp("start", toUTC(invertData(inicio), horai));
                }
                if ($("#ckbF").is(":checked")) {
                    if ((fim !== null || typeof fim !== "undefined") && (horaf !== null || typeof horaf !== "undefined")) {
                        event.setProp("end", toUTC(invertData(fim), horaf));
                    }
                } else {
                    event.setProp("end", dataEvt["Start"]);
                }
                if (categoria !== null || typeof categoria !== "undefined") {
                    event.setProp("groupId", categoria);
                }
                event.setProp("allDay", "false");
                event.setProp("overlap", "false");
                event.setProp("backgroundColor", $("#frmAgendaEvt input[name='catcolor']").val());
                event.setProp("textColor", "#000000");
                event.setProp("borderColor", $("#frmAgendaEvt input[name='catcolor']").val());
                if ($("#ckbR").is(":checked")) {
                    event.setProp("daysOfWeek", days);
                    event.setProp("startTime", horai);
                    event.setProp("endTime", horaf);
                    event.setProp("startRecur", invertData(inicio));
                    event.setProp("endRecur", repeat);
                }
                if (model === "1") {
                    event.setExtendedProp("empresa", window.localStorage.getItem("IdEmpresa"));
                    event.setExtendedProp("descricao", Observacao);
                } else if (model === "2") {
                    var paciente = $("#frmAgendaEvtMedica input[name='Paciente']").val();
                    event.setExtendedProp("empresa", window.localStorage.getItem("IdEmpresa"));
                    event.setExtendedProp("descricao", Observacao);
                    event.setExtendedProp("cliente", paciente);
                    event.setExtendedProp("status", "");
                    event.setExtendedProp("bgcolor", "");
                } else if (model === "3") {
                    event.setExtendedProp("empresa", window.localStorage.getItem("IdEmpresa"));
                    event.setExtendedProp("descricao", Observacao);
                } else {
                    event.setExtendedProp("empresa", window.localStorage.getItem("IdEmpresa"));
                    event.setExtendedProp("descricao", Observacao);
                }
                $(this).avisoEdt();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "exc") {
            var rs = $(window).Decrypt(post(host("Sistema", "Eventos", "exc"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoExc();
                var event = calendar[cal].getEventById(id);
                event.remove();
            } else {
                $(this).avisoErr();
            }
        }
        $(this)[0].reset();
    });
    $("#frmCategoriaEvt .btnact").click(function () {
        $("#frmCategoriaEvt input[name=act]").val($(this).attr("data-act"));
        $("#frmCategoriaEvt").submit();
    });
    $("#frmCategoriaEvt").submit(function (e) {
        e.preventDefault();
        var data = {};
        var act = $("#frmCategoriaEvt input[name='act']").val();
        var id = $("#frmCategoriaEvt input[name='id']").val();
        if (id !== null || typeof id !== "undefined") {
            data["id"] = $(window).Encrypt(id);
        }
        var nome = $("#frmCategoriaEvt input[name='Nome']").val();
        if (nome !== null || typeof nome !== "undefined") {
            data["nome"] = $(window).Encrypt(nome);
        }
        var cor = $("#frmCategoriaEvt input[name='Cor']").val();
        if (cor !== null || typeof cor !== "undefined") {
            data["cor"] = $(window).Encrypt(cor);
        }
        data["acessos"] = "";
        if (act === "cad") {
            var rs = $(window).Decrypt(post(host("Sistema", "CategoriasEvt", "add"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoAdd();
                $(window).CategoriaEventos();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "alt") {
            var rs = $(window).Decrypt(post(host("Sistema", "CategoriasEvt", "edt"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoEdt();
                $(window).CategoriaEventos();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "exc") {
            var rs = $(window).Decrypt(post(host("Sistema", "CategoriasEvt", "exc"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoExc();
                $(window).CategoriaEventos();
            } else {
                $(this).avisoErr();
            }
        }
        $(this)[0].reset();
    });
    $("#frmAnotacaoEvt .btnact").click(function () {
        $("#frmAnotacaoEvt input[name=act]").val($(this).attr("data-act"));
        $("#frmAnotacaoEvt").submit();
    });
    $("#frmAnotacaoEvt").submit(function (e) {
        e.preventDefault();
        var data = {};
        var act = $("#frmAnotacaoEvt input[name='act']").val();
        var id = $("#frmAnotacaoEvt input[name='id']").val();
        if (id !== null || typeof id !== "undefined") {
            data["id"] = $(window).Encrypt(id);
        }
        var dia = $("#frmAnotacaoEvt input[name='Data']").val();
        if (dia !== null || typeof dia !== "undefined") {
            data["data"] = $(window).Encrypt(dia);
        }
        var titulo = $("#frmAnotacaoEvt input[name='Nome']").val();
        if (titulo !== null || typeof titulo !== "undefined") {
            data["titulo"] = $(window).Encrypt(titulo);
        }
        var categoria = $("#frmAnotacaoEvt input[name='Categoria']").attr("data-id");
        if (categoria !== null || typeof categoria !== "undefined") {
            data["categoria"] = $(window).Encrypt(categoria);
        }
        var Anotacao = CKEDITOR.instances['Anotacao'].getData();
        if (Anotacao !== null || typeof Anotacao !== "undefined") {
            data["anotacao"] = $(window).Encrypt(Anotacao);
        }
        if (act === "cad") {
            var rs = $(window).Decrypt(post(host("Sistema", "Anotacoes", "add"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoAdd();
                setHoje(dia);
            } else {
                $(this).avisoErr();
            }
        } else if (act === "alt") {
            var rs = $(window).Decrypt(post(host("Sistema", "Anotacoes", "edt"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoEdt();
                setHoje(dia);
            } else {
                $(this).avisoErr();
            }
        } else if (act === "exc") {
            var rs = $(window).Decrypt(post(host("Sistema", "Anotacoes", "exc"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoExc();
                setHoje(dia);
            } else {
                $(this).avisoErr();
            }
        }
        $(this)[0].reset();
    });
    $("#frmConsulta").submit(function (e) {
        e.preventDefault();
        var data = {};
        var act = $("#frmConsulta input[name='act']").val();
        var id = $("#frmConsulta input[name='id']").val();
        if (id !== null || typeof id !== "undefined") {
            data["id"] = $(window).Encrypt(id);
        }
        var nome = $("#frmConsulta input[name='Nome']").val();
        if (nome !== null || typeof nome !== "undefined") {
            data["nome"] = $(window).Encrypt(nome);
        }
        var valor = $("#frmConsulta input[name='Valor']").val();
        if (valor !== null || typeof valor !== "undefined") {
            data["valor"] = $(window).Encrypt(valor);
        }
        var categoria = $("#frmConsulta input[name='Categoria']").attr("data-id");
        if (categoria !== null || typeof categoria !== "undefined") {
            data["categoria"] = $(window).Encrypt(categoria);
        }
        var descricao = $("#frmConsulta textarea[name='descricao']").val();
        if (descricao !== null || typeof descricao !== "undefined") {
            data["descricao"] = $(window).Encrypt(descricao);
        }
        if (act === "cad") {
            var rs = $(window).Decrypt(post(host("Sistema", "Consulta", "add"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoAdd();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "alt") {
            var rs = $(window).Decrypt(post(host("Sistema", "Consulta", "edt"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoEdt();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "exc") {
            var rs = $(window).Decrypt(post(host("Sistema", "Consulta", "exc"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoExc();
            } else {
                $(this).avisoErr();
            }
        }
        $(this)[0].reset();
    });
    $("#frmProcedimento").submit(function (e) {
        e.preventDefault();
        var data = {};
        var act = $("#frmProcedimento input[name='act']").val();
        var id = $("#frmProcedimento input[name='id']").val();
        if (id !== null || typeof id !== "undefined") {
            data["id"] = $(window).Encrypt(id);
        }
        var nome = $("#frmProcedimento input[name='Nome']").val();
        if (nome !== null || typeof nome !== "undefined") {
            data["nome"] = $(window).Encrypt(nome);
        }
        var valor = $("#frmProcedimento input[name='Valor']").val();
        if (valor !== null || typeof valor !== "undefined") {
            data["valor"] = $(window).Encrypt(valor);
        }
        var categoria = $("#frmProcedimento input[name='Categoria']").attr("data-id");
        if (categoria !== null || typeof categoria !== "undefined") {
            data["categoria"] = $(window).Encrypt(categoria);
        }
        var descricao = $("#frmProcedimento textarea[name='descricao']").val();
        if (descricao !== null || typeof descricao !== "undefined") {
            data["descricao"] = $(window).Encrypt(descricao);
        }
        if (act === "cad") {
            var rs = $(window).Decrypt(post(host("Sistema", "Procedimento", "add"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoAdd();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "alt") {
            var rs = $(window).Decrypt(post(host("Sistema", "Procedimento", "edt"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoEdt();
            } else {
                $(this).avisoErr();
            }
        } else if (act === "exc") {
            var rs = $(window).Decrypt(post(host("Sistema", "Procedimento", "exc"), data));
            $("#modal").modal();
            if (rs === "true") {
                $(this).avisoExc();
            } else {
                $(this).avisoErr();
            }
        }
        $(this)[0].reset();
    });
    $("#frmRelatorioEvt").submit(function (e) {
        e.preventDefault();
        var cals = calendar[cal].getEvents();
        $("#RelTitle").html(categoriaTab);
        /*$("#tblJson thead").html("<tr><th>Inicio</th><th>Nome</th><th>Observação</th></tr>");*/
        $("#tblJson tbody").html("");
        var conteudo = "";
        var inicioData;
        for (var i = 0; i <= cals.length - 1; i++) {
            var inicio = $("#frmRelatorioEvt input[name='InicioRelatorio']").val();
            var fim = $("#frmRelatorioEvt input[name='FimRelatorio']").val();
            var compara = formatadata(calendar[cal].formatIso(calendar[cal].getEvents()[i].start));
            if (DataMaior(compara, inicio) && DataMenor(compara, fim)) {
                if (inicioData !== formatadata(calendar[cal].formatIso(calendar[cal].getEvents()[i].start))) {
                    inicioData = formatadata(calendar[cal].formatIso(calendar[cal].getEvents()[i].start));
                    conteudo += "<tr><td colspan='3'>" + inicioData + "</td></tr>";
                }
                conteudo += "<tr>";
                conteudo += "<td style='background:yellow'>" + formatahora(calendar[cal].formatIso(calendar[cal].getEvents()[i].start)) + "</td>";
                conteudo += "<td>" + calendar[cal].getEvents()[i].title + "</td>";
                try {
                    conteudo += "<td>" + window.atob(replaceAll(" ", "+", calendar[cal].getEvents()[i].extendedProps.descricao)) + "</td>";
                } catch (e) {
                    conteudo += "<td>" + calendar[cal].getEvents()[i].extendedProps.descricao + "</td>";
                }
                conteudo += "</tr>";
            }
        }
        $("#tblJson tbody").html(conteudo);
        $("#printArea").show();
        window.print();
        $("#printArea").hide();
    });
    $('#nav-tabCliPac a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //e.target
        //e.relatedTarget
        var opt = e.target.getAttribute("data-clipa");
        switch (opt) {
            case "1":
                init_Cliente();
                break;
            case "2":
                init_Paciente();
                break;
            case "3":
                break;
            case "4" :
                break;
        }
    });
});
function fc(idcat, cat, tab) {
    var dados = {
        'clause': $(this).Encrypt("groupId"),
        'pesq': $(this).Encrypt(idcat)
    };
    var rs = $(window).Decrypt(post(host("Sistema", "Eventos", "eventosJSON"), dados));
    rs = replaceAll("u0027", "'", rs.replace(/\\/g, ""));
    rs = replaceAll("u003c", "<", rs);
    rs = replaceAll("u003e", ">", rs);
    instanceCalendar(cat + "Evt", rs, tab);
}

function setCategoria() {
    $("input[name='Categoria']").val(categoriaTab);
    $("input[name='Categoria']").attr("data-id", idTab);
}

function setHoje(dia) {
    $(".anotdata").text(dia);
    slcday = dia;
    $(window).AnotEventos(dia, idTab);
}
function instanceCalendar(el, rs, tab,evtModal) {
    rs = rs.substring(1, rs.length - 1);
    rs = "\"" + replaceAll("\"", "\\\"", rs) + "\"";
    var calendarEl = document.getElementById(el);
    calendar[tab] = new FullCalendar.Calendar(calendarEl, {
        plugins: ['bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list', 'moment'],
        customButtons: {
            imprimir: {
                text: 'imprimir',
                click: function () {
                    $('#printmodal').modal("show");
                }
            }
        },
        header: {
            left: 'prev,next today imprimir',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        minTime: "07:00:00",
        maxTime: "20:00:00",
        defaultView: 'listMonth',
        weekNumbers: true,
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
        slotDuration: '00:05:00',
        navLinks: true,
        events: eval(JSON.parse(rs)),
        select: function (info) {
            var allDay = info.allDay;
            DataEvt[tab]["inicio"] = formatadata(info.startStr);
            DataEvt[tab]["inicio"] = formatadata(info.endStr);
            if (!allDay) {
                DataEvt[tab]["horai"] = formatahora(info.startStr);
                DataEvt[tab]["inicihorafo"] = formatahora(info.endStr);
            }
            setCategoria();
            $("#modalEvtAgenda").modal();
            $(evtModal).modal();
        },
        eventClick: function (info) {
            DataEvt = [];
            DataEvt[tab]["evt"] = info.event;
            var allDay = info.event.allDay;
            $("#frmAgendaEvt input[name='Nome']").val(info.event.title);
            $("#frmAgendaEvt input[name='IdEvento']").val(info.event.id);
            CKEDITOR.instances['observacaoagenda'].destroy(true);
            try {
                $("#frmAgendaEvt textarea[name='observacaoagenda']").val(window.atob(replaceAll(" ", "+", info.event.extendedProps.descricao)));
            } catch (e) {
                $("#frmAgendaEvt textarea[name='observacaoagenda']").val(info.event.extendedProps.descricao);
            }
            CKEDITOR.replace('observacaoagenda', {
                customConfig: '../../../js/configEditor.js'
            });
            $("#frmAgendaEvt input[name='id']").val(info.event.extendedProps._id.$oid);
            $("#frmAgendaEvt input[name='Inicio']").val(formatadata(calendar[tab].formatIso(info.event.start)));
            try {
                $("#frmAgendaEvt input[name='Fim']").val(formatadata(calendar[tab].formatIso(info.event.end)));
            } catch (e) {
                $("#frmAgendaEvt input[name='Fim']").val($("#frmAgendaEvt input[name='Inicio']").val());
            }
            if (!allDay) {
                $("#frmAgendaEvt input[name='Horai']").val(formatahora(calendar[tab].formatIso(info.event.start)));
                try {
                    $("#frmAgendaEvt input[name='Horaf']").val(formatahora(calendar[tab].formatIso(info.event.end)));
                } catch (e) {
                    $("#frmAgendaEvt input[name='Horaf']").val($("#frmAgendaEvt input[name='Horai']").val());
                }
            }
            setCategoria();
            $("#modalEvtAgenda").modal();
            $(evtModal).modal();
        },
        eventDrop: function (info) {
            DataEvt = [];
            DataEvt[tab]["info"] = info;
            DataEvt[tab]["newIni"] = novaDataInicio;
            DataEvt[tab]["newFim"] = novaDataFim;
            modalConfirm(function (confirm) {
                if (confirm) {
                    var d = info.delta.days;
                    var ml = info.delta.milliseconds;
                    var m = info.delta.months;
                    var y = info.delta.years;
                    var novaDataInicio = DropData(formatadata(calendar[tab].formatIso(info.event.start)),
                            formatahora(calendar[tab].formatIso(info.event.start)), d, m, y, ml);
                    var novaDataFim = DropData(formatadata(calendar[tab].formatIso(info.event.end)),
                            formatahora(calendar[tab].formatIso(info.event.end)), d, m, y, ml);
                    var event = calendar[cal].getEventById(info.event.id);
                    event.setProp("start", novaDataInicio);
                    event.setProp("end", novaDataFim);
                    var data = {};
                    data["Start"] = $(window).Encrypt(novaDataInicio);
                    data["End"] = $(window).Encrypt(novaDataFim);
                    data["Id"] = $(window).Encrypt(info.event.id);
                    data["id"] = $(window).Encrypt(info.event.id);
                    var rs = $(window).Decrypt(post(host("Sistema", "Eventos", "edt"), data));
                    $("#modal").modal();
                    if (rs === "true") {
                        $(this).avisoEdt();
                    } else {
                        $(this).avisoErr();
                        info.revert();
                    }
                } else {
                    info.revert();
                }
            });
        },
        eventResize: function (info) {
            DataEvt = [];
            DataEvt["info"] = info;
            var novaData = ResizeData(formatadata(calendar.formatIso(info.event.end)),
                    formatahora(calendar.formatIso(info.event.end)), info.endDelta.milliseconds);
            DataEvt["newFim"] = novaData;
            modalConfirm(function (confirm) {
                if (confirm) {
                    var novaData = ResizeData(formatadata(calendar[tab].formatIso(info.event.end)),
                            formatahora(calendar[tab].formatIso(info.event.end)), info.endDelta.milliseconds);
                    var event = calendar[cal].getEventById(info.event.id);
                    event.setProp("end", novaData);
                    var data = {};
                    data["End"] = $(window).Encrypt(novaData);
                    data["Id"] = $(window).Encrypt(info.event.id);
                    data["id"] = $(window).Encrypt(info.event.id);
                    var rs = $(window).Decrypt(post(host("Sistema", "Eventos", "edt"), data));
                    $("#modal").modal();
                    if (rs === "true") {
                        $(this).avisoEdt();
                    } else {
                        $(this).avisoErr();
                        info.revert();
                    }
                } else {
                    info.revert();
                }
            });
        }});
    calendar[tab].render();
}
