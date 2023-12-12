var lof = "";
$(function () {
    $("form").submit(function (e) {
        e.preventDefault();
    });
    $(".sairfb").on("click", function () {
        app.sys.desconectaFB();
    });
    $(".entrafb").on("click", function () {
        app.sys.Status();
        $('.modal').modal('hide');
    });
    $("form").ready(function () {
        $("*:required").attr("data-toggle", "tooltip");
        $("*:required").attr("title", acentuar("Obrigatório"));
        $("*:required").attr("data-original-title", acentuar("Obrigatório"));
        $("*:required").tooltip();
        var ind = $("*:required").length;
        for (var i = 0; i <= ind - 1; i++) {
            $("*:required").eq(i).prev("label").text($("*:required").eq(i).prev("label").text() + " *");
        }
        //$("input").attr("spellcheck", "true");
        //$("textarea").attr("spellcheck", "true");
    });
    $('script[src], link[href]').each(function (i, e) {
        var item = ((e.nodeName === "LINK") ? $(this).attr('href') : $(this).attr('src'));
        lof += item + "|";
    });
    $.fn.avisoAdd = function () {
        $("#modal").modal();
        $("#modal .modal-title").text("Aviso!");
        $("#modal .modal-body").text("Inserido com sucesso!");
    };
    $.fn.avisoEdt = function () {
        $("#modal").modal();
        $("#modal .modal-title").text("Aviso!");
        $("#modal .modal-body").text("Alterado com sucesso!");
    };
    $.fn.avisoExc = function () {
        $("#modal").modal();
        $("#modal .modal-title").text("Aviso!");
        $("#modal .modal-body").text("Excluído com sucesso!");
    };
    $.fn.avisoErr = function () {
        $("#modal").modal();
        $("#modal .modal-title").text("Aviso!");
        $("#modal .modal-body").text("Falha na execução!");
    };
    $.fn.avisoMsg = function (msg) {
        $("#modal").modal();
        $("#modal .modal-title").text("Aviso!");
        $("#modal .modal-body").text(msg);
    };

    $.fn.NotifySucesso = function (msg) {
        $.notify(msg, {className: "success", position: "bottom right"});
    };
    $.fn.NotifyWarn = function (msg) {
        $.notify(msg, {className: "warn", position: "bottom right"});
    };
    $.fn.NotifyErr = function (msg) {
        $.notify(msg, {className: "error", position: "bottom right"});
    };
    $.fn.NotifyInfo = function (msg) {
        $.notify(msg, {className: "info", position: "bottom right"});
    };


    $.fn.Encrypt = function (dados) {
        var iterationCount = 1000;
        var keySize = 128;
        var plaintext = dados;
        var passphrase = getAuth();

        var four = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
        var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);

        var aesUtil = new AesUtil(keySize, iterationCount);
        var ciphertext = aesUtil.encrypt(salt, four, passphrase, plaintext);
        return  btoa(ciphertext + "#" + salt + "#" + four);
    };
    $.fn.Decrypt = function (dados) {
        try {
            dados = atob(dados);
            ﻿var iterationCount = 1000;
            var keySize = 128;
            dados = dados.split("#");
            var plaintext = dados[0];
            var passphrase = getAuth();
            var four = dados[2];
            var salt = dados[1];
            var aesUtil = new AesUtil(keySize, iterationCount);
            var ciphertext = aesUtil.decrypt(salt, four, passphrase, plaintext);
            return ciphertext;
        } catch (err) {
            return dados;
        }
    };
    /*Tipo
     * 1 CODE 128
     * 2 EAN13
     * 3 UPC
     * 4 EAN8
     * 5 EAN5
     * 6 EAN2
     * 7 CODE39
     * 8 ITF14
     * 9 MSI
     * 10 MSI10
     * 11 MSI11
     * 12 MSI1110
     * 13 pharmacode
     * 14 codabar
     */
    $.fn.BarcodeTipoWS = function (tipo) {
        switch (tipo) {
            case "-2":
                tipo = "CODE128C";
                break;
            case "-1":
                tipo = "CODE128B";
                break;
            case "1":
                tipo = "CODE128A";
                break;
            case "2":
                tipo = "EAN13";
                break;
            case "3":
                tipo = "UPC";
                break;
            case "4":
                tipo = "EAN8";
                break;
            case "5":
                tipo = "EAN5";
                break;
            case "6":
                tipo = "EAN2";
                break;
            case "7":
                tipo = "CODE39";
                break;
            case "8":
                tipo = "ITF14";
                break;
            case "9":
                tipo = "MSI";
                break;
            case "10":
                tipo = "MSI10";
                break;
            case "11":
                tipo = "MSI1010";
                break;
            case "12":
                tipo = "MSI1110";
                break;
            case "13":
                tipo = "pharmacode";
                break;
            case "14":
                tipo = "codabar";
                break;
            default:
                tipo = "CODE128";
                break;
        }
        return tipo;
    };
    $.fn.BarcodeWS = function (el, val, tipo, cor, bg, flag) {
        var data = {
            format: tipo,
            font: "OCRB",
            lineColor: cor,
            width: 2,
            height: 35,
            textMargin: 5,
            background: bg,
            displayValue: true
        };
        switch (flag) {
            case "ean128":
                data["ean128"] = true;
                break;
            case "ean13":
                data["flat"] = true;
                break;
            case "ean8":
                data["flat"] = true;
                break;
            case "upc":
                data["flat"] = true;
                break;
            case "mod43":
                data["mod43"] = true;
                break;
            default:
                break;
        }
        JsBarcode(el, val, data);
    };

    $.fn.tableToJSON = function (opts) {
        var defaults = {
            ignoreColumns: [],
            onlyColumns: null,
            ignoreHiddenRows: true,
            headings: null,
            allowHTML: false
        };
        opts = $.extend(defaults, opts);
        var notNull = function (value) {
            return value !== undefined && value !== null;
        };
        var ignoredColumn = function (index) {
            if (notNull(opts.onlyColumns)) {
                return $.inArray(index, opts.onlyColumns) === -1;
            }
            return $.inArray(index, opts.ignoreColumns) !== -1;
        };
        var arraysToHash = function (keys, values) {
            var result = {}, index = 0;
            $.each(values, function (i, value) {
                if (index < keys.length && notNull(value)) {
                    result[keys[index]] = value;
                    index++;
                }
            });
            return result;
        };
        var cellValues = function (cellIndex, cell) {
            var value, result;
            if (!ignoredColumn(cellIndex)) {
                var override = $(cell).data('override');
                if (opts.allowHTML) {
                    value = $.trim($(cell).html());
                } else {
                    value = $.trim($(cell).text());
                }
                result = notNull(override) ? override : value;
            }
            return result;
        };
        var rowValues = function (row) {
            var result = [];
            $(row).children('td,th').each(function (cellIndex, cell) {
                if (!ignoredColumn(cellIndex)) {
                    result.push(cellValues(cellIndex, cell));
                }
            });
            return result;
        };
        var getHeadings = function (table) {
            var firstRow = table.find('tr:first').first();
            return notNull(opts.headings) ? opts.headings : rowValues(firstRow);
        };
        var construct = function (table, headings) {
            var i, j, len, len2, txt, $row, $cell,
                    tmpArray = [],
                    cellIndex = 0,
                    result = [];
            table.children('tbody,*').children('tr').each(function (rowIndex, row) {
                if (rowIndex > 0 || notNull(opts.headings)) {
                    $row = $(row);
                    if ($row.is(':visible') || !opts.ignoreHiddenRows) {
                        if (!tmpArray[rowIndex]) {
                            tmpArray[rowIndex] = [];
                        }
                        cellIndex = 0;
                        $row.children().each(function () {
                            if (!ignoredColumn(cellIndex)) {
                                $cell = $(this);
                                if ($cell.filter('[rowspan]').length) {
                                    len = parseInt($cell.attr('rowspan'), 10) - 1;
                                    txt = cellValues(cellIndex, $cell, []);
                                    for (i = 1; i <= len; i++) {
                                        if (!tmpArray[rowIndex + i]) {
                                            tmpArray[rowIndex + i] = [];
                                        }
                                        tmpArray[rowIndex + i][cellIndex] = txt;
                                    }
                                }
                                if ($cell.filter('[colspan]').length) {
                                    len = parseInt($cell.attr('colspan'), 10) - 1;
                                    txt = cellValues(cellIndex, $cell, []);
                                    for (i = 1; i <= len; i++) {
                                        if ($cell.filter('[rowspan]').length) {
                                            len2 = parseInt($cell.attr('rowspan'), 10);
                                            for (j = 0; j < len2; j++) {
                                                tmpArray[rowIndex + j][cellIndex + i] = txt;
                                            }
                                        } else {
                                            tmpArray[rowIndex][cellIndex + i] = txt;
                                        }
                                    }
                                }
                                while (tmpArray[rowIndex][cellIndex]) {
                                    cellIndex++;
                                }
                                if (!ignoredColumn(cellIndex)) {
                                    txt = tmpArray[rowIndex][cellIndex] || cellValues(cellIndex, $cell, []);
                                    if (notNull(txt)) {
                                        tmpArray[rowIndex][cellIndex] = txt;
                                    }
                                }
                            }
                            cellIndex++;
                        });
                    }
                }
            });
            $.each(tmpArray, function (i, row) {
                if (notNull(row)) {
                    txt = arraysToHash(headings, row);
                    result[result.length] = txt;
                }
            });
            return result;
        };
        var headings = getHeadings(this);
        return construct(this, headings);
    };
});

