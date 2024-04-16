"use strict";
var contype = "application/x-www-form-urlencoded";
var urlSys = false;
var auth = "";
var preAuth = null;
var tac = "";
var labele = null;

function authenticate() {
    auth = window.localStorage.getItem("auth");
    if (nulo(window.localStorage.getItem("labeledby"))) {
        labele = window.location.hostname;
    } else {
        labele = window.localStorage.getItem("labeledby");
    }
}


function post(url, data) {
    authenticate();
    logSandBox(WebServer(urlSys) + url);
    return $.ajax({
        type: "POST",
        url: WebServer(urlSys) + url,
        crossDomain: true,
        async: false,
        data: data,
        headers: {
            "Model": labele,
            "Authorization": auth,
            "Content-Type": contype,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD"
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function get(url, data) {
    authenticate();
    return $.ajax({
        type: "GET",
        url: WebServer(urlSys) + url,
        crossDomain: true,
        async: false,
        data: data,
        headers: {
            "Model": labele,
            "Authorization": auth,
            "Content-Type": contype,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD"
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function host(path, op, ac) {
    authenticate();
    var link = $.ajax({
        type: "POST",
        url: WebServer(urlSys) + "Hosts/pHost",
        crossDomain: true,
        async: false,
        data: {
            "path": encrypt(path),
            "op": encrypt(op),
            "ac": encrypt(ac)
        },
        headers: {
            "Model": labele,
            "Authorization": auth,
            "Content-Type": contype,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD"
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
    return link;
}

function gost(path, op, ac) {
    authenticate();
    var link = $.ajax({
        type: "GET",
        url: WebServer(urlSys) + "Hosts/gHost",
        crossDomain: true,
        async: false,
        data: {
            "authorization": getAuth(),
            "path": encrypt(path),
            "op": encrypt(op),
            "ac": encrypt(ac)
        },
        headers: {
            "Model": labele,
            "Authorization": auth,
            "Content-Type": contype,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD"
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
    return link;
}

function postCross(url, data, header) {
    return $.ajax({
        type: "POST",
        url: url,
        crossDomain: true,
        async: false,
        data: data,
        headers: header
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function getCross(url, data, header) {
    return $.ajax({
        type: "GET",
        url: url,
        crossDomain: true,
        async: false,
        data: data,
        headers: header
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function setAuth(key) {
    window.localStorage.setItem("auth", key);
}

function getAuth() {
    return window.localStorage.getItem("auth");
}

function setCharset(char) {
    contype = contype + ";" + char;
}

function setContentType(con) {
    contype = con;
}

function DefaultContentType() {
    contype = "application/x-www-form-urlencoded";
}

function sandBox(amb) {
    urlSys = amb;
}

function WebServer(amb) {
    if (window.localStorage.getItem("sandbox") !== null) {
        amb = window.localStorage.getItem("sandbox");
    }
    if (amb) {
        return "https://rtiempresarial.com.br:7077/staging/api/";
    } else {
        return "https://rtiempresarial.com.br:7077/webservice/api/";

    }
}

function logSandBox(logs) {
    if (urlSys === true || app.sys.sandbox === true) {
        console.log(decrypt(logs));
        console.log(logs);
    }
}