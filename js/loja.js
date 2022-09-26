"use strict";
var lista = {};
var el = "";
$(function () {
    $("body").on("click", ".addCart", function (e) {
        e.preventDefault();
        var produto = $(this).attr("data-prod");
        var qt = $(".qtCount[data-prod='" + produto + "']").val();
        var nome = $(".NomeP[data-prod='" + produto + "']").text();
        if (qt === undefined || qt === null) {
            qt = 0;
        }
        addItem(produto, qt, nome);
        $(this).avisoMsg("Produto Adicionado");
        atualizaItens();
    });
    $("body").on("click", ".altCart", function (e) {
        e.preventDefault();
        var id = $(this).attr("data-id");
        var qtd = $(".qtdItensAlt[data-id='" + id + "']").text();
        altItem(id, qtd);
        $(this).avisoMsg("Produto Alterado");
        atualizaItens();
    });
    $("body").on("click", ".remCart", function (e) {
        e.preventDefault();
        var id = $(this).attr("data-id");
        delItem(id);
        $(this).avisoMsg("Produto Excluído");
        atualizaItens();
    });
    $("body").on("click", ".continuarLista", function (e) {
        e.preventDefault();
        var tr = $("#listVenda tr").size();
        var listaAlt = {};
        for (var i = 0; i <= tr - 1; i++) {
            var id = $("#listVenda tr").eq(i).find(".id").text();
            var nome = $("#listVenda tr").eq(i).find(".nome").text();
            var qtd = $("#listVenda tr").eq(i).find(".qtd").text();
            listaAlt[id] = id + "#*#" + nome + "#*#" + qtd;
        }
        addLista(listaAlt);
        $(this).avisoMsg("Carregando Produtos");
    });
    $("body").on("click", ".salvarLista", function (e) {
        e.preventDefault();
        var data = {};
        var ws = host("Sistema", "ListaLoja", "add");
        data["lista"] = encrypt(window.localStorage.getItem("lista"));
        var rs = decrypt((post(ws, data)));
        $(this).avisoMsg("Salvando Lista");
    });
    $("body").on("click", ".alterarLista", function (e) {
        e.preventDefault();
        var data = {};
        var ws = host("Sistema", "ListaLoja", "edt");
        data["id"] = encrypt($("#id"));
        data["lista"] = encrypt(window.localStorage.getItem("lista"));
        var rs = decrypt((post(ws, data)));
        $(this).avisoMsg("Lista Alterada");
    });
    $("body").on("click", ".removerLista", function (e) {
        e.preventDefault();
        var data = {};
        var ws = host("Sistema", "ListaLoja", "exc");
        data["id"] = encrypt($("#id"));
        var rs = decrypt((post(ws, data)));
        $(this).avisoMsg("Lista Excluída");
    });
    $("body").on("keypress", ".qtdItensAlt", function (e) {
        if (isNaN(String.fromCharCode(e.which)))
            e.preventDefault();
    });
});
function addLista(lista) {
    this.lista = lista;
    window.localStorage.setItem("lista", JSON.stringify(lista));
}
function tblItens() {
    var html = "";
    $.each(JSON.parse(window.localStorage.getItem("lista")), function (idx, obj) {
        var item = obj.split("#*#");
        html += "<tr>"
                + "<td>" + item[0] + "</td>"
                + "<td>" + item[1] + "</td>"
                + "<td contenteditable data-id='" + item[0] + "' class='qtdItensAlt'>" + item[2] + "</td>"
                + "<td><a href='#' class='altCart text-white' data-id='" + item[0] + "'><i class='fas fa-exchange-alt'></i></a>&nbsp;&nbsp;"
                + "<a href='#' class='remCart text-white' data-id='" + item[0] + "'><i class='far fa-trash-alt'></i></a></td>"
                + "</tr>";
    });
    return html;
}

function atualizaItens() {
    $(el).html(tblItens());
}

function setElVenda(em) {
    el = em;
}

function addItem(id, qtd, nome) {
    lista[id] = id + "#*#" + nome + "#*#" + qtd;
    window.localStorage.setItem("lista", JSON.stringify(lista));
}
function altItem(pos, qtd) {
    var ls = lista[pos];
    var item = ls.split("#*#");
    lista[pos] = item[0] + "#*#" + item[1] + "#*#" + qtd;
    window.localStorage.setItem("lista", JSON.stringify(lista));
}
function delItem(pos) {
    delete lista[pos];
    window.localStorage.setItem("lista", JSON.stringify(lista));
}

function getLista() {
    return JSON.parse(window.localStorage.getItem("lista"));
}

function IdsLista() {
    var ids = window.localStorage.getItem("lista");
    var ids;
    for (var i in ids) {
        ids = ids[i].split("#*#")[0] + ",";
    }
    return ids;
}
function QtdsLista() {
    var qd = window.localStorage.getItem("lista");
    for (var i in qd) {
        qd = qd[i].split("#*#")[0] + ",";
    }
    return qd;
}