function parseBoolean(el) {
    return (/true/i).test(el);
}

function nulo(el) {
    if (typeof el === "undefined" || el === null || el === "null") {
        return true;
    } else {
        return false;
    }
}

var ReCaptchaCallbackV3 = function () {
    grecaptcha.ready(function () {
        grecaptcha.execute(atob("NkxmdWVzb2tBQUFBQUNKY3F2UXFWcEUwb2lJX2tFTWwydmhHdzU3Sg=="), {action: 'submit'}).then(function (token) {
            window.localStorage.setItem("tokenGoogle", token);
        });
    });
};

function captchaSys(chave) {
    grecaptcha.ready(function () {
        grecaptcha.execute(chave, {action: 'submit'}).then(function (token) {
            window.localStorage.setItem("tokenGoogle", token);
        });
    });
}
function XmlToJson(xml, ref) {
    parser = new DOMParser();
    xml = parser.parseFromString(xml, "text/xml");
    var itens = xml.getElementsByTagName(ref).length;
    var json = "";
    for (var i = 0; i <= itens - 1; i++) {
        var lgt = decrypt(xml.getElementsByTagName(ref)[i].childNodes.length);
        json += "{";
        for (var j = 0; j <= lgt - 1; j++) {
            var dado = decrypt(xml.getElementsByTagName(ref)[i].childNodes[j].childNodes[0].nodeValue);
            var key = decrypt(xml.getElementsByTagName(ref)[i].childNodes[j].nodeName);
            json += "\"" + key + "\"" + ":" + "\"" + dado + "\"";
            if (j < lgt - 1) {
                json += ",";
            }
        }
        json += "}";
        if (i < itens - 1) {
            json += ",";
        }
    }
    return JSON.parse(json);
}

function encrypt(dados, senha) {
    var iterationCount = 1000;
    var keySize = 128;
    var plaintext = dados;
    var passphrase;
    if (typeof senha === "undefined" || senha === null) {
        passphrase = getAuth();
    } else {
        passphrase = senha;
    }

    var four = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
    var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);

    var aesUtil = new AesUtil(keySize, iterationCount);
    var ciphertext = aesUtil.encrypt(salt, four, passphrase, plaintext);
    return  btoa(ciphertext + "#" + salt + "#" + four);
}
function decrypt(dados, senha) {
    try {
        dados = atob(dados);
        ﻿var iterationCount = 1000;
        var keySize = 128;
        dados = dados.split("#");
        var plaintext = dados[0];
        var passphrase;
        if (typeof senha === "undefined" || senha === null) {
            passphrase = getAuth();
        } else {
            passphrase = senha;
        }
        var four = dados[2];
        var salt = dados[1];
        var aesUtil = new AesUtil(keySize, iterationCount);
        var ciphertext = aesUtil.decrypt(salt, four, passphrase, plaintext);
        return ciphertext;
    } catch (err) {
        return dados;
    }
}
;
/*Tipo
 * 1 CODE 128
 * 2 EAN13
 * 3 UPC
 * 4 EAN8
 * 5 EAN5
 * 6 EAN2
 * 7 CODE39
 * 8 ITF14
 * 9 MSI
 * 10 MSI10
 * 11 MSI11
 * 12 MSI1110
 * 13 pharmacode
 * 14 codabar
 */
function BarcodeTipoWS(tipo) {
    switch (tipo) {
        case "-2":
            tipo = "CODE128C";
            break;
        case "-1":
            tipo = "CODE128B";
            break;
        case "1":
            tipo = "CODE128A";
            break;
        case "2":
            tipo = "EAN13";
            break;
        case "3":
            tipo = "UPC";
            break;
        case "4":
            tipo = "EAN8";
            break;
        case "5":
            tipo = "EAN5";
            break;
        case "6":
            tipo = "EAN2";
            break;
        case "7":
            tipo = "CODE39";
            break;
        case "8":
            tipo = "ITF14";
            break;
        case "9":
            tipo = "MSI";
            break;
        case "10":
            tipo = "MSI10";
            break;
        case "11":
            tipo = "MSI1010";
            break;
        case "12":
            tipo = "MSI1110";
            break;
        case "13":
            tipo = "pharmacode";
            break;
        case "14":
            tipo = "codabar";
            break;
        default:
            tipo = "CODE128";
            break;
    }
    return tipo;
}

function BarcodeWS(el, val, tipo, cor, bg, flag) {
    var data = {
        format: tipo,
        font: "OCRB",
        lineColor: cor,
        width: 2,
        height: 35,
        textMargin: 5,
        background: bg,
        displayValue: true
    };
    switch (flag) {
        case "ean128":
            data["ean128"] = true;
            break;
        case "ean13":
            data["flat"] = true;
            break;
        case "ean8":
            data["flat"] = true;
            break;
        case "upc":
            data["flat"] = true;
            break;
        case "mod43":
            data["mod43"] = true;
            break;
        default:
            break;
    }
    JsBarcode(el, val, data);
}

function unescapeHTML(escapedHTML) {
    if (!nulo(escapedHTML)) {
        return escapedHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    } else {
        return escapedHTML;
    }
}

function apiFB(fn, el) {
    FB.getLoginStatus(function (response) {
        if (response.status === "connected") {
            fn(response, el);
        }
    });
}

function userFB(response) {
    return FB.api('/' + response.authResponse.userID, function (response) {

    });
}
function profileImageFB(response, el) {
    return FB.api('/' + response.authResponse.userID + "/picture?redirect=false&width=600&height=600", function (response) {
        $(el).attr("src", response.data.url);
    });
}

function conectaFBMan(app, redirect, param) {
    return "https://www.facebook.com/v4.0/dialog/oauth?"
            + "client_id=" + app
            + "&redirect_uri=" + redirect
            + "&state=" + "{st=state123abc,ds=123456789}";
}

function conectaFB() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            window.location.reload();
        } else {
            return response;
        }
    }, {scope: 'public_profile,email'});
}

function desconectaFB() {
    FB.logout(function (response) {
        window.location.reload();
        return response;
    });
}

function acentuar(mensagem) {
    mensagem = mensagem.replace('á', '\u00e1');
    mensagem = mensagem.replace('à', '\u00e0');
    mensagem = mensagem.replace('â', '\u00e2');
    mensagem = mensagem.replace('ã', '\u00e3');
    mensagem = mensagem.replace('ä', '\u00e4');
    mensagem = mensagem.replace('Á', '\u00c1');
    mensagem = mensagem.replace('À', '\u00c0');
    mensagem = mensagem.replace('Â', '\u00c2');
    mensagem = mensagem.replace('Ã', '\u00c3');
    mensagem = mensagem.replace('Ä', '\u00c4');
    mensagem = mensagem.replace('é', '\u00e9');
    mensagem = mensagem.replace('è', '\u00e8');
    mensagem = mensagem.replace('ê', '\u00ea');
    mensagem = mensagem.replace('ê', '\u00ea');
    mensagem = mensagem.replace('É', '\u00c9');
    mensagem = mensagem.replace('È', '\u00c8');
    mensagem = mensagem.replace('Ê', '\u00ca');
    mensagem = mensagem.replace('Ë', '\u00cb');
    mensagem = mensagem.replace('í', '\u00ed');
    mensagem = mensagem.replace('ì', '\u00ec');
    mensagem = mensagem.replace('î', '\u00ee');
    mensagem = mensagem.replace('ï', '\u00ef');
    mensagem = mensagem.replace('Í', '\u00cd');
    mensagem = mensagem.replace('Ì', '\u00cc');
    mensagem = mensagem.replace('Î', '\u00ce');
    mensagem = mensagem.replace('Ï', '\u00cf');
    mensagem = mensagem.replace('ó', '\u00f3');
    mensagem = mensagem.replace('ò', '\u00f2');
    mensagem = mensagem.replace('ô', '\u00f4');
    mensagem = mensagem.replace('õ', '\u00f5');
    mensagem = mensagem.replace('ö', '\u00f6');
    mensagem = mensagem.replace('Ó', '\u00d3');
    mensagem = mensagem.replace('Ò', '\u00d2');
    mensagem = mensagem.replace('Ô', '\u00d4');
    mensagem = mensagem.replace('Õ', '\u00d5');
    mensagem = mensagem.replace('Ö', '\u00d6');
    mensagem = mensagem.replace('ú', '\u00fa');
    mensagem = mensagem.replace('ù', '\u00f9');
    mensagem = mensagem.replace('û', '\u00fb');
    mensagem = mensagem.replace('ü', '\u00fc');
    mensagem = mensagem.replace('Ú', '\u00da');
    mensagem = mensagem.replace('Ù', '\u00d9');
    mensagem = mensagem.replace('Û', '\u00db');
    mensagem = mensagem.replace('ç', '\u00e7');
    mensagem = mensagem.replace('Ç', '\u00c7');
    mensagem = mensagem.replace('ñ', '\u00f1');
    mensagem = mensagem.replace('Ñ', '\u00d1');
    mensagem = mensagem.replace('&', '\u0026');
    mensagem = mensagem.replace('\'', '\u0027');
    return mensagem;
}

function validaData(data) {
    var date = new Date(data.split('/').reverse().join('/'));
    var novaData = new Date();
    if (date > novaData) {
        return "1";
    } else if ((date < novaData)) {
        return "2";
    } else {
        return "3";
    }
}

function replaceAll(find, replace, str) {
    if (!nulo(find) && !nulo(replace) && !nulo(str)) {
        return str.replace(new RegExp(find, 'g'), replace);
    } else {
        return str;
    }
}

function sortTable(name, pos) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(name);
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[pos];
            y = rows[i + 1].getElementsByTagName("TD")[pos];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function FileLoad(input, el) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            $(el).attr("value", e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function dataAtualFormatada() {
    var data = new Date(),
            dia = data.getDate().toString(),
            diaF = (dia.length === 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(),
            mesF = (mes.length === 1) ? '0' + mes : mes,
            anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

function getParameterByName(name, url) {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function breakXml(xml) {
    produtosXml = xml;
    if (xml.indexOf('version="1.0"') > 0) {
        xml = xml.replace('<?xml version="1.0" encoding="UTF-8"?>', "");
        breakXml(xml);
    } else {
        return produtosXml;
    }
}

function getQuery() {
    var pos = location.href.indexOf("?");
    if (pos === -1)
        return [];
    query = location.href.substr(pos + 1);
    return query;
}

function getParametersUrl(query) {
    var result = {};
    if (query.indexOf("&") > 0) {
        query.split("&").forEach(function (part) {
            var item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    } else {
        return null;
    }
}

var AesUtil = function (keySize, iterationCount) {
    this.keySize = keySize / 32;
    this.iterationCount = iterationCount;
};
AesUtil.prototype.generateKey = function (salt, passPhrase) {
    var key = CryptoJS.PBKDF2(
            passPhrase,
            CryptoJS.enc.Hex.parse(salt),
            {keySize: this.keySize, iterations: this.iterationCount});
    return key;
};
AesUtil.prototype.encrypt = function (salt, iv, passPhrase, plainText) {
    var key = this.generateKey(salt, passPhrase);
    var encrypted = CryptoJS.AES.encrypt(
            plainText,
            key,
            {iv: CryptoJS.enc.Hex.parse(iv)});
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};
AesUtil.prototype.decrypt = function (salt, iv, passPhrase, cipherText) {
    var key = this.generateKey(salt, passPhrase);
    var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(cipherText)
    });
    var decrypted = CryptoJS.AES.decrypt(
            cipherParams,
            key,
            {iv: CryptoJS.enc.Hex.parse(iv)});
    return decrypted.toString(CryptoJS.enc.Utf8);
};

function modalConfirm(el, vr, text) {
    $("#ynmodal").modal();
    $("#ynmodal .modal-body").text(text);
    $("#modal-btn-si").on("click", function () {
        app[el][vr] = true;
    });
    $("#modal-btn-no").on("click", function () {
        app[el][vr] = false;
    });
}


function DataMaior(date, date2) {
    let parts = date.split("/");
    let today = date2.split("/");
    date = new Date(parts[2], parts[1] - 1, parts[0]);
    date2 = new Date(today[2], today[1] - 1, today[0]);
    return date >= date2 ? true : false;
}
function DataMenor(date, date2) {
    let parts = date.split("/");
    let today = date2.split("/");
    date = new Date(parts[2], parts[1] - 1, parts[0]);
    date2 = new Date(today[2], today[1] - 1, today[0]);
    return date <= date2 ? true : false;
}

function sortTableLetter(id) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(id);
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
function sortTableNumber(id) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(id);
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function lastModal() {
    if (window.localStorage.getItem("modalLast") !== null) {
        if (typeof app[window.localStorage.getItem("modalLast")].load === "function") {
            app[window.localStorage.getItem("modalLast")].load();
        }
        $("#" + window.localStorage.getItem("modalLast")).modal();
        try {
            app[window.localStorage.getItem("modalLast")].populate();
        } catch (e) {
            //$(window).NotifyErr(e);
        }
        window.localStorage.removeItem("modalLast");
        window.localStorage.removeItem("modalFocus");
    }
}
var fo = 0;
function zeroModal() {
    window.localStorage.removeItem("modalLast");
    window.localStorage.removeItem("modalFocus");
}
function setModal(sh, el) {
    zeroModal();
    $("#" + window.localStorage.getItem("modalLast")).on('hidden.bs.modal', function (e) {
        $("#" + window.localStorage.getItem("modalFocus")).modal();
    });
    $("#" + window.localStorage.getItem("modalLast")).modal("hide");
    $("#" + sh).on('hidden.bs.modal', function (e) {
        lastModal();
    });
    $("#" + el).modal("toggle");
    $("#" + sh).modal();
    window.localStorage.setItem("modalLast", el);
    window.localStorage.setItem("modalFocus", sh);
}

function formatadata(info) {
    if (info.includes("T")) {
        info = info.split("T")[0];
    }
    var d = info.split("-")[2];
    var m = info.split("-")[1];
    var a = info.split("-")[0];
    return d + "/" + m + "/" + a;
}

function ISOdata(info) {
    if (info.includes("T")) {
        info = info.split("T")[0];
    }
    return info;
}

function formatahora(info) {
    var h = info.split("T")[1];
    if (h.indexOf("-") >= 0) {
        return h.split("-")[0];
    } else if (h.indexOf("Z") >= 0) {
        return h.split("Z")[0];
    } else {
        return h;
    }

}
function msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
}
function ResizeData(formatadata, formatahora, ml) {
    var formatadata = formatadata.split("/");
    var formatahora = formatahora.split(":");
    return formatadata[2] + "-" + formatadata[1] + "-" + formatadata[0] + "T" + formatahora[0] + ":" + formatahora[1] + ":" + formatahora[2];
}
function DataISO(formatadata) {
    var formatadata = formatadata.split("/");
    return formatadata[2] + "-" + formatadata[1] + "-" + formatadata[0];
}
function DropData(formatadata, formatahora, dia, mes, ano, ml) {
    var formatadata = formatadata.split("/");
    var formatahora = formatahora.split(":");
    var d = new Date(formatadata[2], parseInt(formatadata[1]) - 1, formatadata[0], formatahora[0], formatahora[1], formatahora[0], 0);
    if (dia > 0) {
        d.setDate((parseInt(formatadata[0]) + dia) - 1);
    }
    if (ml > 0) {
        d.setMilliseconds(ml);
    }
    if (mes > 0) {
        d.setMonth(parseInt(formatadata[1]) - 1 + mes);
    }
    if (ano > 0) {
        d.setFullYear(parseInt(formatadata[2]) + ano);
    }
    mes = (parseInt(d.getMonth()) + 1);
    dia = d.getDate();
    if (mes < 10) {
        mes = "0" + mes;
    }
    if (dia < 10) {
        dia = "0" + dia;
    }
    return d.getFullYear() + "-" + mes + "-" + dia + "T" + msToTime(d.getTime());
}
function invertData(datah) {
    var dia = datah.split("/");
    return dia[2] + "-" + dia[1] + "-" + dia[0];
}
function toUTC(dia, hora) {
    return dia + "T" + hora + "Z";
}

var hexDigits = new Array
        ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return  hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function getDataAtual() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano4 = data.getFullYear();
    return dia + '/' + (mes + 1) + '/' + ano4;
}
function getHoraAtual() {
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    return ("0" + hora).slice(-2) + ':' + ("0" + min).slice(-2) + ':' + ("0" + seg).slice(-2);
}
function HmsToMs(h, m, s) {
    return (h + ':' + m + ':' + s).split(':').reduce((acc, time) => (60 * acc) + +time) * 1000;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}


function encodeCard(key, holder, number, exp, year, cvv) {
    var card = PagSeguro.encryptCard({
        publicKey: key,
        holder: holder,
        number: number,
        expMonth: exp,
        expYear: year,
        securityCode: cvv
    });
    return  card.encryptedCard;
}

/*
 * modalConfirm(function (confirm) {
 if (confirm) {
 
 } else {
 $("#result").html("NO CONFIRMADO");
 }
 });
 */
